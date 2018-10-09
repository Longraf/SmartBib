let HelpDesk = new Lure.Content({
    Name: 'HelpDesk',
    Target: '.body',
    Type: 'content',
    Control:{
        Target: '#nav-help-desk'
    },
    Content:
        `<div class="help-desk content">
            <div class="help-desk-my-requests"></div>
            <div class="help-desk-new-request"></div>
        </div>`,
    Show: function () {

        if (Lure.User.Roles.indexOf(9) !== -1 || Lure.User.Roles.indexOf(23) !== -1)
                this.MyReqs.Show();
        else this.NewReq.Show();
    }
});
window.HelpDesk = HelpDesk;
require('./my-reqs/my-reqs.js');
require('./new-req/new-req.js');

module.exports = HelpDesk;
