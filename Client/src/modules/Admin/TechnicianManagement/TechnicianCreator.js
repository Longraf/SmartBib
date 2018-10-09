let ListSelector = require('../../_common/list-selector/list-selector');
const D = require('./../../_common/dictionary');

Admin.TechnicianManager.Creator = new Lure.Content({
    Parent: Admin.TechnicianManager,
    Name: 'TechnicianCreator',
    Route: false,
    Visible: false,
    Permission: {
        Roles: [D.Role.AdminCBS, D.Role.AdminUserManagement]
    },

    Control: {
        Target: '.btn-technician-add'
    },
    Content: `<div class="technician-creator">
                <div class="inner-wrap">
                    <div class="l-row l-line">
                        <div class="caption">Пользователь, который станет техником: </div>
                        <div class="value">
                          <select class="user-select"></select>
                        </div>
                    </div>
                    <div class="user-card">
                        <div class="l-row l-line">
                            <div class="caption">ID:</div>
                            <div class="value">{{ID}}</div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Логин:</div>
                            <div class="value">{{Login}}</div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Имя:</div>
                            <div class="value ">{{Name}}</div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Email:</div>
                            <div class="value ">{{Email}}</div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Телефон:</div>
                            <div class="value ">{{Phone}}</div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Должность:</div>
                            <div class="value ">{{Position}}</div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Библиотеки:</div>
                            <div class="value value-library">
                            {{#each LibraryIDList}}
                                <div class="value" title="{{$g.Lure.User.Cache.LibraryListDict[$this].Name}}">— {{$g.Lure.User.Cache.LibraryListDict[$this].Name}}</div>
                            {{#endeach}}
                            </div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Типы заявок:</div>
                            <div class="value value-requesttypes">
                            {{#each HelpRequestTypeIDList}}
                                <div class="value" title="{{$g.D.LibraryRegionDict[$this]}}">— {{$g.D.HelpRequestTypeDict[$this]}}</div>
                            {{#endeach}}
                            </div>
                        </div>
                        
                    </div>
                    <div class="button-holder">
                      <button class="button l-button btn-technician-add-commit">Готово</button>
                    </div>
                </div>
              </div>`,

    Controller: {
        Target: '.user-select',
        ListElement: `<option value="{{ID}}">{{Name}}</option>`,
    },
    State: {
        ID: -1,
        Login: '',
        Name: '',
        Email: '',
        Phone: '',
        Position: 'Techman',
        LibraryIDList: [],
        HelpRequestTypeIDList: [],
    },
    Load: '.inner-wrap',

    Props: function(){
        this.SelectUser = this.Select('.user-select');
        this.ButtonCommit = this.Select('.btn-technician-add-commit')
    },
    Methods: function(){
        this.SetUser = function () {
            let UserID = parseInt(this.SelectUser.value);
            let User = this.Controller.Data.Where(x=>x.ID === UserID).FirstOrDefault();
            User.LibraryIDList = [];
            User.HelpRequestTypeIDList = [];
            this.ListSelectorLibraries.SetSelected([]);
            this.ListSelectorHelpRequestTypes.SetSelected([]);
            this.State = User;

            this.Proto.Refresh();
        };
        this.Commit = function () {
            let State = this.State;
            if (State.LibraryIDList.length < 1)
                return Lure.System.ShowWarn('Выберите библиотеки обслуживания');
            if (State.HelpRequestTypeIDList.length < 1)
                return Lure.System.ShowWarn('Выберите типы обслуживания библиотек');

            api.Admin_Technician_Add(Admin.TechnicianManager.CurrentLibraryRegionID, State.ID, State.LibraryIDList, State.HelpRequestTypeIDList, {
                Then: (res)=>{
                    if (res < 0){
                        return Lure.System.Error('error')
                    }
                    Lure.System.Success(`Техник назначен на пользователя "${State.Name}"`);
                    Admin.TechnicianManager.TechLoginIDs.push(State.ID);
                    State.LibraryIDList = [];
                    State.HelpRequestTypeIDList = [];
                    this.Hide();
                },
                Finally: ()=>{
                    this.Load.Hide();
                }
            });
        }
    },
    Refresh: function(){
        this.Load.Show();
        api.Admin_UserListGet(Admin.TechnicianManager.CurrentLibraryRegionID, -1, {
           Then: (list)=>{
               list = list.Where(x=>Admin.TechnicianManager.TechLoginIDs.indexOf(x.LoginID) < 0);
               this.Controller.Refresh(list);
               this.SetUser();
               this.Load.Hide();
           }
        });
    },
    BeforeShow: function () {
        this.Refresh();
    },
    AfterBuild: function () {
        this.ListSelectorLibraries = new ListSelector({
            Target: this.Content,
            Control: this.Select('.value-library'),
            Data: Lure.User.Cache.LibraryGroupList.Where(g=>g.ID === Admin.TechnicianManager.CurrentLibraryRegionID).FirstOrDefault().LibraryList,
            MultiSelect: true,
            Selected: this.State.LibraryIDList,
            OnSelect: (selected)=>{
                if (this.State.ID < 0)
                    return;
                this.Proto.SetProperty('LibraryIDList', selected);
            }
        });
        this.ListSelectorHelpRequestTypes = new ListSelector({
            Target: this.Content,
            Control: this.Select('.value-requesttypes'),
            Data: Static.HelpRequestTypes,
            MultiSelect: true,
            Selected: this.State.LibraryIDList,
            OnSelect: (selected)=>{
                if (this.State.ID < 0)
                    return;
                this.Proto.SetProperty('HelpRequestTypeIDList', selected);
            },
            Groups: [
                {
                    Name: 'Все',
                    Values: Static.HelpRequestTypes.Select(x=>x.ID)
                },
                {
                    Name: 'ИТ',
                    Values: D.HelpRequestTypeITList,
                },
                {
                    Name: 'АХД',
                    Values: D.HelpRequestTypeAHDList,
                }
            ]
        });

        this.SelectUser.addEventListener('change', ()=>this.SetUser());
        this.ButtonCommit.addEventListener('click', ()=>this.Commit());
    }
});