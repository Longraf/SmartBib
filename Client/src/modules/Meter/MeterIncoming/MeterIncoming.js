const HistorySubscription = require('../../_common/history-master/history-subscription');
const D = require('../../_common/dictionary');

Meter.MeterIncoming = new Lure.Content({
    Parent: Meter,
    Name: 'MeterIncoming',
    Type: 'meter-content',
    Control: {
        Target: '#nav-meter-incoming'
    },
    Permission: {
        Roles: [D.Role.Meter]
    },
    Target: '.subs',
    Content: `<div class="meter-editor meter-content l-col l-flex-100">
                <div class="meter-header">
                  <div class="req-tab m-all active"   data-type="-1">ВСЕ</div>
                  <div class="req-tab m-water-cold"   data-type="0">ХВС</div>
                  <div class="req-tab m-water-hot"    data-type="1">ГВС</div>
                  <div class="req-tab m-light"        data-type="2">ЭЛЕКТРИЧЕСТВО</div>
                </div>
                <div class="meter-widget-list l-flex-100"></div>
              </div>`,
    Load: '',
    PropFormat: {
        TypeID:  (t)=>D.MeterTypeDict[t],
        DateCreated: (d)=>Lure.Date(d).Format('MMMM YYYY'),

        DateVerification: (d)=> d? Lure.Date().Format('DD.MM.YYYY') : 'нет данных',
        DateExpired: (d)=> d? Lure.Date(d).Format('DD.MM.YYYY'): 'нет данных',
        Tariff: (t, o)=>{
            if (o.TypeID < 2){
                return t + ` Руб/м<span class="sup-small">3</span>`
            }
            return t + ` Руб/кВт⋅ч`
        },
        FileDateCreated: (d)=>d?Lure.Date(d).Format('DD.MM.YYYY'): 'неизвестная дата',
    },
    Controller: {
        Target: '.meter-widget-list',
        ListElement: `<div class="meter-widget widget">
                        <div class="widget-head">№{{Number}} ({{TypeID}})</div>
                        <div class="widget-inner-content">
                            <div class="hat l-row">
                                <div class="meter-icon meter-icon-{{$this.TypeID}}"></div>
                                <div class="meter-description l-flex-100">
                                    <div class="line l-row l-flexa-center l-flex-between">
                                        <div class="caption">Ввод в эксплуатацию:</div>
                                        <div class="value">{{DateCreated}}</div>
                                    </div>
                                    <div class="line l-row l-flexa-center l-flex-between">
                                        <div class="caption">Тип:</div>
                                        <div class="value">{{Model}}</div>
                                    </div>
                                    <div class="line l-row l-flexa-center l-flex-between">
                                        <div class="caption">Последняя поверка:</div>
                                        <div class="value">{{DateVerification}}</div>
                                    </div>
                                    <div class="line l-row l-flexa-center l-flex-between">
                                        <div class="caption">Следующая поверка:</div>
                                        <div class="value">{{DateExpired}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="file-slider">
                                <div class="control-scroll scroll-left"><</div>
                                <div class="files-list-wrap">
                                    {{#each Files}}
                                       <div class="uploading-file">
                                            <div class="file-icon"></div>
                                            <div class="file-params">
                                                <div class="name-type"><span class="filename" title="{{FileName}}">{{FileName}}</span></div>
                                                <div class="rename-remove">{{FileDateCreated}}</div>
                                                <div class="rename-remove">
                                                    <span class="remove btn-file-replace" data-id="{{FileID}}">обновить</span>
                                                    <span class="rename btn-file-download" data-id="{{FileID}}" data-name="{{FileName}}">скачать</span>
                                                 </div>
                                            </div>
                                        </div>
                                    {{#endeach}}
                                </div>
                                <div class="control-scroll scroll-right">></div>
                            </div>
                            <div class="tariff-holder l-row l-flex-end">
                                <div class="tariff">{{Tariff}}</div>
                            </div>
                            <div class="chart-values"></div>
                            <div class="meter-values">
                                {{#each Values}}
                                <div class="meter-col" data-date="{{DateValue}}">
                                    <div class="cell meter-caption">{{$g.Lure.CultureInfo.ru.MonthNamesShort[j]}}</div>
                                    <div class="cell meter-value" {{#data-line}} data-j="{{j}}" title="{{Value}}">{{Value}}</div>
                                </div>
                                {{#endeach}}
                            </div>
                        </div>
                      </div>`,
        EmptyMessage: `<div class="list-empty">нет счетчиков для отображения</div>`,
        AfterBuild: function () {
            let Wgs = this.Controller.DataItems;
            for (let w of Wgs){
                w.Chart = new Lure.Chart({
                    Type: 'bar',
                    Target: Lure.Select('.chart-values', w.DOM),
                    AxisX: {
                        Visible: false,
                        //Data: Lure.CultureInfo.ru.MonthNamesShort.Select(x=>x.toUpperCase())
                        Data: Lure.CultureInfo.ru.MonthNames.Select(x=>x + ' ' + Lure.Date().Year)
                    },
                    Legend:{
                        Visible: false,
                    },

                    AxisY:{
                        Min: 0,
                        //Step: 50,
                    },
                    Series: [{
                        Name: 'Values',
                        Data: w.Data.Values.Select(x=>x.Value),
                        Color: '#5C9BAA',
                        width: 40
                    }],
                    Grid: {
                        Visible: false,
                    },
                    SeriesOptions: {
                        //BarGradient: false
                    },
                    // Tooltip: {
                    //     Visible: false,
                    // }
                });
                w.Chart.Redraw(); //caused by bug in chart while no AxisX
            }
        }
    },
    BeforeShow: function () {
        if (this.Controller.Data.length < 1)
            this.Refresh();
    },
    Refresh: function () {
        this.GetMeters();
    },
    Props: function () {
        this.Tabs = this.SelectAll('.req-tab');
    },
    Methods: function () {
        this.GetMeters = function () {
            this.Load.Show();
            api.Meter_Get(Meter.CurrentLibraryID, -1, {
                Then: (meters)=>{
                    this.Controller.Refresh(meters);
                    Meter.MeterCommonInfo.Refresh();
                    Meter.MeterCommonInfo.Proto.SetProperty('MeterWaterColdCount', meters.Where(m=>m.TypeID === D.MeterType.WaterCold).length);
                    Meter.MeterCommonInfo.Proto.SetProperty('MeterWaterHotCount', meters.Where(m=>m.TypeID === D.MeterType.WaterHot).length);
                    Meter.MeterCommonInfo.Proto.SetProperty('MeterElectricityCount', meters.Where(m=>m.TypeID === D.MeterType.Electricity).length);

                },
                Finally: ()=>{
                    this.Load.Hide();
                }
            });
        };

        this.GetFile = function (FileID, FileName) {
            api.Meter_GetFile(Meter.CurrentLibraryID, FileID, {
                Then: (blob)=>{
                    Lure.Blob.SaveAs(blob, FileName);
                },
                Catch: (e)=>{
                    Lure.System.Error('Не удалось получить файл', e)
                }
            })
        };
        this.ReplaceFile = function (FileID) {
            Lure.System.Notice('Замена файлов временно недоступна', FileID);
        };
        this.SetTabFilter = function (e) {
            if (e.currentTarget.classList.contains('active'))
                return;
            for (let t of this.Tabs){
                t.classList.remove('active');
            }
            e.currentTarget.classList.add('active');
            let TypeID = parseInt(e.currentTarget.dataset['type']);
            this.Controller.Filter((x)=> x.TypeID === TypeID || TypeID === -1);
        }
    },
    AfterBuild: function () {
        this.AddEventListener('click', '.meter-header .req-tab', (e)=>this.SetTabFilter(e));

        this.AddEventListener('click', '.meter-value', (e, p)=>{
            let DataLine = this.Controller.GetDataItemByLineID(p.LineID);
            let j = e.currentTarget.dataset['j'];
            e.currentTarget.classList.add('active');
            this.MeterValueInput.Run(DataLine, j, e.currentTarget);
        });

        this.AddEventListener('click', '.control-scroll.scroll-left', (e)=>{
            let ScrollContent = Lure.Select('.files-list-wrap', e.currentTarget.parentElement);
            ScrollContent.scrollLeft += -150;
        });
        this.AddEventListener('click', '.control-scroll.scroll-right', (e) => {
            let ScrollContent = Lure.Select('.files-list-wrap', e.currentTarget.parentElement);
            ScrollContent.scrollLeft += 150;
        });


        this.AddEventListener('click', '.btn-file-download', (e)=>{
            this.GetFile(e.currentTarget.dataset['id'], e.currentTarget.dataset['name']);
        });
        this.AddEventListener('click', '.btn-file-replace', (e)=>{
            this.ReplaceFile(e.currentTarget.dataset['id']);
        });
        // this.AddEventListener('wheel', '.files-list-wrap', (e) => {
        //     //e.preventDefault();
        //     this.FilesScroll(e.currentTarget, (-.5 + (e.deltaY > 0)) * 100);
        //     return false;
        // });
    }
});

module.exports = Meter.MeterIncoming;
require('./MeterValueInput/MeterValueInput');

