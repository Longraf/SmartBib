module.exports = new Lure.Content({
    Name: 'Headline',
    Target: '.header',
    Content: `<div class="headline l-row">
                  <div class="headline-logo"></div>
                  <div class="headline-bush"></div>
                  <div class="headline-user l-col l-flex-center">
                    <div class="position">{{Position}}</div>
                    <div class="name">{{Name}}</div>
                  </div>
                  <div class="submenu-control">
                    <div class="user-menu">
                      <div class="li user-menu_account">Учетная запись</div>
                      <div class="li exit">Выход</div>
                    </div>
                  </div>
              </div>`,
    AfterBuild: function () {
        this.Select('.exit').addEventListener('click', ()=>{
            api.LogOff({Then: ()=>{
                    api.onUnauth();
                }});
        });
        this.Proto.SetProperty('Name', Lure.User.Name);
        this.Proto.SetProperty('Position', Lure.User.Position);
    }
});