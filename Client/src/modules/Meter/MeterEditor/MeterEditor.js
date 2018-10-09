const HistorySubscription = require('../../_common/history-master/history-subscription');
const D = require('../../_common/dictionary');

/**
 * @class MeterEditor
 */
const MeterEditor = new Lure.Content({
    Parent: Meter,
    Name: 'MeterEditor',
    Type: 'meter-content',
    Control: {
        Target: '#nav-meter-management'
    },
    Permission: {
        Roles: [D.Role.MeterCreate, D.Role.MeterEdit]
    },
    Target: '.subs',
    Content: `<div class="meter-editor meter-content l-col">
                <h1 class="h1">Тарифы</h1>
                <div class="tariff-list l-row"></div>
                <h1 class="h1">Приборы учета</h1>
                <div class="meter-list l-flex-100"></div>
              </div>`,
    Load: '',
    State: {
        Date: Lure.Date().Format('DD MMMM YYYY', true),
        LibraryNameVisual: '',
        TariffList: [],
    },
    PropTypes: {
        DateCreated: Lure.PropTypes.Date
    },
    PropFormat: {
        TypeID:  (t)=>D.MeterTypeDict[t],
        DateCreated: (d)=>Lure.Date(d).Format('MMMM YYYY'),
        DateVerification: (d)=>Lure.Date().Format('DD.MM.YYYY'),
        DateExpired: (d)=>Lure.Date(d).Format('DD.MM.YYYY'),
        DateStart: (d)=>Lure.Date(d).Format('DD.MM.YYYY'),
    },
    Controller: {
        Target: '.meter-list',
        ListElement: `<div class="meter-item">
                        <div class="line">
                            <div class="caption">Тип счетчика: </div>
                            <div class="value">{{TypeID}}</div>
                        </div>
                        <div class="line">
                            <div class="caption">Номер: </div>
                            <div class="value ">{{Number}}</div>
                        </div>
                        <div class="line">
                            <div class="caption">Тип: </div>
                            <div class="value ">{{Model}}</div>
                        </div>
                        <div class="line">
                            <div class="caption">Текущее значение: </div>
                            <div class="value">{{Value}}</div>
                        </div>
                        <div class="line">
                            <div class="caption">Ввод в эксплуатацию: </div>
                            <div class="value ">{{DateCreated}}</div>
                        </div>
                      </div>`
    },
    /** @private */
    BeforeShow: function () {
        this.Refresh();
    },
    Refresh: function () {
        this.Load.Show();

        Lure.Call(
            Promise.all([
                this.GetMeters(),
                this.GetTariff(),
            ]), {
                Finally: ()=>{
                    this.Load.Hide();
                }
            });
    },
    /** @private */
    Props: function () {
        //debugger
        this.ControllerTariff = new Lure.Controller.Templator({
            Target: '.tariff-list',
            Data: this.State.TariffList,
            ListElement: `<div class="tariff-item l-flex-100">
                            <div class="head">{{TypeID}}</div>
                            <div class="line">
                                <div class="caption">Значение: </div>
                                <div class="value">{{Value}}</div>
                            </div>
                            <div class="line">
                                <div class="caption">Действует с: </div>
                                <div class="value">{{DateStart}}</div>
                            </div>
                            <div class="line">
                                <div class="caption">Действует до: </div>
                                <div class="value">{{DateExpired}}</div>
                            </div>
                            <div class="button-holder l-row l-flex-end">
                                <button class="button l-button btn-tariff-add">Добавить тариф</button>
                            </div>
                        </div>`,
            PropTypes: {
                Value: Lure.PropTypes.UInt,
                DateStart: Lure.PropTypes.Date,
                DateExpired: Lure.PropTypes.Date,
            },
            PropFormat: {
                TypeID:  (t)=>D.MeterTypeDict[t],
                Value: (v, o)=>{
                    if (v === null)
                         return '<span class="span-setup btn-set-tariff l-hint" data-hint="Задать текущий тариф">не задано</span>';
                    if (o.TypeID === D.MeterType.WaterHot || o.TypeID === D.MeterType.WaterCold){
                        return `<span>${v} руб/м<span data-lsmarti="2813" class="sup-small">3</span></span>`
                    }
                    else if (o.TypeID === D.MeterType.Electricity){
                        return `<span>${v} руб/кВт⋅ч</span>`
                    }
                    return `${v} руб/кг`
                },
                DateExpired: (d)=>{
                    if (d !== null)
                        return Lure.Date(d).Format('D MMMMM YYYY');
                    return '<span class="span-setup btn-set-next-tariff l-hint" data-hint="Задать следующий тариф">следующий тариф не задан</span>';
                },
                DateStart: (d)=>{
                    if (d !== null)
                        return Lure.Date(d).Format('D MMMMM YYYY');
                    return 'тариф не задан';
                },
            },
            Owner: this
        });


        this.TariffAddType = {
            Current: 0,
            Next: 1,
            NewOne: 2,
        }
    },
    /** @private */
    Methods: function () {
        this.GetMeters = function () {
            return api.Meter_MeterListGet(22, -1, {
                Then: (meters)=>{
                    this.Controller.Refresh(meters);
                    Meter.MeterCommonInfo.Refresh();
                    Meter.MeterCommonInfo.Proto.SetProperty('MeterWaterColdCount', meters.Where(m=>m.TypeID === D.MeterType.WaterCold).length);
                    Meter.MeterCommonInfo.Proto.SetProperty('MeterWaterHotCount', meters.Where(m=>m.TypeID === D.MeterType.WaterHot).length);
                    Meter.MeterCommonInfo.Proto.SetProperty('MeterElectricityCount', meters.Where(m=>m.TypeID === D.MeterType.Electricity).length);
                },
            });
        };
        this.GetTariff = function () {
            return api.Meter_TariffGet({
                Then: (tariff)=>{
                    this.ControllerTariff.Refresh(tariff);
                },

            });
        };
        this.AddTariff = function (LineID, TariffAddType) {
            let Data = this.ControllerTariff.GetDataItemByLineID(LineID).Data;
            let DateMin = null;
            let Value = 0;
            if (TariffAddType !== this.TariffAddType.Current){
                DateMin = Lure.Date().AddDays(1).DayStart;
            }
            this.TariffSetter.Run({
                TypeID: Data.TypeID,
                TariffAddType: TariffAddType,
                TariffID: -1,

                Value: Value,
                DateValue: DateMin !== null ? DateMin: new Date(),

                DateMin: DateMin,
                LineID: LineID,
                Data: Data,
            });
        }

    },
    /** @private */
    AfterBuild: function () {
        this.AddEventListener('click', '.btn-set-tariff', (e, p)=>this.AddTariff(p.LineID, this.TariffAddType.Current));
        this.AddEventListener('click', '.btn-set-next-tariff, .btn-tariff-add', (e, p)=>this.AddTariff(p.LineID, this.TariffAddType.Next));
    }
});
Meter.MeterEditor = MeterEditor;
require('./TariffSetter/TariffSetter');

module.exports = Meter.MeterEditor;
