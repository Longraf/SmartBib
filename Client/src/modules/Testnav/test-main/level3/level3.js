Testnav.TestMain.Level3v1 = new Lure.Content({
    //Disabled: true,
    Name: 'Level3v1',
    Target: '',
    Type: 'dash-content',
    // Visible: true,
    Control:{
        Target: '#nav-test-main-level3-1'
    },
    Permission: {
        Roles: [Dictionary.Role.TesterPanel]
    },
    Content: `<div>
                <p>Рабочий стол - Level 3-1</p>
              </div>`,

    Show: function () {
        this.Refresh();
    },

});