Widget.GiveOther = new Lure.Content({
    Parent: Diary.Bookware,
    Name: 'WidgetGiveOther',
    Target: '.widget-row',
    Content: `<div draggable="true" class="widget draggable diary-widget give-other-widget" style="--widget-width: {{Widget.Width}}; --widget-height: {{Widget.Height}}">
                <div class="widget-head l-row">
                  <div class="widget-title l-row">
                    <div class="widget-icon icon-visitor-new"></div>  
                    <div class="widget-caption">ПРОЧЕЕ</div> 
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
                            <div class="casual">из фондов других библиотек выдано сегодня</div>
                        </div>
                    </div>
                    <div class="give-other-list"></div>
                </div>
              </div>`,
    Load: '',
    State:{
        CountSum: 14,

        Widget:{
            Width:  2,
            Height: 2,
        }
    },
    Controller:{
        Target: '.give-other-list',
        ListElement: `<div class="event-item progress-bar line-interlinear">
                                <div class="progress-caption l-row l-flex-between">
                                    <div class="casual">{{$g.Dictionary.BookwareOtherPlaceDict[o.ID]}}</div>
                                    <div class="value-inline-changer">
                                        <button class="l-pointer control-inline control-inline-minus" {{#data-line}}>-</button>
                                        <div class="value-last value-inline">{{Count}}</div>
                                        <button class="l-pointer control-inline control-inline-plus" {{#data-line}}>+</button>
                                    </div>
                                </div>
                            </div>`,
        EmptyMessage: `<div class="list-empty">нет объектов</div>`
    },
    Refresh: function () {
        this.Load.Show();
        api.Diary_Bookware_GivingOtherGet(Diary.CurrentLibraryID, Diary.CurrentDate, -1, {
            Then: (list)=>{
                this.Controller.Refresh(list);
                let Count = 0;
                for (let i = 0; i < list.length; i++)
                {
                    this.Controller.Data[i].Count = list[i].Count;
                    Count += list[i].Count;
                }
                this.Proto.SetProperty('CountSum', Count);
            },
            Finally: ()=>{
                this.Load.Hide();
            }

        });
    },
    Props: function () {

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
            api.Diary_Bookware_GivingOtherAdd(Diary.CurrentLibraryID, Diary.CurrentDate, DataItem.Data.ID, 1, {
                Then: (res)=>{
                    if (res>0){
                        DataItem.Data.Count++;
                        this.Proto.Data.CountSum++;
                        this.Controller.Refresh(LineID);
                        this.Proto.Refresh();
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
            api.Diary_Bookware_GivingOtherAdd(Diary.CurrentLibraryID, Diary.CurrentDate, DataItem.Data.ID, -1, {
                Then: (res)=>{
                    if (res>0){
                        DataItem.Data.Count--;
                        this.Proto.Data.CountSum--;
                        this.Controller.Refresh(LineID);
                        this.Proto.Refresh();
                    }
                },
                Finally: ()=>{
                    Lure.Button.Release(Control);
                }
            });
        };
    },
    AfterBuild: function () {
        this.AddEventListener('click', '.control-inline-plus', function (e, p) {
            this.CountIncrease(p.LineID, e.currentTarget);
        });
        this.AddEventListener('click', '.control-inline-minus', function (e, p) {
            this.CountDecrease(p.LineID, e.currentTarget);
        });
    }
});





















