const D = require("../_common/dictionary");
// const DragAndDropItem = require('../_common/draganddropitem');
const DragAndDropItem = require('../_common/draganddropitem');


/**
 * @class Diary
 */
let Diary = new Lure.Content({
    Name: 'Diary',
    Target: '.body',
    Type: 'content',
    Control:{
        Target: '#nav-diary'
    },
    Permission: {
        Roles: [D.Role.DairyInput, D.Role.DairySummary]
    },

    Content: `<div class="diary content {{DayType}}">
                <div class="diary-bread l-row">
                    <div class="li diary-date l-row l-flexa-center">
                       <div>Дата вносимых данных: </div>
                       <select class="l-select select working-dates"></select>
                    </div>
                    <div class="li diary-library l-row l-flexa-center">
                        <div>Подразделение: </div>
                        <select class="l-select select lib-list"></select>
                    </div>
                </div>
              </div>`,
    Proto: {
        DateInput: (function(){let d= new Date(); return new Date(d.getFullYear(),d.getMonth(),d.getDate())})(),
        Library: {},
        DateSelected: null,
        DatePrev: null

    },
    Load:'',
    Controller:{
        Target: '.lib-list',
        ListElement: `<option value="{{ID}}">{{Name}}</option>`
    },
    PropTypes:{
        DateInput: Lure.PropTypes.Date,
    },
    PropFormat:{
        DayType: ()=>{
            return !Diary.Proto.Data.DateSelected || Lure.Date(Diary.Proto.Data.DateSelected).isToday ? '':' previous';
        },
        DateInput: (d)=>Lure.Date(d).Format('DD MMMM YYYYг.')
    },
    /**
     * @lends Diary
     */
    GetSet:{
        get CurrentLibraryID(){
            return this.Proto.Data.Library.ID;
        },
        get CurrentDate(){
            return this.Proto.Data.DateSelected;
        }
    },
    Props: function () {
        this.Bread = this.Select('.diary-bread');
        this.SelectLibrary = this.Select('.lib-list');
        this.ControllerWorkingDates = new Lure.Controller.Templator({
            Owner: this,
            Target: '.working-dates',
            Data: Lure.User.Cache.WorkingDates,
            ListElement: `<option value="{{$g.Lure.Date($this).Value}}">{{$g.Lure.Date($this).Format('DD MMMM YYYYг.')}}</option>`
        });

        //this.WidgetVisitAutoCounter = null;
        /** @namespace this.WidgetVisitAutoCounter */
        /** @namespace this.Visitation */
    },
    Methods: function () {
        this.CheckForBread = function () {
            if (this.Summary.isActive)
                this.Bread.style.display = 'none';
            else
                this.Bread.style.display = '';
        };
        this.OnDateSelect = function () {
            console.log('Diary OnDateSelect');
            this.Proto.Data.DateSelected = Lure.Date(this.ControllerWorkingDates.Content.value).Date;
            this.Proto.Data.DatePrev     = Lure.User.Cache.WorkingDates[Lure.User.Cache.WorkingDates.length-2];

            this.Refresh();
        };
        this.OnLibraryChange = function () {

            this.Proto.Data.Library = Lure.User.Cache.LibraryList.Where(x=>x.ID === parseInt(this.SelectLibrary.value)).FirstOrDefault();
            console.log('Diary OnLibraryChange', this.Proto.Data.Library.ID);
            this.Refresh();
        }
    },
    Refresh: function () {
        this.Proto.Refresh();
        this.ChildrenRefresh();
    },
    BeforeShow: function () {
        this.ShowSubContent();
        let Current = Diary.GetSubContentList().Where(x=>x.isActive).FirstOrDefault();
        if (Current)
            Current.ChildrenBack();
    },
    AfterBuild: function () {
        this.Controller.Refresh(Lure.User.Cache.LibraryList);
        this.Proto.Data.Library = Lure.User.Cache.LibraryList.Where(x=>x.ID === parseInt(this.SelectLibrary.value)).FirstOrDefault();

        this.Proto.Data.DateSelected = Lure.User.Cache.WorkingDates.Last();
        this.Proto.Data.DatePrev     = Lure.User.Cache.WorkingDates[Lure.User.Cache.WorkingDates.length-2];
        this.SelectLibrary.addEventListener('change', ()=>{
            this.OnLibraryChange();

        });
        this.ControllerWorkingDates.Refresh();
        this.ControllerWorkingDates.Content.addEventListener('change', ()=>{
            this.OnDateSelect();
        });
        /*this.Select('.diary-date .date-input').onclick = (e)=>{
            Lure.Select('.l-edit-btn-edit', e.currentTarget).click();
            //this.Select('.diary-date .date-input').onclick = void 0;
        }*/
        //this.ss = new DragAndDropItem({Target : document.querySelector('.draggable')});
        // let aaa = new DragAndDropItem({
        //     Target : document.querySelectorAll('.draggable'),
        // });
        this.ddd = new DragAndDropItem({
            Target       : document.querySelectorAll('.draggable'),
        });
    }
});
let Widget = {};
window.Diary = Diary;
window.Widget = Widget;


require('./visitation/visitation.js');

require('./bookware/bookware.js');
require('./summary/summary.js');
require('./movings/movings.js');

module.exports = Diary;