const HistorySubscription = require('../../_common/history-master/history-subscription');
const D = require('../../_common/dictionary');


Diary.Visitation = new Lure.Content({
    Parent: Diary,
    Name: 'Visitation',
    Type: 'diary-content',
    //Visible: true,
    Control:{
        Target: '#nav-diary-visit',
    },
    Permission: {
        Roles: [D.Role.DairyInput]
    },
    Content: `<div class="visitation">

                <div class="tutor-runner" title="Помощь">?</div>
                <div class="widgets">
                    <div class="widget-row l-row"></div>
                    <!--<div class="widget-row widget-row-0 l-row"></div>-->
                    <!--<div class="widget-row widget-row-1 l-row"></div>-->
                    <!--<div class="widget-row widget-row-2 l-row"></div>-->
                    <!--<div class="widget-row widget-row-3 l-row"></div>-->
                   
                </div> 
              </div>`,
    Props: function(){
        this.SubscribeTypes = [
            D.SubscribeType.VisitRegisterAdd,
            D.SubscribeType.VisitVisitAdd,
            D.SubscribeType.VisitEventAdd
        ];


    },
    Methods: function () {

    },
    BeforeShow: function () {
        Diary.CheckForBread();
        //this.ChildrenBack();
        this.Refresh();

    },
    Show: function () {
        // Widget.VisitCount.Chart.Redraw();
        // Widget.EventSummary.Chart.Redraw();
        this.Subscription.Subscribe();
    },
    Hide: function(){
        this.Subscription.Unsubscribe();
    },
    Refresh: function () {

        Widget.Test.Refresh();

        Widget.VisitRegister.Refresh();
        Widget.VisitCount.Refresh();
        Widget.VisitAutoCount.Refresh();

        Widget.EventFree.Refresh();
        Widget.EventPaid.Refresh();
        Widget.EventSummary.Refresh();

        Widget.ClubFree.Refresh();
        Widget.ClubPaid.Refresh();
        Widget.Exhibition.Refresh();
    },
    AfterBuild: function () {
        this.Select('.tutor-runner').addEventListener('click', ()=>{
            Lure.RunTutor(this.Content);
        });

        this.Subscription = new HistorySubscription({
            OnSubscribe: (HistList)=>{
                if (HistList.Where(h=>h.TypeID === D.SubscribeType.VisitRegisterAdd).length > 0){
                    Widget.VisitRegister.Refresh();
                }
                if (HistList.Where(h=>h.TypeID === D.SubscribeType.VisitVisitAdd).length > 0){
                    Widget.VisitCount.Refresh();
                }
                let HistVisitEvent = HistList.Where(h=>h.TypeID === D.SubscribeType.VisitEventAdd);
                if (HistVisitEvent.length > 0){
                    if (HistVisitEvent.Where(h=>h.MessageType === D.LibraryEventType.EventFree).length > 0){
                        Widget.EventFree.Refresh();
                    }
                    if (HistVisitEvent.Where(h=>h.MessageType === D.LibraryEventType.EventPaid).length > 0){
                        Widget.EventPaid.Refresh();
                    }
                    if (HistVisitEvent.Where(h=>h.MessageType === D.LibraryEventType.ClubFree).length > 0){
                        Widget.ClubFree.Refresh();
                    }
                    if (HistVisitEvent.Where(h=>h.MessageType === D.LibraryEventType.ClubPaid).length > 0){
                        Widget.ClubPaid.Refresh();
                    }
                    if (HistVisitEvent.Where(h=>h.MessageType === D.LibraryEventType.Exhibition).length > 0){
                        Widget.Exhibition.Refresh();
                    }

                }
            },
            Condition: (h)=>{
                return this.SubscribeTypes.indexOf(h.TypeID) > -1 && h.LibraryID === Diary.CurrentLibraryID && h.LoginID !== Lure.User.ID
            }
        });


    }

});

require('./widgets/test/test.js');

require('./widgets/register/register.js');
require('./widgets/count/count.js');
require('./widgets/autocounter/autocounter.js');

require('./widgets/event-free/event-free.js');
require('./widgets/event-paid/event-paid.js');
require('./widgets/event-summary/event-summary.js');

require('./widgets/club-free/club-free.js');
require('./widgets/club-paid/club-paid.js');
require('./widgets/exhibition/exhibition.js');


