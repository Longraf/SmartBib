Widget.EventFree = new Lure.Content({
    Parent: Diary.Visitation,
    Name: 'WidgetEventFree',
    Target: '.widget-row',
    Content: `<div draggable="true" class="widget draggable diary-widget event-free-widget" data-tutor="">
                <div class="widget-head l-row">
                  <div class="widget-title l-row">
                    <div class="widget-icon icon-visitor-new"></div>  
                    <div class="widget-caption">БЕСПЛАТНЫЕ МЕРОПРИЯТИЯ</div> 
                  </div> 
                  <div class="widget-controls l-row l-flexa-center">
                    <div class="widget-control widget-control-move" title="Переместить"></div>
                    <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                  </div>  
                </div>
                <div class="widget-content">
                    <div class="caption-today l-row l-flexa-center">
                        <div class="count-caption">
                            <div class="strong">{{CountSum}}</div>
                            <div class="casual">читателей посетили {{Date}}</div>
                        </div>
                    </div>
                    <div class="event-list"></div>
                    <div class="button-plus-wrapper">
                        <div class="button-plus-cutter right"><button class="button-plus btn-switcher" disabled="disabled"></button></div>
                    </div>
                </div>
              </div>`,
    Load: '',
    Proto: {
        LibraryEventTypeID: Dictionary.LibraryEventType.EventFree,
        CountSum: 0,
        SeriesIndex: 0,
    },
    PropFormat: {
        Date: ()=>{
            if (!Diary.Proto.Data.DateSelected)
                return '';
            let D = Lure.Date(Diary.Proto.Data.DateSelected);
            return D.isToday ? 'сегодня':D.Format('DD MMMM YYYY', true)},
        Percent: (c, p)=>{
            let percent = p.Count/p.CountPlan*100;
            if (percent <= 100)
                return percent;
            return 100;
        },
    },
    Controller:{
        Target: '.event-list',
        ListElement: `<div class="event-item progress-bar line-interlinear" style="--progress-percent: {{Percent}}%;">
                                <div class="progress-caption l-row l-flex-between">
                                    <div class="casual">{{Name}}</div>
                                    <div class="value-inline-changer">
                                        <button class="l-pointer control-inline control-inline-minus" {{#data-line}}>-</button>
                                        <div class="value-last value-inline">{{Count}}/{{CountPlan}}</div>
                                        <button class="l-pointer control-inline control-inline-plus" {{#data-line}}>+</button>
                                    </div>
                                </div>
                            </div>`,
        EmptyMessage: `<div class="list-empty">мероприятий нет</div>`
    },
    Props: function(){
        this._FavoriteIcon = this.Select('.widget-control-favorite');
    },
    Methods: function () {
        this.CountIncrease = function (LineID, Control) {
            let DateNow = new Date();
            let DateLimit = new Date(DateNow.getFullYear(), DateNow.getMonth(), DateNow.getDate(), Static.DateHoursEditingLimit);
            if (DateLimit < DateNow && !Lure.Date(Diary.Proto.Data.DateSelected).isToday){
                return Lure.System.ShowWarn('Время изменения предыдущих данных истекло');
            }
            Lure.Button.Lock(Control);
            let DataItem = this.Controller.GetDataItemByLineID(LineID);
            api.Diary_Visitation_EventVisitAdd(Diary.Proto.Data.DateSelected, DataItem.Data.ID, 1, {
                Then: (res)=>{
                    if (res>0){
                        DataItem.Data.Count++;
                        this.Proto.Data.CountSum++;
                        this.Controller.Refresh(LineID);
                        this.Proto.Refresh();
                        Widget.EventSummary.SeriesUpdate(this.Proto.Data.SeriesIndex, this.Proto.Data.CountSum);
                    }
                },
                Finally: ()=>{
                    Lure.Button.Release(Control);
                }
            });

        };
        this.CountDecrease = function (LineID, Control) {
            let DateNow = new Date();
            let DateLimit = new Date(DateNow.getFullYear(), DateNow.getMonth(), DateNow.getDate(), Static.DateHoursEditingLimit);
            if (DateLimit < DateNow && !Lure.Date(Diary.Proto.Data.DateSelected).isToday){
                return Lure.System.ShowWarn('Время изменения предыдущих данных истекло');
            }
            Lure.Button.Lock(Control);
            let DataItem = this.Controller.GetDataItemByLineID(LineID);
            api.Diary_Visitation_EventVisitAdd(Diary.Proto.Data.DateSelected, DataItem.Data.ID, -1, {
                Then: (res)=>{
                    if (res>0){
                        DataItem.Data.Count--;
                        this.Proto.Data.CountSum--;
                        this.Controller.Refresh(LineID);
                        this.Proto.Refresh();
                        Widget.EventSummary.SeriesUpdate(this.Proto.Data.SeriesIndex, this.Proto.Data.CountSum);
                    }
                },
                Finally: ()=>{
                    Lure.Button.Release(Control);
                }
            });
        };
        this.SwitchFavorite = function () {
            let p;
            if (this.isFavorite){
                p = Featured.RemoveWidget(this.FullName);
            }
            else{
                p = Featured.AddWidget(this.FullName);
            }
            p.then(()=>{
                this.CheckForFavor();
            })
        };
        this.CheckForFavor = function () {
            this.isFavorite = Lure.User.WebSettings.Featured.Widgets.indexOf(this.FullName) > -1;
            if (this.isFavorite)
                this._FavoriteIcon.classList.add('active');
            else
                this._FavoriteIcon.classList.remove('active');
        }
    },
    Refresh: function () {
        this.CheckForFavor();
        this.Load.Show();
        api.Diary_Visitation_EventGet(Diary.Proto.Data.DateSelected, Diary.Proto.Data.Library.ID, this.Proto.Data.LibraryEventTypeID, -1, {
            Then: (list)=>{
                this.Controller.Refresh(list);
                let Count = 0;
                for (let i = 0; i < list.length; i++)
                    Count += list[i].Count;
                this.Proto.SetProperty('CountSum', Count);
                Widget.EventSummary.SeriesUpdate(this.Proto.Data.SeriesIndex, this.Proto.Data.CountSum);
            },
            Finally: ()=>{
                this.Load.Hide();
            }
        });
    },
    AfterBuild: function () {
        this.AddEventListener('click', '.control-inline-plus', function (e, p) {
            this.CountIncrease(p.LineID, e.currentTarget);
        });
        this.AddEventListener('click', '.control-inline-minus', function (e, p) {
            this.CountDecrease(p.LineID, e.currentTarget);
        });
        this._FavoriteIcon.addEventListener('click', this.SwitchFavorite);
    }
});