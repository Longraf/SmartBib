LibrarySettings.SettingForSecond = new Lure.Content({
    Name: 'SettingFroSecond',
    Target: '.menu-item-content',
    Type: 'setting-content',
    Control: {
        Target: '#setting-second'
    },
    Content: `<div class="setting">
                  <h1>Второееее</h1>
               </div>`,
    AfterBuild: function () {

    }
});

LibrarySettings.SettingForThird = new Lure.Content({
    Name: 'SettingForThird',
    Target: '.menu-item-content',
    Type: 'setting-content',
    Control: {
        Target: '#setting-another'
    },
    Content: `<div class="setting">
                  <h1>Третьееееее</h1>
              </div>`,
    AfterBuild: function () {

    }
});

LibrarySettings.SettingForForth = new Lure.Content({
    Name: 'SettingForForth',
    Target: '.menu-item-content',
    Type: 'setting-content',
    Control: {
        Target: '#setting-last'
    },
    Content: `<div class="setting">
                  <h1>Четвертоееееее</h1>
              </div>`,
    AfterBuild: function () {

    }
});
