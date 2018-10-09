const InputBox = require("../../../_common/input-box/input-box");

DataInput.DataPlanInput.Charts = new Lure.Content({
    Parent: DataInput.DataPlanInput,
    Name: 'Charts',
    Target: '.data-plan-container',
    Visible: true,
    Permission: {
        Rules: {
            Edit: {
                Roles:  [D.Role.SetupPlanEdit]
            }
        }
    },
    Content:
`<div class="plan-charts widget-container"> 
    <div class="container-header strong">План на 2018 год</div>
    <div class="container-body">
        <div class="charts">
            <div class="chart-container l-row">
                <div class="chart flex-100">
                    <div class="left-chart-container"></div>
                    <div class="chart-subscript">
                        <div class="sub-icon param-icon people-icon"></div>
                        <div class="sub-caption" data-type="year.year_sum_visitors" data-hint="Посещения - год">{{year_sum_visitors}}</div>
                    </div>
                </div>
                <div class="chart flex-100">
                    <div class="center-chart-container"></div>
                    <div class="chart-subscript">
                        <div class="sub-icon param-icon card-icon"></div>
                        <div class="sub-caption" data-type="year.year_sum_registration" data-hint="Запись - год">{{year_sum_registration}}</div>
                    </div>
                </div>
                <div class="chart flex-100">
                    <div class="right-chart-container"></div>
                    <div class="chart-subscript">
                        <div class="sub-icon param-icon books-icon"></div>
                        <div class="sub-caption" data-type="year.year_sum_books" data-hint="Книговыдача - год">{{year_sum_books}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="index-table">
            <div class="table-header-data ">
                <div class="column-name column-period-header"><div class="period-name">Период</div></div>
                <div class="column-name column-visitors-header"><span class="param-icon people-icon"></span> Посещения</div>
                <div class="column-name column-registration-header"><span class="param-icon card-icon"></span> Запись</div>
                <div class="column-name column-books-header"><span class="param-icon books-icon"></span> Книговыдача</div>
            </div>
            <div class="table-holder"></div>
            <div class="full-year">
                <div class="year column-period"><div class="period-name">Год</div></div>
                <div class="year column-visitors" data-type="year.year_sum_visitors" data-hint="Посещения - год">{{year_sum_visitors}}</div>
                <div class="year column-registration" data-type="year.year_sum_registration" data-hint="Запись - год">{{year_sum_registration}}</div>
                <div class="year column-books" data-type="year.year_sum_books" data-hint="Книговыдача - год">{{year_sum_books}}</div>
            </div>
        </div>
    </div>
    <div class="bottom-buttons" data-permission="Edit">
        <button class="l-button cancel-button">ОТМЕНА</button>
        <button class="l-button distribute-evenly-button">РАСПРЕДЕЛИТЬ РАВНОМЕРНО</button>
        <button class="l-button save-button">СОХРАНИТЬ</button>
    </div>
</div>`,
    Controller: {
        Target: '.table-holder',
        ListElement:
            `<div class="quarter-{{QuarterNum}} quarter">
                {{#each Months}}
                    <div class="month {{month}} {{none}}">
                        <div class="column-holder period">
                            <div class="lock param-icon locked-icon {{locked_mon}}"></div>
                            <div class="column-period {{grey_month}}" data-type="month.{{$this.month}}.full">{{monthRU}}</div>
                        </div>
                        <div class="column-holder">
                            <div class="lock param-icon locked-icon {{locked_vis}}"></div>
                            <div class="column-visitors" data-type="month.{{$this.month}}.visitors" data-hint="Посещения - {{monthRU}}">{{visitors}}</div>
                        </div>
                        <div class="column-holder">
                            <div class="lock param-icon locked-icon {{locked_reg}}"></div>
                            <div class="column-registration" data-type="month.{{$this.month}}.registration" data-hint="Запись - {{monthRU}}">{{registration}}</div>
                        </div>
                        <div class="column-holder">
                            <div class="lock param-icon locked-icon {{locked_bok}}"></div>
                            <div class="column-books" data-type="month.{{$this.month}}.books" data-hint="Книговыдача - {{monthRU}}">{{books}}</div>
                        </div>
                    </div>
                {{#endeach}}
                <div class="quarter-sumary-{{QuarterNum}} quarter-month {{grey_back}}">
                    <div class="column-holder first-column">
                        <div class="lock param-icon locked-icon {{locked_mon}}"></div>
                        <div class="column-period" data-type="quarter.{{$this.Quarter}}.full">{{QuarterRU}}</div>
                    </div>
                    <div class="column-holder">
                        <div class="lock param-icon locked-icon {{locked_vis}}"></div>
                        <div class="column-visitors" data-type="quarter.{{$this.Quarter}}.visitors" data-hint="Посещения - {{QuarterRU}}">{{visitors}}</div>
                    </div>
                    <div class="column-holder" >
                        <div class="lock param-icon locked-icon {{locked_reg}}"></div>
                        <div class="column-registration" data-type="quarter.{{$this.Quarter}}.registration" data-hint="Запись - {{QuarterRU}}">{{registration}}</div>
                    </div>
                    <div class="column-holder">
                        <div class="lock param-icon locked-icon {{locked_bok}}"></div>
                        <div class="column-books" data-type="quarter.{{$this.Quarter}}.books" data-hint="Книговыдача - {{QuarterRU}}">{{books}}</div>
                    </div>
                </div>
            </div>`,
        Data: [ ],
    },
    PropFormat: {
        // month: (x) => ({1:  'january', 2:  'february', 3:  'march', 4:  'april', 5:  'may', 6:  'june', 7:  'july', 8:  'august', 9:  'september', 10:  'october', 11:  'november', 12:  'december'})[x],
        month: function (x) {return this.Months(x)},
        monthRU: function (x, p) {return p.month ? Lure.Date(new Date(this.Parent.CurrentYear, p.month - 1, 1)).Format('MMMM') : ''},
        QuarterNum: (x, p) => ({1: 'one', 2: 'two', 3: 'three', 4: 'four'})[p.Quarter],
        QuarterRU: (x, p) => ({1: 'I Квартал', 2: 'II Квартал', 3: 'III Квартал', 4: 'IV Квартал'})[p.Quarter],
        none: function (x, p) {return this.OpenedMonths.indexOf(p.month) === -1 ? 'none' : '';},
        grey_month: function (x, p) {return this.SelectedMonth === p.month ? ' grey-month ' : ''},
        grey_back: function (x, p) {return p.Quarter === this.OpenedQuarter ? 'grey-back' : '';},
        locked_mon: (x, p) => (p.Locked & 8) === 0 ? 'not-locked' : 'locked',
        locked_vis: (x, p) => (p.Locked & 4) === 0 ? 'not-locked' : 'locked',
        locked_reg: (x, p) => (p.Locked & 2) === 0 ? 'not-locked' : 'locked',
        locked_bok: (x, p) => (p.Locked & 1) === 0 ? 'not-locked' : 'locked',
        year_sum_visitors: (x) => x.toLocaleString(),
        year_sum_registration: (x) => x.toLocaleString(),
        year_sum_books: (x) => x.toLocaleString(),
        visitors: (x) => x.toLocaleString(),
        registration: (x) => x.toLocaleString(),
        books: (x) => x.toLocaleString(),
    },
    Proto: {
        year_sum_visitors: 0,
        year_sum_registration: 0,
        year_sum_books: 0
    },
    Props: function() {
        // this.EditingCell = '';
        this.DoubleClickTimer = null;
        this.OpenedQuarter = Math.floor((new Date()).getMonth() / 3) + 1;
        this.SelectedMonth = (new Date()).getMonth() + 1;
        this.OpenedMonths = [this.OpenedQuarter * 3 - 2, this.OpenedQuarter * 3 - 1, this.OpenedQuarter * 3];
        this.PropsLogic = {full: 8, visitors: 4, registration: 2, books: 1};
    },
    Methods: function () {
        this.GetChartOptions = function (TargetElement) {
            return {
                Target: TargetElement,
                Type: 'pie',
                Legend: {
                    Visible: false
                },
                Series: [
                    {
                        Labels: {
                            Data: Lure.Culture.MonthNames.Select(m => m + ' ' + this.Parent.CurrentYear),
                            //Data: ["Январь 2018", "Февраль 2018", "Март 2018", "Апрель 2018", "Май 2018", "Июнь 2018", "Июль 2018", "Август 2018", "Сентябрь 2018", "Октябрь 2018", "Ноябрь 2018", "Декабрь 2018"],
                        },
                        Data: [5, 2, 3, 1, 4, 5, 7, 1, 2, 3, 3, 4],
                        Colors: ["#6FAD81", "#7AD096", "#82E29F", "#AD776E", "#D0887D", "#E29284", "#ADA66E", "#D0C98A", "#E2D984", "#7DB0D0", "#85C2E2", "#8ACBF4"],
                        Type: 'ring',
                        Width: 32,
                        AngleStart: -90,
                    },
                    {
                        Labels: {
                            Data: ["I Квартал 2018", "II Квартал 2018", "III Квартал 2018", "IV Квартал 2018"],
                        },
                        Data: [10, 10, 10, 10],
                        Colors: ["#61A878", "#A56C60", "#9E9960", "#608AAB"],
                        Type: 'ring',
                        Width: 22,
                        AngleStart: -90,
                    }
                ],
            }
        };

        this.Months = (x) => ({1:  'january', 2:  'february', 3:  'march', 4:  'april', 5:  'may', 6:  'june', 7:  'july', 8:  'august', 9:  'september', 10:  'october', 11:  'november', 12:  'december'})[x];
        this.RefreshCharts = function () {
            this.RefreshChartsParams('visitors');
            this.RefreshChartsParams('registration');
            this.RefreshChartsParams('books');
        };
        this.RefreshChartsParams = function(p) {
            let c;
            if (p === 'visitors')
                c = this.ChartVisits;
            if (p === 'registration')
                c = this.ChartRegister;
            if (p === 'books')
                c = this.ChartBooks;
            // p === 'visitors' ? c = this.ChartVisits : p === 'registration' ? c = this.ChartRegister : p === 'books' ? c = this.ChartBooks : c = null;
            if (!c) return;
            let c_data = this.Controller.Data;
            if (c_data[0]) {
                c.Options.Series[1].Data = [
                    c_data[0][p],
                    c_data[1][p],
                    c_data[2][p],
                    c_data[3][p]
                ]; // Кварталы
                c.Options.Series[0].Data = [
                    c_data[0].Months[0][p],
                    c_data[0].Months[1][p],
                    c_data[0].Months[2][p],
                    c_data[1].Months[0][p],
                    c_data[1].Months[1][p],
                    c_data[1].Months[2][p],
                    c_data[2].Months[0][p],
                    c_data[2].Months[1][p],
                    c_data[2].Months[2][p],
                    c_data[3].Months[0][p],
                    c_data[3].Months[1][p],
                    c_data[3].Months[2][p]
                ]; // Месяцы
                c.Refresh();
            }
        };
        this.RecountSums = function () {
            let proto = this.Proto.Data;
            [proto.year_sum_visitors, proto.year_sum_registration, proto.year_sum_books] = [0, 0, 0];
            if (this.Controller.Data)
                for (let q of this.Controller.Data) {
                    [q.visitors, q.registration, q.books] = [0, 0, 0];
                    if (q.Months) for (let month of q.Months) {
                        proto.year_sum_visitors += month.visitors;
                        proto.year_sum_registration += month.registration;
                        proto.year_sum_books += month.books;
                        q.visitors += month.visitors;
                        q.registration += month.registration;
                        q.books += month.books;
                    }
                }
            this.Controller.Refresh();
            this.Proto.Refresh();
        };
        this.OpenQuarter = function (elem) {
            let x = parseInt(elem.dataset['type'].split('.')[1]);
            this.OpenedQuarter = x;
            let oldSelection = this.Select('.grey-back');
            if (oldSelection)
                oldSelection.classList.remove('grey-back');
            elem.parentElement.parentElement.classList.add('grey-back');

            let months = [this.Months(x * 3 - 2), this.Months(x * 3 - 1), this.Months(x * 3)];
            this.OpenedMonths = [(x * 3 - 2), (x * 3 - 1), (x * 3)];
            for (let d of this.SelectAll('.month'))
                if (d.classList.contains(months[0]) || d.classList.contains(months[1]) || d.classList.contains(months[2]))
                    d.classList.remove('none');
                else d.classList.add('none');
        };
        this.SetParamsValue = function(elem, value, update = true){ /* quarter.month.param */
            elem = elem.split('.');
            if (elem[2] === 'Locked') {
                let paramName = elem[2];
                switch (elem[0]) {
                    case 'quarter':
                        if (elem[3] === 'on') this.Controller.Data[parseInt(elem[1]) - 1][paramName] |= value;
                        if (elem[3] === 'off') this.Controller.Data[parseInt(elem[1]) - 1][paramName] &= value;
                        break;
                    case 'month':
                        elem[1] = parseInt(elem[1]) - 1;
                        let monthNum = elem[1] % 3;
                        let quarterNum = Math.floor(elem[1] / 3);
                        if (elem[3] === 'on') this.Controller.Data[quarterNum].Months[monthNum][paramName] |= value;
                        if (elem[3] === 'off') this.Controller.Data[quarterNum].Months[monthNum][paramName] &= value;
                        break;
                }
                if (update) this.Controller.Refresh();
            }
            else
                switch (elem[0]) {
                    case 'quarter':
                        let paramName = elem[2];
                        let quarterNum = parseInt(elem[1]);

                        //////////////////////// ПОДГОТОВКА ////////////////////////
                        let contrl = this.Controller.Data;

                        let data = {0: { }, sum: 0};
                        for (let i = 1; i <= 4; i++) {
                            let item = { sum: 0, lockSum: 0, lock: (contrl[i - 1].Locked & this.PropsLogic[paramName]) !==0 };
                            for (let k = 0; k <= 2; k++)
                                item[k] = { v: contrl[i - 1].Months[k][paramName], lock: (contrl[i - 1].Months[k].Locked & this.PropsLogic[paramName]) !== 0 };
                            data[i] = item;
                        }
                        /* data = {
                            0: { },
                            1: {
                                0: { v: contrl[0].Months[0][paramName], lock: (contrl[0].Months[0].Locked & this.PropsLogic[paramName]) !== 0 }, 1: {...}, 2: {...}
                                sum: 0,
                                lockSum: 0,
                                lock: (contrl[0].Locked & this.PropsLogic[paramName]) !==0
                            } ... another 3 quarters
                        }; */

                        for (let d = 1; d <= 4; d++) {
                            data[d].sum = data[d][0].v + data[d][1].v + data[d][2].v;
                            if (data[d].lock)
                                data[d].lockSum = data[d].sum;
                            data.sum += data[d].sum;
                        }
                        //////////////////////// ПОДГОТОВКА \\\\\\\\\\\\\\\\\\\\\\\\

                        if (quarterNum === 0) {
                            data.sum = value;
                            value = 0;
                        }
                        else {
                            data[quarterNum].sum = value;
                            if (data[quarterNum].lock)
                                data[quarterNum].lockSum = value;
                        }
                        data.lockSum = 0;
                        for (let d = 1; d <= 4; d++)
                            data.lockSum += data[d].lockSum;
                        let restValue;
                        if (data[quarterNum].lock)
                            restValue = data.sum - data.lockSum; // оставшеесе количество, которое надо распределить
                        else restValue = data.sum - data.lockSum - value; // оставшеесе количество, которое надо распределить

                        let unlockCount = 0;
                        for (let d = 1; d <= 4; d++)
                            if (!data[d].lock && d !== quarterNum)
                                unlockCount++;

                        if (restValue < 0){
                            Lure.System.ShowError('Устанавливаемое значение больше, чем доступно в году');
                            return;
                        }
                        if (unlockCount === 0) {
                            Lure.System.ShowError('Остальные кварталы заблокированы');
                            return;
                        }
                        let remind = restValue % unlockCount; // остаток от деления

                        for (let d = 1; d <= 4; d++) {
                            if (!data[d].lock)
                                if (d !== quarterNum) {
                                    let qValue = remind > 0 ? (remind--, Math.floor(restValue / unlockCount) + 1) : Math.floor(restValue / unlockCount);
                                    if (qValue >= data[d].lockSum)
                                        data[d].sum = qValue;
                                    else
                                        data[d].sum = data[d].lockSum;
                                    unlockCount--;
                                    restValue -= data[d].sum;
                                    if (restValue < 0) {
                                        Lure.System.ShowError('Заблокировано слишком много');
                                        return;
                                    }
                                }
                            let unlockMonth = !data[d][0].lock + !data[d][1].lock + !data[d][2].lock;
                            let unlockValue = data[d].sum - (data[d][0].lock * data[d][0].v + data[d][1].lock * data[d][1].v + data[d][2].lock * data[d][2].v);
                            if (unlockValue < 0){
                                Lure.System.ShowNotice('В месяцах ' + d + '-го квартала отрицательные значения,<br>попробуйте разблокировать их');
                                return;
                            }
                            let remMonth = unlockValue % unlockMonth;
                            for (let i = 0; i < 3; i++)
                                if (!data[d][i].lock)
                                    data[d][i].v = remMonth > 0 ? (remMonth--, Math.floor(unlockValue / unlockMonth) + 1) : Math.floor(unlockValue / unlockMonth);
                        }

                        //////////////////////// Сохранение ////////////////////////
                        for (let d = 1; d <= 4; d++){
                            for (let i = 0; i < 3; i++) {
                                this.Controller.Data[d - 1].Months[i][paramName] = data[d][i].v;
                                this.Controller.Data[d - 1].Months[i].Changed = true;
                            }
                            this.Controller.Data[d - 1][paramName] = data[d].sum;
                        }
                        // console.log(paramName, data);
                        this.Proto.SetProperty('year_sum_' + paramName, data[1].sum + data[2].sum + data[3].sum + data[4].sum);
                        //////////////////////// Сохранение \\\\\\\\\\\\\\\\\\\\\\\\

                        if (update) { this.Controller.Refresh(); this.RefreshChartsParams(paramName); }
                        break;
                    case 'month': {
                            elem[1] = parseInt(elem[1]) - 1;
                            let quarterNum = Math.floor(elem[1] / 3);
                            let paramName = elem[2];
                            let unlockCount = 2;
                            let quarterVal = this.Controller.Data[quarterNum][paramName] - value; // сколько осталось распределить в квартале

                            for (let d of this.Controller.Data[quarterNum].Months)
                                if ((d.Locked & this.PropsLogic[paramName]) !== 0 && (d.month !== elem[1] + 1)){
                                        quarterVal -= d[paramName];
                                        unlockCount--;
                                    }
                            if (unlockCount <= 0) { Lure.System.Error('Остальные ячейки заблокированы'); return; }
                            if (quarterVal < 0) { Lure.System.Error('Устанавливаемое значение больше, чем значение квартала'); return; }
                            this.Controller.Data[quarterNum].Months[elem[1] % 3][paramName] = value;
                            this.Controller.Data[quarterNum].Months[elem[1] % 3].Changed = true;
                            let rem = quarterVal % unlockCount; // остаток от деления
                            let monthValue = Math.floor(quarterVal / unlockCount);
                            for (let d of this.Controller.Data[quarterNum].Months)
                                if (d.month !== elem[1] + 1 && (d.Locked & this.PropsLogic[paramName]) === 0) {
                                    d[paramName] = rem > 0 ? (rem--, monthValue + 1) : monthValue;
                                    d.Changed = true;
                                }

                            if (update) { this.Controller.Refresh(); this.RefreshChartsParams(paramName); }
                        }
                        break;

                    case 'year':
                        this.Proto.SetProperty(elem[1], value);
                        this.SetParamsValue( ['quarter', '0', elem[1].split('_')[elem[1].split('_').length - 1] ].join('.'),  value, update);
                        break;
                }
        };

        this.ToggleLocked = function (x, doubleClick = 'single') {
            let dataElem = x.parentElement.children[1].dataset['type'].split('.');
            let flag = x.classList.contains('locked');
            this.toggleLockedParams(dataElem, flag, doubleClick === 'double');
        };
        this.toggleLockedParams = function(dataElem, isLocked, doubleClick) {
            if (doubleClick) isLocked = !isLocked;
            isLocked ? (dataElem[3] = 'off') : (dataElem[3] = 'on');

            let lockData = 0;
            switch (dataElem[2]) {
                case 'visitors':
                    dataElem[3] === 'on' ? lockData = 4 : lockData = 11; // 0100 1011
                    break;
                case 'registration':
                    dataElem[3] === 'on' ? lockData = 2 : lockData = 13; // 0010 1101
                    break;
                case 'books':
                    dataElem[3] === 'on' ? lockData = 1 : lockData = 14; // 0001 1110
                    break;
                case 'full':
                    dataElem[3] === 'on' ? lockData = 15 : lockData = 0; // 1111 0000
                    break;
                default:
                    Lure.System.Error('Неверный ID параметра');
                    return;
            }
            dataElem[2] = 'Locked'; // quarter.3.visitors
            if (dataElem[0] === 'quarter' && doubleClick)
                for (let i = parseInt(dataElem[1]) * 3 - 2; i <= parseInt(dataElem[1]) * 3; i++)
                    this.SetParamsValue(['month', i, dataElem[2], dataElem[3]].join('.'), lockData, false);

            this.SetParamsValue(dataElem.join('.'), lockData);
        };

        this.SelectMonthNum = function (mnum) {
            let monthElem = this.Select('.month.' + this.Months(mnum) + ' .column-period');
            if (monthElem)
                this.MonthClick(monthElem);
        };

        this.MonthClick = function (e) {
            let a = this.Select('.grey-month');
            if (a) a.classList.remove('grey-month');
            e.classList.add('grey-month');
            let month = parseInt(e.dataset['type'].split('.')[1]);
            this.SelectedMonth = month;
            let val = this.Controller.Data[Math.floor((month - 1) / 3)].Months[(month - 1) % 3];
            let value = [val.visitors, val.registration, val.books];
            this.Parent.Calendar.MakeCalendar(month, value);
        };
        this.LockClick = function (e) {
            let data = e.currentTarget.parentElement.children[1].dataset['type'];
            if (!data) return;
            this.ToggleLocked(e.currentTarget, 'single');
            if (data.split('.')[0] !== 'quarter') return;
            if (this.DoubleClickTimer == null) {
                this.DoubleClickTimer = setTimeout(() => this.DoubleClickTimer = null, 300);
            } else {
                clearInterval(this.DoubleClickTimer);
                this.DoubleClickTimer = null;
                this.ToggleLocked(e.currentTarget, 'double');
            }
        };
    },
    AfterBuild: function () {
        this.ChartVisits = new Lure.Chart(this.GetChartOptions(this.Select('.left-chart-container')));
        this.ChartRegister = new Lure.Chart(this.GetChartOptions(this.Select('.center-chart-container')));
        this.ChartBooks = new Lure.Chart(this.GetChartOptions(this.Select('.right-chart-container')));

        this.AddEventListener('click', '.column-visitors, .column-registration, .column-books, .chart-container .sub-caption', (e) =>
            InputBox.Run(
                e.currentTarget,
                parseInt(e.currentTarget.innerHTML.replace(/[^0-9]/gu, '')),
                (v) => this.SetParamsValue(e.currentTarget.dataset['type'], parseInt(v)),
                {Caption: e.currentTarget.dataset['hint']}
            ));
        this.AddEventListener('click', '.quarter-month .column-period', (e) => this.OpenQuarter(e.currentTarget));
        this.AddEventListener('click', '.lock', (e) => this.LockClick(e));
        this.AddEventListener('click', '.month .column-period', (e) => this.MonthClick(e.currentTarget));
        this.SaveButton = this.Select('.save-button');
        this.SaveButton.onclick = () => this.Parent.SaveYearData(this.SaveButton);

        this.Select('.cancel-button').onclick = () => Lure.System.Notice('Canceled');
        this.Select('.distribute-evenly-button').onclick = () => {
            this.SetParamsValue('year.year_sum_visitors', this.Proto.Data.year_sum_visitors, false);
            this.SetParamsValue('year.year_sum_registration', this.Proto.Data.year_sum_registration, false);
            this.SetParamsValue('year.year_sum_books', this.Proto.Data.year_sum_books, false);
            // this.RecountSums();
            this.Controller.Refresh();
            this.RefreshCharts();
        };

        let ElemIsChildOf = (elem, checkClass, limitClass = 'body') => {
            if (!elem) return false;
            if (!elem.parentElement) return false;
            if (elem.parentElement.classList.contains(limitClass)) return false;
            if (elem.parentElement.classList.contains(checkClass))
                return true;
            else return ElemIsChildOf(elem.parentElement, checkClass, limitClass);
        };

        this.AddEventListener('click', '.right-chart-container path.chart-hover, .center-chart-container path.chart-hover, .left-chart-container path.chart-hover', e => {
            let elem = e.currentTarget;
            let period, num, type, startVal = 0, caption = '';

            num = parseInt(elem.dataset['item']) + 1;
            switch (elem.dataset['line']) {
                case '0':
                    period = 'month';
                    caption = ' - ' + Lure.Date(new Date(2018, num - 1, 1)).Format('MMMM');
                    break;
                case '1':
                    period = 'quarter';
                    caption = ' - ' + (num === 1 ? 'I' : num === 2 ? 'II' : num === 3 ? 'III' : 'IV') + ' квартал';
                    break;
            }

            if (ElemIsChildOf(elem, 'right-chart-container', 'chart-container')) {
                type = 'books';
                startVal = this.ChartBooks.Options.Series[parseInt(elem.dataset['line'])].Data[num - 1];
                caption = 'Книговыдача ' + caption;
            }
            if (ElemIsChildOf(elem, 'center-chart-container', 'chart-container')) {
                type = 'registration';
                startVal = this.ChartRegister.Options.Series[parseInt(elem.dataset['line'])].Data[num - 1];
                caption = 'Запись ' + caption;
            }
            if (ElemIsChildOf(elem, 'left-chart-container', 'chart-container')) {
                type = 'visitors';
                startVal = this.ChartVisits.Options.Series[parseInt(elem.dataset['line'])].Data[num - 1];
                caption = 'Посещения ' + caption;
            }
            if (!period || !num || !type) return;
            // console.log([period, num, type].join('.'));
            InputBox.Run(
                elem, startVal,
                v => this.SetParamsValue([period, num, type].join('.'), parseInt(v)),
                {Caption: caption}
            );

            // console.log(ElemIsChildOf(elem, 'right-chart-container', 'chart-container'), elem.dataset['line'], elem.dataset['item']);
        });

    }
});
