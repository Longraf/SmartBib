//import * as Dictionary from "../../global/dictionary";
const D = require('../../_common/dictionary');
let ListSelector = require('../../_common/list-selector/list-selector');
let UserPositionPreset = require('./_RolePositionsPreset');

Admin.UserCreator = new Lure.Content({
    Parent: Admin,
    Name: 'UserCreator',
    Type: 'admin-content',
    Visible: true,
    Permission: {
        Roles: [D.Role.AdminUserCreate]
    },
    Control:{
        Target: '#nav-admin-user-create'
    },
    Content: `<div class="user-creator">
                <h2 class="h2">CBSMyAdmin - Новый пользователь</h2> 
                <div class="block library-region">
                    <div class="title">Library Region (CBS):</div>
                </div>
                <div class="user-card-wrap">
                    <div class="button-holder l-row">
                        <div class="l-button button l-pointer btn-load-default-roles none">Load default position's roles</div>
                    </div>
                    <div class="user-card">
                        <div class="l-row l-line">
                            <div class="caption">Логин:</div>
                            <div class="value"><input class="l-textbox textbox user-login" type="text" placeholder="логин"> </div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Имя:</div>
                            <div class="value"><input class="l-textbox textbox user-name" type="text" placeholder="имя пользователя"></div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Email:</div>
                            <div class="value"><input class="l-textbox textbox user-email" type="email" placeholder="email@host.ru"></div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Телефон:</div>
                            <div class="value"><input class="l-textbox textbox user-phone" type="text" placeholder="000-00-00"></div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Должность:</div>
                            <div class="value"><input class="l-textbox textbox user-position" type="text" placeholder="должность"></div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Комментарии:</div>
                            <div class="value"><input class="l-textbox textbox user-position" type="text" placeholder="Описание"></div>
                        </div>
                        <div class="l-row l-line">
                            <div class="caption">Права доступа:</div>
                            <div class="value value-role">
                            {{#each Roles}}
                                <div class="value" title="{{$g.D.RoleDict[$this]}}">— {{$g.D.RoleDict[$this]}}</div>
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
                                <div class="value" title="{{$g.D.LibraryRegionDict[$this]}}">{{$g.D.LibraryRegionDict[$this]}}</div>
                            {{#endeach}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="button-holder l-row">
                    <button class="l-button button l-pointer btn-management-commit">Create user</button>
                </div>
              </div>`,
    Load: '',
    GetSet:{
        get CurrentLibraryRegionID() {
            return this._LibRegions.Value;
        },
    },
    State: {
        ID: -1,
        Login: '',
        Name: '',
        Position: 'Librarian',
        Email: '',
        Phone: '',
        Roles: UserPositionPreset[1],
        LibraryIDList: [440],
        LibraryRegionIDList: [],

        UserPositions: Static.UserPositions
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
        this.ButtonCommit = this.Select('.btn-management-commit');
        this.ButtonLoadDefaultRoles = this.Select('.btn-load-default-roles');
    },
    Methods: function () {
        this.OnChangeCBS = function () {
            this.ListSelectorLibraries.Refresh(Lure.User.Cache.LibraryGroupList.Where(g=>g.ID === this.CurrentLibraryRegionID).FirstOrDefault({LibraryList:[]}).LibraryList);
            this.Proto.SetProperty('LibraryIDList', []);
        };
        this.Commit = function () {
            let User = this.State;
            if (User.Login === '')
                return Lure.System.Warn('Enter user LOGIN');
            if (User.Name === '')
                return Lure.System.Warn('Enter user NAME');
            if ( User.LibraryRegionIDList.length < 1 && (User.Roles.indexOf(D.Role.AdminCBS) > -1 || User.Roles.indexOf(D.Role.ModeratorCBS) > -1)){
                return Lure.System.Warn('For admin or moderator creation you have to select LibraryRegions (CBS)');
            }
            User.Pass = Lure.String.Random(8);
            Lure.Button.Lock(this.ButtonCommit);
            return api.Admin_UserAdd(this.CurrentLibraryRegionID, User, {
                Then: (res)=>{
                    if (res === -2){
                        return Lure.System.Warn('LOGIN already exists');
                    }
                    if (res === -1){
                        return Lure.System.Error('Server error');
                    }
                    //User.ID = res;
                    Lure.Confirm('User creation', `User created. Login: <strong>${User.Login}</strong> Password: <strong>${User.Pass}</strong>`);
                    Lure.System.Success(`User created: ${User.Login}, ${User.Name}`);
                },
                Catch: (e)=>{
                    Lure.System.Error('Server connection error', e);
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonCommit);
                }
            });
        };
    },
    AfterBuild: function () {
        this.ListSelectorRoles = new ListSelector({
            Target: this.Content,
            Control: this.Select('.value-role'),
            Data: Static.Roles.Where(r=>r.ID > 2 && r.ID !== 14 && r.ID !== 16).sort((a,b)=>{return a.Name>b.Name ? 1:-1}),
            MultiSelect: true,
            Selected: this.State.Roles,
            OnSelect: (selected)=>{
                this.Proto.SetProperty('Roles', selected);
            }
        });
        this.ListSelectorLibraries = new ListSelector({
            Target: this.Content,
            Control: this.Select('.value-library'),
            Data: Lure.User.Cache.LibraryGroupList.Where(g=>g.ID === this.CurrentLibraryRegionID).FirstOrDefault().LibraryList,
            MultiSelect: true,
            Selected: this.State.LibraryIDList,
            OnSelect: (selected)=>{
                this.Proto.SetProperty('LibraryIDList', selected);
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
                this.Proto.SetProperty('LibraryRegionIDList', selected);
            }
        });
        this.Select('.user-login').addEventListener('change', (e)=>{
            this.State.Login = e.currentTarget.value;
        });
        this.Select('.user-name').addEventListener('change', (e)=>{
            this.State.Name = e.currentTarget.value;
        });
        this.Select('.user-email').addEventListener('change', (e)=>{
            this.State.Email = e.currentTarget.value;
        });
        this.Select('.user-phone').addEventListener('change', (e)=>{
            this.State.Phone = e.currentTarget.value;
        });
        this.Select('.user-position').addEventListener('keyup', (e)=>{
            this.State.Position = e.currentTarget.value
        });
        this.ButtonLoadDefaultRoles.addEventListener('click', ()=>{
            //this.LoadDefaultRoles();
            this.ListSelectorRoles.SetSelected(this.Proto.Data.Roles);
        });
        this.ButtonCommit.addEventListener('click', ()=>{
            this.Commit();
        })
    }
});
