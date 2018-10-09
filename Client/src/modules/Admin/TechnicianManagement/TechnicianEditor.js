let ListSelector = require('../../_common/list-selector/list-selector');
const D = require('./../../_common/dictionary');

Admin.TechnicianManager = new Lure.Content({
    Parent: Admin,
    Name: 'TechnicianManager',
    Type: 'admin-content',
    Permission: {
        Roles: [D.Role.AdminTechManagement],
    },
    Control: {
        Target: '#nav-admin-technician-management'
    },
    Content: `<div class="technician-manager">
                <h2 class="h2">CBSMyAdmin - Управление техниками</h2> 
                <div class="block library-region">
                    <div class="title">Управление в рамках ЦБС:</div>
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
                    </div>
                    <div class="l-col">
                        <div class="l-row sort-user-list">
                            <div class="element name sort-name">по имени</div>
                            <div class="element position sort-position">по должности</div>
                        </div>
                        <div class="user-list"></div>
                    </div>
                </div>
                <div class="button-holder">
                    <button class="button l-button btn-technician-add">Назначить нового техника</button>
                </div>
              </div>`,
    GetSet:{
        get CurrentLibraryRegionID() {
            return this._LibRegions.Value;
        },
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
    SubContent: function () {
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
    Props: function(){
        this.LoadCard = new Lure.Load({Target: this.Select('.user-card')});
    },
    Methods: function(){
        this.GetTechnicianList = function () {
            this.Load.Show();
            return api.Admin_TechnicianListGet(this.CurrentLibraryRegionID, {
                Then: (list)=>{
                    this.TechLoginIDs = list.Select(x=>x.LoginID);
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
        this.PrepareUser = function (Technician) {
            this.State = Technician;
            this.ListSelectorLibraries.SetSelected(Technician.LibraryIDList);
            this.ListSelectorHelpRequestTypes.SetSelected(Technician.HelpRequestTypeIDList);
            this.Proto.Refresh();
        };
    },
    Refresh: function(){
        this.GetTechnicianList();
    },
    BeforeShow: function () {
        this.Refresh();
    },
    AfterBuild: function () {
        this.ListSelectorLibraries = new ListSelector({
            Target: this.Content,
            Control: this.Select('.value-library'),
            Data: Lure.User.Cache.LibraryGroupList.Where(g=>g.ID === this.CurrentLibraryRegionID).FirstOrDefault().LibraryList,
            MultiSelect: true,
            Selected: this.State.LibraryIDList,
            OnSelect: (selected)=>{
                if (this.State.ID < 0)
                    return;
                api.Admin_TechnicianEdit_Libraries(this.CurrentLibraryRegionID, this.State.ID, selected, {
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

            },

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
                api.Admin_TechnicianEdit_HelpRequestTypes(this.CurrentLibraryRegionID, this.State.ID, selected, {
                    Then: (res)=>{
                        if (res > 0){
                            Lure.System.Success('HelpRequestTypes Changed');
                            this.Proto.SetProperty('HelpRequestTypeIDList', selected);
                        }
                    },
                    Catch: ()=>{
                        Lure.System.Error('HelpRequestTypes changing error');
                    }
                });

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

        this.AddEventListener('click', '.user-list_element:not(.active)', function (e, p) {
            for (let v of this.Controller.DataItems)
                v.DOM.classList.remove('active');
            e.currentTarget.classList.add('active');
            let DataItem = this.Controller.GetDataItemByLineID(p.LineID);
            this.PrepareUser(DataItem.Data);
        });
    }
});
require('./TechnicianCreator');
//module.exports = Admin.TechnicianManager;