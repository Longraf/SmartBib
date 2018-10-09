const D = require('../_common/dictionary');

/**
 * @class Meter
 */
let Meter = new Lure.Content({
    Name: 'Meter',
    Target: '.body',
    Type: 'content',
    Control: {
        Target: '#nav-meter'
    },
    Permission: {
        Roles: [D.Role.Meter]
    },
    Content: `<div class="meter content">
                <div class="diary-bread l-row">
                    <div class="li date-range">
                        <div class="calendar-icon">&#128198;</div>
                        <div class="dates">{{Date}}</div>
                    </div>
                    <div class="li l-row l-flexa-center flex-100">
                        <div>Подразделение: &nbsp;&nbsp;</div>
                        <div class="flex-100 library-tree-control strong">__</div>
                    </div>
                </div>
                
                <div class="subs meter-wrap l-row l-flex-100">
                    
                </div>
              </div>`,
    Proto: {
        LibraryNameVisual: 'Библиотека №13 имени Н.Г. Чернышевского',
        Date: Lure.Date().Format('DD MMMM YYYY', true),
        LibraryIDListSelected: []
    },
    /** @lends Meter */
    GetSet: {
        get CurrentLibraryID() {
            return this.Proto.Data.LibraryIDListSelected[0];
        },
        get CurrentSubContent(){
            return this.GetSubContentList()
                .Where(x=>x.isActive)
                .FirstOrDefault();
        },
    },
    BeforeShow: function () {
        this.ShowSubContent();
    },
    Refresh: function () {
        // this.GetSubContentList()
        //     .Where(x=>x.isActive)
        //     .FirstOrDefault()
        //     .Refresh();
        //this.MeterIncoming.Refresh();

    },
    Props: function () {
        this.Tabs = this.SelectAll('.req-tab');
    },
    Methods: function () {
        // this.SetTabFilter = function (e) {
        //     if (e.currentTarget.classList.contains('selected'))
        //         return;
        //     for (let t of this.Tabs){
        //         t.classList.remove('selected');
        //     }
        //     e.currentTarget.classList.add('selected');
        //     let MeterTypes = e.currentTarget.dataset['type'].split(',').Select(x=>parseInt(x));
        //     this.CurrentSubContent.Controller.Filter((x)=>MeterTypes.indexOf(x.TypeID)>-1 || MeterTypes.indexOf(-1)>-1);
        // }
    },
    AfterBuild: function () {
        //let SelectedDefault = [22];
        let SelectedDefault = [Lure.User.Cache.LibraryList.Select(x=>x.ID).FirstOrDefault()];
        new LibraryTree(this, this.Select('.library-tree-control'), {
            SelectedList: SelectedDefault,
            OnSelect: (Selected)=>{
                this.State.LibraryIDListSelected = Selected;
                this.Refresh();
            }
        });
        this.State.LibraryIDListSelected = SelectedDefault;



        //this.AddEventListener('click', '.meter-header .req-tab', (e)=>this.SetTabFilter(e));
    }
});
window.Meter = Meter;
module.exports = Meter;

require('./MeterIncoming/MeterIncoming');
require('./MeterEditor/MeterEditor');
require('./MeterCommonInfo/MeterCommonInfo');
