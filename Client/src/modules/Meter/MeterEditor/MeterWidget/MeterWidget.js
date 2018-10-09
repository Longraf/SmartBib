module.exports = function (parent, params) {
    let maindata = [];
    switch (params.Type) {
        case 'ColdWater':
        case 'HotWater':
            maindata.push(
                {Name: 'Ввод в эксплуатацию', Value: params.Data.StartDate},
                {Name: 'Дата поверки', Value: params.Data.CheckDate},
                {Name: 'Следующая поверка', Value: params.Data.NextCheckDate},
                {Name: 'Паспорт', Value: params.Data.Passport}
            );
            break;
        case 'Light':
            maindata.push(
                {Name: 'Ввод в эксплуатацию', Value: params.Data.StartDate},
                {Name: 'Тип', Value: params.Data.Type},
                {Name: 'Дата установки', Value: params.Data.SetupDate},
                {Name: 'Паспорт', Value: params.Data.Passport}
            );
            break;
    }

    return new Lure.Content({
        Parent: parent,
        Name: 'WidgetClubFree',
        Target: params.Target,
        Content:
            `<div class="widget diary-widget club-free-widget ${params.Type}">
                <div class="widget-head l-row">
                    <div class="widget-title l-row">
                        <div style="width: 20px;"></div>
                        <div class="widget-caption">${params.Data.HeadText}</div>
                    </div> 
                    <div class="widget-controls l-row l-flexa-center">
                        <div class="widget-control widget-control-move" title="Переместить"></div>
                        <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                    </div>
                </div>
                <div class="widget-content">
                    <div class="main-data">
                        <div class="meter-icon"></div>
                        <div class="meter-data-lines">
                            {{#each MainData}}
                                <div class="text-line">
                                    <div class="line-name"><span>{{Name}}</span>: </div>
                                    <div class="line-value">{{Value}}</div>
                                </div>
                            {{#endeach}}
                        </div>
                    </div>
                    <div class="files-list">
                        <div class="control-scroll scroll-left"><</div>
                        <div class="files-list-wrap"></div>
                        <div class="control-scroll scroll-right">></div>
                    </div>
                    <div class="month-chart">
                        <div class="chart-wrap"></div>
                        <div class="tariff">${params.Data.Tariff}</div>
                    </div>
                    <div class="chart-month-data">
                        <table>
                            <thead>
                                <tr>
                                    <th>ЯНВ</th><th>ФЕВ</th><th>МАР</th><th>АПР</th><th>МАЙ</th><th>ИЮН</th><th>ИЮЛ</th><th>АВГ</th><th>СЕН</th><th>ОКТ</th><th>НОЯ</th><th>ДЕК</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {{#each TableData}}
                                        <td>{{$this}}</td>
                                    {{#endeach}}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>`,
        Load: '',
        Proto: {
            MainData: maindata,
            TableData: params.Data.MonthData
        },
        PropFormat: {},
        Props: function () {
            this.MonthlyChart = new Lure.Chart({
                Target: this.Select('.month-chart .chart-wrap'),
                Type: 'Bar',
                Legend: {Visible: false},
                Grid: {Visible: false},
                AxisX: {
                    Visible: false,
                    Data: (new Array(12)).Select((a, b) => Lure.Date(new Date(2018, b, 1)).Format('MMMM').toLowerCase())
                },
                Series: [{
                    Name: 'Потребление',
                    Color: '#5E98A7',
                    Data: params.Data.MonthData
                }],
                Tooltip: {
                    Format: Tip => /*{console.log(Tip)}*/
                        `<div class="tip">
                            <div class="tip-bg"></div>
                            <div class="tip-value">
                                <div class="l-row">
                                    <div class="tip-icon" style="background-color: ${Tip.Episode.Color}"></div>
                                    <div class="l-row">${Tip.ValueX}: ${Tip.ValueY}</div>
                                </div>
                            </div>
                        </div>`
                }
            });
            // this.MonthlyChart.Load = new Lure.Load({Target: this.Select('.month-chart')});

            this.FilesController = new Lure.Controller.Templator({
                Target: '.files-list .files-list-wrap',
                Owner: this,
                Data: [
                    { NameFull: 'Screen1.png', NameSub: 'Scr....png', Type: 'png', Version: 'от 12.12.2012' },
                    { NameFull: 'Screen1.png', NameSub: 'Scr....png', Type: 'png', Version: 'от 12.12.2012' },
                    { NameFull: 'Screen1.png', NameSub: 'Scr....png', Type: 'png', Version: 'от 12.12.2012' },
                    { NameFull: 'Screen1.png', NameSub: 'Scr....png', Type: 'png', Version: 'от 12.12.2012' },
                    { NameFull: 'Screen1.png', NameSub: 'Scr....png', Type: 'png', Version: 'от 12.12.2012' },
                    { NameFull: 'Screen1.png', NameSub: 'Scr....png', Type: 'png', Version: 'от 12.12.2012' },
                    { NameFull: 'Screen1.png', NameSub: 'Scr....png', Type: 'png', Version: 'от 12.12.2012' },
                    { NameFull: 'Screen1.png', NameSub: 'Scr....png', Type: 'png', Version: 'от 12.12.2012' },
                    { NameFull: 'Screen1.png', NameSub: 'Scr....png', Type: 'png', Version: 'от 12.12.2012' }
                ],
                ListElement:
                    `<div class="uploading-file">
                        <div class="file-icon">
    
                        </div>
                        <div class="file-params">
                            <div class="name-type"><span class="filename" title="{{NameFull}}">{{NameSub}}</span></div>
                            <div class="rename-remove">{{Version}}</div>
                            <div class="rename-remove"><span class="remove">обновить</span> I <span class="rename">скачать</span></div>
                        </div>
                    </div>`,
                EmptyMessage:
                    `<div>Файлов нет</div>`
            });
        },
        Show: function () {

        },
        Refresh: function () {
            this.MonthlyChart.Refresh();
            this.FilesController.Refresh();
        },
        Methods: function () {
            this.FilesScroll = function (a) {
                // console.log(a);
                this.FilesController.Content.scrollLeft += a;
            }
        },
        AfterBuild: function () {
            this.Select('.control-scroll.scroll-left').onclick = e => this.FilesScroll(-150);
            this.Select('.control-scroll.scroll-right').onclick = e => this.FilesScroll(150);
            this.Select('.files-list-wrap').onwheel = e => {
                this.FilesScroll((-.5 + (e.deltaY > 0)) * 100);
                return false;
            };
        }
    });
};