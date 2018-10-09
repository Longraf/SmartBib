//import * as Dictionary from "../global/dictionary";

const Dictionary = require("../_common/dictionary");

/**
 * @class DashTester
 * @type Lure.Content
 */
let DashTester = new Lure.Content({
    //Disabled: true,
    Name: 'DashTester',
    Target: '.body',
    Type: 'content',
    Control:{
        Target: '#nav-dash-test'
    },
    Permission: {
        Roles: [Dictionary.Role.Admin]
    },
    Content: `<div class="dash-tester content">
                 <h1>Dush-push</h1>
                 <h2>DKuk: <div class="wef editable">{{Kuk}}</div></h2>
                 <div class="widgets">
                    <div class="widget-row-1 l-row"></div>
                    <div class="widget-row-2 l-row"></div>
                    <div class="widget-row-3 l-row">
                        <div class="diche">
                            <input class="fileman" type="file" name="Package" >
                        </div>
                    </div>
                </div>
               </div>`,
    State:{
        Kuk: 12,
    },
    Props: function () {
        this._ResizeTarget = null;

        this.InputFile = this.Select('.fileman');
    },
    Methods: function(){
        this.MakeResizable = function (Content, Resizer, OnResize) {
            let Parent = this;
            Content._Resizer = Content.Select(Resizer);
            Content._Resize = {
                x: null,
                y: null,
            };
            Content._OnResize = function (e) {
                if (this._Resize.x !== null){
                    let dx = e.clientX - this._Resize.x;
                    let dy = e.clientY - this._Resize.y;
                    //console.log(dx, dy);
                    if (dx > 165){
                        this.State.Widget.Width = this.State.Widget.Width + 1;
                        OnResize.call(this);
                        this._Resize.x = e.clientX;
                    }
                    if (dx < -165 && this.State.Widget.Width > 2){
                        this.State.Widget.Width = this.State.Widget.Width - 1;
                        OnResize.call(this);
                        this._Resize.x = e.clientX;
                    }

                    if (dy > 137){
                        this.State.Widget.Height = this.State.Widget.Height + 1;
                        OnResize.call(this);
                        this._Resize.y = e.clientY;
                    }
                    if (dy < -137 && this.State.Widget.Height > 2){
                        this.State.Widget.Height = this.State.Widget.Height - 1;
                        OnResize.call(this);
                        this._Resize.y = e.clientY;
                    }
                }
                else{
                    this.Resize.x = e.clientX;
                    this.Resize.y = e.clientY;
                }

            }.bind(Content);
            Content._Resizer.addEventListener('mousedown', function(e){
                Parent._ResizeTarget = Content;
                Content._Resize.x = e.clientX;
                Content._Resize.y = e.clientY;
            });

        };

        this.UploadTest = function () {
            let file = this.InputFile.files[0];
            if (!file)
                return;
            //let reader = new FileReader();
            api.GetFileTest(file, {onprogress: (a,b)=>{
                console.log('onprogress->',a,b)
                }});
        }
    },
    Show: function(){
        this.DashTestW.Chart.Redraw();
        this.DashTestW2.Chart.Redraw();
    },
    AfterBuild: function(){


        this.InputFile.addEventListener('change', ()=>{
            this.UploadTest();
        });
        this.Content.addEventListener('mouseup', (e)=>{
            this._ResizeTarget = null;
        });
        this.Content.addEventListener('mousemove', (e)=>{
            if (this._ResizeTarget){
                this._ResizeTarget._OnResize(e);
            }
        });


    },


});

DashTester.DashTestW = new Lure.Content({
    Parent: DashTester,
    Target: '.widget-row-1',
    Content: `<div class="widget" style="--widget-width: {{Widget.Width}}; --widget-height: {{Widget.Height}}">
                    <div class="resizer"></div>
                    <div class="widget-head l-row">
                      <div class="widget-title l-row">
                        <div class="widget-icon icon-visitor-new"></div>  
                        <div class="widget-caption">Курва и курвёнок</div> 
                      </div> 
                      <div class="widget-controls">
                        <div class="widget-control widget-control-move" title="Переместить"></div>
                        <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                      </div>  
                    </div>
                    <div class="widget-content">
                       <div class="le-chart-1"></div>
                    </div>
                </div>`,
    State: {
        Widget:{
            Width:  4,
            Height: 2,
        }
    },
    Props: function(){
        this.Chart = new Lure.Chart({
            DrawAfterInit: false,
            Target: this.Select('.le-chart-1'),
            AxisX: {
                Data: [1,2,3,4,5,6,7,9,10,11,12,15]
            },
            Series: [
                {
                    Name: 'Vahabit',
                    Data: (new Array(12)).Select(x=>Lure.GetRandom(150))
                },
                {
                    Name: 'Vahabyte',
                    Data: (new Array(12)).Select(x=>Lure.GetRandom(200, 5))
                },
                {
                    Name: 'Terapeut',
                    Data: (new Array(12)).Select(x=>Lure.GetRandom(120, 100)),

                }
            ],
            AxisY:{
                Min: 0,
                //Step: 10
            },
            SeriesOptions:{
                Marker:{
                    Visible: false,
                },

            }

        });
    },
    Methods: function(){
        this.OnResize = function (e) {
            if (this.Resize.x !== null){
                let dx = e.clientX - this.Resize.x;
                let dy = e.clientY - this.Resize.y;
                //console.log(dx, dy);
                if (dx > 165){
                    this.State.Widget.Width = this.State.Widget.Width + 1;
                    this.Refresh();
                    this.Resize.x = e.clientX;
                }
                if (dx < -165 && this.State.Widget.Width > 2){
                    this.State.Widget.Width = this.State.Widget.Width - 1;
                    this.Refresh();
                    this.Resize.x = e.clientX;
                }

                if (dy > 137){
                    this.State.Widget.Height = this.State.Widget.Height + 1;
                    this.Refresh();
                    this.Resize.y = e.clientY;
                }
                if (dy < -137 && this.State.Widget.Height > 2){
                    this.State.Widget.Height = this.State.Widget.Height - 1;
                    this.Refresh();
                    this.Resize.y = e.clientY;

                }

            }
            else{
                this.Resize.x = e.clientX;
                this.Resize.y = e.clientY;
            }

        }
    },
    Refresh: function(){
        this.Proto.Refresh();
        //this.Chart.Redraw();
    },
    AfterBuild: function () {
        DashTester.MakeResizable(this, '.resizer', this.Refresh);
    },
});


DashTester.DashTestW2 = new Lure.Content({
    Parent: DashTester,
    Target: '.widget-row-1',
    Content: `<div class="widget" style="--widget-width: {{Widget.Width}}; --widget-height: {{Widget.Height}}">
                    <div class="resizer"></div>
                    <div class="widget-head l-row">
                      <div class="widget-title l-row">
                        <div class="widget-icon icon-visitor-new"></div>  
                        <div class="widget-caption">Репей и репейник</div> 
                      </div> 
                      <div class="widget-controls">
                        <div class="widget-control widget-control-move" title="Переместить"></div>
                        <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                      </div>  
                    </div>
                    <div class="widget-content">
                       <div class="le-chart-1"></div>
                    </div>
                </div>`,
    State: {
        Widget:{
            Width:  4,
            Height: 2,
        }
    },
    Props: function(){
        this.Chart = new Lure.Chart({
            DrawAfterInit: false,
            Target: this.Select('.le-chart-1'),
            Legend:{
                Position: 'right',
            },
            AxisX: {
                Data: [1,2,3,4,5,6,7,9,10,11,12,15]
            },
            Series: [
                {
                    Name: 'Vahabit',
                    Data: (new Array(12)).Select(x=>Lure.GetRandom(150)/100)
                },
                {
                    Name: 'Vahabyte',
                    Data: (new Array(12)).Select(x=>Lure.GetRandom(200, 5)/100)
                },
                {
                    Name: 'Terapeut',
                    Data: (new Array(12)).Select(x=>Lure.GetRandom(120, 100)/100),

                }
            ],

            SeriesOptions:{
                Marker:{
                    Visible: false,
                },

            }

        });
    },
    Methods: function(){
        this.OnResize = function (e) {
            if (this.Resize.x !== null){
                let dx = e.clientX - this.Resize.x;
                let dy = e.clientY - this.Resize.y;
                //console.log(dx, dy);
                if (dx > 165){
                    this.State.Widget.Width = this.State.Widget.Width + 1;
                    this.Refresh();
                    this.Resize.x = e.clientX;
                }
                if (dx < -165 && this.State.Widget.Width > 2){
                    this.State.Widget.Width = this.State.Widget.Width - 1;
                    this.Refresh();
                    this.Resize.x = e.clientX;
                }

                if (dy > 137){
                    this.State.Widget.Height = this.State.Widget.Height + 1;
                    this.Refresh();
                    this.Resize.y = e.clientY;
                }
                if (dy < -137 && this.State.Widget.Height > 2){
                    this.State.Widget.Height = this.State.Widget.Height - 1;
                    this.Refresh();
                    this.Resize.y = e.clientY;

                }

            }
            else{
                this.Resize.x = e.clientX;
                this.Resize.y = e.clientY;
            }

        }
    },
    Refresh: function(){
        this.Proto.Refresh();
        this.Chart.Redraw();
    },
    AfterBuild: function () {
        DashTester.MakeResizable(this, '.resizer', this.Refresh);
    },
});


window.DashTester = DashTester;
module.exports = DashTester;