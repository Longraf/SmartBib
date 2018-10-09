
Dash.DashMain = new Lure.Content({
    //Disabled: true,
    Name: 'DashMain',
    Target: '',
    Type: 'dash-content',
    Visible: true,
    Control:{
        Target: '#nav-dash-main'
    },
    Permission: {
        Roles: [Dictionary.Role.Dashboard]
    },
    Content: `
<div>
    <div class="diary-bread l-row">
        <div class="li l-row l-flexa-center flex-100">
            <div>Подразделение: &nbsp;&nbsp;</div>
            <div class="flex-100 library-tree-control strong">__</div>
        </div>
    </div>
    
    <div class="period-picker">
        <div class="periods">
            <div class="per today selected">Сегодня</div>
            <div class="per yesterday">Вчера</div>
            <div class="per week">Неделя</div>
            <div class="per month">Месяц</div>
            <div class="per quarter">Квартал</div>
            <div class="per year">Год</div>
        </div>
        <div class="per calendar-period">
            <div class="icon">&#128198;</div>
            <div class="dates"></div>
        </div>
    </div>
    <div class="pies">
    
        <div class="pie-visitors-wrap">
            <div class="chart-header">Посещаемость</div>
            <div class="pie-visitors">
                <div class="pie visitors-chart"></div>
                <div class="chart-subscript">
                    <div class="sub-icon param-icon"><span>{{Visitors.Sum}}</span><span>{{Divider}}</span><span>{{Visitors.Target}}</span></div>
                    <div class="sub-caption">выполнение<br>госзадания</div>
                </div>
            </div>
            <div class="parameters">
                <div class="param-header">
                    <div class="header-text">&nbsp;</div>
                    <div class="percent-123" data-type="Visitors"><span class="numbers selected">123</span> I <span class="percents">%</span></div>
                </div>
                <div class="row" data-type="v-0"><div class="color-mark new-reg">&nbsp;</div><div class="parameter-name">вновь записавшиеся</div><div class="parameter-value">{{Visitors.New}}</div></div>
                <div class="row" data-type="v-1"><div class="color-mark stationary">&nbsp;</div><div class="parameter-name">стационар</div><div class="parameter-value">{{Visitors.Stationary}}</div></div>
                <div class="row" data-type="v-2"><div class="color-mark events">&nbsp;</div><div class="parameter-name">мероприятия</div><div class="parameter-value">{{Visitors.Events}}</div></div>
                <div class="row" data-type="v-3"><div class="color-mark clubs">&nbsp;</div><div class="parameter-name">клубы</div><div class="parameter-value">{{Visitors.Clubs}}</div></div>
            </div>
        </div>
        
        <div class="pie-registers-double">
            <div class="chart-header">Записавшиеся</div>
            <div class="pie-registers-double-wrap">
                <div class="pie-registers-wrap">
                    <div class="pie-registers">
                        <div class="pie social-groups-chart"></div>
                        <div class="chart-subscript">
                            <div class="sub-icon param-icon"><span>{{Registers.Sum}}</span><span>{{Divider}}</span><span>{{Registers.Target}}</span></div>
                            <div class="sub-caption">выполнение<br>госзадания</div>
                        </div>
                    </div>
                    <div class="parameters">
                        <div class="param-header">
                            <div class="header-text">Социальные группы</div>
                            <div class="percent-123" data-type="Registers"><span class="numbers selected">123</span> I <span class="percents">%</span></div>
                        </div>
                        <div class="row" data-type="sg-0"><div class="color-mark pensioner">&nbsp;</div><div class="parameter-name">пенсионеры</div><div class="parameter-value">{{Registers.pensioner}}</div></div>
                        <div class="row" data-type="sg-1"><div class="color-mark employee">&nbsp;</div><div class="parameter-name">служащие</div><div class="parameter-value">{{Registers.employee}}</div></div>
                        <div class="row" data-type="sg-2"><div class="color-mark students">&nbsp;</div><div class="parameter-name">студенты</div><div class="parameter-value">{{Registers.students}}</div></div>
                        <div class="row" data-type="sg-3"><div class="color-mark schools">&nbsp;</div><div class="parameter-name">школьники</div><div class="parameter-value">{{Registers.schools}}</div></div>
                        <div class="row" data-type="sg-4"><div class="color-mark under-school">&nbsp;</div><div class="parameter-name">дошкольники</div><div class="parameter-value">{{Registers.under_school}}</div></div>
                        <div class="row" data-type="sg-5"><div class="color-mark rdch">&nbsp;</div><div class="parameter-name">рдч</div><div class="parameter-value">{{Registers.rdch}}</div></div>
                        <div class="row" data-type="sg-6"><div class="color-mark others">&nbsp;</div><div class="parameter-name">прочие</div><div class="parameter-value">{{Registers.others}}</div></div>
                        <div class="row"><div class="color-mark all-register">&nbsp;</div><div class="parameter-name">всего</div><div class="parameter-value">{{Registers.SumPerc}}</div></div>
                    </div>
                </div>
                <div class="pie-registers rotor">
                    <div class="gender-age-chart-wrap rotor-flip curr_side">
                        <div  class="pie gender-age-chart"></div>
                        <div class="parameters">
                            <div class="param-header">
                                <div class="header-text double-chart">Половозрастная структура</div>
                                <div class="percent-123" data-type="GenderAge"><span class="numbers selected">123</span> I <span class="percents">%</span></div>
                            </div>
                            <table class="gender-age-table">
                                <tbody>
                                    <tr class="head"><td class="no-border"></td><td>Женщины</td><td>Мужчины</td><td>Всего</td></tr>
                                    <tr>
                                        <td>30+</td>
                                        <td class="second" data-type="ga-0"><div class="color-mark women-30">&nbsp;</div><span>{{GenderAge.women_30}}</span></td>
                                        <td class="second" data-type="ga-3"><div class="color-mark men-30">&nbsp;</div><span>{{GenderAge.men_30}}</span></td>
                                        <td>{{GenderAge._30}}</td>
                                    </tr>
                                    <tr>
                                        <td>14-30</td>
                                        <td class="second" data-type="ga-1"><div class="color-mark women-14-30">&nbsp;</div><span>{{GenderAge.women_14_30}}</span></td>
                                        <td class="second" data-type="ga-4"><div class="color-mark men-14-30">&nbsp;</div><span>{{GenderAge.men_14_30}}</span></td>
                                        <td>{{GenderAge._14_30}}</td>
                                    </tr>
                                    <tr>
                                        <td>0-14</td>
                                        <td class="second" data-type="ga-2"><div class="color-mark women-14">&nbsp;</div><span>{{GenderAge.women_14}}</span></td>
                                        <td class="second" data-type="ga-5"><div class="color-mark men-14">&nbsp;</div><span>{{GenderAge.men_14}}</span></td>
                                        <td>{{GenderAge._14}}</td>
                                    </tr>
                                    <tr>
                                        <td>Всего</td>
                                        <td class="second"><div class="color-mark women-all">&nbsp;</div><span>{{GenderAge.women}}</span></td>
                                        <td class="second"><div class="color-mark men-all">&nbsp;</div><span>{{GenderAge.men}}</span></td>
                                        <td class="no-border"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="gender-age-chart-2-wrap rotor-flip next next_side">
                        <div  class="pie gender-age-chart-2"></div>
                        <div class="parameters">
                            <div class="param-header">
                                <div class="header-text double-chart">Половозрастная структура</div>
                                <div class="percent-123" data-type="GenderAge"><span class="numbers selected">123</span> I <span class="percents">%</span></div>
                            </div>
                            <table class="gender-age-table">
                                <tbody>
                                    <tr class="head"><td class="no-border"></td><td>0 - 14</td><td>14 - 30</td><td>30+</td><td>Всего</td></tr>
                                    <tr>
                                        <td>Женщины</td>
                                        <td class="second" data-type="ag-4"><div class="color-mark women-14">&nbsp;</div><span>{{GenderAge.women_14}}</span></span></td>
                                        <td class="second" data-type="ag-2"><div class="color-mark women-14-30">&nbsp;</div><span>{{GenderAge.women_14_30}}</span></td>
                                        <td class="second" data-type="ag-0"><div class="color-mark women-30">&nbsp;</div><span>{{GenderAge.women_30}}</span></td>
                                        <td>{{GenderAge.women}}</td>
                                    </tr>
                                    <tr>
                                        <td>Мужчины</td>
                                        <td class="second" data-type="ag-5"><div class="color-mark men-14">&nbsp;</div><span>{{GenderAge.men_14}}</span></td>
                                        <td class="second" data-type="ag-3"><div class="color-mark men-14-30">&nbsp;</div><span>{{GenderAge.men_14_30}}</span></td>
                                        <td class="second" data-type="ag-1"><div class="color-mark men-30">&nbsp;</div><span>{{GenderAge.men_30}}</span></td>
                                        <td>{{GenderAge.men}}</td>
                                    </tr>
                                    <tr>
                                        <td>Всего</td>
                                        <td class="second"><div class="color-mark all-14">&nbsp;</div><span>{{GenderAge._14}}</span></td>
                                        <td class="second"><div class="color-mark all-14-30">&nbsp;</div><span>{{GenderAge._14_30}}</span></td>
                                        <td class="second"><div class="color-mark all-30">&nbsp;</div><span>{{GenderAge._30}}</span></td>
                                        <td class="no-border"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="pie-book-giving-wrap">
            <div class="chart-header">Книговыдача</div>
            <div class="pie-book-giving">
                <div class="pie book-giving-chart"></div>
                <div class="chart-subscript">
                    <div class="sub-icon param-icon"><span>{{BookGiving.Sum}}</span><span>{{Divider}}</span><span>{{BookGiving.Target}}</span></div>
                    <div class="sub-caption">выполнение<br>госзадания</div>
                </div>
            </div>
            <div class="parameters">
                <div class="param-header">
                    <div class="header-text">Категории</div>
                    <div class="percent-123" data-type="BookGiving"><span class="numbers selected">123</span> I <span class="percents">%</span></div>
                </div> 
                <div class="row" data-type="bg-0"><div class="color-mark new-reg">&nbsp;</div><div class="parameter-name">книги и брошюры</div><div class="parameter-value">{{BookGiving.Books}}</div></div>
                <div class="row" data-type="bg-1"><div class="color-mark stationary">&nbsp;</div><div class="parameter-name">документы и копии</div><div class="parameter-value">{{BookGiving.DocsCopies}}</div></div>
                <div class="row" data-type="bg-2"><div class="color-mark events">&nbsp;</div><div class="parameter-name">справки и консультации</div><div class="parameter-value">{{BookGiving.Consults}}</div></div>
                <div class="row" data-type="bg-3"><div class="color-mark clubs">&nbsp;</div><div class="parameter-name">прочее</div><div class="parameter-value">{{BookGiving.Other}}</div></div>
            </div>
        </div>
        
    </div>
    <div class="daily-chart">
        <div class="chart-header"></div>
        <div class="chart-wrap"></div>
    </div>
</div>`,
    // Controller:{
    //     Target: '.lib-list',
    //     ListElement: `<option value="{{ID}}">{{Name}}</option>`
    // },
    Proto:{
        Visitors: {
            New: 10,
            Stationary: 20,
            Events: 30,
            Clubs: 40,
            Target: 300,
            Sum: function() { let s = 0; for (let k in this) if (this.hasOwnProperty(k) && k !== 'Sum' && k !== 'Target') s += this[k]; return s; }
        },
        Registers: {
            pensioner: 5,
            employee: 10,
            students: 15,
            schools: 20,
            under_school: 15,
            rdch: 20,
            others: 15,
            Target: 600,
            Sum: function() { let s = 0; for (let k in this) if (this.hasOwnProperty(k) && k !== 'Sum' && k !== 'Target') s += this[k]; return s; }
        },
        GenderAge: {
            women_30: 15,
            women_14_30: 25,
            women_14: 35,
            men_30: 28,
            men_14_30: 41,
            men_14: 23,
            Sum: function() { let s = 0; for (let k in this) if (this.hasOwnProperty(k)) k !== 'Sum' ? s += this[k] : s += 0; return s; }
        },
        BookGiving: {
            Books: 11,
            DocsCopies: 22,
            Consults: 33,
            Other: 44,
            Target: 300,
            Sum: function() { let s = 0; for (let k in this) if (this.hasOwnProperty(k) && k !== 'Sum' && k !== 'Target') s += this[k]; return s; }
        },
        Percent: {
            Visitors: false,
            Registers: false,
            GenderAge: false,
            BookGiving: false
        }
    },
    PropFormat: {
        'Visitors.New': (x, p) => p.Percent.Visitors ? (x === 0 ? 0 : Math.round(x / p.Visitors.Sum() * 100)) + ' %' : x, // функция для посещаемости
        'Visitors.Stationary': (x, p) => p.Percent.Visitors ? (x === 0 ? 0 : Math.round(x / p.Visitors.Sum() * 100)) + ' %' : x,
        'Visitors.Events': (x, p) => p.Percent.Visitors ? (x === 0 ? 0 : Math.round(x / p.Visitors.Sum() * 100)) + ' %' : x,
        'Visitors.Clubs': (x, p) => p.Percent.Visitors ? (x === 0 ? 0 : Math.round(x / p.Visitors.Sum() * 100)) + ' %' : x,
        'Visitors.Sum': (x, p) => p.Visitors.Sum(),

        'Registers.pensioner': (x, p) => p.Percent.Registers ? (x === 0 ? 0 : Math.round(x / p.Registers.Sum() * 100))+ ' %' : x, // функция для Регистрации
        'Registers.employee': (x, p) => p.Percent.Registers ? (x === 0 ? 0 : Math.round(x / p.Registers.Sum() * 100))+ ' %' : x,
        'Registers.students': (x, p) => p.Percent.Registers ? (x === 0 ? 0 : Math.round(x / p.Registers.Sum() * 100))+ ' %' : x,
        'Registers.schools': (x, p) => p.Percent.Registers ? (x === 0 ? 0 : Math.round(x / p.Registers.Sum() * 100))+ ' %' : x,
        'Registers.under_school': (x, p) => p.Percent.Registers ? (x === 0 ? 0 : Math.round(x / p.Registers.Sum() * 100))+ ' %' : x,
        'Registers.rdch': (x, p) => p.Percent.Registers ? (x === 0 ? 0 :  Math.round(x / p.Registers.Sum() * 100)) + ' %' : x,
        'Registers.others': (x, p) => p.Percent.Registers ? (x === 0 ? 0 : Math.round(x / p.Registers.Sum() * 100))+ ' %' : x,
        'Registers.Sum': (x, p) => p.Registers.Sum(),
        'Registers.SumPerc': (x, p) => p.Percent.Registers ? '100 %' : p.Registers.Sum(),

        'GenderAge.women_14_30': (x, p) => p.Percent.GenderAge ? (x === 0 ? 0 : Math.round(x / p.GenderAge.Sum() * 100)) + ' %' : x, // функция для половозрастной структуры
        'GenderAge.women_14': (x, p) => p.Percent.GenderAge ? (x === 0 ? 0 : Math.round(x / p.GenderAge.Sum() * 100)) + ' %' : x,
        'GenderAge.men_30': (x, p) => p.Percent.GenderAge ? (x === 0 ? 0 : Math.round(x / p.GenderAge.Sum() * 100)) + ' %' : x,
        'GenderAge.men_14_30': (x, p) => p.Percent.GenderAge ? (x === 0 ? 0 : Math.round(x / p.GenderAge.Sum() * 100)) + ' %' : x,
        'GenderAge.men_14': (x, p) => p.Percent.GenderAge ? (x === 0 ? 0 : Math.round(x / p.GenderAge.Sum() * 100)) + ' %' : x,
        'GenderAge.women_30': (x, p) => p.Percent.GenderAge ? (x === 0 ? 0 : Math.round(x / p.GenderAge.Sum() * 100)) + ' %' : x,
        'GenderAge._14': (x, p, n) => (n = (p.GenderAge.men_14 + p.GenderAge.women_14), p.Percent.GenderAge ? ( n === 0 ? 0 :Math.round(n / p.GenderAge.Sum() * 100)) + ' %' : n),
        'GenderAge._14_30': (x, p, n) => (n = (p.GenderAge.men_14_30 + p.GenderAge.women_14_30), p.Percent.GenderAge ? ( n === 0 ? 0 :Math.round(n / p.GenderAge.Sum() * 100)) + ' %' : n),
        'GenderAge._30': (x, p, n) => (n = (p.GenderAge.men_30 + p.GenderAge.women_30), p.Percent.GenderAge ? ( n === 0 ? 0 :Math.round(n / p.GenderAge.Sum() * 100)) + ' %' : n),
        'GenderAge.men': (x, p, n) => (n = (p.GenderAge.men_14 + p.GenderAge.men_14_30 + p.GenderAge.men_30), p.Percent.GenderAge ? ( n === 0 ? 0 :Math.round(n / p.GenderAge.Sum() * 100)) + ' %' : n),
        'GenderAge.women': (x, p, n) => (n = (p.GenderAge.women_14 + p.GenderAge.women_14_30 + p.GenderAge.women_30), p.Percent.GenderAge ? ( n === 0 ? 0 :Math.round(n / p.GenderAge.Sum() * 100)) + ' %' : n),

        'BookGiving.Books': (x, p) => p.Percent.BookGiving ? (x === 0 ? 0 : Math.round(x / p.BookGiving.Sum() * 100))+ ' %' : x, // функция для книговыдачи
        'BookGiving.DocsCopies': (x, p) => p.Percent.BookGiving ? (x === 0 ? 0 : Math.round(x / p.BookGiving.Sum() * 100))+ ' %' : x,
        'BookGiving.Consults': (x, p) => p.Percent.BookGiving ? (x === 0 ? 0 :  Math.round(x / p.BookGiving.Sum() * 100)) + ' %' : x,
        'BookGiving.Other': (x, p) => p.Percent.BookGiving ? (x === 0 ? 0 : Math.round(x / p.BookGiving.Sum() * 100))+ ' %' : x,
        'BookGiving.Sum': (x, p) => p.BookGiving.Sum(),
        'Divider': (x, p) => (p.BookGiving.Target > 9999 || p.Registers.Target > 9999 || p.Visitors.Target > 9999) ? "<div style='border-top: 2px solid black;'></div>" : '/'
    },
    GetSet: {
        get CurrentLibraries(){
            return this.Proto.Data.LibraryIDListSelected;
        },
    },
    Props: function () {
        let p = this.Proto.Data;
        this.GetChartOptions = function (target, series) {
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
        this.ChartVisitors = new Lure.Chart(this.GetChartOptions(
            this.Select('.pie.visitors-chart'),
            [{
                Labels: ['вновь записавшиеся', 'стационар', 'мероприятия', 'клубы'],
                Data: [p.Visitors.New, p.Visitors.Stationary, p.Visitors.Events, p.Visitors.Clubs],
                Colors: ['#416E75', '#79CDDB', '#708284', '#51A2A8'],
                Width: 32
            }, {
                Labels: ["Посетили", "Осталось"],
                Data: [p.Visitors.Sum(), p.Visitors.Target - p.Visitors.Sum()],
                Colors: ["#5DA85D", "#4A8453"],
                Width: 22,
                Margin: 3
            }]
        ));
        this.ChartVisitors.Load = new Lure.Load({Target: this.ChartVisitors.Target});

        // Книговыдача
        this.ChartBookGiving = new Lure.Chart(this.GetChartOptions(
            this.Select('.pie.book-giving-chart'),
            [{
                Labels: ['книги и брошюры', 'документы и копии', 'справки и консультации', 'прочее'],
                Data: [p.BookGiving.Books, p.BookGiving.DocsCopies, p.BookGiving.Consults, p.BookGiving.Other],
                Colors: ['#416E75', '#79CDDB', '#708284', '#51A2A8'],
                Width: 32
            }, {
                Labels: ['выдано', 'осталось'],
                Data: [p.BookGiving.Sum(), p.BookGiving.Target - p.BookGiving.Sum()],
                Colors:  ["#5DA85D", "#4A8453"],
                Width: 22,
                Margin: 3
            }]
        ));
        this.ChartBookGiving.Load = new Lure.Load({Target: this.ChartBookGiving.Target});

        // Социальные группы
        this.ChartSocialGroups = new Lure.Chart(this.GetChartOptions(
            this.Select('.pie.social-groups-chart'),
            [{
                Labels: ['пенсионеры', 'служащие', 'студенты', 'школьники', 'дошкольники', 'рдч', 'прочее'],
                Data: [p.Registers.pensioner, p.Registers.employee, p.Registers.students, p.Registers.schools, p.Registers.under_school, p.Registers.rdch, p.Registers.others],
                Colors: ['#51A1A7', '#416E75', '#79CCDA', '#20A4A4', '#4B7798', '#40667F', '#345466'],
                Width: 32
            }, {
                Labels: ['выдано', 'осталось'],
                Data: [p.Registers.Sum(), p.Registers.Target - p.Registers.Sum()],
                Colors: ["#5DA85D", "#4A8453"],
                Width: 22,
                Margin: 3
            }]
        ));
        this.ChartSocialGroups.Load = new Lure.Load({Target: this.ChartSocialGroups.Target});

        // Половозрастная структура 1
        this.ChartGenderAge = new Lure.Chart(this.GetChartOptions(
            this.Select('.pie.gender-age-chart'),
            [{
                Labels: ['женщины 30+', 'женщины 14-30', 'женщины 0-14', 'мужчины 30+', 'мужчины 14-30', 'мужчины 0-14'],
                Data: [p.GenderAge.women_30, p.GenderAge.women_14_30, p.GenderAge.women_14, p.GenderAge.men_30, p.GenderAge.men_14_30, p.GenderAge.men_14],
                Colors: ['#993F73', '#7F3663', '#662C53', '#345466', '#40667F', '#4B7799'],
                Width: 32
            }, {
                Labels: ['женщины', 'мужчины'],
                Data: [p.GenderAge.women_30 + p.GenderAge.women_14_30 + p.GenderAge.women_14, p.GenderAge.men_30 + p.GenderAge.men_14_30 + p.GenderAge.men_14],
                Colors: ['#D7569C', '#6CA9E0'],
                Type: 'pie',
                Margin: 3
            }]
        ));
        this.ChartGenderAge.Load = new Lure.Load({Target: this.ChartGenderAge.Target});

        // Половозрастная структура 2
        this.ChartAgeGender = new Lure.Chart(this.GetChartOptions(
            this.Select('.pie.gender-age-chart-2'),
            [{
                Labels: ['женщины 30+', 'мужчины 30+', 'женщины 14-30', 'мужчины 14-30', 'женщины 0-14', 'мужчины 0-14'],
                Data: [p.GenderAge.women_30, p.GenderAge.men_30, p.GenderAge.women_14_30, p.GenderAge.men_14_30, p.GenderAge.women_14, p.GenderAge.men_14],
                Colors: ['#993F73', '#345466', '#7F3663', '#40667F', '#662C53', '#4B7799'],
                Width: 32
            }, {
                Labels: ['Старше 30', 'От 14 до 30', 'Младше 14'],
                Data: [p.GenderAge.women_30 + p.GenderAge.men_30, p.GenderAge.women_14_30 + p.GenderAge.men_14_30, p.GenderAge.women_14 + p.GenderAge.men_14],
                Colors: ['#74B87A', '#589255', '#3C5F42'],
                Type: 'pie',
                Margin: 3
            }]
        ));
        this.ChartAgeGender.Load = new Lure.Load({Target: this.ChartAgeGender.Target});

        ////////////////////// ANOTHER PROPS \\\\\\\\\\\\\\\\\\\
        this.selectedPeriod = [ Lure.Date().DayStart, Lure.Date().DayEnd ];
        this.SelectLibrary = this.Select('.lib-list');

        this.DailyChart = new Lure.Chart({
            Target: this.Select('.daily-chart .chart-wrap'),
            Type: 'Line',
            Name: 'Сводный график',
            Legend: {Position: 'right'},
            AxisX: {Data: (new Array(12)).Select((a, b) => Lure.Date(new Date(2018, b)).Format('MMMM'))},
            Series: [{
                Name: 'Посещаемость',
                Color: '#65599E',
                Data: (new Array(12)).Select((a, b) => b % 5),
            }, {
                Name: 'Запись',
                Color: '#53AA62',
                Data: (new Array(12)).Select((a, b) => b % 7),
            }, {
                Name: 'Книговыдача',
                Color: '#9F4944',
                Data: (new Array(12)).Select((a, b) => b % 9),
            }],
            Tooltip: {
                Format: Tip =>
                    `<div class="tip">
                        <div class="tip-bg"></div>
                        <div class="tip-value">
                            <div class="l-row">
                                <div class="tip-icon" style="background-color: ${Tip.Episode.Color}"></div>
                                <div class="tip-label">${Tip.ValueX}</div>
                            </div>
                            <div class="l-row">${Tip.Episode.Name}: ${Tip.Value}</div>
                        </div>
                    </div>`
            }
        });
        this.DailyChart.Load = new Lure.Load({Target: this.DailyChart.Target});
        // this.DailyChart.Redraw();
    },
    Show: function () {
        this.Refresh();
    },
    Refresh: function() {
        if (this.isVisible)
            this.ChartsUpdate();
    },
    Methods: function() {
        this.selectPeriod = function (period, e) {
            this.Select('.per.selected').classList.remove('selected');
            e.classList.add('selected');

            let date_start = Lure.Date();
            let date_end = Lure.Date();
            if ((typeof period) === 'string') {
                this.DatePicker.Reset();
                switch (period) {
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
                }
                this.selectedPeriod = [date_start, date_end];
                // Lure.System.Notice(date_start.Format('D MMMM YYYY', true) + ' - ' + date_end.Format('D MMMM YYYY', true));
            }
            else {
                date_start = Lure.Date(period[0]).DayStart;
                date_end = Lure.Date(period[1]).DayEnd;
                this.selectedPeriod = [date_start, date_end];
            }
            //console.log(period, this.selectedPeriod);
            this.ChartsUpdate();
        };
        this.ChangePercent123 = function (elem) {
            let type = elem.dataset['type'];
            this.Proto.Data.Percent[type] = !this.Proto.Data.Percent[type];
            this.Proto.Refresh();
            if (type === 'GenderAge')
                for (let e of this.SelectAll('.percent-123[data-type="' + type + '"]')) {
                    e.children[0].classList.toggle('selected');
                    e.children[1].classList.toggle('selected');
                }
            else {
                elem.children[0].classList.toggle('selected');
                elem.children[1].classList.toggle('selected');
            }
            // console.log(elem, type);
        };
        this.ChartsUpdate = function () {
            let plus_or_zero = (x = []) => {
                for (let k in x)
                    if (x.hasOwnProperty(k) && x[k] < 0)
                        x[k] = 0;
                return x;
            };

            let date_start = new Date(this.selectedPeriod[0]);
            let date_end = new Date(this.selectedPeriod[1]);
            // console.log('DATES: ', date_start, date_end);
            let lib = this.CurrentLibraries;
            // Посещаемость
            this.ChartVisitors.Load.Show();
            api.Dash_Visitation_Get(lib, date_start, date_end)
                .then(
                    r => {
                        r = plus_or_zero(r);
                        Object.assign(this.Proto.Data.Visitors, {
                            New: r.Registered,
                            Stationary: r.Stationary,
                            Events: r.Event,
                            Clubs: r.Club,
                            Target: r.CountPlan
                        });
                        this.Proto.Refresh();
                        let p = this.Proto.Data.Visitors;
                        this.ChartVisitors.Options.Series[0].Data = [p.New, p.Stationary, p.Events, p.Clubs];
                        this.ChartVisitors.Options.Series[1].Data = plus_or_zero([p.Sum(), p.Target - p.Sum()]);
                        this.ChartVisitors.Load.Hide();
                        this.ChartVisitors.Refresh();
                    }).catch(console.error);
            // Записавшиеся Социальные группы
            this.ChartSocialGroups.Load.Show();
            api.Dash_VisitRegistered_Get(lib, date_start, date_end)
                .then(
                    r => {
                        r = plus_or_zero(r);
                        Object.assign(this.Proto.Data.Registers, {
                            pensioner: r.Retired,
                            employee: r.Servant,
                            students: r.Student,
                            schools: r.Schooler,
                            under_school: r.Preschooler,
                            rdch: r.RDC,
                            others: r.Other,
                            Target: r.CountPlan
                        });
                        this.Proto.Refresh();
                        let p = this.Proto.Data.Registers;
                        this.ChartSocialGroups.Options.Series[0].Data = [p.pensioner, p.employee, p.students, p.schools, p.under_school, p.rdch, p.others];
                        this.ChartSocialGroups.Options.Series[1].Data = plus_or_zero([p.Sum(), p.Target - p.Sum()]);
                        this.ChartSocialGroups.Load.Hide();
                        this.ChartSocialGroups.Refresh();
                    }).catch(console.error);
            // Записавшиеся Половозрастная структура
            this.ChartGenderAge.Load.Show();
            this.ChartAgeGender.Load.Show();
            api.Dash_VisitGengerAge_Get(lib, date_start, date_end)
                .then(
                    r => {
                        r = plus_or_zero(r);
                        Object.assign(this.Proto.Data.GenderAge, {
                            women_30: r.Female_Over30,
                            women_14_30: r.Female_30,
                            women_14: r.Female_14,
                            men_30: r.Male_Over30,
                            men_14_30: r.Male_30,
                            men_14: r.Male_14
                        });
                        this.Proto.Refresh();
                        let p = this.Proto.Data.GenderAge;
                        this.ChartGenderAge.Options.Series[0].Data = [p.women_30, p.women_14_30, p.women_14, p.men_30, p.men_14_30, p.men_14];
                        this.ChartGenderAge.Options.Series[1].Data = [p.women_30 + p.women_14_30 + p.women_14, p.men_30 + p.men_14_30 + p.men_14];
                        this.ChartAgeGender.Options.Series[0].Data = [p.women_30, p.men_30, p.women_14_30, p.men_14_30, p.women_14, p.men_14];
                        this.ChartAgeGender.Options.Series[1].Data = [p.women_30 + p.men_30, p.women_14_30 + p.men_14_30, p.women_14 + p.men_14];
                        this.ChartGenderAge.Load.Hide();
                        this.ChartAgeGender.Load.Hide();
                        this.ChartGenderAge.Refresh();
                        this.ChartAgeGender.Refresh();
                    }).catch(console.error);
            // Книговыдача
            this.ChartBookGiving.Load.Show();
            api.Dash_GivingBook_Get(lib, date_start, date_end)
                .then(
                    r => {
                        r = plus_or_zero(r);
                        Object.assign(this.Proto.Data.BookGiving, {
                            Books: r.GivingBook,
                            DocsCopies: r.GivingDoc,
                            Consults: r.GivingConsult,
                            Other: r.GivingOther,
                            Target: r.CountPlan
                        });
                        this.Proto.Refresh();
                        let p = this.Proto.Data.BookGiving;
                        this.ChartBookGiving.Options.Series[0].Data = [p.Books, p.DocsCopies, p.Consults, p.Other];
                        this.ChartBookGiving.Options.Series[1].Data = plus_or_zero([p.Sum(), p.Target - p.Sum()]);
                        this.ChartBookGiving.Load.Hide();
                        this.ChartBookGiving.Refresh();
                    }).catch(console.error);
            // Сводный график
            let date_diff = Math.floor((date_end.getTime() - date_start.getTime()) / 1000);
            if (date_diff < 90000)
                this.DailyChart.Target.classList.add('none');
            else {
                this.DailyChart.Target.classList.remove('none');
                this.DailyChart.Load.Show();
                api.Dash_SummaryGraph_Get(lib, Lure.Date(date_start), Lure.Date(date_end))
                    .then(
                        r => {
                            let labels;
                            if (date_diff / 86400 < 32)
                                labels = r.map(a => Lure.Date(a.Date).Format('D MMMM', true));
                            else
                                labels = r.map(a => Lure.Date(a.Date).Format('MMMM YYYY', false));
                            this.DailyChart.Options.Series[0].Data = r.map(a => a.Visit);
                            this.DailyChart.Options.Series[1].Data = r.map(a => a.Registration);
                            this.DailyChart.Options.Series[2].Data = r.map(a => a.BookGiving);

                            this.DailyChart.Options.AxisX.Data = labels;
                            if (!this.DailyChart.Options.Graph)
                                this.DailyChart.Redraw();

                            this.DailyChart.Options.Graph[0].AxisX.Data = labels;
                            this.DailyChart.Options.Graph[1].AxisX.Data = labels;
                            this.DailyChart.Options.Graph[2].AxisX.Data = labels;
                            this.DailyChart.Load.Hide();
                            this.DailyChart.Redraw();
                        }).catch(console.error);
            }
        };
    },
    AfterBuild: function() {
        new LibraryTree(this, this.Select('.library-tree-control'));
        this.Proto.Data.LibraryIDListSelected = [Lure.User.Cache.LibraryList.Last().ID];
        let self = this;
        this.DatePicker = new Lure.PeriodPicker({
            Target: '.calendar-period .dates',
            OnConfirm: function () {
                self.selectPeriod(this.Date, this.Target.parentElement);
            }
        });
        this.DatePicker.Reset();

        let curr = this.Select('.curr_side');
        let next = this.Select('.next_side');
        this.AddEventListener('click', '.double-chart', () => {
            curr.classList.toggle('flipped');
            next.classList.toggle('next');
        });
        this.AddEventListener('click', '.periods .per', (e) => this.selectPeriod(e.currentTarget.classList[1], e.currentTarget));
        this.AddEventListener('click', '.percent-123', (e) => this.ChangePercent123(e.currentTarget));
        this.AddEventListener('click', '.gender-age-chart-2-wrap td, .gender-age-chart-wrap td, .pie-registers-wrap .row, .pie-book-giving-wrap .row, .pie-visitors-wrap .row', (e) => {
            if (e.currentTarget.dataset['type']) {
                let data = e.currentTarget.dataset['type'].split('-');
                data[1] = parseInt(data[1]);
                e.currentTarget.classList.toggle('series-hide');
                switch (data[0]) {
                    case 'v':  this.ChartVisitors.SerieSwitch(0, data[1]); break;
                    case 'bg': this.ChartBookGiving.SerieSwitch(0, data[1]); break;
                    case 'sg': this.ChartSocialGroups.SerieSwitch(0, data[1]); break;
                    case 'ga': this.ChartGenderAge.SerieSwitch(0, data[1]); break;
                    case 'ag': this.ChartAgeGender.SerieSwitch(0, data[1]); break;
                }
            }
        });
        //this.SelectLibrary.onchange = () => this.ChartsUpdate();
    }
});
// window.Dash.DashMain = DashMain;
// module.exports = Dash;
