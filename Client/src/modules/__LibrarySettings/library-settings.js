module.exports = new Lure.Content({
    Name: 'LibrarySettings',
    Target: '.body',
    Type: 'content',
    Control: {
        Target: '#nav-settings-menu'
    },
    Permission: {
        Roles: [Dictionary.Role.Admin]
    },
    Content:
        `<div class="settings-menu content">
            <h1>Настройки-настроечки</h1>
            <div class="settings-container">
                <div class="local-navigator"></div>
                <div class="menu-item-content"></div>
            </div>
        </div>`,
    SubContent: function () {
        // ДОБАВЛЯЕТСЯ ПОЗЖЕ
    }
});