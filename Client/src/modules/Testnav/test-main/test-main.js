Testnav.TestMain = new Lure.Content({
    Parent: Testnav,
    //Disabled: true,
    Name: 'TestMain',
    Type: 'Testnav-content',
    //Visible: true,
    Control:{
        Target: '#nav-test-main'
    },
    Permission: {
        Roles: [Dictionary.Role.TesterPanel],
        Rules: {
            jojo: {
                Roles: [Dictionary.Role.Admin],
                Write: [],
            }
        }
    },
    Content: `<div>
                <h2>Рабочий стол p</h2>
                <h2 data-permision="jojo">Рабочий стол c атрибутами на чтение</h2>
              </div>`,

    Show: function () {
        this.Refresh();
    },

});
require("./level3/level3");
// window.Dash.DashMain = DashMain;
// module.exports = Dash;
Lure.Settings