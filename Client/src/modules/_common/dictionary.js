let Dictionary = {
    PersonType: {
        School: 1,
        SchoolRDC: 2,
        Student: 3,
        Servant: 4,
        Retired: 5,
        Other: 6,
        UnderSchool: 7,
    },
    PersonTypeDict: {
        1: 'Школа',
        2: 'Школа (РДЧ)',
        3: 'Студент',
        4: 'Служащий',
        5: 'Пенсионер',
        6: 'Прочее',
        7: 'Дошкола',
    },
    UserPosition: {
        Librarian: 1,
        Master: 2,
        MasterElder: 3,
        Moderator: 4,
        RegionModerator: 5,
        RegionAdmin: 6,
        Admin: 7,
    },
    UserPositionDict: {
        1: 'Библиотекарь',
        2: 'Заведующий библиотеки',
        3: 'Супер заведующий',
        4: 'Модератор',
        5: 'Модератор ЦБС',
        6: 'Администратор ЦБС',
        7: 'Администратор',
    },
    LibraryEventType: {
        EventFree: 1,
        EventPaid: 2,
        ClubFree: 3,
        ClubPaid: 4,
        Exhibition: 5,
    },
    LibraryEventTypeDict: {
        1: 'Бесплатное мероприятие',
        2: 'Платное мероприятие',
        3: 'Бесплатный клуб',
        4: 'Платный клуб',
        5: 'Выставка'
    },
    LibraryBookType: {
        OPL: 1,
        Nature: 2,
        Tech: 3,
        Agriculture: 4,
        Art: 5,
        Sport: 6,
        WTF_8183: 7,
        Catalog: 8,
        Children: 9,
        Fiction: 10,
        Other: 11,
    },
    LibraryBookTypeDict: {
        1: 'ОПЛ',
        2: 'Естествознание',
        3: 'Техника',
        4: 'Сельское хозяйство',
        5: 'Искусство',
        6: 'Спорт',
        7: '81, 83',
        8: 'Справочники',
        9: 'Детская литература',
        10: 'Художественная литература',
        11: 'Дополнительно',
    },
    LibraryBookCarryType: {
        Physical: 1,
        Electron: 2,
        Installed: 3,
        Remote: 4,
        Copy: 5,
    },
    LibraryConsultType: {
        Theme: 1,
        Factor: 2,
        Library: 3,
        Consult: 4,
        Copy: 5,
    },

    BookwareOtherPlace: {
        MMBA: 1,
        VirtualReadingHall: 2,
    },
    BookwareOtherPlaceDict: {
        1: 'ММБА',
        2: 'Виртуальные читальные залы',
    },

    Role: {
        Admin: 1,
        User: 2,
        AdminCBS: 13,
        ModeratorCBS: 15,
        Moderator: 21,

        DairyInput: 3,
        DairyInputMovings: 20,
        DairySummary: 4,
        DairySummaryEdit: 5,
        DairySummaryEditRemote: 24,

        Dashboard: 6,

        Passport: 7,
        PassportEdit: 17,
        Helpdesk: 8,
        HelpdeskResolve: 9,
        HelpdeskModerator: 23,

        SetupPlan: 10,
        SetupPlanEdit: 18,
        SetupEvent: 11,
        SetupEventEdit: 19,
        SetupEventOffer: 29,

        Meter: 12,
        MeterCreate: 27,
        MeterEdit: 28,

        LibraryID: 14,
        LibraryRegionID: 16,

        AdminUserManagement: 22,
        AdminTechManagement: 25,

        AdminUserCreate: 26,

        TesterPanel: 30,
    },
    RoleDict: {
        1: 'Администратор системы',
        2: 'Юзер',
        13: 'Администратор ЦБС',
        15: 'Модератор ЦБС',
        3: 'Ввод первичных данных',
        20: 'Ввод первичных данных передвижек',
        4: 'Сводная таблица, видимость',
        5: 'Сводная таблица, изменение',
        24: 'Сводная таблица, изменение удаленных пользователей',
        6: 'Дашборд',
        7: 'Паспорт видимость',
        17: 'Паспорт изменение',
        8: 'Хелпдеск',
        9: 'Хелпдеск техник',
        23: 'Хелпдеск модератор',
        10: 'Плановые показатели, видимость',
        18: 'Плановые показатели, изменение',
        11: 'Мероприятия (клубы, выставки), видимость',
        19: 'Мероприятия (клубы, выставки), изменение',
        29: 'Мероприятия (клубы, выставки), создание (на модерацию)',
        12: 'Счетчики, внесение данных',
        27: 'Счетчики, создание',
        28: 'Счетчики, изменение',
        14: 'Доступ к библиотекам',
        16: 'Доступ к ЦБС',
        21: 'Модератор библиотеки',
        22: 'Управление пользователями, изменение',
        25: 'Управление техниками',
        26: 'Управление пользователями, создание',
        30: 'А это панель тестового пользователя',
        //29 last
    },
    EventType: {
        Act: 1,
        Bal: 2,
        //...
    },
    EventTypeDict: {
        'null':'неизвестно',
        'undefined':'неизвестно',
        '0':'неизвестно',
        1: 'акция',
        2: 'бал',
        3: 'беседа',
        4: 'вебинар',
        5: 'вечер',
        6: 'викторина',
        7: 'встреча',
        8: 'выставка',
        9: 'гостиная',
        10: 'дискуссия',
        11: 'интерактив',
        12: 'карнавал',
        13: 'кинолекторий',
        14: 'КЛУБ',
        15: 'конкурс',
        16: 'конференция',
        17: 'концерт',
        18: 'круглый стол',
        19: 'лекция',
        20: 'мастер класс',
        21: 'народное гуляние',
        22: 'памятная дата',
        23: 'праздник',
        24: 'представление',
        25: 'презентация',
        26: 'программа/комплексное мероприятие',
        27: 'семинар',
        28: 'ток-шоу',
        29: 'утренник',
        30: 'фестиваль',
        31: 'форум',
        32: 'экскурсия',
        33: 'юбилей',
        34: 'ярмарка',
    },
    EventTrendsDict: {
        1: 'Антинаркотическое',
        2: 'Антитеррористическое',
        3: 'Безопасность движения',
        4: 'Иформационно-просветительское',
        5: 'Культурно-досуговое',
        6: 'Культурно-просветительское',
        7: 'Культурно-развлекательное',
        8: 'Международные и межрегиональные связи',
        9: 'Межэтнические и этноконфессиональные отношения',
        10: 'Мемориальное',
        11: 'Музыкально-просветительское',
        12: 'Образовательное',
        13: 'Патриотическое',
        14: 'Пропаганда здорового образа жизни',
        15: 'Пропаганда ЗОЖ',
        16: 'Профилактика беспризорности и безнадзорности несовершеннолетних',
        17: 'Профилактика жестокого обращения с детьми и подростками',
        18: 'Профилактика правонарушений среди несовершеннолетних',
        19: 'Работа с местным сообществом',
        20: 'Сохранение семейных ценностей',
        21: 'Социальное',
        22: 'Экологическое'
    },
    EventPlaceType: {
        Stationary:    1,
        NonStationary: 2
    },
    EventPlaceTypeDict: {
        1: 'Стационар',
        2: 'Внестационар',
    },
    Holidays: {
        0: "Нет",
        1: "Библионочь (общегородское мероприятие)",
        2: "Битва под Москвой (5 декабря)",
        3: "Всемирная акция 'День Земли' (22 апреля)",
        4: "Всемирный день борьбы с наркоманией и наркобизнесом (26 июня)",
        5: "Всемирный день книги и авторского права (23 апреля)",
        6: "Всемирный день культурного разнообразия во имя диалога и развития (21 мая)",
        7: "Всемирный день писателя (3 марта)",
        8: "Всемирный день поэзии (21 марта)",
        9: "Всемирный день ребенка (20 ноября)",
        10: "Всемирный день свободы печати (3 мая)",
        11: "Всемирный День Согласия и Примирения (7 ноября)",
        12: "Год кино (общегородское мероприятие 2016 год)",
        13: "Годовщина вывода Советских войск из Афганистана (15 февраля)",
        14: "Годовщина Победы в ВОВ 1941-1945 (9 мая)",
        15: "День всех влюблённых (14 февраля)",
        16: "День Героев Отечества (9 декабря)",
        17: "День города (4 сентября)",
        18: "День Государственного флага Российской Федерации (22 августа)",
        19: "День защитника Отечества (23 февраля)",
        20: "День защиты детей (1 июня)",
        21: "День знаний (1 сентября)",
        22: "День Конституции Российской Федерации (12 декабря)",
        23: "День космонавтики (12 апреля)",
        24: "День матери (последний выходной ноября)",
        25: "День молодежи (27 июня)",
        26: "День МФЦ (22 августа)",
        27: "День народного единства (4 ноября)",
        28: "День памяти и скорби (22 июня)",
        29: "День православной книги (14 марта)",
        30: "День работника архива (10 марта)",
        31: "День работников культуры России (25 марта)",
        32: "День работников торговли, бытового обслуживания населения и жилищно-коммунального хозяйства (3 воскресенье марта)",
        33: "День разгрома немецко-фашистских войск под Сталинградом (2 февраля)",
        34: "День родного языка (21 февраля)",
        35: "День России (12 июня)",
        36: "День российского кино (27 августа)",
        37: "День российской науки (8 февраля)",
        38: "День русского языка (6 июня)",
        39: "День семьи (15 мая)",
        40: "День семьи любви и верности (8 июля)",
        41: "День славянской письменности и культуры (24 мая)",
        42: "День снятия блокады Ленинграда (27 января)",
        43: "День солидарности в борьбе с терроризмом (3 сентября)",
        44: "День сотрудников органов внутренних дел Российской Федерации (10 ноября)",
        45: "День учителя (5 октября)",
        46: "Масленица (13 марта)",
        47: "Международный день детского телевидения и радиовещания (6 марта)",
        48: "Международный день детской книги (2 апреля)",
        49: "Международный День инвалидов (3 декабря)",
        50: "Международный день искоренения неграмотности (8 сентября)",
        51: "Международный день кино (28 декабря)",
        52: "Международный день мира (21 сентября)",
        53: "Международный день молодёжи (12 августа)",
        54: "Международный день музеев (18 мая)",
        55: "Международный день музыки (1 октября)",
        56: "Международный День пожилых людей (1 октября)",
        57: "Международный День толерантности (16 ноября)",
        58: "Международный женский день (8 марта)",
        59: "Неделя детской книги (последняя неделя марта)",
        60: "Новый год",
        61: "Ночь искусств (общегородское мероприятие)",
        62: "Ночь музеев (общегородское мероприятие 18 мая)",
        63: "Ночь музыки (общегородское мероприятие)",
        64: "Общероссийский день библиотек (библиотекаря) (27 мая)",
        65: "Пасха",
        66: "Праздник весны и труда (1 мая)",
        67: "Пушкинский день России (6 июня)",
        68: "Рождество Христово (7 января)",
        69: "Старый Новый год (14 января)",
        70: "Татьянин день (25 января)",
        71: "Фестиваль Московское Лето – Московское варенье (общегородское мероприятие 13 августа – 23 августа)",
        72: "Фестиваль Путешествие в Рождество (общегородское мероприятие 18 декабря – 10 января)"
    },
    CelebrationDict: {
        0: "Нет",
        1: "Библионочь (общегородское мероприятие)",
        2: "Битва под Москвой (5 декабря)",
        3: "Всемирная акция 'День Земли' (22 апреля)",
        4: "Всемирный день борьбы с наркоманией и наркобизнесом (26 июня)",
        5: "Всемирный день книги и авторского права (23 апреля)",
        6: "Всемирный день культурного разнообразия во имя диалога и развития (21 мая)",
        7: "Всемирный день писателя (3 марта)",
        8: "Всемирный день поэзии (21 марта)",
        9: "Всемирный день ребенка (20 ноября)",
        10: "Всемирный день свободы печати (3 мая)",
        11: "Всемирный День Согласия и Примирения (7 ноября)",
        12: "Год кино (общегородское мероприятие 2016 год)",
        13: "Годовщина вывода Советских войск из Афганистана (15 февраля)",
        14: "Годовщина Победы в ВОВ 1941-1945 (9 мая)",
        15: "День всех влюблённых (14 февраля)",
        16: "День Героев Отечества (9 декабря)",
        17: "День города (4 сентября)",
        18: "День Государственного флага Российской Федерации (22 августа)",
        19: "День защитника Отечества (23 февраля)",
        20: "День защиты детей (1 июня)",
        21: "День знаний (1 сентября)",
        22: "День Конституции Российской Федерации (12 декабря)",
        23: "День космонавтики (12 апреля)",
        24: "День матери (последний выходной ноября)",
        25: "День молодежи (27 июня)",
        26: "День МФЦ (22 августа)",
        27: "День народного единства (4 ноября)",
        28: "День памяти и скорби (22 июня)",
        29: "День православной книги (14 марта)",
        30: "День работника архива (10 марта)",
        31: "День работников культуры России (25 марта)",
        32: "День работников торговли, бытового обслуживания населения и жилищно-коммунального хозяйства (3 воскресенье марта)",
        33: "День разгрома немецко-фашистских войск под Сталинградом (2 февраля)",
        34: "День родного языка (21 февраля)",
        35: "День России (12 июня)",
        36: "День российского кино (27 августа)",
        37: "День российской науки (8 февраля)",
        38: "День русского языка (6 июня)",
        39: "День семьи (15 мая)",
        40: "День семьи любви и верности (8 июля)",
        41: "День славянской письменности и культуры (24 мая)",
        42: "День снятия блокады Ленинграда (27 января)",
        43: "День солидарности в борьбе с терроризмом (3 сентября)",
        44: "День сотрудников органов внутренних дел Российской Федерации (10 ноября)",
        45: "День учителя (5 октября)",
        46: "Масленица (13 марта)",
        47: "Международный день детского телевидения и радиовещания (6 марта)",
        48: "Международный день детской книги (2 апреля)",
        49: "Международный День инвалидов (3 декабря)",
        50: "Международный день искоренения неграмотности (8 сентября)",
        51: "Международный день кино (28 декабря)",
        52: "Международный день мира (21 сентября)",
        53: "Международный день молодёжи (12 августа)",
        54: "Международный день музеев (18 мая)",
        55: "Международный день музыки (1 октября)",
        56: "Международный День пожилых людей (1 октября)",
        57: "Международный День толерантности (16 ноября)",
        58: "Международный женский день (8 марта)",
        59: "Неделя детской книги (последняя неделя марта)",
        60: "Новый год",
        61: "Ночь искусств (общегородское мероприятие)",
        62: "Ночь музеев (общегородское мероприятие 18 мая)",
        63: "Ночь музыки (общегородское мероприятие)",
        64: "Общероссийский день библиотек (библиотекаря) (27 мая)",
        65: "Пасха",
        66: "Праздник весны и труда (1 мая)",
        67: "Пушкинский день России (6 июня)",
        68: "Рождество Христово (7 января)",
        69: "Старый Новый год (14 января)",
        70: "Татьянин день (25 января)",
        71: "Фестиваль Московское Лето – Московское варенье (общегородское мероприятие 13 августа – 23 августа)",
        72: "Фестиваль Путешествие в Рождество (общегородское мероприятие 18 декабря – 10 января)"
    },

    LibraryRegion: {
        CAO: 1,
        VAO: 2,
        ZAO: 3,
        ZELAO: 4,
        NOVOMOSCOW: 5,
        SAO: 6,
        SVAO: 7,
        SZAO: 8,
        UAO: 10,
        UVAO: 11,
        UZAO: 12,
    },
    LibraryRegionDict: {
        1: 'ЦБС «ЦАО»',
        2: 'ЦБС «ВАО»',
        3: 'ЦБС «ЗАО»',
        4: 'ЦБС «ЗелАО»',
        5: 'ЦБС «Новомосковская»',
        6: 'ЦБС «САО»',
        7: 'ЦБС «СВАО»',
        8: 'ЦБС «СЗАО»',
        10: 'ЦБС «ЮАО»',
        11: 'ЦБС «ЮВАО»',
        12: 'ЦБС «ЮЗАО»',
    },

    HelpRequestType: {
        WorkingPlace: 0,
        PC: 1,
        OfficeEquip: 2,
        Software: 3,
        MetersAlarms: 4,
        EventTechProvision: 5,
        Repair: 6,
        ReplaceInstall: 7,
        IT: 8,
        AHD: 9
    },
    HelpRequestTypeDict: {
        0: 'ОРГАНИЗАЦИЯ РАБОЧЕГО МЕСТА',
        1: 'ОБСЛУЖИВАНИЕ КОМПЬЮТЕРОВ',
        2: 'ОБСЛУЖИВАНИЕ ОРГТЕХНИКИ',
        3: 'ОБСЛУЖИВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ',
        4: 'НАБЛЮДЕНИЕ, СЧЕТЧИКИ, СИГНАЛИЗАЦИЯ',
        5: 'ТЕХНИЧЕСКОЕ СОПРОВОЖДЕНИЕ МЕРОПРИЯТИЙ',
        6: 'РЕМОНТ',
        7: 'ЗАМЕНА / УСТАНОВКА',
        8: 'ИТ',
        9: 'АХД',
    },
    HelpRequestTypeITList: [],  //filled in app.js
    HelpRequestTypeAHDList: [], //filled in app.js

    HelpRequestStatus: {
        New: 0,
        Active: 1,
        Closed: 2,
        Rejected: 3,
        Returned: 4
        // 1 - в работе
        // 2 - закрытые
        // 3 - отклоненные
        // 4 - возвращенные
    },
    HelpRequestStatusDict: {
        0: 'Новая',
        1: 'В работе',
        2: 'Закрыта',
        3: 'Отклонена',
        4: 'Возвращена'
    },
    HelpRequestPriority: {
        Low: 1,
        Mid: 2,
        High: 3,
        ExactDate: 4,
    },
    HelpRequestPriorityDict:{
        1: 'Низкий',
        2: 'Средний',
        3: 'Высокий',
        4: 'Точная дата',
    },


    TechnicianDict: {
        '-1': 'Неизвестно',
    },


    MeterType: {
        WaterCold: 0,
        WaterHot:  1,
        Electricity:  2,
    },
    MeterTypeDict: {
        0: 'ХВС',
        1: 'ГВС',
        2: 'Электричество',
    },

    SubscribeType: {
        VisitRegisterAdd: 1,
        VisitVisitAdd: 2,
        VisitEventAdd: 3,
        Bookware: 4,
        Movings: 5,
        SummaryChange: 6,
        PassportChange: 7,
        DataInputPlan: 8,
        DataInputEvent: 9,
        SupportAdd: 10,
        SupportMessageAdd: 10,
    }
};

module.exports = Dictionary;










