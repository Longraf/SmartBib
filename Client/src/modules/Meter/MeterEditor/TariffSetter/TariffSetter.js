const D = require('../../../_common/dictionary');

/**
 * @class TariffSetter
 */
const TariffSetter = new Lure.Content({
    Parent: Meter.MeterEditor,
    Name: 'TariffSetter',
    Route: false,
    Dialog: {

    },
    Content: `<div class="meter-tariff-setter">
                <div class="head">Установка тарифа {{TypeID}}</div> 
                <div class="close l-close"></div>
                <div class="inner-content">
                    <div class="line l-row">
                        <div class="caption">Значение</div>
                        <div class="value l-row l-flexa-center">
                            <div class="div"><input class="textbox l-textbox tbx-value" type="number"  min="0" value="{{Value}}"></div>
                            <div class="extension">&nbsp;{{Extension}}</div>
                        </div>
                    </div>
                    <div class="line l-row">
                        <div class="caption">Действует с</div>
                        <div class="value"><div class="date-picker">{{DateValue}}</div></div>
                    </div>
                    <div class="button-holder l-row l-flex-center">
                        <button class="button l-button btn-commit">Записать тариф</button>
                    </div>
                </div>
              </div>`,
    State: {
        TypeID: -1,
        Value: 0,
        DateValue: 0,
        DateMin: null,
    },
    PropTypes: {
        DateValue: Lure.PropTypes.Date
    },
    PropFormat: {
        TypeID:  (t)=>D.MeterTypeDict[t],
        DateValue: (d)=>Lure.Date(d).Format('DD MMMMM YYYY'),
        Extension: (v, o)=>{
            if (o.TypeID === D.MeterType.WaterHot || o.TypeID === D.MeterType.WaterCold){
                return `<span>руб/м<span data-lsmarti="2813" class="sup-small">3</span></span>`
            }
            else if (o.TypeID === D.MeterType.Electricity){
                return `<span>руб/кВт⋅ч</span>`
            }
            return `${v} руб/кг`
        },
    },
    Props: function () {

        this.TextboxValue = this.Select('.tbx-value');
        this.ButtonCommit = this.Select('.btn-commit');
        this.DatePicker = new Lure.PeriodPicker({
            Target: this.Select('.date-picker'),
            NoRange: true,
            Format: 'DD MMMMM YYYY',
            OnConfirm: (date)=>{
                this.State.DateValue = date;
            }
        });
    },

    Methods: function () {
        this.Run = function (Params) {
            this.DatePicker.Min = Params.DateMin;
            this.DatePicker.Date = Params.DateValue;
            this.Proto.Refresh(Params);
            this.Show();
        };
        /** @public */
        /** @this TariffSetter */
        this.SetValue = function () {
            let Value = parseInt(this.TextboxValue.value);
            if (Value <= 0 || isNaN(Value)){
                return Lure.System.Warn('Введите значение');
            }
            Lure.Button.Lock(this.ButtonCommit);
            const St = this.State;
            api.Meter_TariffAdd(St.TypeID, St.TariffID, St.DateValue, St.Value, {
                Then: (TariffID)=>{
                    if (TariffID > 0 && St.Data.TariffID === TariffID){
                        St.Data.Value = St.Value;
                        St.Data.DateStart = St.DateValue;
                    }
                    if (TariffID > 0 && St.Data.TariffNextID === TariffID){
                        St.Data.ValueNext = St.Value;
                        St.Data.DateExpired = St.DateValue;
                    }
                    this.Parent.ControllerTariff.Refresh(St.LineID);
                    Meter.MeterEditor.GetTariff();
                    this.Hide();
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonCommit);
                }
            });
            /** @private */
            /** @this TariffSetter */
            this.SetValuePrivateTest = function () {

            }
        }
    },
    AfterBuild: function () {
        this.ButtonCommit.addEventListener('click', ()=>this.SetValue());
        this.TextboxValue.addEventListener('keyup', ()=>this.State.Value=parseFloat(this.TextboxValue.value));

    }
});

Meter.TariffSetter = TariffSetter;
module.exports = Meter.TariffSetter;


