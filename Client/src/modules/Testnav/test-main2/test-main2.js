Testnav.TestMain2 = new Lure.Content({
    //Disabled: true,
    Name: 'TestMain2',
    Target: '',
    Type: 'Testnav-content',
    //Visible: true,
    Control:{
        Target: '#nav-test-main2'
    },
    Permission: {
        Roles: [Dictionary.Role.TesterPanel]
    },
    Content: `<div>
                <h2>Второй стол</h2>
              </div>`,

    Show: function () {
        this.Refresh();
    },

});
require("./level-three/level-three");
