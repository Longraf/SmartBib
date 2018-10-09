const REFRESH_INTERVAL = 70000;

Widget.VisitAutoCount = new Lure.Content({
    Parent: Diary.Visitation,
    Name: 'WidgetVisitAutoCounter',
    Target: '.widget-row',
    Content: `<div draggable="true" class="widget draggable diary-widget visit-autocounter-widget" data-tutor="Виджет данных с автоматического счетчика посещений">
                <div class="widget-head l-row">
                  <div class="widget-title l-row">
                    <div class="widget-icon icon-visitor-new"></div>  
                    <div class="widget-caption">ДАННЫЕ АВТОМАТИЧЕСКОГО СЧЕТЧИКА</div> 
                  </div> 
                  <div class="widget-controls l-row l-flexa-center">
                    <div class="widget-control widget-control-move" title="Переместить"></div>
                    <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                  </div>  
                </div>
                <div class="widget-content l-col">
                    <div class="hint-warner">
                        Обращаем Ваше внимание на то, что данные с автоматического счетчика посещений могут значительно отличаться от реальных показателей!
                    </div>
                    <div class="counters l-row l-flex-between">
                        <div class="counter counter-in">
                            <div class="digit">{{cin1}}</div>
                            <div class="digit">{{cin2}}</div>
                            <div class="digit">{{cin3}}</div>
                            <div class="digit">{{cin4}}</div>
                        </div>
                        <div class="counter counter-out">
                            <div class="digit">{{cout1}}</div>
                            <div class="digit">{{cout2}}</div>
                            <div class="digit">{{cout3}}</div>
                            <div class="digit">{{cout4}}</div>
                        </div>
                    </div>
                    <div class="counter-captions l-row l-flex-between">
                        <div class="counter-caption">ВХОД</div>
                        <div class="counter-caption">ВЫХОД</div>
                    </div>
                    <div class="l-row l-flex-center none">
                        <button class="button btn-refresh"></button>
                    </div>
                    
                    <div class="connection-status l-row l-flex-end l-flexa-baseline">
                        <div class="caption">cоединение со счетчиком</div>
                        <div class="connection-icon {{#if (o.Status) ? 'connected':'disconnected'}}"></div>
                    </div>
                </div>
              </div>`,
    Load: '',
    Proto:{
        CountIn: 0,
        CountOut: 0,
        Status: 1
    },
    PropFormat:{
        cin1:  (c, p)=>Global.GetDigit(p.CountIn, 1),
        cin2:  (c, p)=>Global.GetDigit(p.CountIn, 2),
        cin3:  (c, p)=>Global.GetDigit(p.CountIn, 3),
        cin4:  (c, p)=>Global.GetDigit(p.CountIn, 4),
        cout1: (c, p)=>Global.GetDigit(p.CountOut, 1),
        cout2: (c, p)=>Global.GetDigit(p.CountOut, 2),
        cout3: (c, p)=>Global.GetDigit(p.CountOut, 3),
        cout4: (c, p)=>Global.GetDigit(p.CountOut, 4),
    },
    Props: function(){
        this.RefreshInterval = REFRESH_INTERVAL;
        this._FavoriteIcon = this.Select('.widget-control-favorite');
    },
    Methods: function(){
        this.GetCounts = function () {


            let IntDtStart = Lure.Date(Diary.Proto.Data.DateSelected).DayStart.valueOf();
            let IntDtEnd = Lure.Date(Diary.Proto.Data.DateSelected).DayEnd.valueOf();
            //api.Library_GetVisitation_old(Diary.Proto.Data.DateSelected, Diary.SelectLibrary.value, {
            api.Library_GetVisitation(Diary.SelectLibrary.value, [IntDtStart, IntDtEnd], {
                Then: (v)=>{
                    //this.Proto.SetProperty('')
                    this.Proto.SetProperty('CountIn', v[0]);
                    this.Proto.SetProperty('CountOut', v[1]);
                },
                Catch: (e)=>{
                    Lure.System.Error('Ошибка получения данных автоматического счетчика со стороннего сервера', e);
                },
                Finally: ()=>{
                    this.Load.Hide();
                }
            })
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
        //return;
        this.Load.Show();
        this.GetCounts();
    },
    AfterBuild: function () {
        // this.ReInterval = setInterval(()=>{
        //     this.GetCounts();
        // }, this.RefreshInterval)
        this._FavoriteIcon.addEventListener('click', this.SwitchFavorite)
    }

});
