Widget.GiveBookProgress = new Lure.Content({
    Parent: Diary.Bookware,
    Name: 'WidgetGiveBookProgress',
    Target: '.widget-row',
    Content: `<div draggable="true" class="widget draggable diary-widget give-book-progress-widget" style="--widget-width: {{Widget.Width}}; --widget-height: {{Widget.Height}}">
                <div class="widget-head l-row">
                  <div class="widget-title l-row">
                    <div class="widget-icon icon-visitor-new"></div>  
                    <div class="widget-caption">КНИГОВЫДАЧА ЗА {{Month}}</div> 
                  </div> 
                  <div class="widget-controls l-row l-flexa-center">
                    <div class="widget-control widget-control-move" title="Переместить"></div>
                    <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                  </div>  
                </div>
                <div class="widget-content">
                    <div class="give-book-progress-chart"></div>
                    <div class="give-book-progress-plan">
                        <div class="achieved l-col">
                            <div class="value">{{Count}}</div>
                            <div class="casual">выдано</div>
                        </div>
                        <div class="l-col">
                            <div class="value">{{CountPlan}}</div>
                            <div class="casual">цель</div>
                        </div>
                    </div>
                    
                </div>
              </div>`,
    Load: '',
    State:{
        Count: 1946,
        CountPlan: 12000,

        Widget:{
            Width:  2,
            Height: 2,
        }
    },
    PropFormat: {
        Month: ()=>Lure.Date().Format('MMMM').toUpperCase()
    },
    Props: function () {
        this.Chart = new Lure.Chart({
            Target: this.Select('.give-book-progress-chart'),
            Type: 'pie',
            Legend: {
                Visible: false,
            },
            Series: [
                {
                    Labels: {
                        Data: ["1",'2']
                    },
                    Data: [this.State.Count/this.State.CountPlan, 1-this.State.Count/this.State.CountPlan],
                    Colors: ["#7ACDDB","#5C9BAA"],
                    Type: 'ring',
                    Width: 31,
                    AngleStart: -90,
                }
            ],
            Tooltip:{
                Visible: false,
            },

        })
    },
    Methods: function () {
        this.Update = function (CountDelta) {
            this.State.Count = this.State.Count + CountDelta;
            this.Chart.Options.Series[0].Data[0] = this.Proto.Data.Count/this.Proto.Data.CountPlan || 0;
            this.Chart.Options.Series[0].Data[1] = 1-this.Chart.Options.Series[0].Data[0];
            this.Proto.Refresh();
            this.Chart.Refresh({Animation: false});
        };
    },
    Refresh: function () {
        this.Load.Show();
        api.Diary_Bookware_GivingBookProgressGet(Diary.CurrentLibraryID, Diary.CurrentDate, {
            Then: (x)=>{
                this.State.Count     = x[0];
                this.State.CountPlan = x[1];
                this.Update(0);
            },
            Finally: ()=>{
                this.Load.Hide();
            }
        });
        this.Chart.Redraw();
    },
});