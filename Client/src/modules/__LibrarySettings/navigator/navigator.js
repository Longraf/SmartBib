LibrarySettings.Navigator = new Lure.Content({
    Name: 'Navigator',
    Target: '.local-navigator',
    Content: ``,
    Controller: {
        Data: [
            {
                Name: "Мероприятия",
                NameClass: "setting-events",
                Subs: []
            },
            {
                Name: "Второе",
                NameClass: "setting-second",
                Subs: []
            },
            {
                Name: "Еще одно",
                NameClass: "setting-another",
                Subs: []
            },
            {
                Name: "Последнее",
                NameClass: "setting-last",
                Subs: []
            }
        ],
        ListElement:
            `<div class="navigator-li" id="{{NameClass}}">
                <div class="navigator-item l-row">
                    <div class="nav-name">{{Name}}</div>
                </div>
            </div>`
    }
});