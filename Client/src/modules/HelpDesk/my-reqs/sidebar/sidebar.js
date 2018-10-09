const HistorySubscription = require('../../../_common/history-master/history-subscription');
const InputBox = require("../../../_common/input-box/input-box");

// D.RoleDict[8]  - пользователь
// D.RoleDict[9]  - техник
// D.RoleDict[23] - модератор

module.exports = new Lure.Content({
    Target: '.req-space',
    Type: 'help-desk-sidebar',
    Permission: {
        Roles: [Dictionary.Role.Helpdesk]
    },
    Content: `<div></div>`,
    AfterBuild: function () {
        let URole = 0;
        if (Lure.User.Roles.indexOf(8) !== -1) URole = 8;
        if (Lure.User.Roles.indexOf(9) !== -1) URole = 9;
        if (Lure.User.Roles.indexOf(23) !== -1) URole = 23;
        // console.log(URole);
        let Content = '';
        let Animation = {};
        let target = '.req-space';
        let afterFun = function () {};
        // URole = 23; // Потом убрать

        switch (URole) {
            case 23:
                // это будет для модератора
                HelpDesk.MyReqs.SpecialModerSidebar = new Lure.Content(ModerView());
                target = '.target-moderator';
                Animation = {Show: 'vertical-animation-show-no-anim', Hide: 'vertical-animation-hide-no-anim'};
                // return;
            case 9:
                // это будет для техника
                Content = `<div class="sidebar-container">
    <div class="req-sidebar tech-view l-col">
        <div class="req-sidebar-list field-list flex4">
            <div class="data-card flex2">
                <div class="card-header">КРАТКАЯ ИНФОРМАЦИЯ</div>
                <div class="full-card-data">{{Name}}</div>
            </div>
            <div class="data-card flex3">
                <div class="card-header">ПОДРОБНОЕ ОПИСАНИЕ</div>
                <div class="full-card-data"><div>{{Description}}</div><div class="status-history"><div class="his-head">История статусов</div><div class="his-data"></div></div></div>
            </div>
            <div class="data-card flex4">
                <div class="card-header">ФАЙЛЫ</div>
                <div class="full-card-data file-card">
                    {{#each FilesList}}
                        <div class="uploading-file">
                            <div class="file-icon"></div>
                            <div class="file-params">
                                <div class="name-type"><span class="filename" title="{{NameFull}}">{{NameSub}}</span>.<span class="filetype">{{FileType}}</span></div>
                                <div class="rename-remove"><span class="download" data-fileid="{{ID}}">Скачать</span></div>
                            </div>
                        </div>
                    {{#endeach}}
                </div>
            </div>
        </div>
        <div class="chat-files-block flex2">
            <div class="cf-tab chat-tab active">ЧАТ С ПОЛЬЗОВАТЕЛЕМ</div>
            <div class="req-chat">
                <div class="messages-box"></div>
                <div class="input-area">
                    <input class="mess-input" placeholder="Введите сообщение...">
                    <input class="none mess-files-attach" type="file" multiple name="message-files" id="mess-files-attach">
                    <label class="files-attach-label" title="Прикрепить файлы" for="mess-files-attach">&#128206;</label>
                    <button class="send-mess l-button"  title="Отправить">>></button>
                </div>
            </div>
        </div>
        <div class="req-sidebar-control flex1">
            <div class="user-info flex3">
                <div class="card-header">ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ</div>
                <div class="user-name strong">{{User.Name}}</div>
                <div class="user-position">{{User.Position}}</div>
                <div class="user-additional">Телефон: <span>{{User.Phone}}</span></div>
                <div class="user-additional">Email: <span>{{User.Email}}</span></div>
                <div class="user-additional">&nbsp;</div>
                <div class="user-additional">Подразделение: <span>{{LibraryID}}</span></div>
                <div class="user-additional">Адрес: <span>{{LibraryAddress}}</span></div>
            </div>
            <div class="ticket-execution flex4 flex-col">
                <div class="card-header">ИСПОЛНЕНИЕ</div>
                <div class="params">
                    <div class="user-additional">Приоритет: <span>{{PriorityID}}</span></div>
                    <div class="user-additional">Дата поступления: <span>{{DateCreated}}</span></div>
                    <div class="user-additional">Срок исполнения: <span>{{ExecutionDate}}</span></div>
                </div>
                <div class="buttons flex1">
                    <div>{{StatusIDButton}}</div>
                    <div>{{DisabledOnAccept}}</div>
                    <div><button class="l-button change-exec-time">ИЗМЕНИТЬ СРОК ИСПОЛНЕНИЯ</button><div class="none date-to-move"></div></div>
                    <div><button class="l-button close-ticket">ЗАКРЫТЬ (ВЫПОЛНЕНО)</button></div>
                    {{SpreadButton}}
                </div>
                <div class="buttons">
                    <div><button class="button button2 btn-cancel">ЗАКРЫТЬ</button></div>
                </div>
            </div>
        </div>
    </div>
</div>`;
                if (URole !== 23)
                    Animation = {Show: 'vertical-animation-show', Hide: 'vertical-animation-hide'};
                afterFun = function () {
                    let p = this.Proto;
                    let self = this;
                    this.AddEventListener('click', '.l-button.accept-to-work',
                        e => api.HelpDesk_RequestApply(this.currReqID)
                            .then(() => {
                                this.Parent.ChangeStatus(this.currReqID, 1);
                                Lure.System.Success('Заявка принята в работу');
                            }));
                    let onChangeStatus = (elem, s) => {
                        let caption = 'Изм. статус';
                        if (s === 2) caption += ': Закрыть';
                        if (s === 3) caption += ': Отклонить';
                        InputBox.Run(elem, '',
                            comment => {
                                Lure.Button.Lock(elem);
                                if (s === 2)
                                    api.HelpDesk_RequestFinish(this.currReqID, comment, {
                                        Then: r => {
                                            if (r === -1)
                                                Lure.System.ShowError('Что-то пошло не так');
                                            else this.Parent.ChangeStatus(this.currReqID, s);

                                            Lure.Button.Release(elem);
                                            if (this.Parent.SpecialModerSidebar)
                                                this.Parent.SpecialModerSidebar.Show();
                                            else this.Hide();
                                            Lure.System.Success('Заявка закрыта');
                                        }
                                    });
                                if (s === 3)
                                    api.HelpDesk_RequestReject(this.currReqID, comment, {
                                        Then: r => {
                                            if (r === -2) Lure.System.ShowError('Заявка уже принята в работу, ее нельзя отклонить');
                                            else if (r === -1) Lure.System.ShowError('Что-то пошло не так');
                                            else this.Parent.ChangeStatus(this.currReqID, s);
                                            Lure.System.Success('Заявка отклонена');
                                        }
                                    });
                            }, {
                                Caption: caption,
                                TextArea: true
                            });
                    };
                    this.AddEventListener('click', '.l-button.reject', () => onChangeStatus(this.Select('.l-button.reject'), 3));
                    let b2 = this.Select('.l-button.close-ticket');
                    b2.onclick = () => onChangeStatus(b2, 2);

                    this.Select('.l-button.change-exec-time').onclick = () => {this.ExecTimePicker.Date = Lure.Date(p.Data.ExecutionDate || new Date); this.ExecTimePicker.Show()};
                    this.ExecTimePicker = new Lure.PeriodPicker({
                        Target: this.Select('.date-to-move'),
                        NoRange: true,
                        DateTarget: Lure.Date(),
                        AutoConfirm: true,
                        OnConfirm: function () {
                            this.Date.setHours(14);
                            api.HelpDesk_RequestEdit_ExecutionDate(p.Data.ReqID, this.Date).then(r => {
                                self.Parent.ChangeRowData(self.RowID, 'ExecutionDate', Lure.Date(this.Date));
                                p.SetProperty('ExecutionDate', Lure.Date(this.Date).DateCs);
                                Lure.System.Success('Срок исполнения изменен');
                            });
                        }
                    });

                    let rsp = this.Parent.Select('.req-space');
                    rsp.classList.add('flex-col');
                    if (URole !== 23)
                        rsp.classList.add('tech-space');

                    this.AddEventListener('click', '.status-history', e => {
                        // e.currentTarget.innerHTML = 'Коммент';
                        api.HelpDesk_RequestStatusChangesGet(p.Data.ReqID, {
                            Then: r => this.HisData.innerHTML = r.length > 0 ? r.map(x => `<div>${Lure.Date(x.DateCreated).Format('DD.MM.YYYY')} -> ${D.HelpRequestStatusDict[x.StatusID]}: ${x.Comment}</div>`).join('') : '<div>Нет изменений</div>'
                        });
                    });
                    this.AddEventListener('click', '.spread-ticket', e => this.SpreadTicketToTechs());
                };
                break;
            case 8:
                // это будет для обычного пользователя
                Content = `<div style="display: flex">
        <div class="req-sidebar l-col">
            <div class="head">
                <h2 class="h2">Инцидент №{{ReqID}}</h2>
            </div>
            <div class="req-sidebar-list field-list flex1">
                <div class="data-card">
                    <div class="card-header">КРАТКАЯ ИНФОРМАЦИЯ</div>
                    <div class="card-data-row">
                        <div class="data-name">Тема</div>
                        <div class="data-value">{{Name}}</div>
                    </div>
                    <div class="card-data-row">
                        <div class="data-name">Дата</div>
                        <div class="data-value">{{DateCreated}}</div>
                    </div>
                    <div class="card-data-row">
                        <div class="data-name">Приоритет</div>
                        <div class="data-value">{{PriorityID}}</div>
                    </div>
                </div>
                <div class="data-card">
                    <div class="card-header">ПОДРОБНОЕ ОПИСАНИЕ</div>
                    <div class="full-card-data">{{Description}}</div>
                </div>
                <div class="data-card">
                    <div class="card-header">ИСПОЛНЕНИЕ</div>
                    <div class="card-data-row">
                        <div class="data-name">Статус</div>
                        <div class="data-value">{{StatusID}}</div>
                    </div>
                    <div class="card-data-row">
                        <div class="data-name">Срок исполнения</div>
                        <div class="data-value">{{ExecutionDate}}</div>
                    </div>
                    <div class="card-data-row">
                        <div class="data-name">Исполнитель</div>
                        <div class="data-value">{{TechnicianID}}</div>
                    </div>
                </div>
            </div>
            
            <div class="chat-files-block">
                <div class="tabs">
                    <div class="cf-tab chat-tab active">ЧАТ С ИСПОЛНИТЕЛЕМ</div>
                    <div class="cf-tab files-tab">ФАЙЛЫ</div>
                </div>
                <div class="req-chat">
                    <div class="messages-box"></div>
                    <div class="input-area">
                        <input class="mess-input" placeholder="Введите сообщение...">
                        <input class="none mess-files-attach" type="file" multiple name="message-files" id="mess-files-attach">
                        <label class="files-attach-label" title="Прикрепить файлы" for="mess-files-attach">&#128206;</label>
                        <button class="send-mess l-button"  title="Отправить">>></button>
                    </div>
                </div>
                <div class="req-files none">
                    {{#each FilesList}}
                        <div class="uploading-file">
                            <div class="file-icon"></div>
                            <div class="file-params">
                                <div class="name-type"><span class="filename" title="{{NameFull}}">{{NameSub}}</span>.<span class="filetype">{{FileType}}</span></div>
                                <div class="rename-remove"><span class="download" data-fileid="{{ID}}">Скачать</span></div>
                            </div>
                        </div>
                    {{#endeach}}
                </div>
            </div>
            <div class="foot">
                <button class="button button2 btn-cancel">ЗАКРЫТЬ</button>
                <button class="button btn-not-complete {{StatusIDClass}}">ЗАЯВКА НЕ ВЫПОЛНЕНА</button>
            </div>
        </div>
    </div>`;
                Animation = {Show: 'animation-show', Hide: 'animation-hide'};
                afterFun = function () {
                    let rsp = this.Parent.Select('.req-space');
                    rsp.classList.add('user-space');

                    let NotComplete = (elem) => {
                        InputBox.Run(elem, '',
                            x => {
                                console.log(x);
                                api.HelpDesk_RequestReturn(this.currReqID, x)
                                    .then(r => {
                                        if (r === -2) {Lure.System.ShowError('Заявка еще не закрыта'); return;}
                                        if (r === -1) {Lure.System.ShowError('Что-то пошло не так'); return;}
                                        this.Parent.ChangeStatus(this.currReqID, 4);
                                        Lure.System.Success('Заявка возвращена');
                                    });
                            }, {Caption: 'Причина возвращения', TextArea: true});
                    };
                    let b = this.Select('.btn-not-complete');
                    b.onclick = e => NotComplete(b);
                };
                break;
        }
        if (Content.length === 0) return;
        HelpDesk.MyReqs.Sidebar = new Lure.Content({
            Target: target,
            Type: 'help-desk-sidebar',
            Parent: HelpDesk.MyReqs,
            Content: Content,
            Animation: Animation,
            PropFormat: {
                DateCreated: x => Lure.Date(x).Format('DD.MM.YYYY'),
                ExecutionDate: (x, p) => {
                    let res;
                    if (!x)
                        switch (p.PriorityID) {
                            case D.HelpRequestPriority.Low:
                                res = Lure.Date(p.DateCreated).AddHours(8); // 8 часов
                                break;
                            case D.HelpRequestPriority.Mid:
                                res = Lure.Date(p.DateCreated).AddDays(1); // 1 день
                                break;
                            case D.HelpRequestPriority.High:
                                res = Lure.Date(p.DateCreated).AddDays(3); // 3 дня
                                break;
                            default /*D.HelpRequestPriorityDict.ExactDate*/:
                                return 'Не установлена';
                        }
                    else res = Lure.Date(x);
                    return res.Format('DD.MM.YYYY HH:mm');
                },
                PriorityID: x => D.HelpRequestPriorityDict[x],
                StatusID: x => ({'0': 'Новая', '1': 'В работе', '2': 'Закрыта', '3': 'Отклонена', '4': 'Возвращена'}[x] || '???'),
                TechnicianID: x => (Lure.User.Cache.TechnicianDict[x] || {Name: 'Не назначен'}).Name,
                LibraryID: id => (Lure.User.Cache.LibraryListDict[id] || {Name: ''}).Name,
                LibraryAddress: (id, p) => (Lure.User.Cache.LibraryListDict[p.LibraryID] || {Address: ''}).Address,
                StatusIDClass: (x, p) => p.StatusID === 2 ? '' : 'none',
                StatusIDButton: (x, p) => {
                    if (p.StatusID === 0)
                        return '<button class="l-button accept-to-work" style="border: 1px solid #2e83b8">ПРИНЯТЬ В РАБОТУ</button>';
                    else
                        return '<button class="l-button accepted" disabled>ПРИНЯТО В РАБОТУ</button>';
                },
                DisabledOnAccept: (x, p) => {
                    if (p.StatusID === 0)
                        return '<button class="l-button reject" style="border: 1px solid #B84741">ОТКЛОНИТЬ</button>';
                    else
                        return '<button class="l-button reject-no" disabled>ОТКЛОНИТЬ</button>';
                },
                SpreadButton: (x, p) => URole === 23 ? '<div><button class="l-button spread-ticket">БОЛЬШЕ ТЕХНИКОВ</button><div class="more-technics-select"></div></div>' : ''
            },
            Proto: {
                ReqID: 0,
                User: {}
            },
            GetSet: {
                get currReqID() {
                    return this.Proto.Data.ReqID
                }
            },
            Hide: function () {
                this.Subscription.Unsubscribe();
                this.Parent.ResetSelection();
            },
            Show: function (params) {
                // "param=123456" - из командной строки после последней / [main.html#HelpDesk/MyReqs/Sidebar/param=123]
                // console.log(params);
                this.Subscription.Subscribe();
                /* if (!params && params !== '') return;
                if (params === '')
                    this.Parent.Refresh();
                else {
                    let p = params.split('=');
                    let n;
                    if (p[0] === 'ticket' && (n = parseInt(p[1])))
                        this.Parent.RefreshData(n);
                    else this.Parent.RefreshData();
                }*/
            },
            Props: function () {
                this.MessageController = new Lure.Controller.Templator({
                    Target: '.req-chat .messages-box',
                    Data: [],
                    ListElement: `
                <div class="message-inst">
                    <div class="user-photo">
                        <img src="https://i.ebayimg.com/images/g/6F4AAOSwr6pZ8wJj/s-l300.jpg">
                    </div>
                    <div class="message-data">
                        <div class="name-time">
                            <span class="user-name">{{LoginID}}</span>
                            <span class="time"">{{Date}}</span>
                        </div>
                        <div class="text">{{Message}}</div>
                    </div>
                </div>`,
                    EmptyMessage: `<div>Сообщений еще нет...</div>`,
                    AfterBuild: function () {
                        this.Content.scrollTo(0, this.Content.scrollHeight);
                    }
                });
                this.HisData = this.Select('.status-history .his-data');
            },
            Methods: function () {
                let rf;
                this.ShowRequest = function (req, rowID) {
                    if (rf) rf.Hide();
                    this.RowID = rowID;
                    this.Proto.SetProperty('ReqID', req.ID);
                    // this.MessageController.Refresh([]);
                    if (req.Files)
                        req.FilesList = req.Files.map(f => {
                            let name = f.Name.split('.');
                            let filetype = name.pop().toLowerCase();
                            name = name.join('.');
                            return {
                                NameFull: f.Name,
                                Name: name,
                                FileType: filetype,
                                NameSub: name.length > (URole === 9 ? 15 : 30) ? name.substr(0, (URole === 9 ? 15 : 30)) + '...' : name,
                                ID: f.ID
                            };
                        });
                    Object.assign(this.Proto.Data, req);
                    this.Proto.Refresh();
                    this.RefreshMessages();
                    // this.StartCheckingMessages();
                    this.Parent.isRowSelected = true;
                    if (URole !== 8)
                        this.HisData.innerText = '';
                    if (!req.User && URole !== 8)
                        this.Parent.GetUserInfo(this.Proto.Data.ReqID, req.LoginID).then(u => this.Proto.SetProperty('User', u));
                    this.Show();
                };
                this.ResetData = function () {
                    this.Hide();
                };
                this.SendMessage = function (text, files = []) {
                    text = text.trim();
                    if (text === '') return;
                    return api.HelpDesk_RequestMessageAdd(this.Proto.Data.ReqID, text, files)
                        .then(r => this.RefreshMessages(this.LastMesID));
                };
                this.RefreshMessages = function (lastID = -1) {
                    api.HelpDesk_RequestMessageGet(this.Proto.Data.ReqID, lastID)
                        .then(async mess => {
                            if (mess.length === 0) {
                                if (lastID === -1)
                                    this.MessageController.Refresh([]);
                                return;
                            }
                            this.LastMesID = mess[mess.length - 1].ID;
                            for (let m of mess) {
                                m.Date = Lure.Date(m.DateCreated).Format('DD.MM.YYYY в HH:mm');
                                if (m.LoginID === Lure.User.ID)
                                    m.LoginID = Lure.User.Name;
                                else m.LoginID = (await this.Parent.GetUserInfo(this.Proto.Data.ReqID, m.LoginID)).Name;
                                if (m.MessageFiles !== '') try {
                                    let FilesArr = JSON.parse(m.Message).Files;
                                    let FileIDs = m.MessageFiles.split(',');
                                    let res = '';
                                    for (let i = 0; i < FilesArr.length; i++)
                                        res += `<div class="download" data-fileid="${FileIDs[i]}">Файл ${FilesArr[i]} (скачать)</div>`;
                                    m.Message = res;
                                } catch (e) {}
                            }
                            if (lastID === -1)
                                this.MessageController.Refresh(mess);
                            else {
                                for (let m of mess)
                                    this.MessageController.Add(m);
                                this.MessageController.Content.scrollTo(0, this.MessageController.Content.scrollHeight);
                            }
                        });
                };
                this.loadFile = function (reqID, fileID) {
                    api.HelpDesk_RequestFileGet(reqID, fileID, {
                        Then: r => Lure.SaveBlob(new Blob([new Uint8Array(r.FileBytes)]), r.Name),
                        Error: console.error,
                        Finally: () => {}
                    })
                };
                this.NewMessages = function (arr) {
                    for (let m of arr) {
                        if (m.MessageText1 === '' && m.MessageText2 === '') continue;
                        this.MessageController.Add(m);
                        this.MessageController.Refresh(this.MessageController.Data.length - 1);
                    }
                    this.MessageController.Content.scrollTo(0, this.MessageController.Content.scrollHeight);
                };
                this.SpreadTicketToTechs = function() {
                    if (!rf) {
                        rf = ReqFilter({
                            target: '.more-technics-select',
                            Data: Object.entries(Lure.User.Cache.TechnicianDict).map(x => x[1]),
                            Key: 'ID',
                            Value: 'Name',
                            Control: this.Select('.spread-ticket'),
                            AllSelector: false,
                            checked: '',
                            onOK: async techs => {
                                if (techs.length < 1) return;
                                let p = this.Proto.Data;
                                let res = [];
                                for (let tech of techs)
                                    res.push(await api.HelpDesk_RequestAdd(p.LibraryID, p.HelpRequestTypeID, p.Name, p.Description, p.PriorityID, p.ExecutionDate));
                                console.log(res);
                                for (let i = 0; i < res.length; i++)
                                    if (res[i] !== -1)
                                        await api.HelpDesk_RequestEdit_Technician(res[i]/*ID*/, techs[i]);
                                this.Parent.RefreshData();
                                Lure.System.Success('Заявка продублирована');
                            }
                        });
                        rf.Show();
                    } else
                        rf.ResetSelection();
                };
            },
            AfterBuild: function () {
                this.Select('.btn-cancel').onclick = e => {
                    if (this.Parent.SpecialModerSidebar)
                        this.Parent.SpecialModerSidebar.Show();
                    else
                        this.Hide();
                    /*if (!this.NeedRefresh)
                        this.Hide();
                    else {
                        this.NeedRefresh = false;
                        this.Parent.Refresh();
                    }*/
                };
                let SM = this.SendMessage;
                let inp = this.Select('.mess-input');
                inp.onkeyup = function (e) {
                    if (e.which === 13) {
                        SM(this.value);
                        this.value = '';
                    }
                };
                this.Select('button.send-mess').onclick = e => {
                    SM(inp.value);
                    inp.value = '';
                    inp.focus();
                };
                let chatTab = this.Select('.chat-files-block .req-chat');
                let filesTab = this.Select('.chat-files-block .req-files');
                this.SelectedCFTab = this.Select('.chat-files-block .cf-tab.active');
                this.AddEventListener('click', '.chat-files-block .cf-tab', e => {
                    let cl = e.currentTarget.classList;
                    if (this.SelectedCFTab === e.currentTarget) return;
                    this.SelectedCFTab.classList.remove('active');
                    this.SelectedCFTab = e.currentTarget;
                    cl.add('active');
                    chatTab.classList.toggle('none');
                    filesTab.classList.toggle('none');
                });
                this.AddEventListener('click', '.download', e => this.loadFile(this.Proto.Data.ReqID, e.currentTarget.dataset['fileid']));
                this.Subscription = new HistorySubscription({
                    OnSubscribe: async HistList => {
                        for (let i = 0; i < HistList.length; i++) {
                            let name = (await this.Parent.GetUserInfo(this.Proto.Data.ReqID, HistList[i].LoginID)).Name;
                            HistList[i] = {
                                Date: Lure.Date(HistList[i].DateCreated).Format('DD.MM.YYYY в HH:mm'),
                                LoginID: name, //// птоалдподаопвалдпва
                                Message: HistList[i].MessageText1,
                                MessageFiles: HistList[i].MessageText2
                            };
                        }
                        this.NewMessages(HistList)
                    },
                    Condition: h => h.TypeID === D.SubscribeType.SupportMessageAdd && h.LoginID !== Lure.User.ID && h.ItemID === this.currReqID
                });
                let mFiles = this.Select('#mess-files-attach');
                mFiles.onchange = e => {
                    console.log(mFiles.files);
                    let files = Array.prototype.map.call(mFiles.files, x => ({Name: x.name, File: x}));
                    HelpDesk.NewReq.ReqSender.RequestSendFiles(this.currReqID, files)
                    // this.Parent.Parent.NewReq.ReqSender
                        .then(r => {
                            console.log(r);
                            return this.SendMessage(JSON.stringify({Files: files.map(x => x.Name)}), r);
                        })
                        .then(r => mFiles.value = '');
                };
                afterFun.call(this);
            }
        });
    }
});

let ModerView = require('./moder-sidebar.js');
let ReqFilter = require('../../../_common/filter-selector/filter-selector.js');
