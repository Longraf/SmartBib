DataInput.DataAfficheInput.EventWizard = new Lure.Content({
    Name: 'EventWizard',
    Target: '.wizard',
    Visible: false,
    Route: false,
    Dialog: {},
    Content:
`<div class="wizard-content">
   <div class="container-header">СОЗДАНИЕ ЗАЯВКИ <button class="cancel-button l-button">ОТМЕНА</button></div>
   <div class="container-body">
      <div class="page-wrap">
         <div class="wizard-page expanded" data-pageid="0">
            <div class="w-header">1. Название</div>
            <div class="displayed">
               <div class="param-row">
                  <div class="row-name">Название</div>
                  <input class="row-textinput" type="text">
               </div>
               <div class="param-row">
                  <div class="row-name">Описнаие</div>
                  <textarea class="row-textarea"></textarea>
               </div>
            </div>
         </div>
         <div class="wizard-page expanded" data-pageid="1">
            <div class="w-header">2. Основные параметры</div>
            <div class="displayed">
               <div class="param-row">
                  <div class="row-name">В рамках</div>
                  <div class="row-selecttable">
                     <table class="center-text">
                        <tbody data-type="Initiator">
                           <tr>
                              <td class="selectable-option selected" data-key="ГЗ">ГЗ</td>
                              <td class="selectable-option" data-key="В">В</td>
                              <td class="selectable-option" data-key="И">И</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
               <div class="param-row">
                  <div class="row-name">Статус участия</div>
                  <div class="row-selecttable">
                     <table class="center-text">
                        <tbody data-type="InvolvedStatus">
                           <tr>
                              <td class="selectable-option selected" data-key="Организатор">Организатор</td>
                              <td class="selectable-option" data-key="Участник">Участник</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
               <div class="param-row">
                  <div class="row-name">Тип</div>
                  <div class="row-selecttable">
                     <table class="center-text">
                        <tbody data-type="EventTypeID">
                           <tr>
                              <td data-key="1" class="selectable-option selected">Бесплатное мероприятие</td>
                              <td data-key="3" class="selectable-option">Бесплатный клуб</td>
                              <td data-key="5" class="selectable-option">Выставка</td>
                           </tr>
                           <tr>
                              <td data-key="2" class="selectable-option">Платное мероприятие</td>
                              <td data-key="4" class="selectable-option">Платный клуб</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
               <div class="double-select">
                  <div class="param-row">
                     <div class="row-name">Вид</div>
                     <div class="row-selecttable">
                        <table>
                           <tbody data-type="EventKindID">
                              {{#each EventKinds}}
                              <tr>
                                 <td class="selectable-option {{Selected ? 'selected' : ''}}" data-key="{{Key}}">{{Value}}</td>
                              </tr>
                              {{#endeach}}
                           </tbody>
                        </table>
                     </div>
                  </div>
                  <div class="param-row">
                     <div class="row-name">Куратор</div>
                     <div class="row-selecttable">
                        <table>
                           <tbody data-type="Curator">
                              {{#each UserList}}
                              <tr>
                                 <td class="selectable-option {{Selected ? 'selected' : ''}}" data-key="{{Key}}">{{Value}}</td>
                              </tr>
                              {{#endeach}}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="wizard-page expanded" data-pageid="2">
            <div class="w-header">3. Аудитория</div>
            <div class="displayed">
               <div class="double-select">
                  <div class="param-row">
                     <div class="row-name">Направление</div>
                     <div class="row-selecttable">
                        <table>
                           <tbody data-type="EventTrend">
                              {{#each EventTrends}}
                              <tr>
                                 <td class="selectable-option {{Selected ? 'selected' : ''}}" data-key="{{Key}}">{{Value}}</td>
                              </tr>
                              {{#endeach}}
                           </tbody>
                        </table>
                     </div>
                  </div>
                  <div class="param-row">
                     <div class="row-name">Возрастной ценз</div>
                     <div class="row-selecttable">
                        <table>
                           <tbody data-type="AgeLimit">
                              {{#each AgeCensore}}
                              <tr>
                                 <td class="selectable-option {{Selected ? 'selected' : ''}}" data-key="{{Key}}">{{Value}}</td>
                              </tr>
                              {{#endeach}}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
               <div class="param-row">
                  <div class="row-name">Стационар / внестационар</div>
                  <div class="row-selecttable">
                     <table class="center-text">
                        <tbody data-type="EventPlaceTypeID">
                           <tr>
                              <td class="selectable-option selected" data-key="1">Стационар</td>
                              <td class="selectable-option" data-key="2">Внестационар</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
               <div class="param-row">
                  <div class="row-name">Целевая аудитория</div>
                  <div>
                     От <input type="number"> до <input type="number">
                  </div>
               </div>
               <div class="double-select">
                  <div class="param-row">
                     <div class="row-name">Возрастная категория</div>
                     <div>
                        <input type="text">
                     </div>
                  </div>
                  <div class="param-row">
                     <div class="row-name">Количество посетителей</div>
                     <div>
                        <input type="number" value="0">
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="wizard-page expanded" data-pageid="3">
            <div class="w-header">4. Даты</div>
            <div class="displayed">
               <div class="param-row">
                  <div class="row-name">Дата начала</div>
                  <div>
                     <input type="datetime-local">
                  </div>
               </div>
               <div class="param-row">
                  <div class="row-name">Дата окончания</div>
                  <div>
                     <input type="datetime-local">
                  </div>
               </div>
               <div class="double-select">
                  <div class="param-row">
                     <div class="row-name">Повторы</div>
                     <div>Нет повторений</div>
                  </div>
                  <div class="param-row" style="flex:3">
                     <div>
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
                  </div>
               </div>
            </div>
         </div>
         <div class="wizard-page expanded" data-pageid="4">
            <div class="w-header">5. Дополнительная информация</div>
            <div class="displayed">
               <div class="double-select">
                  <div class="param-row">
                     <div class="row-name">СМИ</div>
                     <textarea class="row-textarea"></textarea>
                  </div>
                  <div class="param-row">
                     <div class="row-name">Теги</div>
                     <textarea class="row-textarea"></textarea>
                  </div>
               </div>
               <div class="param-row">
                  <div class="row-name">Тизер</div>
                  <img src="" alt="">
               </div>
            </div>
         </div>
         <div class="wizard-page expanded" data-pageid="5">
            <div class="w-header">6. Афиша</div>
            <div class="displayed">
               <div class="param-row">
                  <textarea class="row-textarea"></textarea>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="bottom-buttons">
      <button class="back-button l-button">НАЗАД</button>
      <button class="next-button l-button">ДАЛЕЕ</button>
   </div>
</div>`,
    Proto: {
        /*DaysOfWeek: [
            {Num: 1, Name: 'ПН', Disable: false},
            {Num: 2, Name: 'ВТ', Disable: false},
            {Num: 3, Name: 'СР', Disable: false},
            {Num: 4, Name: 'ЧТ', Disable: false},
            {Num: 5, Name: 'ПТ', Disable: false},
            {Num: 6, Name: 'СБ', Disable: false},
            {Num: 7, Name: 'ВС', Disable: false}
        ],*/
        EventKinds: [],
        UserList: [],
        AgeCensore: (new Array(10)).Select((x, i) => ({Key: i*2, Value: i*2+'+', Selected: i===0})),
        EventTrends: [],
        Event: {},
    },
    Show: function () {
        this.Proto.Data.Event ={AgeLimit: 0, Allow_Blind: false, Allow_Deaf: false, Allow_Disabled: false, Curator: Lure.User.ID, DateFinish: Lure.Date().DateCs, DateStart: Lure.Date().DateCs, Description: "", EventCelebration: 0, EventKindID: 1, EventTrend: 12, EventTypeID: 1, Guests: "Нет", ID: 0, Initiator: 'ГЗ', InvolvedStatus: 'организатор', LibraryID: 0, Name: "", PlanCount: 0, Price: 0, Tags: "", TargetAgeRange: "0+", TargetAudience: "0-100", EventPlaceTypeID: 1, MultipleDates: [], Tiser: '', IsModerated: false, AfficheImage: ''}
        if (this.Proto.Data.EventKinds.length === 0)
            this.Proto.Data.EventKinds = Object.entries(D.EventTypeDict)
                .map(([k, v]) => ({Key: parseInt(k), Value: v, Selected: k === '1'}))
                .filter(x => x.Key > 0);

        if (this.Proto.Data.EventTrends.length === 0)
            this.Proto.Data.EventTrends = Object.entries(D.EventTrendsDict).map(([k, v]) => ({Key: parseInt(k), Value: v, Selected: k === '12'}));

        if (this.Proto.Data.UserList.length === 0)
            this.Proto.Data.UserList = Lure.User.Cache.UserList.map(x => ({Key: x.ID, Value: [x.Name, x.Email, x.Phone, x.Position].join(', '), Selected: x.ID === Lure.User.ID}));

        this.Proto.Refresh();
        this.PageList.style['scrollBehavior'] = 'unset';
        this.PageList.scrollTop = 0;
        // this.PageList.scrollTop = 632*3;
        this.PageList.style['scrollBehavior'] = '';
        this.OpTab = 0;
    },
    Hide: function () {

    },
    Methods: function () {
        let tabs = this.SelectAll("div.wizard-page"), texts = this.SelectAll("div.wizard-page > p");
        this.PageList = this.Select('.container-body');
        let available = true;

        this.CheckPage = function (page) {
            return true;
        };

        this.ChangePage = function (direction /* +1 or -1 */) {
            // debugger
            if (available) {
                setTimeout(() => available = true, 1000);
                available = false;
            } else return;

            if (!this.CheckPage(this.OpTab)) {Lure.System.Error('На этой странице есть ошибки')}
            this.OpTab += direction;
            if (direction > 0) {
                if (this.OpTab <= 5)
                    this.PageList.scrollTop += 632;
                else this.OpTab = 5;
            } else {
                if (this.OpTab >= 0)
                    this.PageList.scrollTop -= 632;
                else this.OpTab = 0;
            }
        };
        this.OpenNextTab = function () {
            this.ChangePage(1);
        };
        this.OpenPrevTab = function () {
            this.ChangePage(-1);
        };
    },
    AfterBuild: function () {
/*        this.AddEventListener('click', 'div.wizard-page', e => {
            let id = e.currentTarget.dataset['pageid'];
            this.OpenWizardTab(id);
        });*/
        this.Select('.back-button').onclick = () => this.OpenPrevTab();
        this.Select('.next-button').onclick = () => this.OpenNextTab();
        this.Select('.cancel-button').onclick = () => this.Proto.Refresh();
        this.AddEventListener('click', '.row-selecttable .selectable-option', e => {
            let elem = e.currentTarget;
            let key = elem.dataset['key'], type = elem.parentElement.parentElement.dataset['type'];
            console.log(key, type);

        });
    }
});