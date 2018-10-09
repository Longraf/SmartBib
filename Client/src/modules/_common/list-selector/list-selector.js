class ListSelector{
    Run(SelectedIDList=[]){

    }
    SetSelected(Selected){
        this.Context.Selected = Selected;
    }
    Refresh(Data){
        this.Context.Controller.Refresh(Data);
    }
    Hide(){
        this.Context.Hide();
    }
    constructor(Options={}){
        //debugger
        Options.MultiSelect = Options.MultiSelect !== void 0 ? Options.MultiSelect : false;
        Options.isAllowEmpty = Options.isAllowEmpty !== void 0 ? Options.isAllowEmpty : false;
        Options.ControlPush = Options.ControlPush !== void 0 ? Options.ControlPush : true;
        Options.Selected = Options.Selected !== void 0 ? Options.Selected : [];
        Options.ButtonOkCaption = Options.ButtonOkCaption !== void 0 ? Options.ButtonOkCaption : "Выбрать";
        Options.ButtonCancelCaption = Options.ButtonCancelCaption !== void 0 ? Options.ButtonCancelCaption : "Отмена";
        Options.Groups = Options.Groups ? Options.Groups : [];



        this.Context = new Lure.Content({
            Target: Options.Target,
            Name: 'ListSelector',
            Visible: false,
            Route: false,
            Content: `<div class="list-selector">
                 <div class="search-box">
                    <div class="caption">Поиск: </div>
                    <div class="flex-100"><input class="textbox l-textbox search" type="text"></div>
                 </div>
                 <div class="select-deselect-full l-row l-flex-start ${Options.MultiSelect ? '':'none'}">
                    <button class="button button2 l-button btn-deselect-all">Снять все</button>
                    <button class="button l-button btn-select-all">Выбрать все</button>
                 </div>
                 <div class="groups ${Options.Groups.length > 0 ? '': 'none'}">
                    <div class="group-caption">Применить готовый набор:</div>
                    <div class="group-list">
                        {{#each Groups}}
                        <div class="group-item" data-index="{{j}}">{{Name}}</div>
                        {{#endeach}}
                    </div>
                 </div>
                 <div class="items-group-list ${Options.MultiSelect ? 'multi-select':'single-select'}"></div>
                 <div class="button-holder l-row l-flex-end">
                    <button class="button button2 l-button btn-cancel">${Options.ButtonCancelCaption}</button>
                    <button class="button l-button btn-ok">${Options.ButtonOkCaption}</button>
                 </div>
              </div>`,
            State: {
                Groups: Options.Groups,
            },
            Control: {
                Target: Options.Control,
            },
            Animation: {
                Hide: 'lure-animation-fadeOut',
                Show: 'lure-animation-fade',
            },
            Controller: {
                Target: '.items-group-list',
                Data: Options.Data,
                ListElement: `<div class="item-line lib-row l-row" data-name="{{($g.this.GetSearchName(o.Name))}}">
                                <input class="l-checkbox checkbox checkbox-item" type="${Options.MultiSelect ? 'checkbox':'radio'}" id="libtree-{{($g.Lure.GetID())}}" data-id="{{ID}}" data-cbsid="{{$item.ID}}">
                                <label class="label l-checkbox-label l-pointer" for="libtree-{{($g.Lure.GetLastID())}}">{{Name}}</label>
                              </div>`,
            },
            Props: function(){
                this.InputSearch = this.Select('.search');
                this.Selected = Options.Selected;

                this.ButtonSelectAll = this.Select('.btn-select-all');
                this.ButtonDeselectAll = this.Select('.btn-deselect-all');
                this.Changes = [];
            },
            Methods: function(){
                this.GetSearchName = function (Text) {
                    return Text.replace(/"/g, '').toLowerCase();
                };
                this.SetSelected = function () {
                    if (this.Selected.length < 1 && !Options.isAllowEmpty)
                        return Lure.System.ShowWarn('Ничего не выбрано');
                    if (Options.OnSelect){
                        Options.OnSelect(this.Selected);
                    }
                    this.Hide();
                };
                this.Search = function (Text) {
                    let Elems = this.SelectAll('.lib-row');

                    for (let i = 0; i < Elems.length; i++){
                        let Elem = Elems[i];
                        if (Elem.classList.contains('cbs'))
                            continue;
                        //console.log(Elem.dataset['name'].indexOf(Text) > -1, Elem.dataset['name'], Text);
                        if (Elem.dataset['name'].indexOf(Text) > -1)
                            Elem.style.display = '';
                        else
                            Elem.style.display = 'none';
                    }
                };
                this.OnChange = function (Checkbox) {
                    let Chs = this.SelectAll('.checkbox:checked');
                    let Libs = [];
                    for (let i = 0; i < Chs.length; i++){
                        if (!Options.MultiSelect && Chs[i] !== Checkbox){
                            Chs[i].checked = false;
                        }
                        Libs.push(parseInt(Chs[i].dataset['id']));
                    }
                    this.Selected = Libs;
                    if (!Options.MultiSelect){
                        this.Selected = [parseInt(Checkbox.dataset['id'])];
                        this.SetSelected();
                    }
                };
                this.SaveCheckboxStatuses = function () {
                    this.CheckboxStatuses = [];
                    for (let i = 0; i < this.Checkboxes.length; i++){
                        this.Checkboxes[i].checked = this.Selected.indexOf(parseInt(this.Checkboxes[i].dataset['id'])) > -1;
                        this.CheckboxStatuses[i] = this.Checkboxes[i].checked;
                    }
                };
                this.RestoreCheckboxStatuses = function () {
                    for (let i = 0; i < this.Checkboxes.length; i++){
                        this.Checkboxes[i].checked = this.CheckboxStatuses[i];
                    }
                };
                this.Cancel = function () {
                    this.RestoreCheckboxStatuses();
                    this.Hide();
                };


                this.SelectGroup = function (GroupIndex) {
                    this.Selected = this.State.Groups[GroupIndex].Values;
                    this.SetSelected();
                };

                this.SetAllCheckboxes = function (Checked) {
                    for (let ch of this.Checkboxes){
                        ch.checked = Checked;
                    }
                }
            },
            BeforeShow: function(){
                this.SaveCheckboxStatuses();
            },
            AfterBuild: function () {
                this.Checkboxes = this.SelectAll('.checkbox');

                this.Select('.btn-ok').addEventListener('click', ()=>{
                    this.SetSelected();
                });
                this.Select('.btn-cancel').addEventListener('click', ()=>{
                    this.Cancel();
                });
                this.InputSearch.addEventListener('keyup', (e)=>{
                    this.Search(e.currentTarget.value.toLowerCase());
                });
                this.AddEventListener('change', '.checkbox-item', function (e) {
                    this.Changes.push(e.currentTarget);
                    this.OnChange(e.currentTarget);
                });

                this.AddEventListener('click', '.group-item', (e)=>this.SelectGroup(e.currentTarget.dataset['index']));

                this.ButtonSelectAll.addEventListener('click', ()=>this.SetAllCheckboxes(true));
                this.ButtonDeselectAll.addEventListener('click', ()=>this.SetAllCheckboxes(false));
                document.addEventListener('click', (e)=>{
                    //calling this.isActive is cheaper than isVisible, so if inactive than invisible too
                    if (this.isActive && this.isVisible && e.target !== this.Content && e.target.closest('.list-selector') === null){
                        this.Cancel();
                        e.stopPropagation();
                    }
                })
            },
        });
    }
}

module.exports = ListSelector;