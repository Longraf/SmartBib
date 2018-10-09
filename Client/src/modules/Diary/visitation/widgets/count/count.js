const HistoryMaster = require("../../../../_common/history-master/history-master");
const Static = require("../../../../_common/static");

/**
 *
 * @class WidgetVisitCount
 */
const WidgetVisitCount = new Lure.Content({
    Parent: Diary.Visitation,
    Name: 'WidgetVisitCount',
    Target: '.widget-row',
    Content: `<div draggable="true" class="widget draggable diary-widget visit-count-widget {{DayType}}" data-tutor="Виджет учета посещений">
                <div class="widget-head l-row">
                  <div class="widget-title l-row">
                    <div class="widget-icon icon-visitor-new"></div>  
                    <div class="widget-caption">УЧЕТ ПОСЕТИТЕЛЕЙ</div> 
                  </div> 
                  <div class="widget-controls l-row l-flexa-center">
                    <div class="widget-control widget-control-move" title="Переместить"></div>
                    <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                  </div>  
                </div>
                <div class="widget-content l-col">
                    <div class="visit-chart"></div>
                    <div class="visit-plan" data-tutor="Кликните «плюс» для учета посещения, «минус» - для отмены учета посещения">
                        <div class="value">{{Count}}/{{CountPlan}}</div>
                        <div class="controls">
                            <button class="control l-pointer control-minus"></button>
                            <button class="control l-pointer control-plus"></button>
                        </div>
                    </div>
                    
                    <div class="last-visit" data-tutor="Учет посещений за прошлый день. Данные можно изменять до 14.00. Кликните «плюс» для учета посещения, «минус» - для отмены учета посещения">
                        <div class="casual">Посетителей {{DatePrev}}</div>
                        <div class="value-inline-changer">
                            <button class="l-pointer control-inline control-inline-minus">-</button>
                            <div class="value-last value-inline">{{CountPrev}}</div>
                            <button class="l-pointer control-inline control-inline-plus">+</button>
                        </div>
                    </div>
                </div>
              </div>`,
    Load:'',
    State: {
        Count: 0,
        CountPrev: 0,
        CountPlan: 0,
        DatePrev: Lure.Date().AddDays(-1).Date,

        //isFavorite: false,
    },
    PropFormat:{
        DayType: ()=>{
            return !Diary.Proto.Data.DateSelected || Lure.Date(Diary.Proto.Data.DateSelected).isToday ? '':' previous';
        },
        DatePrev: (d)=>Lure.Date(d).Format('DD MMMM YYYY', true),
        c1: (c, p)=>Global.GetDigit(p.Count, 1),
        c2: (c, p)=>Global.GetDigit(p.Count, 2),
        c3: (c, p)=>Global.GetDigit(p.Count, 3),
        c4: (c, p)=>Global.GetDigit(p.Count, 4),
    },
    Refresh: function () {
        this.Load.Show();
        api.Diary_Visitation_CountGet(Diary.Proto.Data.DateSelected, Diary.Proto.Data.Library.ID, {
            Then: (x)=>{
                this.Proto.Data.Count = x.Count;
                this.Proto.Data.CountPrev = x.CountPrev;
                this.Proto.Data.CountPlan = x.CountPlan;
                this.Proto.Data.DatePrev = Lure.Date(x.DatePrev).Date;

                //let RingCount = this.Proto.Data.Count < this.Proto.Data.CountPlan ? this.Proto.Data.Count: this.Proto.Data.CountPlan;
                this.Chart.Options.Series[0].Data[0] = this.Proto.Data.Count / this.Proto.Data.CountPlan || 0;
                this.Chart.Options.Series[0].Data[1] = 1-this.Chart.Options.Series[0].Data[0];

                if (this.Chart.Options.Series[0].Data[0] > 1){
                    this.Chart.Options.Series[0].Data[0] = 1;
                    this.Chart.Options.Series[0].Data[1] = 0
                }

                this.Proto.Refresh();
                this.Chart.Refresh();
            },
            Finally: ()=>{
                this.Load.Hide();
            }
        });
        this.CheckForFavor();
    },
    Props: function () {
        this.Chart = new Lure.Chart({
            Target: this.Select('.visit-chart'),
            Type: 'pie',
            Legend: {
                Visible: false
            },
            Series: [
                {
                    Labels: {
                        Data: ["ВХОД",'ВЫХОД']
                    },
                    Data: [0, 0],
                    Colors: ["#7ACDDB","#5C9BAA"],
                    Type: 'ring',
                    Width: 31,
                    AngleStart: -90,
                }
            ],
            Tooltip:{
                Visible: false,
            },
        });

        this.ButtonIncrease = this.Select('.control-plus');
        this.ButtonDecrease = this.Select('.control-minus');
        this.ButtonIncreasePrev = this.Select('.control-inline-plus');
        this.ButtonDecreasePrev = this.Select('.control-inline-minus');

        this.WidgetContent = this.Select('.widget-content');
        this.AttentionAnimationDuration = Lure.GetDurationAnimation('animation-blink', this.WidgetContent);

        this._FavoriteIcon = this.Select('.widget-control-favorite');
    },
    Methods: function () {
        this.CountIncrease = function () {
            Lure.Button.Lock(this.ButtonIncrease);
            api.Diary_Visitation_CountAdd(Diary.Proto.Data.DateSelected, Diary.Proto.Data.Library.ID, 1, {
                Then: (r)=>{
                    if (r < 1)
                    {
                        return;
                    }
                    this.Proto.SetProperty('Count', this.Proto.Data.Count+1);
                    this.Chart.Options.Series[0].Data[0] = this.Proto.Data.Count/this.Proto.Data.CountPlan || 0;
                    this.Chart.Options.Series[0].Data[1] = 1-this.Chart.Options.Series[0].Data[0];
                    if (this.Chart.Options.Series[0].Data[0] > 1){
                        this.Chart.Options.Series[0].Data[0] = 1;
                        this.Chart.Options.Series[0].Data[1] = 0
                    }
                    Widget.VisitCount.Chart.Refresh({Animation: false});
                },
                Catch: ()=>{
                    //HistoryMaster.DecreaseLastID();
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonIncrease);
                }
            });
        };
        this.CountDecrease = function () {
            if (this.Proto.Data.Count <= Widget.VisitRegister.Proto.Data.Count || this.Proto.Data.Count < 1){
                return;
            }
            Lure.Button.Lock(this.ButtonDecrease);
            //HistoryMaster.IncreaseLastID();
            api.Diary_Visitation_CountAdd(Diary.Proto.Data.DateSelected, Diary.Proto.Data.Library.ID, -1, {
                Then: (x)=>{
                    if (x < 0){
                        return;// HistoryMaster.DecreaseLastID();
                    }
                    this.Proto.SetProperty('Count', this.Proto.Data.Count-1);
                    this.Chart.Options.Series[0].Data[0] = this.Proto.Data.Count/this.Proto.Data.CountPlan || 0;
                    this.Chart.Options.Series[0].Data[1] = 1-this.Chart.Options.Series[0].Data[0];
                    if (this.Chart.Options.Series[0].Data[0] > 1){
                        this.Chart.Options.Series[0].Data[0] = 1;
                        this.Chart.Options.Series[0].Data[1] = 0
                    }
                    Widget.VisitCount.Chart.Refresh({Animation: false});
                },
                Catch: ()=>{
                    //HistoryMaster.DecreaseLastID();
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonDecrease);
                }
            });

        };
        this.CountLastIncrease = function () {
            let DateNow = new Date();
            let DateLimit = new Date(DateNow.getFullYear(), DateNow.getMonth(), DateNow.getDate(), Static.DateHoursEditingLimit);
            if (DateLimit > DateNow){
                Lure.Button.Lock(this.ButtonIncreasePrev);
                //HistoryMaster.IncreaseLastID();
                api.Diary_Visitation_CountAdd(this.Proto.Data.DatePrev, Diary.Proto.Data.Library.ID, 1, {
                    Then: (x)=>{
                        if (x < 0){
                            return;// HistoryMaster.DecreaseLastID();
                        }
                        this.Proto.SetProperty('CountPrev', this.Proto.Data.CountPrev+1);
                    },
                    Catch: ()=>{
                        //HistoryMaster.DecreaseLastID();
                    },
                    Finally: ()=>{
                        Lure.Button.Release(this.ButtonIncreasePrev);
                    }
                });
            }
            else{
                Lure.System.ShowWarn('Время изменения предыдущих данных истекло');
            }

        };
        this.CountLastDecrease = function () {
            let DateNow = new Date();
            let DateLimit = new Date(DateNow.getFullYear(), DateNow.getMonth(), DateNow.getDate(), Static.DateHoursEditingLimit);

            if (DateLimit > DateNow){
                Lure.Button.Lock(this.ButtonDecreasePrev);
                //HistoryMaster.IncreaseLastID();
                api.Diary_Visitation_CountAdd(this.Proto.Data.DatePrev, Diary.Proto.Data.Library.ID, -1, {
                    Then: (x)=>{
                        if (x < 0){
                            return;// HistoryMaster.DecreaseLastID();
                        }
                        this.Proto.SetProperty('CountPrev', this.Proto.Data.CountPrev-1);
                    },
                    Catch: ()=>{
                        //HistoryMaster.DecreaseLastID();
                    },
                    Finally: ()=>{
                        Lure.Button.Release(this.ButtonDecreasePrev);
                    }
                });
            }
            else{
                Lure.System.ShowWarn('Время изменения предыдущих данных истекло');
            }

        };

        this.CallAttention = function () {
            Lure.AsyncToggle(this, null, this.WidgetContent, ()=>{},()=>{}, 'animation-blink', 'animation-blink', this.AttentionAnimationDuration, null);
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
        };
    },
    AfterBuild: function () {
        this.ButtonIncrease.onclick     = this.CountIncrease;
        this.ButtonDecrease.onclick     = this.CountDecrease;
        this.ButtonIncreasePrev.onclick = this.CountLastIncrease;
        this.ButtonDecreasePrev.onclick = this.CountLastDecrease;


        this._FavoriteIcon.addEventListener('click', this.SwitchFavorite);
    }
});

Widget.VisitCount = WidgetVisitCount;
























