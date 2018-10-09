// let ListSelector = require('../../_common/list-selector/list-selector');
const HistorySubscription = require('../../_common/history-master/history-subscription');
const D = require('../../_common/dictionary');
const InputBox = require("../../_common/input-box/input-box");

Static.HelpRequestStatussChange = Static.HelpRequestStatuss.filter(x => x.ID < 3);
Static.HelpRequestPrioritysChange = Static.HelpRequestPrioritys.filter(x => x.ID < 4);

let control = `<div class="control">
                    <div class="filter" title="Фильтр">
                        <span class="toggle-filter"></span>
                        <div class="field-filter"></div>
                    </div>
                    <div class="sorting" title="Сортировка"></div>
               </div>`;
HelpDesk.MyReqs = new Lure.Content({
    Target: '.help-desk-my-requests',
    Type: 'help-desk-content',
    Control:{
        Target: '#nav-help-desk-my-req'
    },
    Permission: {
        Write: [D.Role.HelpdeskModerator]
    },
    Content:
        `<div class="my-requests">
            <div class="diary-bread l-row">
                <div class="li date-range">
                    <div class="calendar-icon">&#128198;</div>
                    <div class="dates"></div>
                </div>
                <div class="li l-row l-flexa-center flex-100">
                    <div>Подразделение: &nbsp;&nbsp;</div>
                    <div class="flex-100 library-tree-control strong">__</div>
                </div>
            </div>
            <div class="target-moderator"></div>
            <div class="my-req-header">
                <div class="req-tab all-my-reqs">ВСЕ</div>
                <div class="req-tab active-my-reqs selected">АКТИВНЫЕ</div>
                <div class="req-tab closed-my-reqs">ИСПОЛНЕННЫЕ</div>
                <div class="req-tab need-solution-my-reqs none">ТРЕБУЕТСЯ РЕШЕНИЕ (<span>{{NeedSolutionCount}}</span>)</div>
                <div class="req-search flex1 none"><input class="search-input" placeholder="Поиск..."></div>
            </div>
            <div class="flex1 req-space">
                <div class="my-reqs-list">
                    <table>
                        <thead>
                            <tr>
                        <!--MODER--><th class="not-for-user my-reqs-checks">
                                        <div class="wrap">
                                            <div><input type="checkbox" class="mass-actions"></div>
                                            <div style="position:relative;" class="{{NoneMassActions}}">
                                                <button class="mass-actions l-button">M</button>
                                                <div class="action-list none">
                                                    <div class="action-type" data-acttype="close-sel">Закрыть выбранные</div>
                                                    <div class="action-type" data-acttype="change-tech">Изменить исполнителя</div>
                                                    <div class="action-type" data-acttype="change-status">Изменить статус</div>
                                                    <div class="action-type" data-acttype="change-priority">Изменить приоритет</div>
                                                </div>
                                            </div>
                                        </div>
                                   </th>
                        <!--ALL --><th class="req-head my-reqs-num"><div class="head-wrap"><div>№</div><div class="control"><div class="sorting"></div></div></div></th>
                        <!--ALL --><th class="req-head my-reqs-create-date"><div class="head-wrap"><div>Дата регистрации</div>${control}</div></th>
                        <!--ALL --><th class="req-head my-reqs-complete-date"><div class="head-wrap"><div>Срок исполнения</div>${control}</div></th>
            <!--TECH--><!--MODER--><th class="not-for-user req-head my-reqs-closed-date"><div class="head-wrap"><div>Дата закрытия</div>${control}</div></th>
                        <!--ALL --><th class="req-head my-reqs-req-type"><div class="head-wrap"><div>Тип заявки</div>${control}</div></th>
                        <!--ALL --><th class="req-head my-reqs-theme"><div class="head-wrap"><div>Тема</div>${control}</div></th>    
            <!--TECH--><!--MODER--><th class="not-for-user req-head my-reqs-applic"><div class="head-wrap"><div>Заявитель</div>${control}</div></th>
                        <!--USER--><th class="not-for-tech req-head my-reqs-tech"><div class="head-wrap"><div>Исполнитель</div>${control}</div></th>
                        <!--TECH--><th class="not-for-user req-head my-reqs-library"><div class="head-wrap"><div>Подразделение</div>${control}</div></th>
                        <!--TECH--><th class="not-for-user req-head my-reqs-priority"><div class="head-wrap"><div>Приоритет</div>${control}</div></th>
                        <!--ALL --><th class="req-head my-reqs-status"><div class="head-wrap"><div>Статус</div>${control}</div></th>
                            </tr>
                        </thead>
                        <tbody class="my-reqs-list-body active-tab-show"></tbody>
                    </table>
                </div>
            </div>
        </div>`,
    Load: '',
    Sort: {
        ID: '.my-reqs-num .sorting',
        DateCreated: '.my-reqs-create-date .sorting',
        Name: '.my-reqs-theme .sorting',
        StatusID: '.my-reqs-status .sorting',
        TechnicianID: '.my-reqs-tech .sorting',
        LibraryID: '.my-reqs-library .sorting',
        PriorityID: '.my-reqs-priority .sorting',
        ExecutionDate: '.my-reqs-complete-date .sorting',
        LoginID: '.my-reqs-applic .sorting',
        HelpRequestTypeID: '.my-reqs-req-type .sorting',
        DateClosed: '.my-reqs-closed-date .sorting'
    },
    Controller: {
        Target: '.my-reqs-list .my-reqs-list-body',
        Data: [],
        ListElement:
            `<tr class="event-row {{StatusIDTab}}" data-reqid="{{ID}}">
                <td class="not-for-user mass-check"><input type="checkbox" class="mass-actions"></td>
                <td class="td-reqs-num">{{ID}}</td>
                <td class="td-create-date">{{DateCreated}}</td>
                <td class="td-complete-date">{{ExecutionDate}}</td>
                <td class="not-for-user td-closed-date">{{DateClosed}}</td>
                <td>{{HelpRequestTypeID}}</td>
                <td>{{Name}}</td>
                <td class="not-for-user">{{User.Name}}</td>
                <td class="not-for-tech editable" data-object="Lure.User.Cache.Technicians" data-present="Name" data-value="ID">{{TechnicianID}}</td>
                <td class="not-for-user">{{LibraryID}}</td>
                <td class="not-for-user editable" data-object="Static.HelpRequestPrioritysChange" data-present="Name" data-value="ID">{{PriorityID}}</td>
                <td class="my-reqs-status editable" data-object="Static.HelpRequestStatussChange" data-present="Name" data-value="ID">{{StatusID}}</td>
            </tr>`,
        EmptyMessage:
             `<td colspan="15">Заявки отсутствуют</td>`,
        AfterBuild: function () {
            this.UpdateFilter();
            this.RecoverSelection();
            this.Proto.SetProperty('NeedSolutionCount', this.Controller.Data.filter(x => [3, 4].indexOf(x.StatusID) !== -1).length);
        },
        LineSave: function (dataItem, paramName, value) {
            /*this.Controller.Data[dataItem.LineID][paramName] = parseInt(value);*/
            if (paramName === 'TechnicianID')
                return api.HelpDesk_RequestEdit_Technician(dataItem.Data.ID, value, {Then: () => Lure.System.Success('Исполнитель изменен')});
            if (paramName === 'PriorityID')
                return api.HelpDesk_RequestEdit_Priority(dataItem.Data.ID, value, {Then: () => Lure.System.Success('Приоритет изменен')});
            if (paramName === 'StatusID')
                return api.HelpDesk_RequestEdit_Status(dataItem.Data.ID, value, {Then: () => Lure.System.Success('Статус изменен')});
        }
    },
    Proto: {
        NeedSolutionCount: 0,
        NoneMassActions: 'none'
    },
    PropTypes: {
        TechnicianID: Lure.PropTypes.Int,
        PriorityID: Lure.PropTypes.Int,
        StatusID: Lure.PropTypes.Int
    },
    PropFormat: {
        LibraryID: (id) => (Lure.User.Cache.LibraryListDict[id] || {Name: ''}).Name,
        StatusID: x => ({
            0: `<div class="status-dot new"></div>`,
            1: '<div class="status-dot active"></div>',
            2: '<div class="status-dot closed"></div>',
            3: '<div class="status-dot rejected"></div>',
            4: '<div class="status-dot returned"></div>',
        }[x] || '') + (D.HelpRequestStatusDict[x] || '???'),
        DateCreated: x => Lure.Date(x).Format('DD MMMM YYYY в HH:mm', true),
        ExecutionDate: x => Lure.Date(x).Format('DD.MM.YYYY HH:mm'),
        TechnicianID: x => (Lure.User.Cache.TechnicianDict[x] || {Name: 'Не назначен'}).Name,
        StatusIDTab: (x, p) => {
            switch (p.StatusID) {
                case 0: // active
                    return 'new-req';
                case 1: // active
                    return 'active-req';
                case 2: // closed
                    return 'closed-req';
                case 3:
                    return 'rejected-req';
                case 4:
                    return 'returned-req';
            }
        },
        PriorityID: x => ({
            1: '<div class="status-dot low"></div>',
            2: '<div class="status-dot mid"></div>',
            3: '<div class="status-dot high"></div>',
            4: '<div class="status-dot exec-date"></div>',
        }[x] || '') + D.HelpRequestPriorityDict[x],
        HelpRequestTypeID: x => {
            if (D.HelpRequestTypeAHDList.indexOf(x) !== -1)
                return 'АХД';
            if (D.HelpRequestTypeITList.indexOf(x) !== -1)
                return 'ИТ';
            return 'Другое';
        },
        DateClosed: x => x ? Lure.Date(x).Format('DD.MM.YYYY') : ''
    },
    Props: function () {
        this.SelectedTab = 'active';
        this.Filtered = false;
        this.FilterConds = {};
        this.ActList = this.Select('.action-list');

        this.Users = {};
        for (let u of Lure.User.Cache.UserList)
            this.Users[u.ID] = u;
    },
    GetSet: {
        get CurrentLibraries() {
            return this.Proto.Data.LibraryIDListSelected;
        },
        get lastReqID() {
            return this.Controller.Data.Last().ID
        }
    },
    Show: function () {
        // this.Refresh();
        this.RefreshData();
        this.Subscription.Subscribe();
        if (this.SpecialModerSidebar)
            this.SpecialModerSidebar.RefreshCharts();

        this.ActList.classList.add('none');
    },
    Hide: function(){
        this.Subscription.Unsubscribe();
    },
    Refresh: function () {
        // 0 - новая (еще не принята в работу)
        // 1 - в работе
        // 2 - закрытые
        // 3 - отклоненные
        // 4 - возвращенные
        this.Sidebar.ResetData();
        this.RefreshData();
    },
    Methods: function () {
        this.ChangeStatus = function (reqID, status) {
            let index = this.Controller.Data.findIndex(x => x.ID === reqID);
            if (index === -1) return;
            this.Controller.Data[index].StatusID = status;
            this.Controller.Refresh(index);
            this.Sidebar.Proto.SetProperty('StatusID', status);
        };
        this.RefreshData = function (reqID = false) {
            this.Load.Show();
            let dates = this.DatePicker.Date;
            api.HelpDesk_RequestGet(-1, dates[0], dates[1], this.CurrentLibraries/*[440]*/, {
                Then: async (tickets) => {
                    //let a = Promise.resolve(true);
                    for (let ticket of tickets) {
                        if (ticket.LoginID === Lure.User.ID)
                            ticket.User = {Email: Lure.User.Email, Name: Lure.User.Name, Phone: Lure.User.Phone, Position: Lure.User.Position};
                        else
                            ticket.User = await this.GetUserInfo(ticket.ID, ticket.LoginID);

                        if (!ticket.ExecutionDate)
                            switch (ticket.PriorityID) {
                                case D.HelpRequestPriority.Low:
                                    ticket.ExecutionDate = Lure.Date(ticket.DateCreated).AddHours(8).Date; // 8 часов
                                    break;
                                case D.HelpRequestPriority.Mid:
                                    ticket.ExecutionDate = Lure.Date(ticket.DateCreated).AddDays(1).Date; // 1 день
                                    break;
                                case D.HelpRequestPriority.High:
                                    ticket.ExecutionDate = Lure.Date(ticket.DateCreated).AddDays(3).Date; // 3 дня
                                    break;
                                case D.HelpRequestPriority.ExactDate:
                                    ticket.ExecutionDate = new Date; // На всякий случай
                                    break;
                            }
                        else
                            ticket.ExecutionDate = Lure.Date(ticket.ExecutionDate).Date;
                        ticket.DateCreated = Lure.Date(ticket.DateCreated).Date;
                        if (ticket.DateClosed) ticket.DateClosed = Lure.Date(ticket.DateClosed).Date;
                    }
                    this.Controller.Refresh(tickets);
                },
                Catch: console.error,
                Finally: () => this.Load.Hide()
            });
            this.Refreshed = true;
        };
        this.SelectTab = function (type) {
            let cl = this.Controller.Content.classList;
            cl.remove('active-tab-show');
            cl.remove('all-tab-show');
            cl.remove('closed-tab-show');
            cl.remove('need-solution-tab-show');
            switch (type) {
                case 'active':
                    cl.add('active-tab-show');
                    break;
                case 'all':
                    cl.add('all-tab-show');
                    break;
                case 'closed':
                    cl.add('closed-tab-show');
                    break;
                case 'need-solution':
                    cl.add('need-solution-tab-show');
                    return;
            }
            this.SelectedTab = type;
        };
        this.RecoverSelection = function () {
            if (this.OpenedReq === -1) return;
            let elem = this.Controller.GetDataItemByDelegate(x => x.ID === this.OpenedReq);
            if (elem) elem.DOM.classList.add('selected');
        };
        this.ResetSelection = function () {
            let old = this.Select('.event-row.selected');
            if (old) old.classList.remove('selected');
            this.isRowSelected = false;
            this.OpenedReq = -1;
        };
        this.OpenReqSidebar = function(rowID, elem) {
            /*if (this.isRowSelected) {
                Lure.System.Notice('Вы уже редактируете заявку.<br>Закройте её, чтобы редактировать другую');
                return;
            }*/
            this.ResetSelection();
            elem.classList.add('selected');
            this.OpenReqSidebarByID(rowID);
        };
        this.OpenReqSidebarByID = function (rowID) {
            let req = this.Controller.Data[rowID];
            if (!req) return;
            this.OpenedReq = req.ID;
            this.Sidebar.ShowRequest(req, rowID);
        };
        this.NewRequests = function (list) {
            for (let id of list)
                api.HelpDesk_RequestGet(id, {
                    Then: r => this.Controller.Add(r[0]),
                    Error: console.error,
                    Finally: () => {}
                });
            console.log(list);
        };
        this.GetUserInfo = function (reqID, userID) {
            if (!this.Users[userID])
                return api.HelpDesk_UserInfoGet(reqID, userID).then(u => {
                    this.Users[userID] = u;
                    return u;
                });
            else return Promise.resolve(this.Users[userID]);
        };
        this.UpdateFilter = function (r, type) {
            if ((r || r === '') && type) {
                if (this.FilterConds[type] === r) return;
                this.FilterConds[type] = r;
            }
            let list = this.Controller.DataItems;
            let filter_date = (arr, x) => {
                if (!x) return arr.indexOf('');
                return arr.indexOf(x.getFullYear() + '-' + x.getMonth() + '-' + x.getDate());
            };
            let filter_text = (r, t) => {
                t = t.toLocaleLowerCase().trim();
                if (t === '') return false;
                let ind = r.Name.concat(r.Description, Lure.Date(r.DateCreated).Format('DD MMMM YYYY в HH:mm', true), (Lure.User.Cache.LibraryList.filter((x) => x.ID === r.LibraryID)[0] || {Name: ''}).Name, (Lure.User.Cache.TechnicianDict[r.TechnicianID] || {Name: 'Не назначен'}).Name).toLocaleLowerCase().indexOf(t);
                return ind === -1;
            };
            // console.log(this.FilterConds)
            for (let i = 0; i < list.length; i++)
                (
                    this.FilterConds.hasOwnProperty('search-query') && filter_text(list[i].Data, this.FilterConds['search-query']) ||
                    this.FilterConds['my-reqs-theme']         && this.FilterConds['my-reqs-theme'].indexOf(list[i].Data.HelpRequestTypeID + '') === -1 ||
                    this.FilterConds['my-reqs-tech']          && this.FilterConds['my-reqs-tech'].indexOf(list[i].Data.TechnicianID + '') === -1 ||
                    this.FilterConds['my-reqs-priority']      && this.FilterConds['my-reqs-priority'].indexOf(list[i].Data.PriorityID + '') === -1 ||
                    this.FilterConds['my-reqs-library']       && this.FilterConds['my-reqs-library'].indexOf(list[i].Data.LibraryID + '') === -1 ||
                    this.FilterConds['my-reqs-applic']        && this.FilterConds['my-reqs-applic'].indexOf(list[i].Data.LoginID + '') === -1 ||
                    this.FilterConds['my-reqs-complete-date'] && filter_date(this.FilterConds['my-reqs-complete-date'], list[i].Data.ExecutionDate) === -1 ||
                    this.FilterConds['my-reqs-create-date']   && filter_date(this.FilterConds['my-reqs-create-date'], list[i].Data.DateCreated) === -1 ||
                    this.FilterConds['my-reqs-status']        && this.FilterConds['my-reqs-status'].indexOf(list[i].Data.StatusID + '') === -1 ||
                    this.FilterConds['my-reqs-closed-date']   && filter_date(this.FilterConds['my-reqs-closed-date'], list[i].Data.DateClosed) === -1 ||
                    this.FilterConds['my-reqs-req-type']      && (
                        this.FilterConds['my-reqs-req-type'].indexOf('1') === -1 && D.HelpRequestTypeITList.indexOf(list[i].Data.HelpRequestTypeID) !== -1 ||
                        this.FilterConds['my-reqs-req-type'].indexOf('2') === -1 && D.HelpRequestTypeAHDList.indexOf(list[i].Data.HelpRequestTypeID) !== -1
                    )
                ) ? list[i].DOM.classList.add('filtered') : list[i].DOM.classList.remove('filtered');
        };
        this.ChangeRowData = function (row, param, data) {
            this.Controller.Data[row][param] = data;
            this.Controller.Refresh(row);
        };
        let allCheck = this.Select('input.mass-actions');
        this.ChangeMassCheck = function (line, checked) {
            this.Controller.Data[line].MassSelect = checked;
            if (!checked) allCheck.checked = false;
            let list = this.Controller.Data.filter(x => x.MassSelect);
            if (list.length > 0 )
                this.Proto.SetProperty('NoneMassActions', '');
            else this.Proto.SetProperty('NoneMassActions', 'none');
        };
        this.DoMassAction = function (type, elem) {
            let list = [];
            for (let i = 0; i < this.Controller.Data.length; i++)
                if (this.Controller.Data[i].MassSelect)
                    list.push({ID: this.Controller.Data[i].ID, Line: i});
            // let list = this.Controller.Data.filter(x => x.MassSelect).map(x => x.ID);
            if (type === 'close-sel')
                InputBox.Run(elem, '',
                    async comment => {
                        for (let x of list)
                            await api.HelpDesk_RequestFinish(x.ID, comment, {
                                Then: r => {
                                    if (r === -1)
                                        Lure.System.ShowError('Что-то пошло не так');
                                    else {
                                        this.ChangeStatus(x.ID, 2);
                                        this.Controller.Data[x.Line].MassSelect = false;
                                        Lure.Select('input', this.Controller.GetDataItemByLineID(x.Line).DOM).checked = false;
                                    }
                                }
                            });
                        if (this.Controller.Data.filter(x => x.MassSelect).length === 0)
                            this.Proto.SetProperty('NoneMassActions', 'none');
                        this.Select('.action-list').classList.add('none');
                    }, {Caption: 'Закрыть выбранные', TextArea: true});
            let method, field, data;
            if (type === 'change-tech') {
                method = api.HelpDesk_RequestEdit_Technician;
                field = 'TechnicianID';
                data = Lure.User.Cache.Technicians.map(x => ({Name: x.Name, ID: x.ID}))
            }
            if (type === 'change-status') {
                method = api.HelpDesk_RequestEdit_Status;
                field = 'StatusID';
                data = Static.HelpRequestStatuss.filter(x => x.ID < 3);
            }
            if (type === 'change-priority') {
                method = api.HelpDesk_RequestEdit_Priority;
                field = 'PriorityID';
                data = Static.HelpRequestPrioritys.filter(x => x.ID < 4);
            }

            if (type === 'change-priority' || type === 'change-tech' || type === 'change-status')
                InputBox.Run(elem, 0 + type === 'change-priority',
                    async res => {
                        for (let x of list)
                            await method(x.ID, res, {
                                Then: r => {
                                    res = parseInt(res);
                                    if (r === -1)
                                        Lure.System.ShowError('Что-то пошло не так');
                                    else {
                                        this.Controller.Data[x.Line][field] = res;
                                        this.Controller.Data[x.Line].MassSelect = false;
                                        this.Controller.Refresh(x.Line);
                                        Lure.Select('input', this.Controller.GetDataItemByLineID(x.Line).DOM).checked = false;
                                    }
                                }
                            });
                        if (this.Controller.Data.filter(x => x.MassSelect).length === 0)
                            this.Proto.SetProperty('NoneMassActions', 'none');
                        this.Select('.action-list').classList.add('none');
                    }, {
                        Caption: 'Изменить приоритет',
                        KeyValue: 'ID',
                        KeyView: 'Name',
                        Data: data,
                        TextArea: false
                    });
        };
        this.SelectDeselectAll = function (checked) {
            let c = this.Controller.DataItems;
            for (let e of c) {
                if (checked)
                    switch (this.SelectedTab) {
                        case 'active':
                            if (e.Data.StatusID !== 0 && e.Data.StatusID !== 1 && e.Data.StatusID !== 4) continue;
                            break;
                        case 'closed':
                            if (e.Data.StatusID !== 2) continue;
                            break;
                        case 'need-solution':
                            if (e.Data.StatusID !== 3 && e.Data.StatusID !== 4) continue;
                            break;
                    }
                if (checked)
                    e.DOM.classList.add('mass-select');
                else e.DOM.classList.remove('mass-select');
                Lure.Select('input', e.DOM).checked = checked;
                e.Data.MassSelect = checked;
            }
            let list = c.filter(x => x.Data.MassSelect);
            if (list.length > 0 )
                this.Proto.SetProperty('NoneMassActions', '');
            else this.Proto.SetProperty('NoneMassActions', 'none');
        };
    },
    AfterBuild: function () {
        new LibraryTree(this, this.Select('.library-tree-control'), {MultiSelect: true, SelectedList: Lure.User.Cache.LibraryList.Select(x=>x.ID)});
        this.Proto.Data.LibraryIDListSelected = Lure.User.Cache.LibraryList.Select(x=>x.ID);
        this.AddEventListener('click', '.my-req-header .req-tab', (e) => {
            let elem = this.Select('.my-req-header .selected');
            if (e.currentTarget !== elem) {
                if (elem) elem.classList.remove('selected');
                let cl = e.currentTarget.classList;
                cl.add('selected');
                if (cl.contains('active-my-reqs')) this.SelectTab('active');
                else if (cl.contains('all-my-reqs')) this.SelectTab('all');
                else if (cl.contains('closed-my-reqs')) this.SelectTab('closed');
                else if (cl.contains('need-solution-my-reqs')) this.SelectTab('need-solution');
            }
        });
        // this.AddEventListener('click', '.event-row', e => this.OpenReqSidebar(e.currentTarget.dataset['line'], e.currentTarget));

        this.AddEventListener('click', '.event-row td:not(.mass-check)', e => this.OpenReqSidebar(e.currentTarget.parentElement.dataset['line'], e.currentTarget.parentElement));
        this.AddEventListener('change', '.event-row .mass-check .mass-actions', e => {
            e.currentTarget.parentElement.parentElement.classList.toggle('mass-select');
            this.ChangeMassCheck(e.currentTarget.parentElement.parentElement.dataset['line'], e.currentTarget.checked);
        });

        this.Select('button.mass-actions').onclick = e => {this.ActList.classList.toggle('none'); e.stopPropagation()};
        this.AddEventListener('click', '.action-list .action-type', e => this.DoMassAction(e.currentTarget.dataset['acttype'], e.currentTarget));

        this.Select('.my-reqs-checks input.mass-actions').onchange = e => this.SelectDeselectAll(e.currentTarget.checked);
        this.AddEventListener('click', '*:not(.my-reqs-checks)', e => !this.ActList.classList.contains('none') ? this.ActList.classList.add('none') : '');

        this.DatePicker = new Lure.PeriodPicker({
            Target: this.Select('.diary-bread .li.date-range .dates'),
            DateRange: [Lure.Date().WeekStart, Lure.Date().WeekEnd],
            OnConfirm: () => this.RefreshData()
        });

        this.Subscription = new HistorySubscription({
            OnSubscribe: HistList => this.NewRequests(HistList.map(x => x.ItemID)),
            Condition: h => h.TypeID === D.SubscribeType.SupportAdd && h.LoginID !== Lure.User.ID && h.ItemID > this.lastReqID
        });

        this.Filters = [];
        let data = [
            {
                cl: 'my-reqs-theme',
                list: [{k: 0, v: 'Организация рабочего места'},
                    {k: 1, v: 'Обслуживание компьютеров'},
                    {k: 2, v: 'Обслуживание оргтехники'},
                    {k: 3, v: 'Обслуживание программного обеспечения'},
                    {k: 4, v: 'Наблюдение, счетчики, сигнализация'},
                    {k: 5, v: 'Техническое сопровождение мероприятий'},
                    {k: 6, v: 'Ремонт'},
                    {k: 7, v: 'Замена / Установка'},
                    {k: 8, v: 'Другое (ИТ)'},
                    {k: 9, v: 'Другое (АХД)'}]
            }, {
                cl: 'my-reqs-tech',
                list: [{
                    k: -1,
                    v: 'Не назначен'
                }].concat(Object.entries(Lure.User.Cache.TechnicianDict).map(x => ({k: x[1].ID, v: x[1].Name})))
            }, {
                cl: 'my-reqs-library',
                list: (o = {}) => this.Controller.Data.map(x => ({
                    k: x.LibraryID,
                    v: Lure.User.Cache.LibraryListDict[x.LibraryID].Name
                })).filter(x => o[x.k] ? false : (o[x.k] = true))
            }, {
                cl: 'my-reqs-complete-date',
                list: (o = {}) => this.Controller.Data.map(x => {
                    return {
                        k: (d => d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate())(Lure.Date(x.ExecutionDate).DayStart),
                        v: Lure.Date(x.ExecutionDate).Format('DD.MM.YYYY')
                    }
                }).filter(x => o[x.k] ? false : (o[x.k] = true))
            }, {
                cl: 'my-reqs-closed-date',
                list: (o = {}) => this.Controller.Data.map(x => {
                    if (x.DateClosed)
                        return {
                            k: (d => d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate())(Lure.Date(x.DateClosed).DayStart),
                            v: Lure.Date(x.DateClosed).Format('DD.MM.YYYY')
                        };
                    else return {k: '', v: ''}
                }).filter(x => o[x.k] ? false : (o[x.k] = true))
            }, {
                cl: 'my-reqs-create-date',
                list: (o = {}) => this.Controller.Data.map(x => ({
                    k: (d => d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate())(Lure.Date(x.DateCreated).DayStart),
                    v: Lure.Date(x.DateCreated).Format('DD MMMM YYYY', true)
                })).filter(x => o[x.k] ? false : (o[x.k] = true))
            }, {
                cl: 'my-reqs-priority', list: [{k: 1, v: 'Низкий'},
                    {k: 2, v: 'Средний'},
                    {k: 3, v: 'Высокий'},
                    {k: 4, v: 'Точная дата'},
                ], right: 'top-right'
            }, {
                cl: 'my-reqs-status', list: [{k: 0, v: 'Новая'},
                    {k: 1, v: 'В работе'},
                    {k: 2, v: 'Закрыта'},
                    {k: 3, v: 'Отклонена'},
                    {k: 4, v: 'Возвращена'},
                ], right: 'top-right'
            }, {
                cl: 'my-reqs-applic',
                list: (o = {}) => this.Controller.Data.map(x => ({
                    k: x.LoginID,
                    v: x.User.Name
                })).filter(x => o[x.k] ? false : (o[x.k] = true))
            }, {
                cl: 'my-reqs-req-type',
                list: [{k: 1, v: 'ИТ'}, {k: 2, v: 'АХД'}]
            }
        ];
        for (let e of data)
            this.Filters.push(ReqFilter({
                    target: `.${e.cl} .field-filter`,
                    Data: e.list, Key: 'k', Value: 'v',
                    Control: this.Select(`.${e.cl} .toggle-filter`),
                    onOK: r => this.UpdateFilter(r, e.cl),
                    right: e.right
                })
            );
        let inp = this.Select('.req-search .search-input');
        if (inp && !inp.classList.contains('none'))
            inp.onkeyup = e => {
                if (e.which === 27)
                    inp.value = '';
                // console.log(inp.value, 'search-query');
                this.UpdateFilter(inp.value, 'search-query');
            };
    }
});
let ReqFilter = require('../../_common/filter-selector/filter-selector.js');
require("./sidebar/sidebar.js");
