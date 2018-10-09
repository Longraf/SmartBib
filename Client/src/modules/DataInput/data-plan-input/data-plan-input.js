DataInput.DataPlanInput = new Lure.Content({
    Parent: DataInput,
    Name: 'DataPlanInput',
    Target: '.data-plan-input',
    //Type: 'data-plan-content',
    Type: 'data-input-content',
    Control: {
        Target: '#nav-data-input-plan'
    },
    Permission: {
        Roles: [Dictionary.Role.SetupPlan]
    },
    Content:
        `<div>
            <div class="diary-bread l-row">
                <div class="li">
                    Подразделение: <select class="l-select data-plan-select select lib-list"></select>
                </div>
            </div>
            <div class="dp-wrap-out">
                <div class="data-plan-wrapper">
                    <div class="data-plan-container"></div>
                </div>
            </div>
        </div>`,
    Load: '',
    Props: function() {
        this.CurrentYear = (new Date()).getFullYear();
        this.YearData = {};
        this.isShown = false;
        this.YearData[this.CurrentYear] = [
            {
                Quarter: 1,
                Months: [
                    {month: 1, visitors: 0, registration: 0, books: 0, Locked: 0},
                    {month: 2, visitors: 0, registration: 0, books: 0, Locked: 0},
                    {month: 3, visitors: 0, registration: 0, books: 0, Locked: 0}
                ],
                visitors: 1003,
                registration: 150,
                books: 200,
                Locked: 0
            },
            {
                Quarter: 2,
                Months: [
                    {month: 4, visitors: 0, registration: 0, books: 0, Locked: 0},
                    {month: 5, visitors: 0, registration: 0, books: 0, Locked: 0},
                    {month: 6, visitors: 0, registration: 0, books: 0, Locked: 0}
                ],
                visitors: 1003,
                registration: 150,
                books: 200,
                Locked: 0
            },
            {
                Quarter: 3,
                Months: [
                    {month: 7, visitors: 0, registration: 0, books: 0, Locked: 0},
                    {month: 8, visitors: 0, registration: 0, books: 0, Locked: 0},
                    {month: 9, visitors: 0, registration: 0, books: 0, Locked: 0}
                ],
                visitors: 1003,
                registration: 150,
                books: 200,
                Locked: 0
            },
            {
                Quarter: 4,
                Months: [
                    {month: 10, visitors: 0, registration: 0, books: 0, Locked: 0},
                    {month: 11, visitors: 0, registration: 0, books: 0, Locked: 0},
                    {month: 12, visitors: 0, registration: 0, books: 0, Locked: 0}
                ],
                visitors: 0,
                registration: 0,
                books: 0,
                Locked: 0
            }
        ];
        this.AllMonthsData = {};
        this.AllMonthsData[this.CurrentYear] = {};

        this.LibSelectContrl = new Lure.Controller.Templator({
            Target: '.data-plan-select.select.lib-list',
            Data: Lure.User.Cache.LibraryList,
            ListElement: `<option value="{{ID}}">{{Name}}</option>`
        });
        this.LibSelect = this.Select('.data-plan-select.select.lib-list');
    },
    Methods: function(){
        this.RefreshBigChart = function () {
            return this.PlanChart.ChartRefresh();
        };
        this.SaveMonthData = function (button) {
            let data = [];
            for (let k in this.AllMonthsData[this.CurrentYear])
                if (this.AllMonthsData[this.CurrentYear].hasOwnProperty(k))
                    for (let d of this.AllMonthsData[this.CurrentYear][k])
                        if (d.Changed === true) {
                            data.push({
                                D: api.dtToCs(new Date(this.CurrentYear, d.Month - 1, d.DayNumber)),
                                V: d.Visitors,
                                R: d.Registers,
                                B: d.BookGiving,
                                H: d.Holiday === 1
                            });
                            d.Changed = false;
                        }
            console.log(data);
            if (data.length > 0) {
                api.DataInput_Plan_Set(this.SelectedLibrary, data, {
                    Finally: () => {
                        // setTimeout(() => {
                        if (button) Lure.Button.Release(button);
                        Lure.System.ShowSuccess('Сохранено');
                        /*}, 1500)*/
                    }
                });
                return true;
            } else
                if (button) Lure.Button.Release(button);
            return false;
        };
        this.SaveYearData = function (button) {
            if (button) Lure.Button.Lock(button);
            for (let i = 1; i <= 12; i++) {
                let d = this.YearData[this.CurrentYear][Math.floor(( i - 1) / 3)].Months[(i - 1) % 3];

                if (d.Changed === true) {
                    console.log(d, i);
                    if (i === this.Calendar.Proto.Data.CurrentMonth)
                        this.Calendar.DistributeEvenly([d.visitors, d.registration, d.books], i);
                    else this.Calendar.DistributeEvenlyMethod([d.visitors, d.registration, d.books], this.AllMonthsData[this.CurrentYear][i], i);
                }
            }
            this.SaveMonthData(button);
        };
        this.DataPlanLoad = function () {
            this.Load.Show();
            return api.DataInput_Plan_Get(this.SelectedLibrary, this.CurrentYear, {
                Then: (r) => {
                    /// TODO Если r пусто, то дефолтное значение надо, которое из 0 состоит
                    let data = {};
                    let YearData = [];
                    for (let d of r) { // {B: 44, D: "/Date(1514754000000+0300)/", H: false, R: 43, V: 98} - Так приходит
                        let date = Lure.Date(d.D).Date;
                        let month = date.getMonth() + 1;
                        let quarter = Math.floor((month - 1) / 3);
                        if (!data[month]) data[month] = [];
                        let dayData = {
                            DayInWeek: date.getDay() === 0 ? 7 : date.getDay(), // ВС - 0, ПН - 1, СБ - 6
                            DayNumber: date.getDate(),
                            Month: month,
                            Visitors: d.V,
                            Registers: d.R,
                            BookGiving: d.B,
                            Holiday: d.H ? 1 : 0,
                            Locked: 0,
                            Changed: false
                        };
                        data[month][date.getDate() - 1] = dayData;
                        if (!YearData[quarter])
                            YearData[quarter] = {
                                Quarter: quarter + 1,
                                Months: [
                                    {month: quarter * 3 + 1, visitors: 0, registration: 0, books: 0, Locked: 0},
                                    {month: quarter * 3 + 2, visitors: 0, registration: 0, books: 0, Locked: 0},
                                    {month: quarter * 3 + 3, visitors: 0, registration: 0, books: 0, Locked: 0}
                                ],
                                visitors: 0,
                                registration: 0,
                                books: 0,
                                Locked: 0
                            };

                        YearData[quarter].visitors += dayData.Visitors;
                        YearData[quarter].registration += dayData.Registers;
                        YearData[quarter].books += dayData.BookGiving;
                        YearData[quarter].Months[(month - 1) % 3].visitors += dayData.Visitors;
                        YearData[quarter].Months[(month - 1) % 3].registration += dayData.Registers;
                        YearData[quarter].Months[(month - 1) % 3].books += dayData.BookGiving;
                    }
                    this.AllMonthsData[this.CurrentYear] = data;
                    this.YearData[this.CurrentYear] = YearData;
                    this.Charts.Controller.Refresh(this.YearData[this.CurrentYear]);
                    this.Charts.RecountSums();
                    // debugger
                    return this.RefreshBigChart();
                },
                Catch: console.error,
                Finally: () => {
                    this.Calendar.ChangeMonth(0);
                    this.Charts.RefreshCharts();
                    this.Load.Hide();
                },
            });
        };
        this.RefreshOnShow = function () {
            if (!this.isShown) {
                this.Refresh();
                this.isShown = true;
            }
        };
    },
    Refresh: function () {
        this.LibSelectContrl.Refresh()
            .then(() => {
                this.SelectedLibrary = parseInt(this.LibSelect.value);
                return this.DataPlanLoad();
            })
            .then(() => {
                if (!this.Calendar.CalCreated) {
                    this.Calendar.CalCreated = true;
                    this.Calendar.MakeCalendar((new Date()).getMonth() + 1);
                }
                this.Charts.RefreshCharts();
            });
    },
    Show: function () {
        this.Refresh();
        // this.Charts.RefreshCharts();
        // if (!Lure.Object.isEmpty(this.AllMonthsData[this.CurrentYear]))
        //     this.PlanChart.Chart.Redraw();
    },
    AfterBuild: function () {
        let self = this;
        this.LibSelect.onchange = function (e) {
            self.SelectedLibrary = parseInt(this.value);
            self.DataPlanLoad();
        };
    }
});

require('./charts/charts.js');
require('./calendar/calendar.js');
require('./plan-chart/plan-chart.js');
