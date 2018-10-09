let ListSelector = require('../../_common/list-selector/list-selector');
let UserPositionPreset = require('./_RolePositionsPreset');
const D = require('../../_common/dictionary');
Admin.UserManagement = new Lure.Content({
    Parent: Admin,
    Name: 'UserEditor',
    Type: 'admin-content',
    Control:{
        Target: '#nav-admin-user-management'
    },
    Permission: {
        Roles: [D.Role.AdminUserManagement],
    },
    Content: `<div class="user-management">
                <h2 class="h2">CBSMyAdmin - Управление пользователем</h2> 
                <div class="h3">Основные данные пользователя</div>
                <div class="block library-region">
                    <div class="title">Управление в рамках ЦБС:</div>
                </div>
                <div class="button-holder l-row">
                    <div class="l-button button l-pointer btn-load-default-roles none">Load default position's roles</div>
                </div>
                <div class="l-row">
                    <div class="user-card-wrap">
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
                                <div class="value editable">{{Name}}</div>
                            </div>
                            <div class="l-row l-line">
                                <div class="caption">Email:</div>
                                <div class="value editable">{{Email}}</div>
                            </div>
                            <div class="l-row l-line">
                                <div class="caption">Телефон:</div>
                                <div class="value editable">{{Phone}}</div>
                            </div>
                            <div class="l-row l-line">
                                <div class="caption">Должность:</div>
                                <div class="value editable">{{Position}}</div>
                            </div>
                            <div class="l-row l-line">
                                <div class="caption">Должность:</div>
                                <div class="value editable">{{Position}}</div>
                            </div>
                            <div class="l-row l-line">
                                <div class="caption">Права доступа:</div>
                                <div class="value value-role">
                                {{#each Roles}}
                                    <div class="value" title="{{$g.D.RoleDict[$this]}}">{{$g.D.RoleDict[$this]}}</div>
                                {{#endeach}}
                                </div>
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
                                <div class="caption">ЦБС:</div>
                                <div class="value value-cbs">
                                {{#each LibraryRegionIDList}}
                                    <div class="value" title="{{$g.D.LibraryRegionDict[$this]}}">— {{$g.D.LibraryRegionDict[$this]}}</div>
                                {{#endeach}}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="l-col">
                        <div class="l-row sort-user-list">
                            <div class="element name sort-name">по имени</div>
                            <div class="element position sort-position">по должности</div>
                        </div>
                        <div class="user-list"></div>
                    </div>
                </div>
                <div class="pass-changing">
                    <div class="h3">Задать новый пароль выбранного пользователя</div>
                    <div class="line"><input class="textbox l-textbox input-change-pass" type="password" placeholder="новый пароль"></div>
                    <div class="line"><input class="textbox l-textbox input-change-pass2" type="password" placeholder="новый пароль повтор"></div>
                    <div class="line"><button class="l-button button btn-change-pass">Задать пароль</button></div>
                </div>
                
                <div class="user-killer">
                    <div class="h3">Удалить выбранного пользователя</div>
                    <div class="line"><button class="l-button button btn-user-kill">Удалить пользователя</button></div>
                </div>
              </div>`,
    Load: '',

    State: {
        ID: -1,
        Login: '',
        Name: '',
        Email: '',
        Phone: '',
        Position: 'Librarian',
        Roles: UserPositionPreset[1],
        LibraryIDList: [440],
        LibraryRegionIDList: [1],

        TestOptions: [{Value: 3, Name: 333},{Value: 1, Name: 111},{Value: 2, Name: 222},{Value: 4, Name: 444},]
    },
    Controller: {
        Target: '.user-list',
        ListElement: `<div class="tr l-row user-list_element">
                         <div class="element flex-100">{{Name}}</div>
                         <div class="element position">{{Position}}</div>
                      </div>`,
        EmptyMessage: `<div class="list-empty">empty</div>`,
    },
    Sort: {
        Name: '.sort-name',
        Position: '.sort-position',
    },
    OnChange: function(Param, Value){
        if (this.State.ID < 0)
            return Promise.reject('');
        console.log(`OnChange-> ${Param}=${Value}`);
        if (Param === 'Name')
            return api.Admin_UserEdit_Name(this.CurrentLibraryRegionID, this.State.ID, Value, {});
        if (Param === 'Position')
            return api.Admin_UserEdit_Position(this.CurrentLibraryRegionID, this.State.ID, Value, {});
        if (Param === 'Email')
            return api.Admin_UserEdit_Email(this.CurrentLibraryRegionID, this.State.ID, Value, {});
        if (Param === 'Phone')
            return api.Admin_UserEdit_Phone(this.CurrentLibraryRegionID, this.State.ID, Value, {});


        return Promise.resolve('');
    },
    // PropTypes: {
    //     PositionID: Lure.PropTypes.Int
    // },
    // PropFormat: {
    //     PositionID: (p)=>D.UserPositionDict[p]
    // },
    GetSet:{
        get CurrentLibraryRegionID() {
            return this._LibRegions.Value;
        },
    },

    SubContent: function(){
        this._LibRegions = new Lure.Content({
            Target: '.library-region',
            Content: `<select class="select select-cbs"></select>`,
            Controller: {
                ListElement: `<option value="{{ID}}">{{Name}}</option>`,
                AfterBuild: function () {
                    this.Content.value = this.Controller.Data.FirstOrDefault({}).ID;
                    this.Value = this.Controller.Data.FirstOrDefault({}).ID;
                }
            },
            Props: function(){
                this.CData = Lure.User.Cache.LibraryRegions.Select(x=>{return {ID: x, Name: D.LibraryRegionDict[x]}});
                this.Value = this.CData[0].ID;
            },
            AfterBuild: function () {
                this.Controller.Refresh(this.CData);
                this.Content.addEventListener('change', (e)=>{
                    this.Value = parseInt(e.currentTarget.value);

                    this.Parent.OnChangeCBS();
                })
            }
        });
    },
    Props: function () {
        this.LoadCard = new Lure.Load({Target: this.Select('.user-card')});
        // this.ControllerUsers = new Lure.Controller.Templator({
        //
        //     Owner: this,
        // });

        this.ButtonCommit = this.Select('.btn-management-commit');
        this.ButtonLoadDefaultRoles = this.Select('.btn-load-default-roles');
        this.UserList = this.Select('.user-list');

        this.TextBoxPass = this.Select('.input-change-pass');
        this.TextBoxPass2 = this.Select('.input-change-pass2');
        this.ButtonChangePass = this.Select('.btn-change-pass');
        this.ButtonUserKill = this.Select('.btn-user-kill');
    },
    Methods: function () {
        this.OnChangeCBS = function () {
            this.GetUserList();
        };
        this.GetUserList = function () {
            this.Load.Show();
            return api.Admin_UserListGet(Admin.UserManagement.CurrentLibraryRegionID, -1, {
                Then: (list)=>{
                    this.Controller.Refresh(list);
                },
                Catch: (e)=>{
                    Lure.System.Error(e);
                },
                Finally: ()=>{
                    this.Load.Hide();
                }

            });
        };
        // this.LoadDefaultRoles = function () {
        //     this.Proto.SetProperty('Roles', UserPositionPreset[this.Proto.Data.PositionID]);
        // };
        this.PrepareUser = function (UserID) {
            this.LoadCard.Show();
            return api.Admin_UserGet(this.CurrentLibraryRegionID, UserID, {
                Then: (user)=>{
                    this.Proto.Refresh(user);
                    this.ListSelectorRoles.SetSelected(user.Roles);
                    this.ListSelectorLibraries.SetSelected(user.LibraryIDList);
                    this.ListSelectorCBS.SetSelected(user.LibraryRegionIDList);
                    this.Show();
                },
                Finally: ()=>{
                    this.LoadCard.Hide();
                }
            })
        };
        this.ChangePass = function () {
            if (this.State.ID < 0)
                return Lure.System.Warn(`Учетная запись не выбрана`);

            let Pwd = this.TextBoxPass.value;
            let Pwd2 = this.TextBoxPass2.value;
            if (Pwd.length < 1){
                return Lure.System.Warn('Enter new password');
            }
            if (Pwd !==  Pwd2){
                return Lure.System.Warn(`Passwords aren't same`);
            }
            Lure.Button.Lock(this.ButtonChangePass);
            api.Admin_UserEdit_Pass(this.CurrentLibraryRegionID, this.State.ID, Pwd, {
                Then: (res)=>{
                    if (res > 0){
                        Lure.System.Success('Password changed');
                    } else{
                        Lure.System.Warn(`Password isn't chanded`);
                    }
                },
                Catch: (e)=>{
                    Lure.System.Error(`Server error`, e);
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonChangePass);
                }
            })
        };
        this.KillUser = function () {
            if (this.State.ID < 0)
                return Lure.System.Warn(`Учетная запись не выбрана`);

            Lure.Confirm('Внимание', `Вы собираетесь удалить пользователя <strong>${this.State.Login}</strong>. Продолжить?`, {
                OnAgree: ()=>{
                    api.Admin_User_Kill(this.CurrentLibraryRegionID, this.State.ID, {
                        Then: (res)=>{
                            if (res > 0){
                                Lure.System.Success('Учетная запись удалена');
                                let LineID = this.Controller.GetDataItemByDelegate(x=>x.ID === this.State.ID).LineID;
                                this.Controller.Remove(LineID);
                                this.Proto.SetProperty("ID", -1);
                            }
                            else{
                                Lure.System.Warn('Учетную запись удалеть не удалось');
                            }
                        },
                        Catch: (e)=>{
                            Lure.System.Warn('Ошибка удаления пользователя', e);
                        },
                        Finally: ()=>{

                        }
                    });
                },
                OnCancel: ()=>{}
            });
        }
    },
    Refresh: function () {

    },
    BeforeShow: function () {
        if (this.Controller.Data.length < 1)
            this.GetUserList();
    },
    AfterBuild: function () {
        this.ListSelectorRoles = new ListSelector({
            Target: this.Content,
            Control: this.Select('.value-role'),
            Data: Static.Roles.Where(r=>r.ID > 2 && r.ID !== 14 && r.ID !== 16).sort((a,b)=>{return a.Name>b.Name ? 1:-1}),
            MultiSelect: true,
            Selected: this.State.Roles,
            OnSelect: (selected)=>{
                if (this.State.ID < 0)
                    return;
                api.Admin_UserEdit_Roles(this.CurrentLibraryRegionID, this.State.ID, selected, {
                    Then: (res)=>{
                        if (res > 0){
                            Lure.System.Success('Roles Changed');
                            this.Proto.SetProperty('Roles', selected);
                        }
                    },
                    Catch: ()=>{
                        Lure.System.Error('Roles changing error');
                    }
                });

            }
        });
        this.ListSelectorLibraries = new ListSelector({
            Target: this.Content,
            Control: this.Select('.value-library'),
            Data: Lure.User.Cache.LibraryGroupList.Where(g=>g.ID === this.CurrentLibraryRegionID).FirstOrDefault().LibraryList,
            MultiSelect: true,
            Selected: this.State.LibraryIDList,
            OnSelect: (selected)=>{
                if (this.State.ID < 0)
                    return;
                api.Admin_UserEdit_Libraries(this.CurrentLibraryRegionID, this.State.ID, selected, {
                    Then: (res)=>{
                        if (res > 0){
                            Lure.System.Success('LibraryIDList Changed');
                            this.Proto.SetProperty('LibraryIDList', selected);
                        }
                    },
                    Catch: ()=>{
                        Lure.System.Error('LibraryIDList changing error');
                    }
                });

            }
        });
        this.ListSelectorCBS = new ListSelector({
            Target: this.Content,
            Control: this.Select('.value-cbs'),
            isAllowEmpty: true,
            Data: Static.LibraryRegions.Where(x=>Lure.User.Cache.LibraryRegions.indexOf(x.ID) > -1),
            MultiSelect: true,
            Selected: [],
            OnSelect: (selected)=>{
                if (this.State.ID < 0)
                    return;
                api.Admin_UserEdit_LibraryRegions(this.CurrentLibraryRegionID, this.State.ID, selected, {
                    Then: (res)=>{
                        if (res > 0){
                            Lure.System.Success('LibraryRegionIDList Changed');
                            this.Proto.SetProperty('LibraryRegionIDList', selected);
                        }
                    },
                    Catch: ()=>{
                        Lure.System.Error('LibraryRegionIDList changing error');
                    }
                });

            }
        });
        this.ButtonLoadDefaultRoles.addEventListener('click', ()=>{
            this.LoadDefaultRoles();
            this.ListSelectorRoles.Context.Selected = this.Proto.Data.Roles;
        });
        this.AddEventListener('click', '.user-list_element:not(.active)', function (e, p) {
            for (let v of this.Controller.DataItems)
                v.DOM.classList.remove('active');
            e.currentTarget.classList.add('active');
            let DataItem = this.Controller.GetDataItemByLineID(p.LineID);
            this.PrepareUser(DataItem.Data.ID);
        });
        this.ButtonChangePass.addEventListener('click', ()=>{
            this.ChangePass();
        });
        this.ButtonUserKill.addEventListener('click', ()=>{
            this.KillUser();
        });
    }
});
