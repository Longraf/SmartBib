Widget.EventSummary = new Lure.Content({
    Parent: Diary.Visitation,
    Name: 'WidgetEventSummary',
    Target: '.widget-row',
    Content: `<div draggable="true" class="widget draggable diary-widget event-summary-widget">
                <div class="widget-head l-row">
                  <div class="widget-title l-row">
                    <div class="widget-icon icon-visitor-new"></div>  
                    <div class="widget-caption">СВОД</div> 
                  </div> 
                  <div class="widget-controls l-row l-flexa-center">
                    <div class="widget-control widget-control-move" title="Переместить"></div>
                    <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                  </div>  
                </div>
                <div class="widget-content"> 
                    <div class="summary-chart"></div>
                    <div class="summary-plan">
                        <div class="value">{{CountSummary}}</div>
                        <div class="casual">всего</div>
                    </div>
                </div>
              </div>`,
    Proto: {
        CountSummary: 0,
        SeriesNames: ["мероприятия (б)",'мероприятия (п)', 'клубы (б)', 'клубы (п)', 'выставки'],
        SeriesData: [0,0,0,0,0],
    },
    PropFormat: {
        Percent: (p, o)=>o.Count/o.CountPlan*100,
        CountSummary: function () {
            if (!this.Chart)
                return 0;
            let s = 0;
            for (let i=0;i<this.Chart.Options.Series[0].Data.length;i++)
                s += this.Chart.Options.Series[0].Data[i] ?  this.Chart.Options.Series[0].Data[i]:0;
            return s;
        }
    },
    Props: function () {
        this.Chart = new Lure.Chart({
            Target: this.Select('.summary-chart'),
            Type: 'pie',
            Legend: {
                Position: 'right'
            },
            Series: [
                {
                    Labels: {
                        Data: this.Proto.Data.SeriesNames,
                    },
                    Data: this.Proto.Data.SeriesData,
                    Colors: ['#416E74', "#7ACDDB","#5C9BAA","#708284","#51A1A8"],
                    Type: 'ring',
                    Width: 31,
                    AngleStart: -90,
                }
            ],
            Tooltip:{
                Visible: false,
            },
        });
        this._FavoriteIcon = this.Select('.widget-control-favorite');
    },
    Methods: function () {
        this.SeriesUpdate = function (i, Value) {
            this.Chart.Options.Series[0].Data[i] = Value;
            this.Proto.Refresh();
            this.Chart.Refresh({Animation: false});
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
        this.Chart.Redraw();
    },
    AfterBuild: function () {
        this.AddEventListener('change', '.l-legend-checkbox', function () {
           this.Proto.Refresh();
        });
        this.AddEventListener('click', '.control-inline-plus', function (e, p) {
            let DataItem = this.Controller.GetDataItemByLineID(p.LineID);
            DataItem.Data.Count++;
            this.Controller.Refresh(p.LineID);
        });
        this.AddEventListener('click', '.control-inline-minus', function (e, p) {
            let DataItem = this.Controller.GetDataItemByLineID(p.LineID);
            DataItem.Data.Count--;
            this.Controller.Refresh(p.LineID);
        });
        this._FavoriteIcon.addEventListener('click', this.SwitchFavorite);
    }
});