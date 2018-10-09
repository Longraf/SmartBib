const Dictionary = require("../_common/dictionary");
/**
 * @class Testnav
 */

let Testnav = new Lure.Content({
    Name: 'Testnav',
    Target: '.body',
    Type: 'content',

    Control:{
        Target: '#nav-test'
    },
    Permission: {
       Roles: [Dictionary.Role.TesterPanel]
    },

    Methods: function(){
        // debugger
    },
    Content: `<div class="testnav content">
                <h1>Страница находится в разработке</h1>
              </div>`,
    Proto: {
        LibraryName: ''
    },
});

window.Testnav = Testnav;
require('./test-main/test-main.js');
require('./test-main2/test-main2.js');
module.exports = Testnav;
