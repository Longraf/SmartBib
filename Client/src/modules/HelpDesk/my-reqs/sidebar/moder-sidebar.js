let ReqFilter = require('../../../_common/filter-selector/filter-selector.js');
const D = require("../../../_common/dictionary");
const LIBRARY_LIMIT = 5;
module.exports = () => ({
    Target: '.target-moderator',
    Type: 'help-desk-sidebar',
    Parent: HelpDesk.MyReqs,
    Visible: true,
    Content:
`<div class="sidebar-moderator">
    <div class="column-left flex2">
        <div class="column-header">
            <div>УЧАСТНИКИ КОМАНДЫ</div>
            <div class="multi-select selectable">
                <div data-tabtype="all" class="multi-sel-row selected">Все</div>
                <div data-tabtype="it"  class="multi-sel-row">ИТ</div>
                <div data-tabtype="ahd" class="multi-sel-row">АХД</div>
            </div>
            <div class="multi-select">
                <div class="multi-sel-row multi-lib">
                    <div class="click-contr">Подразделения: все ({{$g.Lure.User.Cache.LibraryList.length}})</div>
                    <div class="lib-selector"></div>
                </div>
            </div>
        </div>
        <div class="column-content tech-list flex1">
        </div>
    </div>
    <div class="column-middle flex1">
        <div class="column-header">СЕГОДНЯ</div>
        <div class="pie-today-stat-wrap">
            <div class="pie-today-stat">
                <div class="pie today-stat-chart"></div>
                <div class="chart-subscript">
                    <div class="sub-icon param-icon"><span>{{Stat.Complete}}</span>/<span>{{Stat.Complete + Stat.Active + Stat.Rejected + Stat.Returned}}</span></div>
                    <div class="sub-caption">выполнено<br>заявок</div>
                </div>
            </div>
            <div class="parameters">
                <div class="row" data-type="st-0"><div class="color-mark closed">&nbsp;</div><div class="parameter-name">выполнено</div><div class="parameter-value">{{Stat.Complete}}</div></div>
                <div class="row" data-type="st-1"><div class="color-mark active">&nbsp;</div><div class="parameter-name">в работе</div><div class="parameter-value">{{Stat.Active}}</div></div>
                <!--<div class="row" data-type="st-2"><div class="color-mark mid">&nbsp;</div><div class="parameter-name">просрочено</div><div class="parameter-value">{{Stat.Complete}}</div></div>
                <div class="row" data-type="st-3"><div class="color-mark high">&nbsp;</div><div class="parameter-name">отложено</div><div class="parameter-value">{{Stat.Complete}}</div></div>-->
                <div class="row" data-type="st-4"><div class="color-mark rejected">&nbsp;</div><div class="parameter-name">отклонено</div><div class="parameter-value">{{Stat.Rejected}}</div></div>
                <div class="row" data-type="st-5"><div class="color-mark returned">&nbsp;</div><div class="parameter-name">возвращено</div><div class="parameter-value">{{Stat.Returned}}</div></div>
            </div>
        </div>
    </div>
    <div class="column-right flex3">
        <div class="column-header">
            <div>СТАТИСТИКА</div>
            <div class="multi-select none">
                <div class="multi-sel-row multi-lib">
                    <div class="click-contr">Подразделения: 0</div>
                    <div class="lib-selector"></div>
                </div>
            </div>
            <div class="multi-select selectable">
                <div class="multi-sel-row selected" data-type="today">Сегодня</div>
                <div class="multi-sel-row" data-type="yesterday">Вчера</div>
                <div class="multi-sel-row" data-type="week">Неделя</div>
                <div class="multi-sel-row" data-type="month">Месяц</div>
                <div class="multi-sel-row" data-type="quarter">Квартал</div>
                <div class="multi-sel-row" data-type="year">Год</div>
            </div>
            <div class="multi-select selectable">
                <div class="multi-sel-row date-select-range" data-type="range">&#128198;27.12.2018 - 28.01.2019</div>
            </div>
        </div>
        <div class="stat-chart flex1 vis-none"></div>
        <div class="stats-bottom">
            <div class="stat-ring-wrap">
                <div class="stat-ring active">{{TechStatActive}}</div>
                <div class="stat-ring-name">В работе</div>
            </div>
            <div class="stat-ring-wrap">
                <div class="stat-ring closed">{{TechStatClosed}}</div>
                <div class="stat-ring-name">Закрыто</div>
            </div>
            <div class="stat-ring-wrap">
                <div class="stat-ring rejected">{{TechStatRejected}}</div>
                <div class="stat-ring-name">Отклонено</div>
            </div>
            <div class="stat-ring-wrap">
                <div class="stat-ring returned">{{TechStatReturned}}</div>
                <div class="stat-ring-name">Возвращено</div>
            </div>            
        </div>
    </div>
</div>`,
    Controller: {
        Target: '.tech-list',
        Data: (()=>{
            let ErrorCount, ErrorCountMax = 0;
            let res = Lure.User.Cache.Technicians.map(x => {
                ErrorCount = 0;
                let OKCount = 0;
                let a = Lure.Clone(x);
                a.LibsView = '';
                for (let i = 0; i < a.LibraryIDList.length; i++) {
                    let lib = Lure.User.Cache.LibraryListDict[a.LibraryIDList[i]];
                    if (!lib) {
                        ErrorCount++;
                    } else {
                        OKCount++;
                        a.LibsView += lib.NameVisual || lib.Name;
                        if (i > LIBRARY_LIMIT) break;
                        a.LibsView += '; ';
                    }
                }

                if (ErrorCount >= a.LibraryIDList.length || (a.LibsView === '')) {
                    let num = a.LibraryIDList.length;
                    a.LibsView = num + ' ' + (num % 10 === 1 && num % 100 !== 11 ? 'библиотека' : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 11 || num % 100 > 19)) ? 'библиотеки' : 'библиотек');
                } else if (a.LibraryIDList.length > LIBRARY_LIMIT)
                    a.LibsView += ' и ' + (a.LibraryIDList.length - OKCount) + ' других';

                a.IsIT = a.HelpRequestTypeIDList.filter(n => D.HelpRequestTypeITList.indexOf(n) > -1).length > 5;
                a.IsAHD = a.HelpRequestTypeIDList.filter(n => D.HelpRequestTypeAHDList.indexOf(n) > -1).length > 2;
                if (ErrorCount > ErrorCountMax) ErrorCountMax = ErrorCount;
                return a;
            });
            if (ErrorCountMax > 0) Lure.System.Warn(`ВНИМАНИЕ! МОДЕРАТОР БЕЗ БИБЛИОТЕК!<br>Неизвестно библиотек: ${ErrorCountMax}`);
            return res;
        })(),
        ListElement: `<div class="tech-inst {{AHDShow}} {{ITShow}} {{OnlyAll}}" data-techid="{{ID}}">
                    <div class="left-side flex2">
                        <div class="user-photo">
                            <img src="https://i.ebayimg.com/images/g/6F4AAOSwr6pZ8wJj/s-l300.jpg">
                        </div>
                        <div class="tech-info">
                            <div class="info-name">{{Name}}</div>
                            <div class="info-position"><span>{{ITAHD}}</span><span>{{Position}}</span></div>
                        </div>
                    </div>
                    <div class="right-side flex4">
                        <div>{{LibsView}}</div>
                        <div class="tech-action-list {{NoneWhenNotAdmin}}">
                            <div class="tech-action" data-actiontype="edit-libs"><div class="control">Изменить библиотеки</div><div class="target"></div></div>
                            <div>|</div>
                            <div class="tech-action" data-actiontype="edit-types"><div class="control">типы заявок</div><div class="target"></div></div>
                        </div>
                    </div>
                </div>`
    },
    Proto: {
        // TechStatNew: 0,
        TechStatActive: 0,
        TechStatClosed: 0,
        TechStatRejected: 0,
        TechStatReturned: 0,
        Stat: {
            Complete: 0,
            Active: 0,
            Rejected: 0,
            Returned: 0
        }
    },
    PropFormat: {
        LibraryIDList: x => x.join(', '),
        ITAHD: (x, p) => (p.IsIT ? 'ИТ' : '') + ((p.IsIT || p.IsAHD) ? ' ' : '') + (p.IsAHD ? 'АХД' : '') + ((p.IsIT || p.IsAHD) ? ' | ' : ''),
        OnlyAll: (x, p) => (!p.IsIT && !p.IsAHD) ? 'only-all' : '',
        AHDShow: (x, p) => p.IsAHD ? 'ahd-show' : '',
        ITShow: (x, p) => p.IsIT ? 'it-show' : '',
        NoneWhenNotAdmin: () => Lure.User.Roles.indexOf(D.Role['AdminTechManagement']) === -1 ? 'none' : ''
    },
    Show: function () {
        this.ChartDailyStat.Refresh();
    },
    Props: function () {
        this.isModer = true;
        this.SelectedRangeType = 'today';

        let GetChartOptions = function (target, series) {
            let res = {
                Target: target,
                Type: 'pie',
                Labels: {Visible: false},
                Legend: {Visible: false},
                Series: [ ],
                Grid: {Visible: false,},
                Tooltip: {
                    Format: (Tip) => {
                        let sum = Tip.Episode.Data.reduce((a, b) => a + b);
                        let perc = Math.floor(sum === 0 ? 0 : (Tip.Value / sum) * 10000) / 100;
                        return `<div class="tip">
                                      <div class="tip-bg"></div>
                                      <div class="tip-value">
                                            <div class="l-row l-flexa-center">
                                                <div class="tip-icon" style="background-color: ${Tip.Color}"></div>
                                                <div class="tip-label">${Tip.Name}: ${Tip.Value} (${perc}%)</div>
                                            </div>
                                      </div>
                                </div>`;
                    }
                },
                AxisY: {Visible: false}
            };
            for (let d of series) {
                let e = {
                    Labels: {Data: d.Labels},
                    Data: d.Data,
                    Colors: d.Colors,
                    Type: d.Type ? d.Type : 'ring',
                    AngleStart: -90
                };
                if (d.Width) e.Width = d.Width;
                if (d.Margin) e.Margin = d.Margin;
                res.Series.push(e);
            }
            return res;
        };
        this.ChartDailyStat = new Lure.Chart(GetChartOptions(
            this.Select('.pie.today-stat-chart'),
            [{
                Labels: ['Выполнено', 'В работе', /*'Просрочено', 'Отложено',*/ 'Отклонено', 'Возвращено'],
                Data: [1, 2, /*3, 4,*/ 5, 6],
                Colors: ['#51A1A7', '#416E75', /*'#79CCDA', '#20A4A4',*/ '#4B7798', '#40667F'],
                Width: 32
            }, {
                Labels: ["Выполнено", "Осталось"],
                Data: [10, 25],
                Colors: ["#5DA85D", "#4A8453"],
                Width: 22,
                Margin: 3
            }]
        ));

    },
    Methods: function () {
        this.ResetData = function () {};
        this.ShowRequest = function () {};

        let targ = this.Select(`.column-left .multi-lib .click-contr`);
        let targSingle = this.Select(`.column-right .multi-lib .click-contr`);
        this.TechClick = function (e) {
            let old = this.Select('.tech-inst.selected');
            if (old) old.classList.remove('selected');
            e.classList.add('selected');
            targSingle.innerText = 'Подразделения: все';
            this.StatChart.Target.classList.remove('vis-none');
            this.SelectedTech = parseInt(e.dataset['techid']);
            this.RefreshTechData();
        };

        this.RefreshTechData = function () {
            if (!this.SelectedTech && this.SelectedTech !== 0) return;
            this.StatChart.Load.Show();
            let dates = this.GetDateRange();
            api.HelpDesk_TechnicianStatusesGet(this.SelectedTech, dates[0], dates[1], {
                Then: r => {
                    // this.Proto.Data.TechStatNew = r[0];
                    this.Proto.SetProperty('TechStatActive', r[1]);
                    this.Proto.SetProperty('TechStatClosed', r[2]);
                    this.Proto.SetProperty('TechStatRejected', r[3]);
                    this.Proto.SetProperty('TechStatReturned', r[4]);
                    // this.Proto.Refresh();
                    this.StatChart.Options.Series[0].Data = r;
                    if (this.StatChart.AlreadyRedraw)
                        this.StatChart.Refresh();
                    else {this.StatChart.Redraw(); this.StatChart.AlreadyRedraw = true;}
                },
                Finally: () => this.StatChart.Load.Hide()
            });
        };

        this.FilterTechLibs = function (libs) {
            targ.innerText = 'Подразделения: ' + (libs.length === Lure.User.Cache.LibraryList.length ? 'все (' + libs.length + ')' : libs.length);
            for (let tech of this.Controller.DataItems)
                if (tech.Data.LibraryIDList.filter(n => libs.indexOf(n + '') !== -1).length > 0 && libs.length !== 0)
                    tech.DOM.classList.remove('filtered');
                else tech.DOM.classList.add('filtered');

            console.log(libs);
        };
        this.FilterTechLibsSingle = function (libs) {
            targSingle.innerText = 'Подразделения: ' + libs.length;
        };
        this.RefreshCharts = function () {
            this.ChartDailyStat.Refresh();
            api.HelpDesk_TechnicianStatusesGet(-1, Lure.Date().DayStart, Lure.Date().DayEnd, {
                Then: r => {
                    this.ChartDailyStat.Options.Series[0].Data = [r[1], r[2], r[3], r[4]];
                    this.ChartDailyStat.Options.Series[1].Data = [r[2], r[3] + r[4] + r[1]];
                    this.Proto.SetProperty('Stat', {Complete: r[1], Active: r[2], Rejected: r[3], Returned: r[4]});
                    this.ChartDailyStat.Refresh();
                }
            })
        };
        this.GetDateRange = function () {
            let date_start = Lure.Date();
            let date_end = Lure.Date();
            switch (this.SelectedRangeType) {
                case 'today':
                    date_start = date_start.DayStart;
                    date_end = date_end.DayEnd;
                    break;
                case 'yesterday':
                    date_start.AddDays(-1);
                    date_end.AddDays(-1);
                    date_start = date_start.DayStart;
                    date_end = date_end.DayEnd;
                    break;
                case 'week':
                    date_start = date_start.WeekStart;
                    date_end = date_end.WeekEnd;
                    break;
                case 'month':
                    date_start = date_start.MonthStart;
                    date_end = date_end.MonthEnd;
                    break;
                case 'quarter':
                    let month;
                    let cm = date_start.Date.getMonth();
                    if (cm <= 2)
                        month = 0;
                    else if (cm >= 3 && cm <= 5)
                        month = 3;
                    else if (cm >= 6 && cm <= 9)
                        month = 6;
                    else month = 9;
                    date_start = Lure.Date(new Date(date_start.Date.getFullYear(), month)).MonthStart;
                    date_end = Lure.Date(new Date(date_end.Date.getFullYear(), month + 2)).MonthEnd;
                    break;
                case 'year':
                    date_start = new Date(date_start.Date.getFullYear(), 0, 1, 0, 0, 0);
                    date_end = new Date(date_end.Date.getFullYear(), 11, 31, 23, 59, 59);
                    break;
                case 'range':
                    return this.DatePicker.Date;
            }
            return [date_start, date_end];
        };
        this.ChangeRange = function (type) {
            this.SelectedRangeType = type;
            if (type !== 'range')
                this.RefreshTechData();
        };
        this.ChangeITAHDTab = function(type) {
            // console.log(type)
            let cl = this.Controller.Target.classList;

            switch (type) {
                case 'all':
                    cl.remove('tab-ahd');
                    cl.remove('tab-it');
                    break;
                case 'it':
                    cl.remove('tab-ahd');
                    cl.add('tab-it');
                    break;
                case 'ahd':
                    cl.remove('tab-it');
                    cl.add('tab-ahd');
                    break;
            }
        };

        let arrEquals = (arr1, arr2) => {
            if (!arr1 || !arr2) return false;
            if (arr1.length !== arr2.length) return false;
            arr1.sort();
            arr2.sort();
            for (let i = 0; i < arr1.length; i++)
                /*if (this[i] instanceof Array && arr2[i] instanceof Array) {
                    if (!arr1[i].equals(arr2[i]))
                        return false;
                } else */
                if (arr1[i] !== arr2[i])
                    return false;
            return true;
        };
        let TypeTechEditors = {}, LibTechEditors = {};
        this.TechAction = function (elem, type, techID) {
            // console.log(type, techID);
            switch (type) {
                case 'edit-types':
                    if (!TypeTechEditors[techID]) {
                        TypeTechEditors[techID] = ReqFilter({
                            target: Lure.Select('.target', elem),
                            Data: () => Object.entries(D.HelpRequestTypeDict).map(x => ({ID: x[0], Name: x[1], Check: Lure.User.Cache.TechnicianDict[techID].HelpRequestTypeIDList.indexOf(parseInt(x[0])) !== -1})),
                            Key: 'ID', Value: 'Name',
                            Control: Lure.Select('.control', elem),
                            // AllSelector: false,
                            checked: 'key',
                            UpdateListLive: true,
                            right: 'top-right',
                            onOK: r => {
                                r = r.map(e => parseInt(e));
                                if (arrEquals(r, Lure.User.Cache.TechnicianDict[techID].HelpRequestTypeIDList)) return;
                                api.Admin_TechnicianEdit_HelpRequestTypes(1, techID, r).then(x => Lure.System.Success('Типы заявок этого техника изменены'));
                                console.log(r, Lure.User.Cache.TechnicianDict[techID].HelpRequestTypeIDList);
                            }
                        });
                        TypeTechEditors[techID].Show();
                    } else
                        TypeTechEditors[techID].ResetSelection();
                    break;
                case 'edit-libs':
                    if (!LibTechEditors[techID]) {
                        LibTechEditors[techID] = ReqFilter({
                            target: Lure.Select('.target', elem),
                            Data: () => Lure.User.Cache.LibraryList.map(x => ({ID: x.ID, Name: x.NameVisual || x.Name, Check: Lure.User.Cache.TechnicianDict[techID].LibraryIDList.indexOf(x.ID) !== -1})),
                            Key: 'ID', Value: 'Name',
                            Control: Lure.Select('.control', elem),
                            // AllSelector: false,
                            checked: 'key',
                            UpdateListLive: true,
                            right: 'top-right',
                            onOK: r => {
                                r = r.map(e => parseInt(e));
                                if (arrEquals(r, Lure.User.Cache.TechnicianDict[techID].LibraryIDList)) return;
                                api.Admin_TechnicianEdit_Libraries(1, techID, r).then(x => Lure.System.Success('Библиотеки этого техника изменены'));
                                console.log(r)
                            }
                        });
                        LibTechEditors[techID].Show();
                    } else
                        LibTechEditors[techID].ResetSelection();
                    break;
            }
        }
    },
    AfterBuild: function () {
        let rsp = this.Parent.Select('.req-space');
        rsp.classList.add('flex-col');
        rsp.classList.add('moder-space');
        this.Parent.Select('.target-moderator').style.height = '50vh';
        this.Parent.Select('.need-solution-my-reqs').classList.remove('none');
        this.Parent.Select('.req-search').classList.remove('none');

        let action = false;
        this.AddEventListener('click', '.tech-inst .tech-action .control', e => {
            action = true;
            let elem = e.currentTarget.parentElement;
            this.TechAction(elem, elem.dataset["actiontype"], elem.parentElement.parentElement.parentElement.dataset["techid"]);
        });
        this.AddEventListener('click', '.tech-inst .tech-action .target', e => action = true);
        this.AddEventListener('click', '.tech-inst', e => action ? action = false : this.TechClick(e.currentTarget));

        this.AddEventListener('click', '.column-left .multi-select.selectable .multi-sel-row', e => {
            let old = this.Select('.column-left .multi-select .multi-sel-row.selected');
            if (e.currentTarget !== old) {
                if (old) old.classList.remove('selected');
                let cl = e.currentTarget.classList;
                cl.add('selected');
                this.ChangeITAHDTab(e.currentTarget.dataset['tabtype']);
            }
        });
        this.AddEventListener('click', '.column-right .multi-select.selectable .multi-sel-row', e => {
            let old = this.Select('.column-right .multi-select .multi-sel-row.selected');
            if (e.currentTarget !== old) {
                if (old) old.classList.remove('selected');
                let cl = e.currentTarget.classList;
                cl.add('selected');
                this.ChangeRange(e.currentTarget.dataset['type']);
            }
        });
        this.DatePicker = new Lure.PeriodPicker({
            Target: this.Select('.date-select-range'),
            OnConfirm: () => this.RefreshTechData()
        });
        this.DatePicker.Reset();


        this.StatChart = new Lure.Chart({
            Target: this.Select('.stat-chart'),
            Type: 'Bar',
            Legend: {Visible: false},
            Grid: {Visible: false},
            AxisX: {
                Visible: true,
                Data: Static.HelpRequestStatuss.map(x => x.Name)
            },
            Series: [{
                Name: 'Посещаемость',
                Color: '#5E98A7',
                Data: [1, 2, 3, 4, 5]
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
        this.StatChart.Load = new Lure.Load({Target: this.Select('.stat-chart')});

        ReqFilter({
            target: `.column-left .lib-selector`,
            Data: Lure.User.Cache.LibraryList.map(x => ({ID: x.ID, Name: x.NameVisual || x.Name})), Key: 'ID', Value: 'Name',
            Control: this.Select(`.column-left .multi-lib .click-contr`),
            onOK: r => this.FilterTechLibs(r)
        });

        this.AddEventListener('click', '.pie-today-stat-wrap .row', (e) => {
            if (e.currentTarget.dataset['type']) {
                let data = e.currentTarget.dataset['type'].split('-');
                data[1] = parseInt(data[1]);
                e.currentTarget.classList.toggle('series-hide');
                if (data[0] === 'st')
                    this.ChartDailyStat.SerieSwitch(0, data[1]);
            }
        });

        /*ReqFilter({
            target: `.column-right .lib-selector`,
            Data: () => {
                let t = this.Controller.Data.find(x => x.ID === this.SelectedTech);
                if (t)
                    return t.LibraryIDList.map(x => ({ID: x, NameVisual: Lure.User.Cache.LibraryListDict[x].NameVisual || 'хз'}));
                else return [];
            },
            Key: 'ID', Value: 'NameVisual',
            UpdateListLive: true,
            Control: this.Select(`.column-right .multi-lib`),
            onOK: r => this.FilterTechLibsSingle(r)
        });*/
    }
});
