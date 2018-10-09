const HistorySubscription = require('../_common/history-master/history-subscription');
const D = require("../_common/dictionary");

/**
 * @class Featured
 */
let Featured = new Lure.Content({
    //Disabled: true,
    Name: 'Featured',
    Target: '.body',
    Type: 'content',
    Control:{
        Target: '#nav-featured'
    },
    Content: `<div class="featured content">
                 <h1>Feed</h1>
                 <div class="widgets"></div>
             </div>`,
    State:{
        Kuk: 12,
    },
    Props: function () {
        this._ContentWidget = this.Select('.widgets');
        this._CurrentLContentList = [];

        this._ResizeTarget = null;

        this.InputFile = this.Select('.fileman');
    },
    Methods: function(){

        this._StealContents = function () {
            this._CurrentLContentList = [];
            for (let WidgetFullName of Lure.User.WebSettings.Featured.Widgets){
                console.log(`ww->`, WidgetFullName);
                const WidgetLContent = Lure.Object.GetProperty(window, WidgetFullName);
                if (WidgetLContent !== null){
                    //steal content
                    this._CurrentLContentList.push(WidgetLContent);
                    this._ContentWidget.appendChild(WidgetLContent.Content);
                }
            }
        };
        this._RefreshCurrents = function () {
            for (let c of this._CurrentLContentList)
                c.Refresh();
        };

        this.AddWidget = function (LContentFullName) {
            Lure.User.WebSettings.Featured.Widgets.push(LContentFullName);
            return api.User_WebSettingsUpdate(JSON.stringify(Lure.User.WebSettings), null);
        };
        this.RemoveWidget = function (LContentFullName) {
            Lure.Array.Remove(Lure.User.WebSettings.Featured.Widgets, x=>x === LContentFullName);
            return api.User_WebSettingsUpdate(JSON.stringify(Lure.User.WebSettings), null);
        };

        this._CheckSettings = function () {
            if (Lure.User.WebSettings.Featured === void 0) {
                Lure.User.WebSettings.Featured = {
                    Widgets: [],
                    Settings: {},
                }
            }
        }
    },
    BeforeShow: function(){
        this._StealContents();
    },
    Show: function(){
        this._RefreshCurrents();
    },
    AfterBuild: function(){
        this._CheckSettings();

        document.addEventListener('mouseup', (e)=>{
            this._ResizeTarget = null;
        });
        this.Content.addEventListener('mousemove', (e)=>{
            if (this._ResizeTarget){
                this._ResizeTarget._OnResize(e);
            }
        });


    },


});


window.Featured = Featured;
module.exports = Featured;