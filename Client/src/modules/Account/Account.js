let Account = new Lure.Content({
    Name: 'Account',
    Target: '.body',
    Type: 'content',
    Control:{
        Target: '.user-menu_account'
    },

    Content: `<div class="account content">
                <h2 class="h2">Моя учетная запись</h2>
                
              </div>`,
    Proto: {

    },
    Props: function () {

    },
    Methods: function () {

    },
    Refresh: function () {

    },
    BeforeShow: function () {

    },
    AfterBuild: function () {

    }
});
window.Account = Account;
require('./_change-pass');

module.exports = Account;
