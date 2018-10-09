let CheckBoxSelector = require('../../_common/filter-selector/filter-selector.js');
let SixNK = new Lure.Content({
    Name: 'SixNK',
    Target: '',
    Type: 'dash-content',
    Parent: Dash,
    Control: {
        Target: '#nav-six-nk'
    },
    Content:
`<div class="six-nk">
    <div class="diary-bread l-row">
        <div class="li date-range">
            <div class="calendar-icon">&#128198;</div>
            <div class="dates"></div>
            <div class="dates-result">
                <select class="select-six-nk-range">
                    <option value="0">Год</option>
                    <option value="1" {{SelectedQ1}}>1 Квартал</option>
                    <option value="2" {{SelectedQ2}}>2 Квартал</option>
                    <option value="3" {{SelectedQ3}}>3 Квартал</option>
                    <option value="4" {{SelectedQ4}}>4 Квартал</option>
                </select>
            </div>
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
    <div class="part-header">
        <div class="req-tab active main">ГЛАВНАЯ</div>
        <div class="req-tab p1">МАТЕРИАЛЬНО-ТЕХНИЧЕСКАЯ БАЗА</div>
        <div class="req-tab p2">ФОРМИРОВАНИЕ ФОНДА НА ФИЗИЧЕСКИХ НОСИТЕЛЯХ</div>
        <div class="req-tab p3">ЭЛЕКТРОННЫЕ РЕСУРСЫ</div>
        <div class="req-tab p4">ПОСЕЩЕНИЯ БИБЛИОТЕКИ</div>
        <div class="req-tab p5">ИНФОРМАЦИОННОЕ ОБСЛУЖИВАНИЕ</div>
        <div class="req-tab p6">ПЕРСОНАЛ</div>
        <div class="req-tab p7">ФИНАНСЫ</div>
    </div>
    <div class="data-tables">
        
    </div>
</div>`,
    GetSet: {
        get CurrentLibraries() {
            return this.Proto.Data.LibraryIDListSelected;
        },
    },
    Proto: {
        DatesResult: ({1: '1 Квартал', 2: '2 Квартал', 3: '3 Квартал', 4: '4 Квартал', })[Math.floor(((new Date).getMonth()) / 3) + 1],
        SelectedQ1: Math.floor(((new Date).getMonth()) / 3) + 1 === 1 ? 'selected' : '',
        SelectedQ2: Math.floor(((new Date).getMonth()) / 3) + 1 === 2 ? 'selected' : '',
        SelectedQ3: Math.floor(((new Date).getMonth()) / 3) + 1 === 3 ? 'selected' : '',
        SelectedQ4: Math.floor(((new Date).getMonth()) / 3) + 1 === 4 ? 'selected' : ''
    },
    Show: function () {
        this.RefreshData();
    },
    Props: function(){
        this.ButtonGetXLS = this.Select('.button-get-xls');
        this.ButtonRefresh = this.Select('.btn-refresh');
    },
    Refresh: function () {
        if (this.isVisible)
            this.RefreshData();
    },
    Methods: function () {
/*        this.DateChanged = function (val) {
           console.log(val);
        };*/
        this.RefreshData = function () {
            // this.Proto.Data.DatesResult = ({1: '1 Квартал', 2: '2 Квартал', 3: '3 Квартал', 4: '4 Квартал', })[parseInt(this.RangeSelector.value)];
            this.SixNKMain.Proto.SetProperty('DateRange',  ({0: 'Годовая', 1: '1 Квартал', 2: '2 Квартал', 3: '3 Квартал', 4: '4 Квартал', })[parseInt(this.RangeSelector.value)]);
            this.SixNKPart4.Load.Show();
            this.SixNKPart5.Load.Show();
            api.Diary_Summary_6NK_Get(this.CurrentLibraries, (new Date).getFullYear(), this.RangeSelector.value, {
                Then: r => {
                    this.SixNKPart4.RefreshData(r[0]);
                    this.SixNKPart5.RefreshData(r[0]);
                },
                Finally: () => {
                    this.SixNKPart4.Load.Hide();
                    this.SixNKPart5.Load.Hide();
                }
            });
            this.Updated = true;
        };
        this.GetXLS = function () {
            //InputBox.Hide();
            //this.Load.Show();
            Lure.Button.Lock(this.ButtonGetXLS);
            let Dt = Lure.Date();
            api.Diary_Summary_6NK_GetXLS(this.CurrentLibraries, Dt.Year, this.RangeSelector.value, {
                Then: (Blob)=>{
                    Lure.SaveBlob(Blob, `6-НК ${Dt.Format('YYYY')}.xlsx`);
                },
                Catch: ()=>{
                    Lure.System.Error('Невозможно получить отчет');
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonGetXLS);
                    this.Load.Hide();
                },
            })
        };
    },
    AfterBuild: function () {
        new LibraryTree(this, this.Select('.library-tree-control'), {MultiSelect: true});
        // this.SixNKMain.Proto.SetProperty('DateRange',  ({0: 'Годовая', 1: '1 Квартал', 2: '2 Квартал', 3: '3 Квартал', 4: '4 Квартал', })[this.Proto.Data.DatesResult]);

        this.RangeSelector = this.Select('.select-six-nk-range');
        this.RangeSelector.onchange = () => this.RefreshData();
        this.ButtonGetXLS.addEventListener('click', this.GetXLS);
        this.ButtonRefresh.addEventListener('click', this.RefreshData);
    }
});
window.Dash.SixNK = SixNK;
require('./parts/main-part.js');
require('./parts/part1.js');
require('./parts/part2.js');
require('./parts/part3.js');
require('./parts/part4.js');
require('./parts/part5.js');
require('./parts/part6.js');
require('./parts/part7.js');
