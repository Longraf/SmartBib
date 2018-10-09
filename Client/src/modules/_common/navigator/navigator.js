const InputBox = require("../input-box/input-box");

/**
 * @class Navigator
 */
let Navigator = new Lure.Content({
    Name: 'Navigator',
    Target: '.body',
    Content: `<div class="navigator l-col">
                 <div class="navigator-activator">
                    <div class="li"></div>
                    <div class="li"></div>
                    <div class="li"></div>
                 </div>
                 <div class="navigator-content-container">
                     <div class="navigator-content">
                        <div class="nav-control">
                            <div class="li"></div>
                            <div class="li"></div> 
                            <div class="li"></div>
                        </div>
                     </div>
                     <div class="navigator-content2">
                         <div class="navigator-li">
                            <div class="navigator-item l-row" id="nav-settings-menu">
                                <div class="nav-icon nav-settings-menu"></div>
                                <div class="nav-name">Настройки</div>
                            </div>
                         </div>
                     </div>
                 </div>
              </div>`,
    Controller:{
        Target: '.navigator-content',
        Data:[
            // {
            //             //     Name: 'Featured',
            //             //     NameClass: 'nav-featured',
            //             //     Subs: []
            //             // },
            {
                Name: 'Рабочий стол руководителя',
                NameClass: 'nav-dash',
                Subs: [
                    {Name: 'Рабочий стол', ID: 'nav-dash-main'},
                    {
                        Name: 'Сводная таблица', ID: 'nav-dash-summary',
                        Subs: [
                            {Name: 'Часть 1', ID: 'nav-dash-summ-p1'},
                            {Name: 'Часть 2', ID: 'nav-dash-summ-p2'},
                            {Name: 'Часть 3', ID: 'nav-dash-summ-p3'},
                            {Name: 'Часть 4', ID: 'nav-dash-summ-p4'},
                            {Name: 'Часть 5', ID: 'nav-dash-summ-p5'},
                            {Name: 'Часть 6', ID: 'nav-dash-summ-p6'},
                        ]
                    },
                    {Name: '6 НК', ID: 'nav-six-nk'}
                ]
            },
            {
                Name: 'Второй Рабочий стол',
                NameClass: 'nav-wdash',
                Subs: [
                    {Name: 'WРабочий стол', ID: 'nav-wdash-main'},
                    {
                        Name: 'WСводная таблица', ID: 'nav-wdash-summary',
                        Subs: [
                            {Name: 'Часть 1', ID: 'nav-wdash-summ-p1'},
                            {Name: 'Часть 2', ID: 'nav-wdash-summ-p2'},
                            {Name: 'Часть 3', ID: 'nav-wdash-summ-p3'},
                            {Name: 'Часть 4', ID: 'nav-wdash-summ-p4'},
                            {Name: 'Часть 5', ID: 'nav-wdash-summ-p5'},
                            {Name: 'Часть 6', ID: 'nav-wdash-summ-p6'},
                        ]
                    },
                    {Name: '6 НК', ID: 'nav-wsix-nk'}
                ]
            },
            // {
            //     Name: 'Даштустер',
            //     NameClass: 'nav-dash-test',
            //     Subs: [
            //     ]
            // },
            {
                Name: 'Электронный дневник',
                NameClass: 'nav-diary',
                Subs: [
                    {Name: 'Посещения',       ID: 'nav-diary-visit'},
                    {Name: 'Книговыдача',     ID: 'nav-diary-bookware'},
                    {Name: 'Внестационар',    ID: 'nav-diary-book-out'},
                    {
                        Name: 'Сводная таблица',
                        ID: 'nav-diary-summary',
                        Subs: [
                            {
                                Name: 'Часть 1',
                                ID: 'nav-diary-summary-1'
                            },{
                                Name: 'Часть 2',
                                ID: 'nav-diary-summary-2'
                            },{
                                Name: 'Часть 3',
                                ID: 'nav-diary-summary-3'
                            },{
                                Name: 'Часть 4',
                                ID: 'nav-diary-summary-4'
                            },{
                                Name: 'Часть 5',
                                ID: 'nav-diary-summary-5'
                            },{
                                Name: 'Часть 6',
                                ID: 'nav-diary-summary-6'
                            },
                        ]},
                ]
            },
            {
                Name: 'Паспорт учреждения',
                NameClass: 'nav-passport',
                Subs: []
            },
            {
                Name: 'Учет показаний счетчиков',
                NameClass: 'nav-meter',
                Subs: [{
                        Name: 'Внесение показаний',
                        ID: 'nav-meter-incoming'
                    },
                    {
                        Name: 'Управление счетчиками',
                        ID: 'nav-meter-management'
                    }
                    ]
            },
            {
                Name: 'Ввод данных',
                NameClass: 'nav-data-input',
                Subs: [
                    {
                        Name: 'Плановые показатели',
                        ID: 'nav-data-input-plan'
                    },
                    {
                        Name: 'Мероприятия',
                        ID: 'nav-data-input-affiche'
                    }]
            },
            {
                Name: 'Поддержка',
                NameClass: 'nav-help-desk',
                Subs: [
                    {
                        Name: 'Мои заявки',
                        ID: 'nav-help-desk-my-req'
                    },
                    {
                        Name: 'Новая заявка',
                        ID: 'nav-help-desk-new-req'
                    }]
            },
            {
                Name: 'Admin',
                NameClass: 'nav-admin',
                Subs: [
                    {
                        Name: 'Создать пользователя',
                        ID: 'nav-admin-user-create'
                    },
                    {
                        Name: 'Изменить пользователя',
                        ID: 'nav-admin-user-management'
                    },
                    {
                        Name: 'Техники',
                        ID: 'nav-admin-technician-management'
                    },

                ]
            },
            {
                Name: 'Testnav',
                NameClass: 'nav-test',
                Subs: [
                    {
                        Name: 'Рабочий стол',
                        ID: 'nav-test-main',
                        Subs: [
                            {
                                Name: 'Уровень 3-1',
                                ID: 'nav-test-main-level3-1'
                            },
                        ]
                    },
                    {
                        Name: 'Второй стол',
                        ID: 'nav-test-main2',
                        Subs: [
                            {
                                Name: 'Уровень 3-2',
                                ID: 'nav-test-main2-1',
                            },
                        ]
                    },
                ]
            },
        ],
        ListElement: `<div class="navigator-li">
                        <div class="navigator-item l-row" id="{{NameClass}}">
                            <div class="nav-icon {{NameClass}}"></div>
                            <div class="nav-name">{{Name}}</div>
                        </div>
                        <div class="nav-li-subs l-col">
                          {{#each Subs}}
                            <div class="li">
                                <div class="l-element-line nav-subname" id="{{ID}}">{{Name}}</div>
                                <div class="nav-sublist">
                                    {{#each Subs}}
                                        <div class="l-element-line sub-li" id="{{ID}}">{{Name}}</div>
                                    {{#endeach}}
                                </div>
                            </div>
                          {{#endeach}}
                        </div>
                      </div>`
    },
    Props: function () {
        this.Nav = this.Select('.navigator-content-container');
    },
    AfterBuild: function () {
        this.Content.addEventListener('mouseout', (e)=>{
            if (e.target === this.Content)
                console.log('this.Content mouseout', e.target);
        });
        this.Content.addEventListener('click', ()=>{
            InputBox.Hide();
        });
        this.Select('.navigator-activator').addEventListener('click', ()=>{
            this.Nav.classList.toggle('active');
            localStorage.setItem('isActiveNavigator', (this.Nav.classList.contains('active')*1).toString() );
        })
    }
});

module.exports = Navigator;






