//let DataPlanInputContent = require('./data-plan-input/data-plan-input.js');

let DataInput = new Lure.Content({
    Name: 'DataInput',
    Target: '.body',
    Type: 'content',
    Control: {
        Target: '#nav-data-input'
    },
    Permission: {
        Roles: [Dictionary.Role.SetupEvent, Dictionary.Role.SetupPlan]
    },
    Content: `<div class="data-input l-col">
                  <div class="data-plan-input"></div>
                  <div class="data-affiche-input"></div>
               </div>`,
    /*SubContent: function(){

    },
    Props: function(){
        //this.DataPlanInput = require('./data-plan-input/data-plan-input.js');
    },*/
    Show: function (){
        this.ShowSubContent();
        //this.DataPlanInput.RefreshOnShow();
        // this.DataAfficheInput.Show();
    }/*,
    AfterBuild: function () {

    }*/
});
window.DataInput = DataInput;

require('./data-plan-input/data-plan-input.js');
require('./data-affiche-input/data-affiche-input.js');

module.exports = DataInput;
