HelpDesk.NewReq = new Lure.Content({
    Target: '.help-desk-new-request',
    Visible: true,
    Type: 'help-desk-content',
    Control:{
        Target: '#nav-help-desk-new-req'
    },
    Content:
        `<div class="new-requests l-rel">
            <div class="diary-bread l-row">
                <div class="li">
                    Подразделение: 
                    <select class="l-select select help-d lib-list"></select>
                </div>
            </div>
            <div class="widgets">
                <div  class="widgets l-t-content">
                   <div  class="widget diary-widget register-widget  l-t-line" data-line="0">
                      <div  class="widget-head l-row">
                         <div  class="widget-title l-row">
                            <div  class="widget-caption">ОРГАНИЗАЦИЯ РАБОЧЕГО МЕСТА</div>
                         </div>
                      </div>
                      <div  data-problemtype="0" class="widget-content">
                         <div  class="widget-text">
                            <div  class="problem-icon workplace-service"></div>
                            <div  class="problems">
                               <div  class="problem-list-head">Типовые проблемы:</div>
                               <ul >
                                  <li class="new-req-li">Восстановление паролей</li>
                                  <li class="new-req-li">Установка/перемещение компьютеров</li>
                                  <li class="new-req-li">Учетные записи для принятых работников</li>
                                  <li class="new-req-li">Удаление учетных записей уволенных работников</li>
                                  <li class="new-req-li">Приостановка действия учетной записи работника</li>
                               </ul>
                            </div>
                         </div>
                         <div  class="button-plus-wrapper">
                            <div  class="button-plus-cutter right">
                               <div  class="button-plus btn-switcher new-req"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div  class="widget diary-widget register-widget  l-t-line" data-line="1">
                      <div  class="widget-head l-row">
                         <div  class="widget-title l-row">
                            <div  class="widget-caption">ОБСЛУЖИВАНИЕ КОМПЬЮТЕРОВ</div>
                         </div>
                      </div>
                      <div  data-problemtype="1" class="widget-content">
                         <div  class="widget-text">
                            <div  class="problem-icon pc-service"></div>
                            <div  class="problems">
                               <div  class="problem-list-head">Типовые проблемы:</div>
                               <ul >
                                  <li class="new-req-li">Не включается компьютер</li>
                                  <li class="new-req-li">Нет изображения на мониторе</li>
                                  <li class="new-req-li">Замена клавиатуры/мыши</li>
                                  <li class="new-req-li">Очистка компьютера от пыли</li>
                                  <li class="new-req-li">Не работает звук</li>
                               </ul>
                            </div>
                         </div>
                         <div  class="button-plus-wrapper">
                            <div  class="button-plus-cutter right">
                               <div  class="button-plus btn-switcher new-req"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div  class="widget diary-widget register-widget  l-t-line" data-line="2">
                      <div  class="widget-head l-row">
                         <div  class="widget-title l-row">
                            <div  class="widget-caption">ОБСЛУЖИВАНИЕ ОРГТЕХНИКИ</div>
                         </div>
                      </div>
                      <div  data-problemtype="2" class="widget-content">
                         <div  class="widget-text">
                            <div  class="problem-icon printer-service"></div>
                            <div  class="problems">
                               <div  class="problem-list-head">Типовые проблемы:</div>
                               <ul >
                                  <li class="new-req-li">Не работает принтер</li>
                                  <li class="new-req-li">Не работает сканер</li>
                                  <li class="new-req-li">Настройка печати/сканирования</li>
                                  <li class="new-req-li">Замена картриджа</li>
                                  <li class="new-req-li">Очистка от пыли устройства печати</li>
                               </ul>
                            </div>
                         </div>
                         <div  class="button-plus-wrapper">
                            <div  class="button-plus-cutter right">
                               <div  class="button-plus btn-switcher new-req"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div  class="widget diary-widget register-widget  l-t-line" data-line="3">
                      <div  class="widget-head l-row">
                         <div  class="widget-title l-row">
                            <div  class="widget-caption">ОБСЛУЖИВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</div>
                         </div>
                      </div>
                      <div  data-problemtype="3" class="widget-content">
                         <div  class="widget-text">
                            <div  class="problem-icon soft-service"></div>
                            <div  class="problems">
                               <div  class="problem-list-head">Типовые проблемы:</div>
                               <ul >
                                  <li class="new-req-li">Установка ПО</li>
                                  <li class="new-req-li">Удаление «лишнего» ПО</li>
                                  <li class="new-req-li">Настройка антивирусной защиты</li>
                                  <li class="new-req-li">Не хватает места на жестком диске</li>
                                  <li class="new-req-li">Настройка сетевой папки</li>
                               </ul>
                            </div>
                         </div>
                         <div  class="button-plus-wrapper">
                            <div  class="button-plus-cutter right">
                               <div  class="button-plus btn-switcher new-req"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div  class="widget diary-widget register-widget  l-t-line" data-line="4">
                      <div  class="widget-head l-row">
                         <div  class="widget-title l-row">
                            <div  class="widget-caption">НАБЛЮДЕНИЕ, СЧЕТЧИКИ, СИГНАЛИЗАЦИЯ</div>
                         </div>
                      </div>
                      <div  data-problemtype="4" class="widget-content">
                         <div  class="widget-text">
                            <div  class="problem-icon counters-service"></div>
                            <div  class="problems">
                               <div  class="problem-list-head">Типовые проблемы:</div>
                               <ul >
                                  <li class="new-req-li">Не работает видеонаблюдение</li>
                                  <li class="new-req-li">Не работает «тревожная кнопка»</li>
                                  <li class="new-req-li">Не работает сигнализация</li>
                                  <li class="new-req-li">Не работает система подсчета посетителей</li>
                                  <li class="new-req-li">Подсчет посетителей ведется некорректно</li>
                               </ul>
                            </div>
                         </div>
                         <div  class="button-plus-wrapper">
                            <div  class="button-plus-cutter right">
                               <div  class="button-plus btn-switcher new-req"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div  class="widget diary-widget register-widget  l-t-line" data-line="5">
                      <div  class="widget-head l-row">
                         <div  class="widget-title l-row">
                            <div  class="widget-caption">ТЕХНИЧЕСКОЕ СОПРОВОЖДЕНИЕ МЕРОПРИЯТИЙ</div>
                         </div>
                      </div>
                      <div  data-problemtype="5" class="widget-content">
                         <div  class="widget-text">
                            <div  class="problem-icon event-service"></div>
                            <div  class="problems">
                               <div  class="problem-list-head">Типовые проблемы:</div>
                               <ul >
                                  <li class="new-req-li">Подготовка/настройка оборудования</li>
                                  <li class="new-req-li">Сопровождение мероприятия</li>
                                  <li class="new-req-li">Подготовка выездного комплекта оборудования</li>
                               </ul>
                            </div>
                         </div>
                         <div  class="button-plus-wrapper">
                            <div  class="button-plus-cutter right">
                               <div  class="button-plus btn-switcher new-req"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div  class="widget diary-widget register-widget  l-t-line" data-line="6">
                      <div  class="widget-head l-row">
                         <div  class="widget-title l-row">
                            <div  class="widget-caption">РЕМОНТ</div>
                         </div>
                      </div>
                      <div  data-problemtype="6" class="widget-content">
                         <div  class="widget-text">
                            <div  class="problem-icon repair-service"></div>
                            <div  class="problems">
                               <div  class="problem-list-head">Типовые проблемы:</div>
                               <ul >
                                  <li class="new-req-li">Течет смеситель/кран/сантехника</li>
                                  <li class="new-req-li">Течет подводка/труба/батарея</li>
                                  <li class="new-req-li">Засор в раковине/канализации</li>
                                  <li class="new-req-li">Не работает розетка</li>
                                  <li class="new-req-li">Не работает телефон</li>
                                  <li class="new-req-li">Ремонт дверей</li>
                                  <li class="new-req-li">Не работает вывеска</li>
                               </ul>
                            </div>
                         </div>
                         <div  class="button-plus-wrapper">
                            <div  class="button-plus-cutter right">
                               <div  class="button-plus btn-switcher new-req"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div  class="widget diary-widget register-widget  l-t-line" data-line="7">
                      <div  class="widget-head l-row">
                         <div  class="widget-title l-row">
                            <div  class="widget-caption">ЗАМЕНА / УСТАНОВКА</div>
                         </div>
                      </div>
                      <div  data-problemtype="7" class="widget-content">
                         <div  class="widget-text">
                            <div  class="problem-icon replace-setup-service"></div>
                            <div  class="problems">
                               <div  class="problem-list-head">Типовые проблемы:</div>
                               <ul >
                                  <li class="new-req-li">Замена ламп</li>
                                  <li class="new-req-li">Замена светильника</li>
                                  <li class="new-req-li">Установка унитаза</li>
                                  <li class="new-req-li">Установка смесителя/крана</li>
                                  <li class="new-req-li">Установка розетки</li>
                                  <li class="new-req-li">Замена автоматического выключателя</li>
                               </ul>
                            </div>
                         </div>
                         <div  class="button-plus-wrapper">
                            <div  class="button-plus-cutter right">
                               <div  class="button-plus btn-switcher new-req"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                   <div style="display: flex;">
                       <div  class="widget diary-widget register-widget narrow l-t-line" data-line="8">
                          <div  class="widget-head l-row">
                             <div  class="widget-title l-row">
                                <div  class="widget-caption">ДРУГОЕ</div>
                             </div>
                          </div>
                          <div  data-problemtype="8" class="widget-content">
                             <div  class="widget-text">
                                <div  class="problem-icon "></div>
                                <div  class="problems">
                                   <div  class="other-depart">
                                      <div  class="depart-name">ИТ</div>
                                      <div  class="depart">отдел</div>
                                   </div>
                                </div>
                             </div>
                             <div  class="button-plus-wrapper">
                                <div  class="button-plus-cutter right">
                                   <div  class="button-plus btn-switcher new-req"></div>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div  class="widget diary-widget register-widget narrow l-t-line" data-line="9">
                          <div  class="widget-head l-row">
                             <div  class="widget-title l-row">
                                <div  class="widget-caption">ДРУГОЕ</div>
                             </div>
                          </div>
                          <div  data-problemtype="9" class="widget-content">
                             <div  class="widget-text">
                                <div  class="problem-icon "></div>
                                <div  class="problems">
                                   <div  class="other-depart">
                                      <div  class="depart-name">АХД</div>
                                      <div  class="depart">отдел</div>
                                   </div>
                                </div>
                             </div>
                             <div  class="button-plus-wrapper">
                                <div  class="button-plus-cutter right">
                                   <div  class="button-plus btn-switcher new-req"></div>
                                </div>
                             </div>
                          </div>
                       </div>
                   </div>
                </div>
                <div class="pseudo-div"></div>
            </div>
            <div class="new-req-dialog-wrap"></div>
        </div>`,
    Controller: {
        Target: '.new-requests .widgets .pseudo-div',
        Data: [
            {
                Name: 'ОРГАНИЗАЦИЯ РАБОЧЕГО МЕСТА',
                Problem_type: 0,
                Icon: 'workplace-service',
                Problems: ['Восстановление паролей', 'Установка/перемещение компьютеров', 'Учетные записи для принятых работников', 'Удаление учетных записей уволенных работников', 'Приостановка действия учетной записи работника']
            }, {
                Name: 'ОБСЛУЖИВАНИЕ КОМПЬЮТЕРОВ',
                Problem_type: 1,
                Icon: 'pc-service',
                Problems: ['Не включается компьютер', 'Нет изображения на мониторе', 'Замена клавиатуры/мыши', 'Очистка компьютера от пыли', 'Не работает звук']
            }, {
                Name: 'ОБСЛУЖИВАНИЕ ОРГТЕХНИКИ',
                Problem_type: 2,
                Icon: 'printer-service',
                Problems: ['Не работает принтер', 'Не работает сканер', 'Настройка печати/сканирования', 'Замена картриджа', 'Очистка от пыли устройства печати']
            }, {
                Name: 'ОБСЛУЖИВАНИЕ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ',
                Problem_type: 3,
                Icon: 'soft-service',
                Problems: ['Установка ПО', 'Удаление «лишнего» ПО', 'Настройка антивирусной защиты', 'Не хватает места на жестком диске', 'Настройка сетевой папки']
            }, {
                Name: 'НАБЛЮДЕНИЕ, СЧЕТЧИКИ, СИГНАЛИЗАЦИЯ',
                Problem_type: 4,
                Icon: 'counters-service',
                Problems: ['Не работает видеонаблюдение', 'Не работает «тревожная кнопка»', 'Не работает сигнализация', 'Не работает система подсчета посетителей', 'Подсчет посетителей ведется некорректно']
            }, {
                Name: 'ТЕХНИЧЕСКОЕ СОПРОВОЖДЕНИЕ МЕРОПРИЯТИЙ',
                Problem_type: 5,
                Icon: 'event-service',
                Problems: ['Подготовка/настройка оборудования', 'Сопровождение мероприятия', 'Подготовка выездного комплекта оборудования']
            }, {
                Name: 'РЕМОНТ',
                Problem_type: 6,
                Icon: 'repair-service',
                Problems: ['Течет смеситель/кран/сантехника', 'Течет подводка/труба/батарея', 'Засор в раковине/канализации', 'Не работает розетка', 'Не работает телефон', 'Ремонт дверей', 'Не работает вывеска']
            }, {
                Name: 'ЗАМЕНА / УСТАНОВКА',
                Problem_type: 7,
                Icon: 'replace-setup-service',
                Problems: ['Замена ламп', 'Замена светильника', 'Установка унитаза', 'Установка смесителя/крана', 'Установка розетки', 'Замена автоматического выключателя']
            },/*{
                Name: 'ИНОПЛАНЕТНОЕ ВТОРЖЕНИЕ',
                Problem_type: 6,
                Problems: ['Летающие тарелки']
            }, {
                Name: 'АПОКАЛИПСИС',
                Problem_type: 7,
                Problems: ['Извержение вулкана', 'Метеоритный дождь', 'Всемирный потоп']
            },*/ {
                Name: 'ДРУГОЕ',
                Problem_type: 8,
                Icon: '',
                Type: 'narrow',
                Text: 'ИТ'
            }, {
                Name: 'ДРУГОЕ',
                Problem_type: 9,
                Icon: '',
                Type: 'narrow',
                Text: 'АХД'
            },
        ],
        ListElement: `<span></span>`
    },
    Props: function() {
        this.WidgetContainer = this.Select('.widgets');
        this.LibContrl = new Lure.Controller.Templator({
            Target: '.help-d.lib-list',
            Data: [],
            ListElement: `<option value="{{ID}}">{{Name}}</option>`
        });
        this.LibSelect = this.Select('.help-d.lib-list');
    },
    Methods: function () {
        this.newRequest = function(type, pr_id = '-1',  text = '') {
            type = parseInt(type);
            pr_id = parseInt(pr_id);
            //if (!type && type !== 0) return;
            if (this.ReqSender.newRequest(type, pr_id, text, this.Controller.Data[type].Name))
                this.ReqSender.Show();
        };
        this.BlurWidgets = function (mode = true) {
            if (mode)
                this.WidgetContainer.classList.add('form-opened');
            else this.WidgetContainer.classList.remove('form-opened');
        };
        this.OrderInColl = function (elem) {
            let i = 0;
            for (let x of elem.parentElement.children) {
                if (x === elem)
                    return i;
                i++;
            }
        };
    },
    AfterBuild: function () {
        this.AddEventListener('click', '.problems .new-req-li, .widget-content .new-req', function (e) {
            if (e.currentTarget.classList.contains('new-req-li'))
                this.newRequest(e.currentTarget.parentElement.parentElement.parentElement.parentElement.dataset['problemtype'], this.OrderInColl(e.currentTarget), e.currentTarget.innerText);
            if (e.currentTarget.classList.contains('new-req'))
                this.newRequest(e.currentTarget.parentElement.parentElement.parentElement.dataset['problemtype']);
        });
        this.LibContrl.Refresh(Lure.User.Cache.LibraryList);
    }
});

require('./request-sender/request-sender.js');
