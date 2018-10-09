const Dictionary = require("../_common/dictionary");

let WDash = new Lure.Content({
    //Disabled: true,
    Name: 'WDash',
    Target: '.body',
    Type: 'content',
    Control:{
        Target: '#nav-wdash'
    },
    Permission: {
        Roles: [Dictionary.Role.Dashboard]
    },
    Content: `<div class="wdash content"></div>`,
    Show: function () {
        this.SixNK.Refresh();
    }
});
window.WDash = WDash;
require('./wdash-main/wdash-main.js');
require('./summary/wdash-summary.js');
require('./six-nk/six-nk.js');
module.exports = WDash;
