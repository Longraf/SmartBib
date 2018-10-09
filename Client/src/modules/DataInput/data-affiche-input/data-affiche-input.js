const D = require('../../_common/dictionary');

DataInput.DataAfficheInput = new Lure.Content({
    Parent: DataInput,
    Name: 'DataInput',
    Target: '.data-affiche-input',
    Type: 'data-input-content',
    Control: {
        Target: '#nav-data-input-affiche'
    },
    Permission: {
        Roles: [D.Role.SetupEvent]
    },
    Content:
        `<div class="data-input affiche-input">
            <div class="diary-bread l-row">
                <div class="li date-range">
                    <div class="calendar-icon">&#128198;</div>
                    <div class="date-affiche-interval"></div>
                </div>
                <div class="li">
                    Подразделение: 
                    <select class="l-select select lib-list"></select>
                </div>
                <div class="li">
                    <button class="add-new-event l-button">ДОБАВИТЬ МЕРОПРИЯТИЕ</button>
                </div>
<!--                <div class="li">
                    <button class="wizard-open l-button">WIZARD!</button>
                </div>-->
            </div>
            <div class="affiche-table">
                <table>
                    <thead><tr>
                        <th class="ev-checks">
                            <div class="wrap">
                                <div><input type="checkbox" class="mass-actions"></div>
                                <div style="position:relative;" class="all-check-checkbox {{NoneMassActions}}">
                                    <button class="mass-actions l-button">M</button>
                                    <div class="action-list none">
                                        <div class="action-type" data-acttype="delete-sel">Удалить выбранные</div>
                                        <div class="action-type" data-acttype="moderate-sel">Подтвердить правильность</div>
                                        <!--<div class="action-type" data-acttype="">Что-то еще</div>
                                        <div class="action-type" data-acttype="">Последний вариант</div>-->
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th>№</th>
                        <th>Подтверждено модератором</th>
                        <th>Наименование подразделение</th>
                        <th>Наименование мероприятия</th>
                        <th class="date-start-finish">Дата начала и окончания  мероприятия</th>
                        <th>Запланированное число посетителей</th>
                        <th>Цена</th>
                        <th>ФИО, должность, телефон, e-mail ответственного</th>
                        <th>Проводится в рамках: гос. задание (ГЗ),<br>внебюджетная деятельность (В),<br>иные основания (И)</th>
                    </tr></thead>
                    <tbody>
                    
                    </tbody>
                </table>
            </div>
<div class="wizard-wrap">
    <div class="wizard"></div>
</div>
        </div>`,
    Sort: {
        DateStart: '.date-start-finish'
    },
    Controller: {
        Target: '.affiche-table tbody',
        Data: [],
        ListElement: `
            <tr class="single-event-line ev-line-{{ID }}">
                <td class="mass-check"><input type="checkbox" class="mass-actions"></td>
                <td class="center">{{ID}}</td>
                <td class="center">{{IsModerated}}</td>
                <td>{{LibraryID}}</td>
                <td>{{Name}}</td>
                <td class="center"><span>{{DateStart}}</span> - <span>{{DateFinish}}</span></td>
                <td class="center">{{PlanCount}}</td>
                <td class="center">{{Price}}</td>
                <td>{{Curator}}</td>
                <td class="center">{{Initiator || ''}}</td>
            </tr>`,
        EmptyMessage:
            `<td colspan=15 style="text-align: center;">Мероприятия отсутствуют</td>`
    },
    PropFormat: {
        DateStart: x => Lure.Date(x).Format("DD.MM.YYYY"),
        DateFinish: x => Lure.Date(x).Format("DD.MM.YYYY"),
        LibraryID: (id, p, r) => (r = Lure.User.Cache.LibraryList.filter((x) => x.ID === id)[0], r ? r.Name : ''),
        Curator: (c) => {
            if (c < 0) return 'Не назначен';
            const x = Lure.User.Cache.UserDict[c];
            // if (!u) return 'Неизвестный пользователь';
            return x ? [x.Name, x.Email, x.Phone, x.Position].join(', ') : 'Не назначен';
        },
        IsModerated: x => x ? 'Да' : 'Нет'
    },
    Load: '',
    Props: function () {
        this.LibContrl = new Lure.Controller.Templator({
            Target: '.affiche-input .lib-list',
            Data: [],
            ListElement: `<option value="{{ID}}">{{Name}}</option>`
        });
        this.DatePicker = new Lure.PeriodPicker({
            Target: '.date-affiche-interval',
            DateRange: [Lure.Date().MonthStart, Lure.Date().MonthEnd],
            OnConfirm: () => this.RefreshData()
        });
        this.LibSelect = this.Select('.affiche-input .lib-list');
        this.EventList = [];
    },
    Proto: {
        NoneMassActions: 'none'
    },
    Show: function () {
        this.RefreshData();
    },
    Refresh: function () {
        this.RefreshData()
    },
    Methods: function () {
        this.RefreshData = function () {
            this.Load.Show();
            this.EventsEditor.Hide();
            this.EventsEditor.EditingNewEv = false;
            let dtStart = Lure.Date(this.DatePicker.Date[0]).DateCs;
            let dtEnd = Lure.Date(this.DatePicker.Date[1]).DateCs;
            // DataInput_Event_Get(LibraryID, EventID, DateStart, DateFinish, Handlers)
            api.DataInput_Event_Get(this.LibSelect.value, -1, dtStart, dtEnd, {
                Then: r => {
/*                    r = r.sort((a, b) => {
                        let a_ds = +Lure.Date(a.DateStart).Date;
                        let a_df = +Lure.Date(a.DateFinish).Date;
                        let b_ds = +Lure.Date(b.DateStart).Date;
                        let b_df = +Lure.Date(b.DateFinish).Date;
                        return (a_ds > b_ds) ? 1 : ((a_ds === b_ds) ? ((a_df > b_df) ? 1 : -1) : -1)
                    });*/
                    this.EventList = r;
                    this.Controller.Refresh(r);
                },
                Error: console.error,
                Finally: r => this.Load.Hide()
            });
        };
        this.ToggleSelectedEventRow = function (elem, mode = true) {
            let oldSel = this.Select('.single-event-line.selected');
            if (oldSel) oldSel.classList.remove('selected');
            if (mode) elem.classList.add('selected');
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

            if (type === 'delete-sel')
                Lure.Confirm("УДАЛЕНИЕ МЕРОПРИЯТИЙ", 'Удалить выбранные мероприятия?', {
                    OnAgree: async () => {
                        for (let x of list)
                            if (await api.DataInput_Event_Remove(this.Controller.Data[x.Line].LibraryID, this.Controller.Data[x.Line].ID) !== -1) {
                                this.Controller.Data[x.Line].MassSelect = false;
                                this.Controller.Refresh(x.Line);
                                Lure.Select('input', this.Controller.GetDataItemByLineID(x.Line).DOM).checked = false;
                            }

                        if (this.Controller.Data.filter(x => x.MassSelect).length === 0)
                            this.Proto.SetProperty('NoneMassActions', 'none');
                        this.Select('.action-list').classList.add('none');
                        this.RefreshData();
                    }, OnCancel: () => {}
                });

            if (type === 'moderate-sel')
                Lure.Confirm("МОДЕРИРОВАНИЕ МЕРОПРИЯТИЙ", 'Подтвердить правильность выбранных мероприятий?', {
                    OnAgree: async () => {
                        if (await api.DataInput_Event_Moderate(this.LibSelect.value, list.map(x => x.ID)) !== -1)
                            for (let x of list) {
                                this.Controller.Data[x.Line].MassSelect = false;
                                this.Controller.Refresh(x.Line);
                                Lure.Select('input', this.Controller.GetDataItemByLineID(x.Line).DOM).checked = false;
                            }
                        if (this.Controller.Data.filter(x => x.MassSelect).length === 0)
                            this.Proto.SetProperty('NoneMassActions', 'none');
                        this.Select('.action-list').classList.add('none');
                        this.RefreshData();
                    }, OnCancel: () => {}
                });
        };
        this.SelectDeselectAll = function (checked) {
            let c = this.Controller.DataItems;
            for (let e of c) {
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
        this.AddEventListener('click', '.single-event-line td:not(.mass-check)', e => {
            if (this.EventsEditor.ShowEvent(this.EventList[parseInt(e.currentTarget.parentElement.dataset['line'])]) !== false)
                this.ToggleSelectedEventRow(e.currentTarget.parentElement);
        });
        this.Select('button.add-new-event').onclick = () => this.EventsEditor.CreateNewEvent();
        this.LibContrl.Refresh(Lure.User.Cache.LibraryList);
        this.LibSelect.onchange = () => this.RefreshData();

        this.AddEventListener('change', '.single-event-line .mass-check .mass-actions', e => {
            e.currentTarget.parentElement.parentElement.classList.toggle('mass-select');
            this.ChangeMassCheck(e.currentTarget.parentElement.parentElement.dataset['line'], e.currentTarget.checked);
        });
        let list = this.Select('.action-list');
        this.Select('button.mass-actions').onclick = e => {list.classList.toggle('none'); e.stopPropagation()};
        this.AddEventListener('click', '.action-list .action-type', e => this.DoMassAction(e.currentTarget.dataset['acttype'], e.currentTarget));
        this.Select('.ev-checks input.mass-actions').onchange = e => this.SelectDeselectAll(e.currentTarget.checked);
        this.AddEventListener('click', '*:not(.ev-checks)', e => !list.classList.contains('none') ? list.classList.add('none') : '');
        // this.Select('button.wizard-open').onclick = () => this.EventWizard.Show();
    }
});

require('./event-editor/event-editor.js');
// require('./event-wizard/event-wizard.js');
