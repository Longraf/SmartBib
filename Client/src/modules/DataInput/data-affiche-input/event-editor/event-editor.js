const InputBox = require("../../../_common/input-box/input-box");
const D = require("../../../_common/dictionary");

/**
 *
 * @class AfficheEditor
 */
const AfficheEditor = new Lure.Content({
    Parent: DataInput.DataAfficheInput,
    Type: 'side-events-editor',
    Route: false,
    Content:
        `<div class="events-editor l-col">
            <div class="head">
                <h2 class="h2"><span>{{HeaderEditOrAdd}}</span> мероприятия</h2>
            </div>
            <div class="side-event-editor list">
                <div class="concr-list">
                    <div class="concr-list l-t-content">
                       <div class="line-item l-row l-flex-between {{Invalid.ID?'invalid':''}} {{Disabled.ID?'disabled':''}} l-invert ">
                          <div class="name">
                             <div>№</div>
                          </div>
                          <div class="value" data-type="ID">
                             <div class="value-value ">{{Event.ID}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.LibraryID?'invalid':''}} {{Disabled.LibraryID?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Наименование подразделения</div>
                             <div class="error-text">{{ErrorText.LibraryID || ''}}</div>
                          </div>
                          <div class="value" data-type="LibraryID">
                             <div class="value-value ">{{Event.LibraryID}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Name?'invalid':''}} {{Disabled.Name?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Наименование мероприятия</div>
                             <div class="error-text">{{ErrorText.Name || ''}}</div>
                          </div>
                          <div class="value" data-type="Name">
                             <div class="value-value editable editable-special">{{Event.Name}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Initiator?'invalid':''}} {{Disabled.Initiator?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Мероприятие проводится в рамках</div>
                             <div class="error-text">{{ErrorText.Initiator || ''}}</div>
                          </div>
                          <div class="value" data-type="Initiator">
                             <div class="value-value editable editable-special">{{Event.Initiator}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.EventTypeID?'invalid':''}} {{Disabled.EventTypeID?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Тип мероприятия</div>
                             <div class="error-text">{{ErrorText.EventTypeID || ''}}</div>
                          </div>
                          <div class="value" data-type="EventTypeID">
                             <div class="value-value editable editable-special">{{Event.EventTypeID}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.EventKindID?'invalid':''}} {{Disabled.EventKindID?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Вид мероприятия</div>
                             <div class="error-text">{{ErrorText.EventKindID || ''}}</div>
                          </div>
                          <div class="value" data-type="EventKindID">
                             <div class="value-value editable editable-special">{{Event.EventKindID}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.InvolvedStatus?'invalid':''}} {{Disabled.InvolvedStatus?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Статус участия (организатор / участник)</div>
                             <div class="error-text">{{ErrorText.InvolvedStatus || ''}}</div>
                          </div>
                          <div class="value" data-type="InvolvedStatus">
                             <div class="value-value editable editable-special">{{Event.InvolvedStatus}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Price?'invalid':''}} {{Disabled.Price?'disabled':''}} l-invert ">
                          <div class="name">
                             <div>Бесплатное / платное / стоимость посещения</div>
                             <div class="error-text">{{ErrorText.Price || ''}}</div>
                          </div>
                          <div class="value" data-type="Price">
                             <div class="value-value editable editable-special">{{Event.Price}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.EventPlaceTypeID?'invalid':''}} {{Disabled.EventPlaceTypeID?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Стационар / внестационар</div>
                             <div class="error-text">{{ErrorText.EventPlaceTypeID || ''}}</div>
                          </div>
                          <div class="value" data-type="EventPlaceTypeID">
                             <div class="value-value editable editable-special">{{Event.EventPlaceTypeID}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.EventTrend?'invalid':''}} {{Disabled.EventTrend?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Направление мероприятия</div>
                             <div class="error-text">{{ErrorText.EventTrend || ''}}</div>
                          </div>
                          <div class="value" data-type="EventTrend">
                             <div class="value-value editable editable-special">{{Event.EventTrend}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.EventCelebration?'invalid':''}} {{Disabled.EventCelebration?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Какой дате посвящено мероприятие</div>
                             <div class="error-text">{{ErrorText.EventCelebration || ''}}</div>
                          </div>
                          <div class="value" data-type="EventCelebration">
                             <div class="value-value editable editable-special">{{Event.EventCelebration}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Tags?'invalid':''}} {{Disabled.Tags?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Теги</div>
                             <div class="error-text">{{ErrorText.Tags || ''}}</div>
                          </div>
                          <div class="value" data-type="Tags">
                             <div class="value-value editable editable-special">{{Event.Tags}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Description?'invalid':''}} {{Disabled.Description?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Краткое описание (до 300 знаков)</div>
                             <div class="error-text">{{ErrorText.Description || ''}}</div>
                          </div>
                          <div class="value" data-type="Description">
                             <div class="value-value editable editable-special">{{Event.Description}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.PlanCount?'invalid':''}} {{Disabled.PlanCount?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Запланированное число посетителей</div>
                             <div class="error-text">{{ErrorText.PlanCount || ''}}</div>
                          </div>
                          <div class="value" data-type="PlanCount">
                             <div class="value-value editable editable-special">{{Event.PlanCount}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Curator?'invalid':''}} {{Disabled.Curator?'disabled':''}} l-invert">
                          <div class="name">
                             <div>ФИО ответственного, e-mail, телефон, должность</div>
                             <div class="error-text">{{ErrorText.Curator || ''}}</div>
                          </div>
                          <div class="value" data-type="Curator">
                             <div class="value-value editable editable-special">{{Event.Curator}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.TargetAudience?'invalid':''}} {{Disabled.TargetAudience?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Целевая аудитория</div>
                             <div class="error-text">{{ErrorText.TargetAudience || ''}}</div>
                          </div>
                          <div class="value" data-type="TargetAudience">
                             <div class="value-value editable editable-special">{{Event.TargetAudience}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.TargetAgeRange?'invalid':''}} {{Disabled.TargetAgeRange?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Возрастная категория</div>
                             <div class="error-text">{{ErrorText.TargetAgeRange || ''}}</div>
                          </div>
                          <div class="value" data-type="TargetAgeRange">
                             <div class="value-value editable editable-special">{{Event.TargetAgeRange}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.AgeLimit?'invalid':''}} {{Disabled.AgeLimit?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Возрастной ценз</div>
                             <div class="error-text">{{ErrorText.AgeLimit || ''}}</div>
                          </div>
                          <div class="value" data-type="AgeLimit">
                             <div class="value-value editable editable-special">{{Event.AgeLimit}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Guests?'invalid':''}} {{Disabled.Guests?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Районные СМИ, ТВ-каналы</div>
                             <div class="error-text">{{ErrorText.Guests || ''}}</div>
                          </div>
                          <div class="value" data-type="Guests">
                             <div class="value-value editable editable-special">{{Event.Guests}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Allow_Blind?'invalid':''}} {{Disabled.Allow_Blind?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Доступность для лиц с ОВЗ по зрению</div>
                             <div class="error-text">{{ErrorText.Allow_Blind || ''}}</div>
                          </div>
                          <div class="value" data-type="Allow_Blind">
                             <div class="value-value editable editable-special">{{Event.Allow_Blind}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Allow_Deaf?'invalid':''}} {{Disabled.Allow_Deaf?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Доступность для лиц с ОВЗ по слуху</div>
                             <div class="error-text">{{ErrorText.Allow_Deaf || ''}}</div>
                          </div>
                          <div class="value" data-type="Allow_Deaf">
                             <div class="value-value editable editable-special">{{Event.Allow_Deaf}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Allow_Disabled?'invalid':''}} {{Disabled.Allow_Disabled?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Доступность для лиц с ОВЗ опорно-двигательного аппарата</div>
                             <div class="error-text">{{ErrorText.Allow_Disabled || ''}}</div>
                          </div>
                          <div class="value" data-type="Allow_Disabled">
                             <div class="value-value editable editable-special">{{Event.Allow_Disabled}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.DateStart?'invalid':''}} {{Disabled.DateStart?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Дата начала</div>
                             <div class="error-text">{{ErrorText.DateStart || ''}}</div>
                          </div>
                          <div class="value" data-type="DateStart">
                             <div class="value-value editable ">{{Event.DateStart}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.DateFinish?'invalid':''}} {{Disabled.DateFinish?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Дата окончания</div>
                             <div class="error-text">{{ErrorText.DateFinish || ''}}</div>
                          </div>
                          <div class="value" data-type="DateFinish">
                             <div class="value-value editable ">{{Event.DateFinish}}</div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.Tiser?'invalid':''}} {{Disabled.Tiser?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Тизер</div>
                             <div class="error-text">{{ErrorText.Tiser || ''}}</div>
                          </div>
                          <div class="value" data-type="Tiser">
                             <div class="value-value editable editable-special" style="justify-content:center"><button class="l-button">ИЗМЕНИТЬ</button> </div>
                          </div>
                       </div>
                       <!--<div class="line-item l-row l-flex-between {{Invalid.IsModerated?'invalid':''}} {{Disabled.IsModerated?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Подтверждено модератором</div>
                             <div class="error-text">{{ErrorText.IsModerated || ''}}</div>
                          </div>
                          <div class="value" data-type="IsModerated">
                             <div class="value-value editable editable-special">{{Event.IsModerated}}</div>
                          </div>
                       </div>-->
                       <div class="line-item l-row l-flex-between {{Invalid.AfficheImage?'invalid':''}} {{Disabled.AfficheImage?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Афиша</div>
                             <div class="error-text"></div>
                          </div>
                          <div class="value" data-type="AfficheImage">
                             <div class="value-value editable editable-special">{{Event.AfficheImage}}</div>
                          </div>
                          <div class="center-img"><img class="affiche-img none" src=""></div>
                          <div><input type="file" class="affiche-image-file none" accept="image/*"></div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.IsModerated?'invalid':''}} {{Disabled.IsModerated?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Подтверждено модератором</div>
                             <div class="error-text">{{ErrorText.IsModerated || ''}}</div>
                          </div>
                          <div class="value" data-type="IsModerated">
                             <div class="value-value">{{Event.IsModerated}}</div>
                             <div style="text-align:center" class="{{NoneIfNoModer}}"><button class="l-button confirm-moder">ПОДТВЕРДИТЬ</button></div>
                          </div>
                       </div>
                       <div class="line-item l-row l-flex-between {{Invalid.MultipleDates?'invalid':''}} {{Disabled.MultipleDates?'disabled':''}} l-invert">
                          <div class="name">
                             <div>Повторения</div>
                             <div class="error-text">{{ErrorText.MultipleDates || ''}}</div>
                          </div>
                          <div class="value" data-type="MultipleDates">
                             <div class="value-value editable-none">{{Event.MultipleDates}}</div>
                          </div>
                       </div>
                    </div>
                </div>
                <div class="add-comps">
                    <button class="l-button delete-event {{NoneOnAdd}}">УДАЛИТЬ МЕРОПРИЯТИЕ</button>
                    <button class="l-button repeat-settings-button {{NotNoneOnAdd}}">ЗАДАТЬ ПЕРИОДИЧНОСТЬ</button>
                </div>
                <div class="repeat-settings">
                   <div class="one-day" data-day="1">
                      <div class="flex1"><label><input type="checkbox" class="check-day" data-day="1"> ПН</label></div>
                      <div><input disabled="" class="time-start" type="time" value="10:00">:<input disabled="" type="time" class="time-finish" value="18:00"></div>
                      <div>
                         <select class="each-week" disabled="">
                            <option value="0">Каждую неделю</option>
                            <option value="1">Раз в 2 недели</option>
                            <option value="2">Раз в 3 недели</option>
                            <option value="3">Раз в 4 недели</option>
                         </select>
                      </div>
                   </div>
                   <div class="one-day" data-day="2">
                      <div class="flex1"><label><input type="checkbox" class="check-day" data-day="2"> ВТ</label></div>
                      <div><input disabled="" class="time-start" type="time" value="10:00">:<input disabled="" type="time" class="time-finish" value="18:00"></div>
                      <div>
                         <select class="each-week" disabled="">
                            <option value="0">Каждую неделю</option>
                            <option value="1">Раз в 2 недели</option>
                            <option value="2">Раз в 3 недели</option>
                            <option value="3">Раз в 4 недели</option>
                         </select>
                      </div>
                   </div>
                   <div class="one-day" data-day="3">
                      <div class="flex1"><label><input type="checkbox" class="check-day" data-day="3"> СР</label></div>
                      <div><input disabled="" class="time-start" type="time" value="10:00">:<input disabled="" type="time" class="time-finish" value="18:00"></div>
                      <div>
                         <select class="each-week" disabled="">
                            <option value="0">Каждую неделю</option>
                            <option value="1">Раз в 2 недели</option>
                            <option value="2">Раз в 3 недели</option>
                            <option value="3">Раз в 4 недели</option>
                         </select>
                      </div>
                   </div>
                   <div class="one-day" data-day="4">
                      <div class="flex1"><label><input type="checkbox" class="check-day" data-day="4"> ЧТ</label></div>
                      <div><input disabled="" class="time-start" type="time" value="10:00">:<input disabled="" type="time" class="time-finish" value="18:00"></div>
                      <div>
                         <select class="each-week" disabled="">
                            <option value="0">Каждую неделю</option>
                            <option value="1">Раз в 2 недели</option>
                            <option value="2">Раз в 3 недели</option>
                            <option value="3">Раз в 4 недели</option>
                         </select>
                      </div>
                   </div>
                   <div class="one-day" data-day="5">
                      <div class="flex1"><label><input type="checkbox" class="check-day" data-day="5"> ПТ</label></div>
                      <div><input disabled="" class="time-start" type="time" value="10:00">:<input disabled="" type="time" class="time-finish" value="18:00"></div>
                      <div>
                         <select class="each-week" disabled="">
                            <option value="0">Каждую неделю</option>
                            <option value="1">Раз в 2 недели</option>
                            <option value="2">Раз в 3 недели</option>
                            <option value="3">Раз в 4 недели</option>
                         </select>
                      </div>
                   </div>
                   <div class="one-day" data-day="6">
                      <div class="flex1"><label><input type="checkbox" class="check-day" data-day="6"> СБ</label></div>
                      <div><input disabled="" class="time-start" type="time" value="10:00">:<input disabled="" type="time" class="time-finish" value="18:00"></div>
                      <div>
                         <select class="each-week" disabled="">
                            <option value="0">Каждую неделю</option>
                            <option value="1">Раз в 2 недели</option>
                            <option value="2">Раз в 3 недели</option>
                            <option value="3">Раз в 4 недели</option>
                         </select>
                      </div>
                   </div>
                   <div class="one-day" data-day="7">
                      <div class="flex1"><label><input type="checkbox" class="check-day" data-day="7"> ВС</label></div>
                      <div><input disabled="" class="time-start" type="time" value="10:00">:<input disabled="" type="time" class="time-finish" value="18:00"></div>
                      <div>
                         <select class="each-week" disabled="">
                            <option value="0">Каждую неделю</option>
                            <option value="1">Раз в 2 недели</option>
                            <option value="2">Раз в 3 недели</option>
                            <option value="3">Раз в 4 недели</option>
                         </select>
                      </div>
                   </div>
                   <div class="date-range-block">
                      <div data-lsmarti="3087">Интервал события</div>
                      <div class="repeat-date-range"></div>
                   </div>
                   <div class="button-center"><button class="l-button calculate-range">РАССЧИТАТЬ</button></div>
                </div>
            </div>
            <div class="foot l-row l-flex-center">
                <button class="l-button button button2 btn-cancel">ОТМЕНА</button>
                <button class="l-button button btn-confirm">СОХРАНИТЬ</button>
            </div>
        </div>`,
    Animation: {
        Show: 'animation-show',
        Hide: 'animation-hide'
    },
    Load: '',
    Proto: {
        HeaderEditOrAdd: 'edit',
        DaysOfWeek: [
            {Num: 1, Name: 'ПН', Disable: false},
            {Num: 2, Name: 'ВТ', Disable: false},
            {Num: 3, Name: 'СР', Disable: false},
            {Num: 4, Name: 'ЧТ', Disable: false},
            {Num: 5, Name: 'ПТ', Disable: false},
            {Num: 6, Name: 'СБ', Disable: false},
            {Num: 7, Name: 'ВС', Disable: false}
        ],
        Event: {
            AgeLimit: 0,
            Allow_Blind: false,
            Allow_Deaf: false,
            Allow_Disabled: false,
            Curator: Lure.User.ID,
            DateFinish: Lure.Date().DateCs,
            DateStart: Lure.Date().DateCs,
            Description: "",
            EventCelebration: 0,
            EventKindID: 1,
            EventTrend: 12,
            EventTypeID: 1,
            Guests: "Нет",
            ID: 0,
            Initiator: 'ГЗ',
            InvolvedStatus: 'организатор',
            LibraryID: 0,
            Name: "",
            PlanCount: 0,
            Price: 0,
            Tags: "",
            TargetAgeRange: "0+",
            TargetAudience: "0-100",
            EventPlaceTypeID: 1,
            MultipleDates: [],
            Tiser: '',
            IsModerated: false,
            AfficheImage: ''
        },
        Disabled: {/* AgeLimit: false, .... */},
        Invalid: {},
        ErrorText: {}
    },
    PropFormat: {
        Invalid: (x, p) => !p.Invalid ? '' : 'invalid',
        Disabled: x => x ? 'disabled' : '',
        'Event.EventTypeID': x => D.LibraryEventTypeDict[x] || '', // 1: "Бесплатное мероприятие", 2: "Платное мер...
        'Event.EventKindID': x => D.EventTypeDict[x] || '', // 0: "акция", 1: "бал", 2: "беседа", ...
        'Event.EventCelebration': x => D.CelebrationDict[x] || '', // 0: "Нет", 1: "Библионочь (общегородское мероприятие)", 2: "Бит
        'Event.LibraryID': x => (Lure.User.Cache.LibraryList.filter(lib => lib.ID === x)[0] || {Name: ''}).Name,
        'Event.DateStart': x => Lure.Date(x).Format(Lure.Culture.DateFormat),
        'Event.DateFinish': x => Lure.Date(x).Format(Lure.Culture.DateFormat),
        'Event.EventPlaceTypeID': x => D.EventPlaceTypeDict[x],
        'Event.AgeLimit': x => x + '+',
        'Event.Price': x => x === 0 ? 'бесплатно' : (x + ' ' + (x % 10 === 1 && x % 100 !== 11 ? 'рубль' : (x % 10 >= 2 && x % 10 <= 4 && (x % 100 < 11 || x % 100 > 19)) ? 'рубля' : ' рублей')),
        'Event.Allow_Blind': x => x ? 'доступно' : 'недоступно',
        'Event.Allow_Deaf': x => x ? 'доступно' : 'недоступно',
        'Event.Allow_Disabled': x => x ? 'доступно' : 'недоступно',
        'Event.Curator': x => {
            let d = Lure.User.Cache.UserDict[x];
            return d ? [d.Name, d.Email, d.Phone, d.Position].join(', ') : 'Не назначен'
        },
        'Event.MultipleDates': x => x.map(d => '<div>' + Lure.Date(d[0]).Format('DD MMMM YYYY HH:mm', true) + ' - ' + Lure.Date(d[1]).Format('HH:mm') + '</div>').join('') || 'Нет повторений',
        'Event.EventTrend': x => D.EventTrendsDict[parseInt(x)] || x,
        'Event.AfficheImage': x => 'Изменить',
        'Event.IsModerated': x => x ? 'Да' : 'Нет',
        HeaderEditOrAdd: x => x === 'edit' ? 'Редактирование данных' : 'Добавление',
        NoneOnAdd: (x, p) => p.HeaderEditOrAdd === 'edit' ? '' : 'none',
        NotNoneOnAdd: (x, p) => p.HeaderEditOrAdd === 'edit' ? 'none' : '',
        ErrorText: x => x || '',
        /**
         * @this AfficheEditor
         * @returns {string}
         */
        NoneIfNoModer: function () {return this.EditingNewEv ?  'none' : ( Lure.User.Roles.indexOf(D.Role.Moderator) !== -1 ? '' : 'none')}
    },
    PropTypes: {
        'Event.DateStart': Lure.PropTypes.Date,
        'Event.DateFinish': Lure.PropTypes.Date,
    },
    Props: function () {
        this.ButtonConfirm = this.Select('.btn-confirm');
        this.Editing = false;
        this.EditingNewEv = false;
        this.PeriodPickers = [];
        this.AfficheFileInput = this.Select('.affiche-image-file');
        this.AffImage = this.Select('.affiche-img');
        this.LoadAffImage = new Lure.Load({Target: this.AffImage.parentElement.parentElement});

        let EConvert = x => Object.entries(x).map(([k, v]) => ({Key: k, Value: v}));

        this.EventTypes = EConvert(D.LibraryEventTypeDict);
        this.EventKinds = EConvert(D.EventTypeDict).filter(x => x.Key > 0);
        this.EventCelebrations = EConvert(D.CelebrationDict);
        this.EventTrends = EConvert(D.EventTrendsDict);
        this.UserList = Lure.User.Cache.UserList.map(x => ({Key: x.ID, Value: [x.Name, x.Email, x.Phone, x.Position].join(', ')}));
    },
    Hide: function () {
        this.Editing = false;
    },
    Show: function () {
        this.Select('.repeat-settings').classList.add('none');
        if (this.DaysElems)
            for (let d of this.DaysElems)
                if (d.check.checked) d.check.click();
    },
    Methods: function () {
        this.CancelEdit = function () {
            InputBox.Hide();

            this.Parent.ToggleSelectedEventRow(null, false);
            for (let pp of this.PeriodPickers)
                pp.Hide();
            this.PeriodPickers = [];
            this.Hide();
        };
        this.Cancel = function () {
            this.EditingNewEv = false;
            this.CancelEdit();
        };
        this.Confirm = function () {
            if (this.CheckWrong()) { // true - что-то неверно
                Lure.System.ShowError('Проверьте правильность заполнения полей');
                return;
            }

            this.SaveEventInfo(this.Proto.Data.Event).then(() => {
                this.EditingNewEv = false;
                this.CancelEdit();
            });
        };
        this.CheckWrong = function (single) {
            let invalid = false;
            let toCheck;
            if (single)
                toCheck = [single];
            else
                toCheck = ['DateStart', 'DateFinish', 'Description', 'Name', 'InvolvedStatus', 'EventTypeID', 'EventKindID', 'Price', 'TargetAudience', 'TargetAgeRange', 'PlanCount', 'EventTrend', 'Guests'];
            let ev = this.Proto.Data.Event, er = this.Proto.Data.ErrorText, inv = this.Proto.Data.Invalid;
            for (let key of toCheck)
                switch (key) {
                    case 'Price':
                        // debugger
                        if (ev[key] > 0 && (ev['Initiator'] === 'ГЗ')) {
                            inv[key] = true; invalid = true; er[key] = '*Мероприятие в рамках ГЗ не может быть платным';
                        } else if (ev[key] > 0 && (['1', '3', '5'].indexOf(ev['EventTypeID'] + '') > -1)) {
                            inv[key] = true; invalid = true; er[key] = '*Бесплатное мероприятие не может иметь цену';
                        } else if(ev[key] === 0 && ['2', '4'].indexOf(ev['EventTypeID']) > -1) {
                            inv[key] = true; invalid = true; er[key] = '*Укажите цену для платного мероприятия';
                        } else {inv[key] = false; er[key] = '';}
                        break;
                    case 'EventTypeID':
                        if ((['2', '4'].indexOf(ev[key] + '') > -1) && ev['Initiator'] === 'ГЗ') {
                            inv[key] = true; invalid = true; er[key] = '*Мероприятие в рамках ГЗ не может быть платным';
                        } else {inv[key] = false; er[key] = '';}
                        break;
                    case 'EventKindID':
                        if (ev[key] + '' === '14' && (['3', '4'].indexOf(ev['EventTypeID'] + '') > -1)) {
                            inv[key] = true; invalid = true; er[key] = '*Указан клуб, укажите в типе клуб';
                        } else {inv[key] = false; er[key] = '';}
                        break;
                    default:
                        if (ev[key] === null || ev[key] === 0 || ev[key] === '') {
                            inv[key] = true; invalid = true; er[key] = '*Поле не может быть пустым, введите значение';
                        } else {inv[key] = false; er[key] = '';}
                }
            this.Proto.Refresh();
            return invalid;
        };
        this.SaveEventInfo = function (data) {
            // console.log(data);
            this.Load.Show();
            data.DateStart = Lure.Date(data.DateStart).DateCs;
            data.DateFinish = Lure.Date(data.DateFinish).DateCs;
            if (this.EditingNewEv === true)
                return api.DataInput_Event_Add(data.LibraryID, data, {
                    Then: (res)=>{
                        if (res < 0)
                            return Lure.System.Error('Не удалось зарегистрировать событие');
                        this.Parent.RefreshData();
                        if (this.AfficheFileInput.files[0])
                            return api.DataInput_Event_AddFile(this.AfficheFileInput.files[0], {LibraryEventID: res});
                    },
                    Finally: () => this.Load.Hide()
                });
            else
                return api.DataInput_Event_Edit(data.LibraryID, data.ID, data, {
                    Then: () => {
                        this.Parent.RefreshData();
                        if (this.AfficheFileInput.files[0])
                            return api.DataInput_Event_AddFile(this.AfficheFileInput.files[0], {LibraryEventID: data.ID});
                    },
                    Finally: () => this.Load.Hide()
                });
        };

        this.CreateNewEvent = function () {
            this.EditingNewEv = true;
            this.ShowEvent();
        };
        this.ShowEvent = function (event) {
            if (this.Editing) {
                Lure.System.Notice('Вы уже редактируете мероприятие.<br>Закройте его или сохраните, чтобы редактировать другое');
                return false;
            } else
                this.Editing = true;
            if (!this.EditingNewEv)
                this.Proto.SetProperty('HeaderEditOrAdd', 'edit');
            else
                this.Proto.SetProperty('HeaderEditOrAdd', 'add');
            let startDisabled = {};
            if (!event) {
                event = {
                    AgeLimit: 0,
                    Allow_Blind: false,
                    Allow_Deaf: false,
                    Allow_Disabled: false,
                    Curator: Lure.User.ID,
                    DateFinish: Lure.Date().DateCs,
                    DateStart: Lure.Date().DateCs,
                    Description: "",
                    EventCelebration: 0,
                    EventKindID: 1,
                    EventTrend: 12,
                    EventTypeID: 1,
                    Guests: "Нет",
                    ID: 0,
                    Initiator: 'ГЗ',
                    InvolvedStatus: 'организатор',
                    LibraryID: parseInt(this.Parent.LibSelect.value),
                    Name: "",
                    PlanCount: 0,
                    Price: 0,
                    Tags: "",
                    TargetAgeRange: "0+",
                    TargetAudience: "0-100",
                    EventPlaceTypeID: 1,
                    MultipleDates: [],
                    Tiser: '',
                    AfficheImage: '',
                    IsModerated: false
                };
                startDisabled = {Price: true};
            }
/*            let fieldLocale = {
                AgeLimit: 'Возрастной ценз',
                Allow_Blind: 'Доступность для лиц с ОВЗ по зрению',
                Allow_Deaf: 'Доступность для лиц с ОВЗ по слуху',
                Allow_Disabled: 'Доступность для лиц с ОВЗ опорно-двигательного аппарата',
                Curator: 'ФИО ответственного, e-mail, телефон, должность',
                DateStart: 'Дата начала',
                DateFinish: 'Дата окончания',
                Description: 'Краткое описание (до 300 знаков)',
                EventCelebration: 'Какой дате посвящено мероприятие', // CelebrationDict
                EventKindID: 'Вид мероприятия',
                EventTrend: 'Направление мероприятия',
                EventTypeID: 'Тип мероприятия',
                Guests: "Районные СМИ, ТВ-каналы",
                ID: '№',
                InvolvedStatus: 'Статус участия (организатор / участник)',
                LibraryID: 'Наименование подразделения',
                Name: 'Наименование мероприятия',
                PlanCount: 'Запланированное число посетителей',
                Price: 'Бесплатное / платное / стоимость посещения',
                TargetAgeMax: 'Возрастная категория (макс)',
                TargetAgeMin: 'Возрастная категория (мин)',
                TargetAgeRange: 'Возрастная категория',
                TargetAudience: 'Целевая аудитория',
                Tags: 'Теги',
                Initiator: 'Мероприятие проводится в рамках',
                EventPlaceTypeID: 'Стационар / внестационар',
                MultipleDates: 'Повторения',
                Tiser: 'Тизер',
                IsModerated: 'Подтверждено модератором',
                AfficheImage: 'Афиша'
            };*/
            this.Proto.Data.Event = event;
            this.Proto.Data.Disabled = startDisabled;
            this.Proto.Data.ErrorText = {};
            this.Proto.Data.Invalid = {};
            this.AfficheFileInput.value = '';
            this.Proto.Refresh();
            this.AffImage.classList.add('none');
            if (!this.EditingNewEv) {
                this.LoadAffImage.Show();
                api.DataInput_Event_GetFile(event.LibraryID, event.ID, {
                    Then: r => {
                        if (r.size === 0) return;
                        let reader = new FileReader();
                        reader.onloadend = () => {this.AffImage.src = reader.result; this.AffImage.classList.remove('none');};
                        reader.readAsDataURL(r);
                    },
                    Finally: () => this.LoadAffImage.Hide()
                });
            } else this.AffImage.classList.add('none');
            this.Show();
            return event;
        };
        this.HandleEdit = function (elem, type, line) {
            if (this.Proto.Data.Disabled[type]) return;
            let runInpDialog = true;
            let runNumPad = false;
            let data, caption, customFun = () => {};
            switch (type) {
                /* case 'LibraryID':
                    caption = 'Наименование подразделения';
                    data = Lure.UserCache.LibraryList.map(x => ({Key: x.ID, Value: x.Name}));
                    break;*/
                case 'AfficheImage':
                    this.AfficheFileInput.click();
                    this.AfficheFileInput.onchange = e => {
                        let file = this.AfficheFileInput.files[0];
                        this.Proto.SetProperty('Event.AfficheImage', file.name);
                        let reader = new FileReader();
                        reader.onloadend = () => {this.AffImage.src = reader.result; this.AffImage.classList.remove('none');};
                        reader.readAsDataURL(file);
                    };
                    return;
                case 'Tiser':
                    caption = 'Тизер';
                    break;
                case 'Guests':
                    caption = 'Районные СМИ, ТВ-каналы';
                    break;
                case 'Name':
                    caption = 'Название мероприятия';
                    break;
                case 'InvolvedStatus':
                    caption = 'Статус участия';
                    data = [{Key: 'участник', Value: 'участник'}, {Key: 'организатор', Value: 'организатор'}];
                    break;
                case 'EventKindID':
                    data = this.EventKinds;
                    caption = 'Вид мероприятия';
                    break;
                case 'EventTypeID':
                    data = this.EventTypes;
                    caption = 'Тип мероприятия';
                    customFun = (line) => {
                        let p = this.Proto.Data;
                        p.Event['EventTypeID'] = parseInt(p.Event['EventTypeID']);
                        if (p.Event['EventTypeID'] === 5) {
                            p.Event['EventKindID'] = 8;
                            p.Disabled['EventKindID'] = true;
                        } else if (p.Event['EventTypeID'] === 3 || p.Event['EventTypeID'] === 4) {
                            p.Event['EventKindID'] = 14;
                            p.Disabled['EventKindID'] = true;
                        } else p.Disabled['EventKindID'] = false;

                        if (p.Event['EventTypeID'] === 1 || p.Event['EventTypeID'] === 3) {
                            p.Event['Price'] = 0;
                            p.Disabled['Price'] = true;
                        } else p.Disabled['Price'] = false;
                        // this.Proto.Refresh();
                    };
                    break;
                case 'EventPlaceTypeID':
                    data = [{Key: D.EventPlaceType.Stationary, Value: 'Стационар'}, {Key: D.EventPlaceType.NonStationary, Value: 'Внестационар'}];
                    caption = 'Стационар / внестационар';
                    break;
                case 'EventTrend':
                    caption = 'Направление мероприятия';
                    data = this.EventTrends;
                    break;
                case 'EventCelebration':
                    data = this.EventCelebrations;
                    caption = 'Какой дате посвящено мероприятие';
                    break;
                case 'Tags':
                    caption = 'Теги';
                    break;
                case 'Description':
                    caption = 'Краткое описание';
                    break;
                /*case 'DateStart':
                case 'DateFinish':
                    let self = this;
                    let pp;
                    if (!elem.pp) {
                        pp = new Lure.PeriodPicker({
                            Target: elem,
                            NoRange: true,
                            DateTarget: Lure.Date(self.Proto.Data.Event[type]),
                            AutoConfirm: true,
                            OnConfirm: function () {
                                self.Proto.SetProperty('Event.'+ type, Lure.Date(this.Date).DateCs);
                                elem.pp = '';
                            }
                        });
                        elem.pp = pp;
                        this.PeriodPickers.push(pp);
                    } else
                        pp = elem.pp;
                    pp.Show();
                    runInpDialog = false;
                    break;*/
                case 'PlanCount':
                    caption = 'Запланированное число посетителей';
                    runNumPad = true;
                    runInpDialog = false;
                    break;
                case 'Curator':
                    caption = 'ФИО ответственного';
                    data = this.UserList;
                    break;
                case 'TargetAudience':
                    caption = 'Целевая аудитория';
                    // break;
                    let split = this.Proto.Data.Event['TargetAudience'].split('-');
                    if (!split[1])
                        split = [];
                    InputBox.Run(elem, '',
                        x => {
                            this.Proto.Data.Event['TargetAudience'] = x.join('-');
                            this.Proto.Data.Invalid['TargetAudience'] = false;
                            this.Proto.Refresh();
                        }, {
                            Caption: caption,
                            Type: 'range',
                            MinValue: 0,
                            MaxValue: 100,
                            Value: split
                        });
                    return;
                case 'AgeLimit':
                    caption = 'Возр. ценз';
                    data = (new Array(10)).Select((x, i) => ({Key: i * 2, Value: i * 2 + '+'}));
                    break;
                case 'TargetAgeRange':
                    caption = 'Возр. категория';
                    break;
                case 'Allow_Blind':
                    data = [{Key: true, Value: 'доступно'}, {Key: false, Value: 'недоступно'}];
                    caption = 'ОВЗ по зрению';
                    break;
                case 'Allow_Deaf':
                    data = [{Key: true, Value: 'доступно'}, {Key: false, Value: 'недоступно'}];
                    caption = 'ОВЗ по слуху';
                    break;
                case 'Allow_Disabled':
                    data = [{Key: true, Value: 'доступно'}, {Key: false, Value: 'недоступно'}];
                    caption = 'ОВЗ по опорно-двигательному аппарату';
                    break;
                case 'Price':
                    caption = 'Стоимость посещения';
                    runNumPad = true;
                    runInpDialog = false;
                    break;
                case 'Initiator':
                    data = [{Key: 'ГЗ', Value: 'ГЗ'}, {Key: 'В', Value: 'В'}, {Key: 'И', Value: 'И'}];
                    caption = 'Проводится в рамках';
                    break;
                default:
                    return;
            }
            let needHuge = ['Name', 'Curator', 'Description', 'Tiser'];
            if (runInpDialog) {
                let CustomWidth = needHuge.indexOf(type) > -1 ? 300 : 0;
                if (type === 'Tiser')
                    CustomWidth = 600;

                InputBox.Run(elem, this.Proto.Data.Event[type],
                    x => {
                        let d = this.Proto.Data.Event;
                        if (x === 'true') d[type] = true;
                        else if (x === 'false') d[type] = false;
                        else if (parseInt(x) + '' === x + '') d[type] = parseInt(x);
                        else d[type] = x;
                        // d.Edited = true;
                        this.Proto.Data.Invalid[type] = false;
                        this.Proto.Data.ErrorText[type] = '';
                        customFun(line);
                        this.Proto.Refresh();
                        this.CheckWrong(/*type*/);
                    }, {
                        Caption: caption,
                        KeyValue: 'Key',
                        KeyView: 'Value',
                        Data: data,
                        TextArea: needHuge.indexOf(type) > -1,
                        Type: type === 'Tiser' ? 'editor' : (needHuge.indexOf(type) > -1 ? 'text' : 'auto'),
                        CustomWidth: CustomWidth,
                        CustomHeight: needHuge.indexOf(type) > -1 ? 120 : 0
                    });
            }
            if (runNumPad)
                InputBox.Run(elem, this.Proto.Data.Event[type],
                    x => {
                        let d = this.Proto.Data.Event;
                        d[type] = parseInt(x);
                        this.Proto.Data.Invalid[type] = false;
                        this.Proto.Data.ErrorText[type] = '';
                        this.Proto.Refresh();
                        this.CheckWrong(/*type*/);
                    }, {Caption: caption});
        };
        this.CalculateDateRange = function () {
            let dateStart = ((new Date) > this.RepeatDateRange.Date[0] ? new Date : this.RepeatDateRange.Date[0]),
                dateEnd = this.RepeatDateRange.Date[1],
                arr = this.DaysElems,
                res = [],
                skip = [0, 0, 0, 0, 0, 0, 0];

            for (let d = new Date(dateStart); d <= dateEnd; d.setDate(d.getDate() + 1)) {
                let w = d.getDay() === 0 ? 6 : d.getDay() - 1;
                if (arr[w].check.checked) {
                    if (!arr[w].timeStart.value || !arr[w].timeFinish.value) {Lure.System.Error('Время не задано, проверьте правильность'); return}
                    if (skip[w] === 0) {
                        res.push([
                            Lure.Date(new Date(d.getFullYear(), d.getMonth(), d.getDate(), arr[w].timeStart.value.split(':')[0], arr[w].timeStart.value.split(':')[1])).DateCs,
                            Lure.Date(new Date(d.getFullYear(), d.getMonth(), d.getDate(), arr[w].timeFinish.value.split(':')[0], arr[w].timeFinish.value.split(':')[1])).DateCs
                        ]);
                        skip[w] = parseInt(arr[w].eachWeek.value);
                    }
                    else
                        skip[w]--;
                }
            }
            this.Select('.repeat-settings').classList.add('none');
            this.Proto.SetProperty('Event.MultipleDates', res);
        };
    },
    AfterBuild: function () {
        this.ButtonConfirm.onclick = () => this.Confirm();
        this.Select('.btn-cancel').onclick = () => this.Cancel();
        this.AddEventListener('click', '.line-item .value', e => this.HandleEdit(e.currentTarget, e.currentTarget.dataset['type'], e.currentTarget.parentElement.dataset['line']));

        let b = this.Select('.repeat-settings-button');
        b.onclick = () => {
            if (!this.RepeatDateRange)
                this.RepeatDateRange = new Lure.PeriodPicker({
                    Target: this.Select('.repeat-settings .repeat-date-range'),
                    Min: Lure.Date().DayStart,
                    OnConfirm: function () {
                    }
                });
            if (!this.DaysElems) {
                this.DaysElems = [];
                for (let i = 1; i <= 7; i++) {
                    let p = this.Select('.one-day[data-day="' + i + '"]');
                    this.DaysElems.push({
                        Day: i,
                        check: Lure.Select('.check-day', p),
                        timeStart: Lure.Select('.time-start', p),
                        timeFinish: Lure.Select('.time-finish', p),
                        eachWeek: Lure.Select('.each-week', p),
                    });
                }
            }
            this.Select('.repeat-settings').classList.remove('none');
            b.classList.add('none');
        };

        this.AddEventListener('click', '.add-comps .delete-event', () => {
            Lure.Confirm("УДАЛЕНИЕ МЕРОПРИЯТИЙ", 'Удалить это мероприятие?', {
                OnAgree: () => {
                    api.DataInput_Event_Remove(this.Proto.Data.Event['LibraryID'], this.Proto.Data.Event['ID'], {
                        Then: r => {
                            this.Cancel();
                            this.Parent.RefreshData();
                        }
                    });
                }, OnCancel: () => {}
            });
        });

        this.AddEventListener('click', '.calculate-range', e => this.CalculateDateRange());
        this.AddEventListener('click', '.confirm-moder', e => {
            Lure.Confirm("МОДЕРИРОВАНИЕ МЕРОПРИЯТИЙ", 'Подтвердить правильность выбранных мероприятий?', {
                OnAgree: async () => {
                    await api.DataInput_Event_Moderate(this.Proto.Data.Event.LibraryID, [this.Proto.Data.Event.ID]);
                    let PLine = this.Parent.Controller.GetDataItemByDelegate(x => x.ID === this.Proto.Data.Event.ID);
                    PLine.Data.IsModerated = true;
                    this.Parent.Controller.Refresh(PLine.LineID);
                    this.Proto.SetProperty('Event.IsModerated', true);

                }, OnCancel: () => {}
            });
        });

        this.AddEventListener('change', '.check-day', e => {
            let n = e.currentTarget.dataset['day'] - 1;
            this.DaysElems[n].timeStart.disabled = !e.currentTarget.checked;
            this.DaysElems[n].timeFinish.disabled = !e.currentTarget.checked;
            this.DaysElems[n].eachWeek.disabled = !e.currentTarget.checked;
        });
    }
});
DataInput.DataAfficheInput.EventsEditor = AfficheEditor;