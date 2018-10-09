const HistorySubscription = require('../../_common/history-master/history-subscription');
const D = require('../../_common/dictionary');

new Lure.Content({
    Parent: Diary,
    Name: 'Bookware',
    Type: 'diary-content',
    Control:{
        Target: '#nav-diary-bookware',
    },
    Permission: {
        Roles: [D.Role.DairyInput]
    },
    Content: `<div class="bookware">
                <div class="widgets">
                    <div class="widget-row widget-row-1 l-row"></div>
                </div> 
              </div>`,
    Refresh: function () {
        Widget.GiveBook.Refresh();
        Widget.GiveBookProgress.Refresh();
        Widget.GiveDoc.Refresh();
        Widget.GiveRef.Refresh();
        Widget.GiveOther.Refresh();
    },

    Methods: function () {
        this.ChilrenBack = function () {
            let Subs = this.GetSubContentList();
            for (let i = 0; i < Subs.length; i++){
                Subs[i].Target.appendChild(Subs[i].Content);
            }
        };

    },
    BeforeShow: function () {
        Diary.CheckForBread();
        this.ChilrenBack();
        this.Refresh();
    },
    Show: function () {
        //Widget.GiveBookProgress.Refresh();
        this.Subscription.Subscribe();
    },
    Hide: function(){
        this.Subscription.Unsubscribe();
    },
    AfterBuild: function () {
        this.Subscription = new HistorySubscription({
            OnSubscribe: (HistList)=>{
                if (HistList.Where(h=>h.MessageType === 1).length > 0){
                    Widget.GiveBook.Refresh();
                    Widget.GiveBookProgress.Refresh();
                }
                if (HistList.Where(h=>h.MessageType === 2).length > 0){
                    Widget.GiveDoc.Refresh();
                }
                if (HistList.Where(h=>h.MessageType === 3).length > 0){
                    Widget.GiveRef.Refresh();
                }
                if (HistList.Where(h=>h.MessageType === 4).length > 0){
                    Widget.GiveOther.Refresh();
                }
            },
            Condition: (h)=>h.TypeID === D.SubscribeType.Bookware && h.LibraryID === Diary.CurrentLibraryID && h.LoginID !== Lure.User.ID
        });
    }
});


require('./widgets/give-book/give-book.js');
require('./widgets/give-book-progress/give-book-progress.js');
require('./widgets/give-doc/give-doc.js');

require('./widgets/give-consult/give-consult.js');
require('./widgets/give-other/give-other.js');


