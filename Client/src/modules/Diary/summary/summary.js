const Static = require("../../_common/static");
const D = require("../../_common/dictionary");
const HistorySubscription = require('../../_common/history-master/history-subscription');
//const NumPad = require("../../_common/numpad/numpad");
const InputBox = require("../../_common/input-box/input-box");

Diary.Summary = new Lure.Content({
    Parent: Diary,
    Name: 'Summary',
    Type: 'diary-content',
    Control:{
        Target: '#nav-diary-summary',
    },
    Permission: {
        Roles: [D.Role.DairySummary],
        Write: [D.Role.DairySummaryEdit]
    },
    Content: `<div class="summary">
                <div class="bread l-row">
                    <div class="li bread-date">
                       <div>Дата внесенных данных: &nbsp;</div>
                       <div class="flex-100">
                        <select class="date-list">
                            {{#each Months}}
                                <option value="{{Value}}">{{Text}}</option>
                            {{#endeach}}
                        </select>
                       </div>
                    </div>
                    <div class="li bread-library l-row l-flexa-center flex-100">
                      <div>Подразделение: &nbsp;&nbsp;</div>
                      <div class="flex-100 library-tree-control">__</div>
                    </div>
                    <div class="li button-holder l-row">
                        <button class="l-button button btn-refresh">Обновить</button>
                    </div>
                    <div class="li button-holder l-row">
                      <button class="l-button button button-get-xls">Экспорт</button>
                      <div class="edit-controls l-row {{#if (o.LibraryIDListSelected.length #more 1) ? 'none':''}}">
                        <button class="l-button button button-clear">Очистить</button>
                        <button class="l-button button button-save">Сохранить</button>
                      </div>
                   </div>
                </div>
              </div>`,
    Load: '',
    State: {
        Months: [],
        DateSelected: null,
        LibraryIDListSelected: [],
    },
    GetSet: {
        get CurrentPart(){
            return this.GetSubContentList()
                .Where(x=>x.isActive && x.Type !== 'side-abs-content')
                .FirstOrDefault();
        },
        get CurrentLibraries(){
            return this.Proto.Data.LibraryIDListSelected;
        },
        get CurrentLibraryID(){
            return this.Proto.Data.LibraryIDListSelected.FirstOrDefault();
        },
        get CurrentDate(){
            return this.Proto.Data.DateSelected;
        }
    },
    Props: function () {
        this.D = {
            P1V2: {
                Name: 'Всего',
                Dependencies: ['P1V4', 'P1V7'],
                Description: '1.2 = 1.4 + 1.7',
                Check: null,
                GetValue: (Data)=>{
                    return Data.P1V4.Value + Data.P1V7.Value;
                },
            },
            P1V3: {
                Name: 'Вновь записавшихся',
                Dependencies: ['P1V2'],
                Description: '1.3 <= 1.2',
                Check: (Data)=>{
                    return Data.P1V3.Value <= Data.P1V2.Value
                },
                GetValue: null
            },
            P1V4: {
                Name: 'Всего стационар',
                Dependencies: ['P1V7', 'P1V8', 'P1V9', 'P1V10', 'P1V11', 'P1V12', 'P1V13', 'P1V14', 'P1V15', 'P1V16'],
                //Description: '1.4 + 1.7 = сумма с 1.8 по 1.16',
                Description: '1.4 = 1.5 + 1.6 + 1.6.1',
                // Check: (Data)=>{
                //     return Data.P1V4.Value + Data.P1V7.Value === Data.P1V8.Value + Data.P1V9.Value + Data.P1V10.Value + Data.P1V11.Value + Data.P1V12.Value + Data.P1V13.Value + Data.P1V14.Value + Data.P1V15.Value + Data.P1V16.Value
                // },
                Check: null,
                GetValue: (Data)=>{
                    return Data.P1V5.Value + Data.P1V6.Value + Data.P1V61.Value //1.4 = 1.5+1.6+1.6.1
                }
            },
            P1V5: {
                Name: 'Возраст до 14 лет',
                Dependencies: ['P1V8', 'P1V9', 'P1V10'],
                Description: '1.5 =  сумма с 1.8 по 1.10',
                Check: null,
                GetValue: (Data)=>{
                    return Data.P1V8.Value + Data.P1V9.Value + Data.P1V10.Value// + Data.P1V11.Value
                }
            },
            P1V6: {
                Name: 'Возраст 14-30 лет',
                Dependencies: ['P1V5', 'P1V8', 'P1V9', 'P1V10', 'P1V11'],
                Description: '1.5 + 1.6 + 1.6.1<= 1.2',
                Check: (Data)=>{
                    return Data.P1V5.Value + Data.P1V6.Value + Data.P1V61.Value <= Data.P1V2.Value
                },
                GetValue: null
            },
            P1V61: {
                Name: 'Возраст 14-30 лет',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null
            },
            P1V7: {
                Name: 'Удаленные пользователи',
                Dependencies: ['P1V4', 'P1V8', 'P1V9', 'P1V10', 'P1V11', 'P1V12', 'P1V13', 'P1V14', 'P1V15', 'P1V16'],
                Description: '1.4 + 1.7 = сумма с 1.8 по 1.16',
                Check: (Data)=>{
                    return Data.P1V4.Value + Data.P1V7.Value === Data.P1V8.Value + Data.P1V9.Value + Data.P1V10.Value + Data.P1V11.Value + Data.P1V12.Value + Data.P1V13.Value + Data.P1V14.Value + Data.P1V15.Value + Data.P1V16.Value
                },
                GetValue: null
            },
            P1V8: {
                Name: 'д/ш',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null
            },
            P1V9: {
                Name: 'Школьники 7-10 лет',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null
            },
            P1V10: {
                Name: 'Школьники 11-14 лет',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null
            },
            P1V11: {
                Name: 'Старшеклассники',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null
            },
            P1V12: {
                Name: 'РДЧ',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null
            },
            P1V13: {
                Name: 'Пенсионеры',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null
            },
            P1V14: {
                Name: 'Служащие',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null
            },
            P1V15: {
                Name: 'Студенты',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null
            },
            P1V16: {
                Name: 'Прочие',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null
            },
            P1V17: {
                Name: 'Всего посещений',
                Dependencies: ['P1V18', 'P1V19'],
                Description: '',
                Check: null,
                GetValue: (Data)=> Data.P1V18.Value + Data.P1V19.Value,
            },
            P1V18: {
                Name: 'Стационар',
                Dependencies: ['P1V21', 'P1V34', 'P1V36'],
                Description: '1.18 >= 1.21 + 1.34 + 1.36',
                Check: (Data)=> Data.P1V18.Value >= Data.P1V21.Value+Data.P1V34.Value+Data.P1V36.Value,
                GetValue: null,
            },
            P1V19: {
                Name: 'Внестационар',
                Dependencies: ['P1V27'],
                Description: '1.19 >= 1.27',
                Check: (Data)=> Data.P1V19.Value >= Data.P1V27.Value,
                GetValue: null,
            },
            P1V20: {
                Name: 'Интернет',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P1V21: {
                Name: 'Массовые мероприятия стационар',
                Dependencies: ['P1V22'],
                Description: '',
                Check: null,
                GetValue: (Data)=> Data.P1V22.Value,
            },
            P1V22: {
                Name: 'Посещение мероприятий стац. бесплатные',
                Dependencies: ['P1V22'],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P1V23: {
                Name: 'Посещение мероприятий стац. платные',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P1V24: {
                Name: 'Всего мероприятий стационар',
                Dependencies: ['P1V25'],
                Description: '',
                Check: null,
                GetValue: (Data)=> Data.P1V25.Value,
            },
            P1V25: {
                Name: 'Кол-во мероприятий стац. бесплатные',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P1V26: {
                Name: 'Кол-во мероприятий стац. платные',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P1V27: {
                Name: 'Всего посещений мероприятий внестационар',
                Dependencies: ['P1V28'], //P62V17
                Description: '',
                Check: null,
                GetValue: (Data)=> Data.P1V28.Value //(Data)=> Data.P62V17.Value,
            },
            P1V28: {
                Name: 'Посещение мероприятий внестац. бесплатные',
                Dependencies: ['P62V17'],
                Description: '',
                Check: null,
                GetValue: null,//(Data)=> Data.P62V17.Value,
            },
            P1V29: {
                Name: 'Посещение мероприятий внестац. платные',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P1V30: {
                Name: 'Всего мероприятий внестационар',
                Dependencies: ['P1V31'], //P62V16
                Description: '',
                Check: null,
                GetValue: (Data)=> Data.P1V31.Value,
            },
            P1V31: {
                Name: 'Кол-во мероприятий внестац. бесплатные',
                Dependencies: [], //'P62V16'
                Description: '',
                Check: null,
                GetValue: null,//(Data)=> Data.P62V16.Value,
            },
            P1V32: {
                Name: 'Кол-во мероприятий внестац. платные',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P1V33: {
                Name: 'Кол-во заседаний клуба бесплатно',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P1V34: {
                Name: 'Число посещений клуба',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P1V35: {
                Name: 'Кол-во заседаний клуба платно',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P1V36: {
                Name: 'Число посещений клуба платно',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },

            P2V2: {
                Name: 'Всего выдано книг и брошюр',
                Dependencies: ['P2V3','P2V5', 'P2V6', 'P2V7'],
                Description: '2.2 = 2.3 + 2.5 + 2.6 + 2.7 = сумма c 2.8 по 2.18',
                Check: null,
                GetValue: (Data)=>Data.P2V3.Value + Data.P2V5.Value + Data.P2V6.Value + Data.P2V7.Value,
            },
            P2V3: {
                Name: 'Выдано на физических носителях',
                Dependencies: ['P2V5', 'P2V6', 'P2V7', 'P2V8', 'P2V9', 'P2V11', 'P2V12', 'P2V13', 'P2V14', 'P2V15', 'P2V16', 'P2V17', 'P2V18'],
                Description: '2.2 = 2.3 + 2.5 + 2.6 + 2.7 = сумма c 2.8 по 2.18',
                Check: (Data)=>{
                    return Data.P2V3.Value + Data.P2V5.Value + Data.P2V6.Value + Data.P2V7.Value ===
                       Data.P2V8.Value +Data.P2V9.Value+Data.P2V10.Value +Data.P2V11.Value +Data.P2V12.Value +Data.P2V13.Value +Data.P2V14.Value +Data.P2V15.Value +Data.P2V16.Value +Data.P2V17.Value +Data.P2V18.Value;
                },
                GetValue: null,
            },
            P2V4: {
                Name: 'Выдано внестационар и на дому',
                Dependencies: ['P61V4', 'P62V4'],
                Description: '2.4 = 6.1.4 + 6.2.4',
                Check: null,
                GetValue: (Data)=> Data.P61V4.Value + Data.P62V4.Value,
            },
            P2V5: {
                Name: 'Выдано из электронной библиотеки',
                Dependencies: ['P2V3', 'P2V6', 'P2V7', 'P2V8', 'P2V9', 'P2V11', 'P2V12', 'P2V13', 'P2V14', 'P2V15', 'P2V16', 'P2V17', 'P2V18'],
                Description: '2.2 = 2.3 + 2.5 + 2.6 + 2.7 = сумма c 2.8 по 2.18',
                Check: (Data)=>{
                    return Data.P2V3.Value + Data.P2V5.Value + Data.P2V6.Value + Data.P2V7.Value ===
                        Data.P2V8.Value +Data.P2V9.Value+Data.P2V10.Value +Data.P2V11.Value +Data.P2V12.Value +Data.P2V13.Value +Data.P2V14.Value +Data.P2V15.Value +Data.P2V16.Value +Data.P2V17.Value +Data.P2V18.Value;
                },
                GetValue: null,
            },
            P2V6: {
                Name: 'Выдано инсталлированных',
                Dependencies: ['P2V3', 'P2V5', 'P2V7', 'P2V8', 'P2V9', 'P2V11', 'P2V12', 'P2V13', 'P2V14', 'P2V15', 'P2V16', 'P2V17', 'P2V18'],
                Description: '2.2 = 2.3 + 2.5 + 2.6 + 2.7 = сумма c 2.8 по 2.18',
                Check: (Data)=>{
                    return Data.P2V3.Value + Data.P2V5.Value + Data.P2V6.Value + Data.P2V7.Value ===
                        Data.P2V8.Value +Data.P2V9.Value+Data.P2V10.Value +Data.P2V11.Value +Data.P2V12.Value +Data.P2V13.Value +Data.P2V14.Value +Data.P2V15.Value +Data.P2V16.Value +Data.P2V17.Value +Data.P2V18.Value;
                },
                GetValue: null,
            },
            P2V7: {
                Name: 'Выдано на физических носителях',
                Dependencies: ['P2V3', 'P2V6', 'P2V6', 'P2V8', 'P2V9', 'P2V11', 'P2V12', 'P2V13', 'P2V14', 'P2V15', 'P2V16', 'P2V17', 'P2V18'],
                Description: '2.2 = 2.3 + 2.5 + 2.6 + 2.7 = сумма c 2.8 по 2.18',
                Check: (Data)=>{
                    return Data.P2V3.Value + Data.P2V5.Value + Data.P2V6.Value + Data.P2V7.Value ===
                        Data.P2V8.Value +Data.P2V9.Value+Data.P2V10.Value +Data.P2V11.Value +Data.P2V12.Value +Data.P2V13.Value +Data.P2V14.Value +Data.P2V15.Value +Data.P2V16.Value +Data.P2V17.Value +Data.P2V18.Value;
                },
                GetValue: null,
            },
            P2V8: {
                Name: 'Выдано ОПЛ',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V9: {
                Name: 'Выдано естествознание',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V10: {
                Name: 'Выдано Техника',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V11: {
                Name: 'Выдано Сельское хозяйство',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V12: {
                Name: 'Выдано Искусство',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V13: {
                Name: 'Выдано Спорт',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V14: {
                Name: 'Выдано 81,83',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V15: {
                Name: 'Выдано Справочники',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V16: {
                Name: 'Выдано Детская литература',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V17: {
                Name: 'Выдано Художественная литература',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V18: {
                Name: 'Выдано Дополнительно',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V19: {
                Name: 'Выдано документов',
                Dependencies: ['P2V20', 'P2V22', 'P2V23', 'P2V24'],
                Description: '2.19 = 2.20 + 2.22 + 2.23 + 2.24',
                Check: null,
                GetValue: (Data)=>Data.P2V20.Value + Data.P2V22.Value + Data.P2V23.Value + Data.P2V24.Value,
            },
            P2V20: {
                Name: 'Выдано до 14, на физ. носителях',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V21: {
                Name: 'Выдано до 14, внестационар и на дому',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V22: {
                Name: 'Выдано до 14, из электронной библиотеки',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V23: {
                Name: 'Выдано до 14, инсталлированных',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V24: {
                Name: 'Выдано до 14, удаленных лицензионных',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V25: {
                Name: 'Всего выдано 14-30',
                Dependencies: ['P2V26', 'P2V28', 'P2V29', 'P2V30'],
                Description: '2.25 = 2.26 + 2.28 + 2.29 + 2.30',
                Check: null,
                GetValue: (Data)=> Data.P2V26.Value + Data.P2V28.Value + Data.P2V29.Value + Data.P2V30.Value,
            },
            P2V26: {
                Name: 'Выдано 14-30, на физ. носителях',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V27: {
                Name: 'Выдано 14-30, внестационар и на дому',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V28: {
                Name: 'Выдано 14-30, из электронной библиотеки',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V29: {
                Name: 'Выдано 14-30, инсталлированных',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V30: {
                Name: 'Выдано 14-30, удаленных лицензионных',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V251: {
                Name: 'Всего выдано 30+',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: (Data)=> Data.P2V261.Value + Data.P2V281.Value + Data.P2V291.Value + Data.P2V301.Value,
            },
            P2V261: {
                Name: 'Выдано 30+, на физ. носителях',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V271: {
                Name: 'Выдано 30+, внестационар и на дому',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V281: {
                Name: 'Выдано 30+, из электронной библиотеки',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V291: {
                Name: 'Выдано 30+, инсталлированных',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V301: {
                Name: 'Выдано 30+, удаленных лицензионных',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V31: {
                Name: 'Всего выдано копий',
                Dependencies: ['P2V32', 'P2V33'],
                Description: '2.31 >= 2.32 + 2.33',
                Check: null, //(Data)=> Data.P2V31.Value >= Data.P2V32.Value + Data.P2V33.Value,
                GetValue: (Data) => Data.P2V32.Value + Data.P2V33.Value + Data.P2V331.Value,
            },
            P2V32: {
                Name: 'Выдано копий детям до 14 лет',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V33: {
                Name: 'Выдано копий пользователям 14-30 лет',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V331: {
                Name: 'Выдано копий пользователям 30+ лет',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V34: {
                Name: 'Всего выдано документов',
                Dependencies: ['P2V35', 'P2V36'],
                Description: '2.34 >= 2.35 + 2.36',
                Check: (Data)=> Data.P2V34.Value >= Data.P2V35.Value + Data.P2V36.Value,
                GetValue: null,
            },
            P2V35: {
                Name: 'Получено по систме МБА и ММБА',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V36: {
                Name: 'Доступных в вирт. читальных залах',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V37: {
                Name: 'Всего выполнено справок и консультаций',
                Dependencies: ['P2V40', 'P2V41', 'P2V42', 'P2V43', 'P2V44'],
                Description: '2.37 = сумма c 2.40 по 2.44',
                Check: null,
                GetValue: (Data)=> Data.P2V40.Value + Data.P2V41.Value + Data.P2V42.Value + Data.P2V43.Value + Data.P2V44.Value,
            },
            P2V38: {
                Name: 'Справок/консультаций, до 14',
                Dependencies: ['P2V39', 'P2V37', 'P2V44'],
                Description: '2.38 + 2.39 <= 2.37 - 2.44',
                Check: (Data)=> Data.P2V38.Value + Data.P2V39.Value <=  Data.P2V37.Value - Data.P2V44.Value,
                GetValue: null,
            },
            P2V39: {
                Name: 'Справок/консультаций, 14-30',
                Dependencies: ['P2V38', 'P2V37', 'P2V44'],
                Description: '2.38 + 2.39 <= 2.37 - 2.44',
                Check: (Data)=> Data.P2V38.Value + Data.P2V39.Value <=  Data.P2V37.Value - Data.P2V44.Value,
                GetValue: null,
            },
            P2V391: {
                Name: 'Справок/консультаций, 30+',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V40: {
                Name: 'Справок/консультаций, тематические',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V41: {
                Name: 'Справок/консультаций, фактографические',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V42: {
                Name: 'Справок/консультаций, библиографические',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V43: {
                Name: 'Справок/консультаций, консультации',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P2V44: {
                Name: 'Справок/консультаций, удаленных',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },

            P3V2: {
                Name: 'Всего выдано электронных ресурсов',
                Dependencies: ['P3V3', 'P3V4', 'P3V5'],
                Description: '3.2 = сумма c 3.3 по 3.5',
                Check: null,
                GetValue: (Data)=> Data.P3V3.Value + Data.P3V4.Value + Data.P3V5.Value,
            },
            P3V3: {
                Name: 'Инсталированные документы',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P3V4: {
                Name: 'Сетевые удаленные документы',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P3V5: {
                Name: 'Из электронной библиотеки',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P3V6: {
                Name: 'DVD, CD-ROM',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },

            P4V2: {
                Name: 'Название мероприятия',
                Dependencies: [],
                Description: 'Изменяется при внесении мероприятия',
                Check: null,
                GetValue: null,
            },
            P4V3: {
                Name: 'Форма проведения',
                Dependencies: [],
                Description: 'Изменяется при внесении мероприятия',
                Check: null,
                GetValue: null,
            },
            P4V4: {
                Name: 'Бесплатно',
                Dependencies: ['P4V6', 'P4V7', 'P4V8'],
                Description: '4.4 >= 4.6 + 4.7 + 4.8',
                Check: (Data)=> Data.P4V4.Value >= Data.P4V6.Value + Data.P4V7.Value + Data.P4V8.Value,
                GetValue: null,
            },
            P4V5: {
                Name: 'Платно',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V6: {
                Name: 'Инвалиды',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V7: {
                Name: 'Мигранты',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V8: {
                Name: 'Проф семинары, лекции и т.д.',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V9: {
                Name: 'Бесплатно',
                Dependencies: ['P4V11','P4V12','P4V13'],
                Description: '4.9 >= 4.11 + 4.12 + 4.13',
                Check: (Data)=> Data.P4V9.Value >= Data.P4V11.Value + Data.P4V12.Value + Data.P4V13.Value,
                GetValue: null,
            },
            P4V10: {
                Name: 'Платно',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V11: {
                Name: 'Инвалиды',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V12: {
                Name: 'Мигранты',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V13: {
                Name: 'Проф семинары, лекции и т.д.',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V14: {
                Name: 'Посещения',
                Dependencies: ['P4V15','P4V16'],
                Description: '4.14 >= 4.15 + 4.16',
                Check: (Data)=> Data.P4V14.Value >= Data.P4V15.Value + Data.P4V16.Value,
                GetValue: null,
            },
            P4V15: {
                Name: 'Инвалиды',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V16: {
                Name: 'Мигранты',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V17: {
                Name: 'Посещения',
                Dependencies: ['P4V18','P4V19'],
                Description: '4.14 >= 4.15 + 4.16',
                Check: (Data)=> Data.P4V17.Value >= Data.P4V18.Value + Data.P4V19.Value,
                GetValue: null,
            },
            P4V18: {
                Name: 'Инвалиды',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V19: {
                Name: 'Мигранты',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V20: {
                Name: 'Выездное название',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P4V21: {
                Name: 'Ответственный',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },


            P5V2: {
                Name: 'Название выставки',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P5V3: {
                Name: 'Число предоставленных документоа',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P5V4: {
                Name: 'Число выданных документоа',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P5V5: {
                Name: 'Ответственный',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P5V6: {
                Name: 'Примечания',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },

            P61V2: {
                Name: 'Зарегестрированно пользователей',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P61V3: {
                Name: 'Инвалидов',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P61V4: {
                Name: 'Выдано книг на дом',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P61V5: {
                Name: 'Посещение пользователей',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P61V6: {
                Name: 'Консультация пользователей',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P61V7: {
                Name: 'Семинар передвижников',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },

            P62V2: {
                Name: 'Количество передвижек',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V3: {
                Name: 'Количество читателей',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V4: {
                Name: 'Всего выдано книг',
                Dependencies: ['P62V5', 'P62V6', 'P62V7', 'P62V8', 'P62V9', 'P62V10', 'P62V11', 'P62V12', 'P62V13', 'P62V14', 'P62V15'],
                Description: '6.2.4 = сумма с6.2.5 по 6.2.15',
                Check: null,
                GetValue: (d)=> d.P62V5.Value + d.P62V6.Value + d.P62V7.Value + d.P62V8.Value + d.P62V9.Value + d.P62V10.Value + d.P62V11.Value + d.P62V12.Value + d.P62V13.Value + d.P62V14.Value + d.P62V15.Value,
            },
            P62V5: {
                Name: 'Выдано ОПЛ',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V6: {
                Name: 'Выдано Естествознание',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V7: {
                Name: 'Выдано Техника',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V8: {
                Name: 'Выдано Сельское хозяйство',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V9: {
                Name: 'Выдано Искусство',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V10: {
                Name: 'Выдано Спорт',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V11: {
                Name: 'Выдано 81.83',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V12: {
                Name: 'Выдано Справочники',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V13: {
                Name: 'Выдано Детская литература',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V14: {
                Name: 'Выдано Художественная литература',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V15: {
                Name: 'Выдано Дополнительно',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V16: {
                Name: 'Количество мероприятий',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },
            P62V17: {
                Name: 'Число обслуженых',
                Dependencies: [],
                Description: '',
                Check: null,
                GetValue: null,
            },

        };
        this.DataPrepared = [];

        this.DataEvent      = [];
        this.DataExhibition = [];
        this.Errors = [];
        this.State.Months = (function () {
            let d = Lure.Date();
            let y = d.Year;
            let Months = [];
            while (d.Year === y){
                Months.unshift({
                    Date: d.Date,
                    Value: d.Value,
                    Text: d.Format('MMMM YYYY'),
                });
                d.AddMonths(-1);
            }
            return Months;
        })();

        this.SelectLibrary = this.Select('.lib-list');
        this.SelectDate = this.Select('.date-list');


        this.ButtonRefresh = this.Select('.btn-refresh');
        this.ButtonGetXLS = this.Select('.button-get-xls');
        this.ButtonSave = this.Select('.button-save');
        this.ButtonClear = this.Select('.button-clear');

        this._KeyRegex = new RegExp('P[\\d]+V[\\d]+');


        this.SubscribeTypes = [
            D.SubscribeType.SummaryChange,

            D.SubscribeType.VisitRegisterAdd,
            D.SubscribeType.VisitVisitAdd,
            D.SubscribeType.VisitEventAdd,
            D.SubscribeType.Bookware,
        ];
    },
    Methods: function(){
        this.GetData = function () {
            InputBox.Hide();
            Diary.Movings.Hide();
            this.Load.Show();
            let CurrentPart = this.CurrentPart;
            let dt = Lure.Date(this.CurrentDate);
            CurrentPart.CurrentDate = this.CurrentDate;
            if (CurrentPart.Name !== 'SummaryPart4' && CurrentPart.Name !== 'SummaryPart5'){
                return api.Diary_Summary_Part1236_Get(this.CurrentLibraries, dt.MonthStart, dt.MonthEnd, {
                    Then: (RawData)=>{
                        this.DataPrepared = this.PrepareData(RawData);
                        this.CurrentPart.Controller.Refresh(this.DataPrepared);
                    },
                    Catch: (e)=>{
                        console.error('Diary.Summary.GetData', e);
                        Lure.System.ShowError('Ошибка сервера');
                    },
                    Finally: ()=>{
                        this.Load.Hide();
                    }
                });
            }
            else if (CurrentPart.Name === 'SummaryPart4') {
                //console.log('rr SummaryPart4');
                return api.Diary_SummaryPart4_Get(Diary.Summary.CurrentLibraries, dt.MonthStart, dt.MonthEnd, {
                    Then: (x)=>{
                        this.DataEvent = this.PrepareDataEvent(x);
                        CurrentPart.Controller.Refresh(this.DataEvent);
                        this.Load.Hide();
                    }
                });

            }
            else if (CurrentPart.Name === 'SummaryPart5') {
                //console.log('rr SummaryPart5');
                return api.Diary_SummaryPart5_Get(Diary.Summary.CurrentLibraries, dt.MonthStart, dt.MonthEnd, {
                    Then: (x)=>{
                        this.DataExhibition = this.PrepareDataEvent(x);
                        CurrentPart.Controller.Refresh(this.DataExhibition);
                        this.Load.Hide();
                    }
                });
            }


        };
        this.PrepareDataEvent = function (Data) {
            let Prepared = [];
            for (let i = 0; i < Data.length; i++){
                let Line = Data[i];
                let Item = {
                    ID: Line.ID,
                    DateStart: Line.DateStart,
                    DateFinish: Line.DateFinish,
                    EventPlaceTypeID: Line.EventPlaceTypeID,
                    EventTypeID: Line.EventTypeID,
                    ListInvalid: [],
                    ListChanged: [],
                };
                for (let k in Line){
                    if (Line.hasOwnProperty(k) && this._KeyRegex.test(k)){
                        Item[k] = {
                            _Value: Line[k],
                            Value: Line[k],
                            D: this.D[k]
                        };

                    }
                }
                Prepared.push(Item);
            }
            return Prepared;

        };
        this.PrepareData = function (Data) {
            let Prepared = [];
            let SumLine = {
                ListInvalid: [],
                ListChanged: [],
            };
            let SumLineFull = {
                ListInvalid: [],
                ListChanged: [],
            };
            for (let k in Data[0]){
                if (Data[0].hasOwnProperty(k)){
                    SumLine[k] = {
                        _Value: 0,
                        Value: 0,
                        D: this.D[k]
                    };
                    SumLineFull[k] = {
                        _Value: 0,
                        Value: 0,
                        D: this.D[k]
                    };
                }
            }

            SumLine.DateValue  = Data[0].DateValue;
            SumLine.DateVisual = 'За месяц';
            SumLineFull.DateValue  = Data[0].DateValue;
            SumLineFull.DateVisual = 'Итого';
            for (let i = 0; i < Data.length; i++){
                let Line = Data[i];
                let Item = {};
                for (let k in Line){
                    if (Line.hasOwnProperty(k) && this._KeyRegex.test(k)){
                        if (i === 0){
                            SumLineFull[k].Value = Line[k];
                            SumLineFull[k]._Value = Line[k];
                        } else{
                            SumLineFull[k].Value += Line[k];
                            SumLineFull[k]._Value += Line[k];
                        }
                        if (i > 0)
                        {
                            SumLine[k].Value += Line[k];
                            SumLine[k]._Value += Line[k];
                        }
                        Item[k] = {
                            _Value: Line[k], //not changing value
                            Value: Line[k],
                            State: '',
                            D: this.D[k],
                        }
                    }
                }
                Item.DayType     = '';
                if (Line.IsDayOff)
                    Item.DayType += ' day-off';
                if (Lure.Date(Line.DateValue).isToday)
                    Item.DayType += ' day-today';
                Item.IsDayOff    = Line.IsDayOff;
                Item.DateValue   = Line.DateValue;
                Item.DateVisual  = Lure.Date(Line.DateValue).Format('DD.MM.YYYY');
                Item.ListInvalid = [];
                Item.ListChanged = [];
                Prepared.push(Item);
            }
            Prepared[0].DateVisual = 'На начало месяца';
            Prepared.push(SumLine);
            Prepared.push(SumLineFull);
            return Prepared;
        };

        this.Check = function (Item) {
            for (let k in Item){
                if (Item.hasOwnProperty(k) && this._KeyRegex.test(k)){
                    Item[k].State = '';
                    Item[k].Value = !Item[k].D.GetValue ? Item[k].Value : Item[k].D.GetValue(Item) ;
                    let isChanged = Item[k].Value !== Item[k]._Value;


                    if (Item[k].D.Check){
                        if (Item[k].D.Check(Item)){
                            if (isChanged)
                                Item[k].State = 'valid';
                            if (Item.ListInvalid.indexOf(k) > -1 ){
                                Lure.Array.Remove(Item.ListInvalid, x=>x===k);
                            }
                        }else{
                            Item[k].State = 'invalid';
                            if (Item.ListInvalid.indexOf(k) < 0){
                                Item.ListInvalid.push(k);
                            }
                        }
                        //Item[k].State = Item[k].D.Check(Item) ? 'valid':'invalid'
                    }
                    if (isChanged && !Item[k].State){
                        Item[k].State = 'changed';
                    }
                    if (isChanged && Item.ListChanged.indexOf(k) < 0){
                        Item.ListChanged.push(k)
                    }
                    if (!isChanged && Item.ListChanged.indexOf(k) > -1){
                        Lure.Array.Remove(Item.ListChanged, x=>x===k);
                    }
                }
            }
        };
        this.CheckSum = function () {

            let SumLine = this.DataPrepared[this.DataPrepared.length-2];
            let SumLineFull = this.DataPrepared.Last();

            for (let i = 0; i < this.DataPrepared.length-2; i++){
                let Line = this.DataPrepared[i];
                for (let k in Line){
                    if (Line.hasOwnProperty(k) && this._KeyRegex.test(k)){
                        if (i === 0){
                            SumLineFull[k].Value = Line[k].Value;
                        }
                        else {
                            SumLineFull[k].Value += Line[k].Value;
                        }

                        if(i === 1){
                            SumLine[k].Value = Line[k].Value;
                        }
                        else if (i > 1) {
                            SumLine[k].Value += Line[k].Value;
                        }

                    }
                }
            }
            //this.Check(SumLine); ВОТ ЗДЕСЬ БЫЛА УБРАНА ПРОВЕРКА ПРАВИЛЬНОСТИВ ПОСЛЕДНЕЙ СТРОКЕ
        };

        this.GetXLS = function () {
            if (this.CurrentLibraries.length > 1){
                return Lure.System.Notice('Экспорт данных нескольких библиотек еще недоступен.');
            }
            InputBox.Hide();
            this.Load.Show();
            let Dt = Lure.Date(Diary.Summary.CurrentDate);
            api.Diary_Summary_GetXLS(this.CurrentLibraries, Dt.Year, [Dt.Month+1], {
                Then: (Blob)=>{
                    Lure.SaveBlob(Blob, `Сводная таблица ${Dt.Format('MMMM YYYY')}.xlsx`);
                },
                Catch: ()=>{
                    Lure.System.Error('Невозможно получить отчет');
                },
                Finally: ()=>{
                    this.Load.Hide();
                },
            })
        };
        this.Clear = function (isReturnValue=true) {
            //common
            //i=1 for skip month's start's sum validation
            // -2 for skip sums
            for (let i = 1; i< this.DataPrepared.length-2; i++){
                let Line = this.DataPrepared[i];
                Line.ListChanged = [];
                Line.ListInvalid = [];
                for (let k in Line){
                    if (Line.hasOwnProperty(k) && this._KeyRegex.test(k)){
                        if (isReturnValue)
                            Line[k].Value = Line[k]._Value;
                        else
                            Line[k]._Value = Line[k].Value;
                    }
                }

                this.Check(Line);
            }
            //part4
            for (let i = 0; i< this.DataEvent.length; i++){
                let Line = this.DataEvent[i];
                Line.ListChanged = [];
                Line.ListInvalid = [];
                for (let k in Line){
                    if (Line.hasOwnProperty(k) && this._KeyRegex.test(k)){
                        if (isReturnValue)
                            Line[k].Value = Line[k]._Value;
                        else
                            Line[k]._Value = Line[k].Value;
                    }
                }
                this.Check(Line);
            }
            //part5
            for (let i = 0; i< this.DataExhibition.length; i++){
                let Line = this.DataExhibition[i];
                Line.ListChanged = [];
                Line.ListInvalid = [];

                for (let k in Line){
                    if (Line.hasOwnProperty(k) && this._KeyRegex.test(k)){
                        if (isReturnValue)
                            Line[k].Value = Line[k]._Value;
                        else
                            Line[k]._Value = Line[k].Value;
                    }
                }
                this.Check(Line);
            }
            this.CurrentPart.Controller.Refresh();
        };
        this.Save = function () {
            let Changed = [];
            let isOk = true;

            let ErrorList = [];

            //check part 1236
            //i=1 for skip month's start's sum validation
            // -2 for skip sums
            for (let i = 1; i< this.DataPrepared.length-2; i++){
                let Line = this.DataPrepared[i];
                if (Line.ListInvalid && Line.ListInvalid.length > 0){
                    isOk = false;
                    //let FieldName = (i < this.DataPrepared.length-2) ? Lure.Date(Line.DateValue).Format('DD MMMM YYYY') : 'Сумма за месяц';
                    //FieldName = (i === this.DataPrepared.length-1) ? FieldName : 'Итого';
                    let FieldName = Lure.Date(Line.DateValue).Format('DD MMMM YYYY');
                    let Fields = Line.ListInvalid
                        .Select(x=>x.replace('P', '').replace('V', '.'))
                        .join(', ');
                    ErrorList.push(`${FieldName}: ошибка в полях ${Fields}`);
                }
                if (Line.ListChanged.length > 0 && i < this.DataPrepared.length-1){
                    let packet = {
                        DateValue: Line.DateValue,
                        Changed: Line.ListChanged.Select(x=>{
                            return {Name: x, Value: Line[x].Value}
                        })
                    };
                    Changed.push(packet);
                }
            }
            //check part 4
            let ChangedEvent = [];
            for (let i = 0; i< this.DataEvent.length; i++){
                let Line = this.DataEvent[i];
                if (Line.ListInvalid && Line.ListInvalid.length > 0){
                    isOk = false;
                    let FieldName = Line.P4V2.Value;
                    let Fields = Line.ListInvalid
                        .Select(x=>x.replace('P', '').replace('V', '.'))
                        .join(', ');
                    let ErrText = `${FieldName}: ошибка в полях ${Fields}`;
                    Lure.System.ShowError(ErrText);
                }

                if (Line.ListChanged.length > 0){
                    let packet = {
                        ID: Line.ID, //here is LibraryEventID
                        Changed: Line.ListChanged.Select(x=>{
                            return {Key: x.replace('P4V', ''), Value: Line[x].Value}
                        })
                    };
                    ChangedEvent.push(packet);
                }
            }
            //check part 5
            let ChangedExhibition = [];
            for (let i = 0; i< this.DataExhibition.length; i++){
                let Line = this.DataExhibition[i];
                if (Line.ListInvalid && Line.ListInvalid.length > 0){
                    isOk = false;
                    let FieldName = Line.P4V2.Value;
                    let Fields = Line.ListInvalid
                        .Select(x=>x.replace('P', '').replace('V', '.'))
                        .join(', ');
                    let ErrText = `${FieldName}: ошибка в полях ${Fields}`;
                    Lure.System.ShowError(ErrText);
                }
                if (Line.ListChanged.length > 0){
                    let packet = {
                        ID: Line.ID,
                        Changed: Line.ListChanged.Select(x=>{
                            return {Key: x.replace('P5V', ''), Value: Line[x].Value}
                        })
                    };
                    ChangedExhibition.push(packet);
                }
            }

            for (let i = 0; i < ErrorList.length; i++){
                Lure.System.ShowError(ErrorList[i]);
            }
            if (ErrorList.length < 1 && (Changed.length+ChangedEvent.length+ChangedExhibition.length> 0)){
                Lure.Button.Lock(this.ButtonSave);
                api.Diary_Summary_Set(this.CurrentLibraryID, Changed, ChangedEvent, ChangedExhibition, {
                    Then: (res)=>{
                        if (res){
                            Lure.System.ShowSuccess('Изменения сохранены');
                            this.Clear(false);
                        }
                        else{
                            Lure.System.ShowError('Не сохранено');
                        }
                    },
                    Finally: ()=>{
                        Lure.Button.Release(this.ButtonSave);
                    }
                });
            }
            if (Changed.length < 1 && ChangedEvent.length < 1 && ChangedExhibition.length < 1)
                Lure.System.ShowNotice('Изменений нет');
            console.log('Summary.Save.Lines', Changed, ChangedEvent, ChangedExhibition);
        };

        this.ShowOutsideChanges = function () {
            console.log('ShowOutsideChanges');
            Diary.Summary.CurrentPart.Refresh();
            if (!this.ButtonRefresh.classList.contains('changed-outside'))
                this.ButtonRefresh.classList.add('changed-outside')
        };
        this.CallCellEditor = function (CellElement, LineID) {
            if (Diary.Summary.CurrentLibraries.length > 1)
                return;
            if (!Diary.Summary.HasPermissionWrite)
                return Lure.System.Notice('Нет прав редактирования таблицы');
            Lure.DocumentSelectionClear();
            if (Diary.Summary.LineEditor.isActive) {
                return Lure.System.ShowWarn('Таблица уже редактируется');
            }

            let CurrentPart = this.CurrentPart;
            //let LineID = p.LineID;//parseInt(e.currentTarget.parentElement.dataset['line']);
            let DataItem = CurrentPart.Controller.GetDataItemByLineID(LineID);

            let DateNow = new Date();
            let DateLimit = new Date(DateNow.getFullYear(), DateNow.getMonth(), DateNow.getDate() - 1);
            let DtTarget = DataItem.Data.DateValue;
            if (!DtTarget) //if event
                DtTarget = DataItem.Data.DateFinish;
            if (Lure.Date(DtTarget).Date > DateLimit)
                return Lure.System.Warn('Внесение первичных данных не завершено');
            if (Lure.Date(DtTarget).Date >= DateLimit && DateNow.getHours() < Static.DateHoursEditingLimit)
                return Lure.System.Warn('Внесение первичных данных не завершено');

            let SumLineID = -1;
            let SumFullLineID = -1;
            if (CurrentPart.Name !== "SummaryPart4" && CurrentPart.Name !== "SummaryPart5"){
                SumLineID = CurrentPart.Controller._Data[CurrentPart.Controller._Data.length-2].LineID;
                SumFullLineID = CurrentPart.Controller._Data.Last().LineID;
            }

            let Prop = CellElement.dataset['prop'];

            const ExtraOptions = {
                Caption: DataItem.Data[Prop].D.Name,
            };
            // if (Prop === 'P5V5' || Prop === 'P4V21'){ //Curator (UserID) select
            //     ExtraOptions.Data = Lure.User.Cache.UserList.Select(x=>{
            //         return {
            //             ID: x.ID,
            //             Name: `${x.Name} [${x.Position}], Email: ${x.Email}, Тел. ${x.Phone}`
            //         }
            //     });
            //     ExtraOptions.KeyValue = 'ID';
            //     ExtraOptions.KeyView = 'Name';
            //     //{
            //     //             //     TextArea: false,
            //     //             // }
            //
            // }
            if (Prop === 'P5V6'){
                ExtraOptions.Type = 'text';
            }
            if (Prop === 'P4V20' || Prop === 'P5V6'){
                ExtraOptions.Type = 'richtext';
                ExtraOptions.CustomWidth = 300;
            }
            InputBox.Run(CellElement, DataItem.Data[Prop].Value, (v) => {
                DataItem.Data[Prop].Value = v;
                this.Check(DataItem.Data);
                this.Check(DataItem.Data); //it isn't a mistake. It requires check fields after calc further fields (for instance, rechecks P1V19 after change P1V27 (caused by changing P1V28))
                this.Check(DataItem.Data); //this line caused by addition 3rd lvl of computed values (oh shi..)
                //this.CheckSum();///
                //console.warn(Prop, v);
                CurrentPart.Controller.Refresh(LineID);
                if (CurrentPart.Name !== "SummaryPart4" && CurrentPart.Name !== "SummaryPart5"){
                    CurrentPart.Controller.Refresh(SumLineID);
                    CurrentPart.Controller.Refresh(SumFullLineID);
                }

            }, ExtraOptions);
        }
    },


    Refresh(){
        this.ButtonRefresh.classList.remove('changed-outside');
        this.Proto.Refresh();
        this.SelectDate.value = Lure.Date(this.Proto.Data.DateSelected).Value;
        this.GetData();

    },
    BeforeShow: function () {
        Diary.CheckForBread();
        let Sub = this.CurrentPart;
        //Sub?.Show();
        if (Sub)
            Sub.Show();
        //console.log('Diary.Summary BeforeShow');
    },
    Show: function(){
        this.Subscription.Subscribe();
        this.Refresh();
    },
    Hide: function(){
        this.Subscription.Unsubscribe();
    },
    AfterBuild: function () {
        new LibraryTree(this, this.Select('.library-tree-control'), {
            // OnSelect: (Selected)=>{
            //     this.Refresh();
            // }
        });

        this.SelectDate.value = this.Proto.Data.Months.Last().Value;
        this.Proto.Data.DateSelected = this.Proto.Data.Months.Last().Value;
        this.Proto.Data.LibraryIDListSelected = [Lure.User.Cache.LibraryList.Last().ID];


        this.SelectDate.addEventListener('change', ()=>{
            this.Proto.Data.DateSelected = Lure.Date(this.SelectDate.value).Date;
            //console.log('_ChangeDate', this.Proto.Data.DateSelected);
            this.GetData();

        });

        this.AddEventListener('click', '.trow:not(.day-off) .sum-part-date', function (e, p) {
            //return;
            if (Diary.Summary.CurrentLibraries.length>1)
                return;
            let DataItem = this.CurrentPart.Controller.GetDataItemByLineID(p.LineID);
            let DateNow = new Date();
            let DateLimit = new Date(DateNow.getFullYear(), DateNow.getMonth(), DateNow.getDate()-1);
            if (Lure.Date(DataItem.Data.DateValue).Date > DateLimit)
                return Lure.System.Warn('Первичные данные еще не внесены');
            if (Lure.Date(DataItem.Data.DateValue).Date >= DateLimit && DateNow.getHours() < Static.DateHoursEditingLimit)
                return Lure.System.Warn('Первичные данные еще не внесены');

            Diary.Summary.LineEditor.Show(p.LineID);
        });

        this.AddEventListener('click', '.trow:not(.day-off) .numpadable, .trow:not(.day-off) .textboxable, .trow:not(.day-off) .selectable', function (e, p) {
            this.CallCellEditor(e.currentTarget, p.LineID);
        });
        this.AddEventListener('click', '.trow .lock, .day-off .tcell', function (e, p) {
            if (e.ctrlKey && e.altKey)
                this.CallCellEditor(e.currentTarget, p.LineID);
        });

        this.AddEventListener('change', '.tab-radio', function (e) {
            InputBox.Hide();
            let Part = this.CurrentPart;
            Part.Proto.SetProperty('TableID', e.currentTarget.dataset['tableid']);
            Part.Controller.Refresh();
        });

        this.ButtonRefresh.addEventListener('click', ()=>this.Refresh());

        this.ButtonSave.addEventListener('click', this.Save);
        this.ButtonClear.addEventListener('click', this.Clear);
        this.ButtonGetXLS.addEventListener('click', this.GetXLS);

        this.Subscription = new HistorySubscription( {
            OnSubscribe: (HistList)=>{
                let CD = Lure.Date(this.CurrentDate);
                let isOurGuy = false;
                for (let h of HistList){
                    if ((h.TypeID !== D.SubscribeType.SummaryChange && h.TypeID !== D.SubscribeType.VisitEventAdd) || (h.TypeID === D.SubscribeType.SummaryChange && h.MessageType !== 4 && h.MessageType !== 5) ){
                        //part1236
                        let hDateValue = Lure.Date(h.DateValue);
                        if (CD.Year === hDateValue.Year && CD.Month === hDateValue.Month){
                            isOurGuy = true;
                            let DataLine = this.DataPrepared
                                .Where(x=>x.DateValue === h.DateValue && x.DateVisual !== 'За месяц' && x.DateVisual !== "На начало месяца")
                                .FirstOrDefault();
                            if (DataLine !== null){
                                DataLine.isChangedByOutside = true;
                            }
                        }
                    }
                    else{
                        //part45
                        let DataLine4 = Diary.Summary.SummaryPart4.Data.Where(x=>x.ID === h.ItemID).FirstOrDefault();
                        if (DataLine4 !== null && Diary.Summary.SummaryPart4.CurrentDate === this.CurrentDate){
                            isOurGuy = true;
                            DataLine4.isChangedByOutside = true;
                        }
                        let DataLine5 = Diary.Summary.SummaryPart5.Data.Where(x=>x.ID === h.ItemID).FirstOrDefault();
                        if (DataLine5 !== null && Diary.Summary.SummaryPart5.CurrentDate === this.CurrentDate){
                            isOurGuy = true;
                            DataLine5.isChangedByOutside = true;
                        }
                    }
                }

                if (isOurGuy){
                    this.ShowOutsideChanges();
                    //this.Refresh();
                }
            },
            Condition: (h)=>{
                return this.SubscribeTypes.indexOf(h.TypeID) > -1 && h.LibraryID === Diary.Summary.CurrentLibraryID && h.LoginID !== Lure.User.ID
            }
        });
    }
});

require('./part1.js');
require('./part2.js');
require('./part3.js');
require('./part4.js');
require('./part5.js');
require('./part6.js');

require('./line-editor/line-editor.js');