const InputBox = require("../../../_common/input-box/input-box");

DataInput.DataPlanInput.Calendar = new Lure.Content({
    Parent: DataInput.DataPlanInput,
    Name: 'Calendar',
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
`<div class="plan-calendar widget-container">
    <div class="container-header strong">
        <div class="header-month-year"> Редактирование месяца: <span class="less"></span><span> {{CurrentMonth}} </span><span class="more"></span> <span>{{CurrentYear}}</span> </div>
        <div class="header-counts">{{filledCount}} / {{fullCount}}</div>
    </div>
    <div class="container-body">
        <div class="week-days-names">
            <div class="day-name">понедельник</div>
            <div class="day-name">вторник</div>
            <div class="day-name">среда</div>
            <div class="day-name">четверг</div>
            <div class="day-name">пятница</div>
            <div class="day-name">суббота</div>
            <div class="day-name">воскресенье</div>
        </div>
    </div>
    <div class="bottom-buttons" data-permission="Edit">
        <button class="l-button cancel-button">ОТМЕНА</button>
        <button class="l-button distribute-evenly-button">РАСПРЕДЕЛИТЬ РАВНОМЕРНО</button>
        <button class="l-button save-button">СОХРАНИТЬ</button>
    </div> 
</div>`,
    Controller: {
        Target: '.container-body',
        Data: [],
        EmptyMessage: `<div class="empty-calendar">Выберите месяц</div>`,
        ListElement:
            `<div class="day {{DayInWeek}} {{Current}} ">
                <div class="day-date"> 
                    <div class="date-day-number">{{DayNumber}} </div> 
                    <div class="date-month-name">{{Month}}</div>
                </div>
                <div class="param-icon holiday-icon {{#if ($item.Holiday == 0)?'not-locked' : 'locked'}}"></div>
                <div class="param-icon locked-icon {{#if ($item.Locked == 0)?'not-locked' : 'locked'}}"></div>
                <div class="day-parameters">
                    <div class="param visitors">
                        <div class="param-icon people-icon"></div>
                        <div data-type="Visitors" class="param-value" data-hint="Посещения - {{DayNumber}} {{Month}}">{{Visitors}}</div>
                    </div>
                    <div class="param registers">
                        <div class="param-icon card-icon"></div>
                        <div data-type="Registers" class="param-value" data-hint="Запись - {{DayNumber}} {{Month}}">{{Registers}}</div>
                    </div> 
                    <div class="param book-giving">
                        <div class="param-icon books-icon"></div>
                        <div data-type="BookGiving" class="param-value" data-hint="Книговыдача - {{DayNumber}} {{Month}}">{{BookGiving}}</div>
                    </div>
                </div>
            </div>`
    },
    PropFormat: {
        Month: function (x) { return  Lure.Date(new Date(this.Parent.CurrentYear, x - 1)).Format('MMMM', true) },
        DayInWeek: (x) => x > 5 ? ' weekend' : '',
        Current: function(x, p){ return this.Proto.Data.CurrentMonth !== p.Month ?' other-month ':'' },
        CurrentMonth: (x) => Lure.Date(new Date(new Date().getFullYear(), x - 1)).Format('MMMM'),
        filledCount: (x) => x.toLocaleString(),
        fullCount: (x) => x.toLocaleString(),
        CurrentYear: function () { return this.Parent.CurrentYear }
    },
    Props: function () {
        this.SaveButton = this.Select('.save-button');
        this.CalCreated = false;
    },
    Proto: {
        CurrentMonth: (new Date()).getMonth() + 1,
        filledCount: 0,
        fullCount: 0
    },
    Methods: function () {
        this.MakeCalendar = function (month, value = null) {
            this.Proto.SetProperty('CurrentMonth', month);
            // month--;
            value = {V: 0, R: 0, B: 0};
            let CY = this.Parent.AllMonthsData[this.Parent.CurrentYear];
            if (!CY[month - 1]) CY[month - 1] = [];
            if (!CY[month]) CY[month] = [];
            if (!CY[month + 1]) CY[month + 1] = [];
            let day = (dn, dw, m, bv, br, bg, h, l) => ({DayNumber: dn, DayInWeek: dw, Month: m, Visitors: bv, Registers: br, BookGiving: bg, Holiday: h, Locked: l });

            let dayNumber = new Date(this.Parent.CurrentYear, month - 1, 1).getDay(); // Номер первого дня в месяце
            if (dayNumber === 0) dayNumber = 7;
            let oldDay = new Date(this.Parent.CurrentYear, month - 1, 1 - dayNumber).getDate() + 1; // число первого дня недели

            let fullCount = 0;
            let data = [];
            let dn = 1;
            for (let i = oldDay; i <= new Date(new Date().getFullYear(), month - 1, 0).getDate(); i++) {
                if (CY[month - 1][i - 1])
                    data.push(CY[month - 1][i - 1]);
                else data.push(day(i, dn, month - 1, 0, 0, 0, 0, 0));
                dn++;
            }
            let week = 1;
            for (let i = 1; i <= new Date(this.Parent.CurrentYear, month, 0).getDate(); i++) {
                let index;
                if (CY[month][i - 1]) {
                    index = data.push(CY[month][i - 1]);
                    value.V += CY[month][i - 1].Visitors;
                    value.R += CY[month][i - 1].Registers;
                    value.B += CY[month][i - 1].BookGiving;
                }
                else {
                    let newDay = day(i, dayNumber, month, 0, 0, 0, Math.round(Math.random() / 1.45), 0);
                    index = data.push(newDay);
                    CY[month].push(newDay);
                }
                index--;
                // fullCount += data[index].Visitors + data[index].Registers + data[index].BookGiving;
                if (dayNumber === 7) {
                    dayNumber = 1;
                    week++;
                } else
                    dayNumber++;
            }

            let addDays = 7 - dayNumber;
            if (week <= 4) addDays += 7;
            if (dayNumber !== 1)
                for (let i = 0; i <= addDays; i++)
                    if (CY[month + 1][i])
                        data.push(CY[month + 1][i]);
                    else data.push(day(i + 1, (i + dayNumber) % 7 === 0 ? 7 : (i + dayNumber) % 7, month + 1, 0, 0, 0, 0, 0));

            this.Controller.Refresh(data);
            this.RefreshFilled();
            // this.Proto.SetProperty('fullCount', fullCount);
            this.Proto.SetProperty('fullCount', value.V + value.R + value.B );
        };

        this.DistributeEvenlySimple = function (MonthID, MonthSumValue) {

            let DateCursor = Lure.Date(new Date(this.Parent.CurrentYear, MonthID, 1));

            let Daily = Math.floor(MonthSumValue / DateCursor.CountDays);
            let Remained = MonthSumValue % DateCursor.CountDays;
            let MonthData = (new Array(DateCursor.CountDays)).Select(()=>Daily);
            let i = 0;
            while (Remained > 0){
                MonthData[i]++;
                Remained--;
                i++;
            }
            return MonthData;
        };
        this.DistrEvenClick = function () {
            let a = this.Parent.YearData[this.Parent.CurrentYear][Math.floor((this.Proto.Data.CurrentMonth - 1) / 3)].Months[(this.Proto.Data.CurrentMonth - 1) % 3];
            let value = [a.visitors, a.registration, a.books];
            // Lure.System.ShowNotice(value);
            this.DistributeEvenly(value);
        };

        this.DistributeEvenly = function (x, curMonth = -1) {
            this.Proto.SetProperty('fullCount', x.reduce((a,b) => a + b));

            if (curMonth === -1)
                curMonth = this.Proto.Data.CurrentMonth;

            let res = this.DistributeEvenlyMethod(x, this.Controller.Data, curMonth);
            if (res.length > 0)
                this.Controller.Refresh(res);
            this.RefreshFilled();
        };

        this.DistributeEvenlyMethod = function (x, arr, month) {
            let unlockedCount = 0;

            for (let d of arr)
                if (d.Month === month) {
                    if (d.Holiday === 0)
                        if (d.Locked === 0)
                            unlockedCount++;
                        else {
                            x[0] -= d.Visitors;
                            x[1] -= d.Registers;
                            x[2] -= d.BookGiving;
                        }
                }
            if (x[0] < 0 || x[2] < 0 || x[1] < 0) {
                Lure.System.Error('Отрицательное значение');
                return [];
            }

            let xRem = [x[0] % unlockedCount, x[1] % unlockedCount, x[2] % unlockedCount];
            x = [Math.floor(x[0] / unlockedCount), Math.floor(x[1] / unlockedCount), Math.floor(x[2] / unlockedCount)];
            for (let d of arr) {
                if (d.Locked === 1 || month !== d.Month) continue;
                if (d.Holiday === 0) {
                    d.Visitors = xRem[0] > 0 ? (xRem[0]--, x[0] + 1) : x[0];
                    d.Registers = xRem[1] > 0 ? (xRem[1]--, x[1] + 1) : x[1];
                    d.BookGiving = xRem[2] > 0 ? (xRem[2]--, x[2] + 1) : x[2];
                } else
                    [d.Visitors, d.Registers, d.BookGiving] = [0,0,0];
                d.Changed = true;
            }
            return arr;
        };

        this.ToggleLocked = function (x) {
            x.classList.toggle('locked');
            x.classList.toggle('not-locked');
        };
        this.RefreshFilled = function () {
            let sum = 0;
            for (let d of this.Controller.Data)
                if (d.Month === this.Proto.Data.CurrentMonth)
                    sum += parseInt(d.Visitors) + parseInt(d.Registers) + parseInt(d.BookGiving);
            this.Proto.SetProperty('filledCount', sum);
        };
        this.NumPadSetValue = function (v, lineID, paramName) {
            // let dict = {'visitors': 'Visitors', 'registers': 'Registers', 'book-giving': 'BookGiving'};
            let elemData = this.Controller.GetDataItemByLineID(lineID).Data;
            elemData[paramName] = parseInt(v);
            elemData.Changed = true;
            this.Controller.Refresh(lineID);
            this.RefreshFilled();
        };
        this.SaveData = function () {
            Lure.Button.Lock(this.SaveButton);
            // setTimeout(() => {

            if (this.Proto.Data.filledCount === this.Proto.Data.fullCount) {
                if (this.Parent.SaveMonthData(this.SaveButton))
                    this.Parent.RefreshBigChart();
            } else {
                let x = this.Select('.header-counts');
                x.classList.add('alert');
                setTimeout(() => x.classList.remove('alert'), 3000);
                Lure.System.Error('Плановые и установленные вручную значения не совпадают');
            }

            // }, 2000 );
        };
        this.ChangeMonth = function (x) {
            this.Proto.Data.CurrentMonth += x;
            let next_month = this.Proto.Data.CurrentMonth;
            if (next_month > 12 || next_month < 1) {
                if (next_month > 12) { next_month = 1; this.Parent.CurrentYear++; }
                if (next_month < 1) {
                    if (this.Parent.CurrentYear - 1 < 2017) { next_month = 1; return; }
                    next_month = 12; this.Parent.CurrentYear--;
                }
                this.Parent.DataPlanLoad().then(() => this.Parent.Charts.SelectMonthNum(next_month));
            } else
                this.Parent.Charts.SelectMonthNum(next_month);
        };
    },
    AfterBuild: function () {
        // this.MakeCalendar((new Date).getMonth() + 1);
        this.Select('.distribute-evenly-button').onclick = () => this.DistrEvenClick();
        this.SaveButton.onclick = () => this.SaveData();
        this.Select('.cancel-button').onclick = () => Lure.System.ShowNotice("Отмена");

        this.AddEventListener('click', '.day:not(.other-month) .holiday-icon, .day:not(.other-month) .locked-icon', (e, p) => {
            let elemData = this.Controller.GetDataItemByLineID(p.LineID).Data;
            this.ToggleLocked(e.currentTarget);
            if (e.currentTarget.classList.contains('locked-icon')) elemData.Locked = 1 - elemData.Locked;
            if (e.currentTarget.classList.contains('holiday-icon')) { elemData.Holiday = 1 - elemData.Holiday; elemData.Changed = true; this.DistrEvenClick(); }
        });
        this.AddEventListener('click', '.day:not(.other-month) .param .param-value',
            (e, p) => InputBox.Run(e.currentTarget, e.currentTarget.innerHTML, (v) => this.NumPadSetValue(v, parseInt(p.LineID), e.currentTarget.dataset['type']), {Caption: e.currentTarget.dataset['hint']})
        );
        this.Select('.less').onclick = () => this.ChangeMonth(-1);
        this.Select('.more').onclick = () => this.ChangeMonth(1);
    }
});
