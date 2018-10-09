let CheckBoxSelector = require('../../_common/filter-selector/filter-selector.js');
Dash.DashSummary = new Lure.Content({
    //Disabled: true,
    Name: 'DashSummary',
    Target: '',
    Type: 'dash-content',
    Control: {
        Target: '#nav-dash-summary'
    },
    Permission: {
        Roles: [Dictionary.Role.Dashboard]
    },
    Content:
        `<div class="dash-summary">
            <div class="diary-bread l-row">
                <div class="li date-range">
                    <div class="calendar-icon">&#128198;</div>
                    <div class="dates"></div>
                    <div class="dates-result">{{DatesResult}}</div>
                </div>
                <div class="li l-row l-flexa-center flex-100">
                    <div>Подразделение: &nbsp;&nbsp;</div>
                    <div class="flex-100 library-tree-control strong">__</div>
                </div>
                <div class="li button-holder l-row">
                    <button class="l-button button btn-refresh">Обновить</button> 
                </div>
                <div class="li button-holder l-row">
                    <button class="l-button button button-get-xls">Экспорт</button>
                </div> 
            </div>
            <div class="summary-content"></div>
        </div>`,
    Proto: {
        // Months: (new Array((new Date).getMonth() + 1)).Select((x, i) => ({MNum: i + 1, Name: Lure.Date(Lure.Date().MonthStart.setMonth(i)).Format('MMMM YYYY'), Now: (new Date).getMonth() === i ? 'selected' : ''})),
        Part1236: [],
        Part4: [],
        Part5: [],
        DatesResult: [(new Date).getMonth() + 1]
    },
    PropFormat: {
        DatesResult: (x) => x.length > 0 ? x.map(m => Lure.Date(Lure.Date().MonthStart.setMonth(m - 1)).Format('MMMM')).join(', ') : 'Не выбрано'
    },
    GetSet: {
        get CurrentLibraries() {
            return this.Proto.Data.LibraryIDListSelected;
        },
        // get CurDates() {
        // //     let m = this.DateSelector.value;
        // //     let d = Lure.Date().MonthStart;
        // //     d.setMonth(m - 1);
        // //     return [d, Lure.Date(d).MonthEnd];
        //     return [new Date(), new Date()]
        // }
    },
    Refresh: function () {
        // console.log('REFRESH');
        if (this.isVisible) {
            this.RefreshData();
            this.isRefreshed = true;
        }
    },
    Show: function () {
        // console.log('SHOW');
        if (!this.isRefreshed) {
            this.Refresh();
            this.isRefreshed = true;
        }
    },
    Load: '',
    Props: function () {
        let m = (new Date()).getMonth();
        this.DateSelector = this.Select('.dates-selector');
        this.CurDates = [((new Date).getMonth() + 1) + ''];

        this.ButtonExport = this.Select('.button-get-xls');
        this.ButtonRefresh = this.Select('.btn-refresh');
    },
    Methods: function () {
        this.RefreshData = function () {
            if (this.CurrentLibraries.length < 1) return;

            this.Load.Show();
            let [dateStart, dateEnd] = [Lure.Date(Lure.Date().MonthStart.setMonth(this.CurDates[0] - 1)).Date, Lure.Date(Lure.Date().MonthStart.setMonth(this.CurDates.Last() - 1)).MonthEnd];
            // console.log([dateStart, dateEnd]);

            api.Diary_Summary_Part1236View_Get(this.CurrentLibraries, (new Date).getFullYear(), this.CurDates, {})
                .then(data => {
                    let res = {p11: [], p12: [], p21: [], p22: [], p23: [], p3: [], p61: [], p62: []};
                    for (let r of data) {
                        switch (r.DateValue) {
                            case -1:
                                r.DateValue = 'Ранее';
                                r.QQQ = -2;
                                break;
                            case 100:
                                r.DateValue = 'Месяц';
                                r.QQQ = -2;
                                break;
                            case 101:
                                r.DateValue = 'Сумма';
                                r.QQQ = -2;
                                break;
                        }
                        let [p11, p12, p21, p22, p23, p3, p61, p62] = (new Array(8)).Select(x => ({DateValue: r.DateValue, QQQ: r.QQQ, IsDayOff: r.IsDayOff}));
                        for (let k in r)
                            if (r.hasOwnProperty(k))
                                switch (k[1]) {
                                    case '1':
                                        parseInt(k.substr(3)) >= 21 ? p12[k] = r[k] : p11[k] = r[k];
                                        break;
                                    case '2':
                                        if (parseInt(k.substr(3)) >= 34)
                                            p23[k] = r[k];
                                        else {
                                            if (parseInt(k.substr(3)) <= 18)
                                                p21[k] = r[k];
                                            else p22[k] = r[k];
                                        }
                                        break;
                                    case '3':
                                        p3[k] = r[k];
                                        break;
                                    case '6':
                                        if (k[2] === '1') p61[k] = r[k];
                                        if (k[2] === '2') p62[k] = r[k];
                                        break;
                                }

                        res.p11.push(p11);  // P1V2 .. P1V20 - p11
                        res.p12.push(p12);  // P1V21 .. P1V36 - p12
                        res.p21.push(p21);  // P2V2 .. P2V18 - p21
                        res.p22.push(p22);  // P2V19 .. P2V33 - p22
                        res.p23.push(p23);  // P2V34 .. P2V44 - p23
                        res.p3.push(p3);    // P3V2 .. P3V6 - p3
                        res.p61.push(p61);  // P61V2 .. P61V7 - p61
                        res.p62.push(p62);  // P62V2 .. P62V17 - p62
                    }

                    this.Part1.Proto.Data.p11 = res.p11;
                    this.Part1.Proto.Data.p12 = res.p12;
                    this.Part1.Proto.Refresh();
                    this.Part2.Proto.Data.p21 = res.p21;
                    this.Part2.Proto.Data.p22 = res.p22;
                    this.Part2.Proto.Data.p23 = res.p23;
                    this.Part2.Proto.Refresh();
                    this.Part3.Proto.Data.p3 = res.p3;
                    this.Part3.Proto.Refresh();
                    this.Part6.Proto.Data.p61 = res.p61;
                    this.Part6.Proto.Data.p62 = res.p62;
                    this.Part6.Proto.Refresh();
                })
                .then(() => api.Diary_SummaryPart4_Get(this.CurrentLibraries, dateStart, dateEnd))
                .then(data => {
                    this.Part4.Proto.Data.Part4 = data.filter(x => this.CurDates.indexOf((Lure.Date(x.DateStart).Month + 1) + '') !== -1 || this.CurDates.indexOf((Lure.Date(x.DateFinish).Month + 1) + '') !== -1);
                    this.Part4.Proto.Refresh();
                })
                .then(() => api.Diary_SummaryPart5_Get(this.CurrentLibraries, dateStart, dateEnd))
                .then(data => {
                    this.Part5.Proto.Data.Part5 = data.filter(x => this.CurDates.indexOf((Lure.Date(x.DateStart).Month + 1) + '') !== -1 || this.CurDates.indexOf((Lure.Date(x.DateFinish).Month + 1) + '') !== -1);
                    this.Part5.Proto.Refresh();
                })
                .then(() => this.Load.Hide())
                .catch(e => {
                    console.error(e);
                    this.Load.Hide();
                });
        };
        this.GetXLS = function () {
            this.Load.Show();
            let Dt = Lure.Date(this.CurrentDate);
            // let [dateStart, dateEnd] = this.CurDates;
            api.Diary_Summary_GetXLS(this.CurrentLibraries, (new Date).getFullYear(), this.CurDates, {
                Then: (Blob) => Lure.SaveBlob(Blob, `Сводная таблица ${Dt.Format('MMMM YYYY')}.xlsx`),
                Catch: () => Lure.System.Error('Невозможно получить отчет'),
                Finally: () => this.Load.Hide(),
            })
        };
        this.DateChanged = function (months) {
            if (months.length === 0) return;
            this.Proto.SetProperty('DatesResult', months);
            this.CurDates = months;
            this.RefreshData();
        };
    },
    AfterBuild: function() {
        new LibraryTree(this, this.Select('.library-tree-control'), {MultiSelect: true});
        this.Proto.Data.LibraryIDListSelected = [Lure.User.Cache.LibraryList.Last().ID];
        // this.DateSelector.onchange = () => this.RefreshData();
        this.ButtonExport.addEventListener('click', () => this.GetXLS());
        this.ButtonRefresh.addEventListener('click', () => this.Refresh());

        this.DatesSelector = CheckBoxSelector({
            target: this.Select('.dates'),
            Data: () => (new Array((new Date).getMonth() + 1)).Select((x, i) => ({MNum: i + 1, Name: Lure.Date(Lure.Date().MonthStart.setMonth(i)).Format('MMMM YYYY'), Check: i === (new Date).getMonth()})),
            Key: 'MNum',
            Value: 'Name',
            Control: this.Select('.date-range .dates-result'),
            onOK: r => this.DateChanged(r),
            checked: 'key'
        });
    }
});

require("./parts/part1.js");
require("./parts/part2.js");
require("./parts/part3.js");
require("./parts/part4.js");
require("./parts/part5.js");
require("./parts/part6.js");
