//import * as Dictionary from "../global/dictionary";
const D = require('./../_common/dictionary');


let Admin = new Lure.Content({
    Name: 'Admin',
    Target: '.body',
    Type: 'content',
    Control:{
        Target: '#nav-admin'
    },
    Permission: {
        Roles: [D.Role.AdminCBS, D.Role.AdminUserManagement, D.Role.AdminTechManagement, D.Role.AdminUserCreate]
    },
    Content: `<div class="admin content">
                <!--<h2 class="h2">CBSMyAdmin</h2>-->
                
              </div>`,
    Proto: {
        LibraryRegionID: 1,
    },
    Props: function () {},
    Methods: function () {},
    Refresh: function () {},
    BeforeShow: function () {},
    AfterBuild: function () {}
});
window.Admin = Admin;
require('./UserManagement/UserCreator.js');
require('./UserManagement/UserEditor.js');

require('./TechnicianManagement/TechnicianEditor');

module.exports = Admin;
