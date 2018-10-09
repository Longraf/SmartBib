const Dictionary = require("../_common/dictionary");
let Dash = new Lure.Content({
    //Disabled: true,
    Name: 'Dash',
    Target: '.body',
    Type: 'content',
    Control:{
        Target: '#nav-dash'
    },
    Permission: {
        Roles: [Dictionary.Role.Dashboard]
    },
    Content: `<div class="dash content"></div>`,
    Show: function () {
        this.SixNK.Refresh();
    }
});
window.Dash = Dash;
require('./dash-main/dash-main.js');
require('./summary/dash-summary.js');
require('./six-nk/six-nk.js');
module.exports = Dash;
