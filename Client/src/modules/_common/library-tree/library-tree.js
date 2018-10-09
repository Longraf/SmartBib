class LibraryTree{
    constructor(Parent, ControlTarget, Options={}){
        if (!Parent.HasPermission)
            return;
        //debugger
        Options.MultiSelect = Options.MultiSelect !== void 0 ? Options.MultiSelect : false;
        Options.ControlPush = Options.ControlPush !== void 0 ? Options.ControlPush : true;
        Options.SelectedList = Options.SelectedList !== void 0 ? Options.SelectedList : null;
        Options.ButtonOkCaption = Options.ButtonOkCaption !== void 0 ? Options.ButtonOkCaption : "Показать";
        Options.ButtonCancelCaption = Options.ButtonCancelCaption !== void 0 ? Options.ButtonCancelCaption : "Отмена";

        Parent.Proto.Data.LibraryIDListSelected = [];
        Parent.LibraryTree = new Lure.Content({
            Name: 'LibraryTree',
            Visible: false,
            Parent: Parent,
            Route: false,
            Content: `<div class="library-tree">
                 <div class="search-box l-row l-flexa-center">
                    <div class="caption">Поиск: </div>
                    <div class="flex-100"><input class="textbox l-textbox search" type="text"></div>
                 </div>
                 <div class="lib-group-list ${Options.MultiSelect ? 'multi-select':'single-select'}"></div>
                 <div class="button-holder l-row l-flex-end">
                    <button class="button button2 l-button btn-cancel">${Options.ButtonCancelCaption}</button>
                    <button class="button l-button btn-ok">${Options.ButtonOkCaption}</button>
                 </div>
              </div>`,
            Control: {
                Target: ControlTarget,
            },
            Animation: {
                Hide: 'lure-animation-fadeOut',
                Show: 'lure-animation-fade',
            },
            Controller: {
                Target: '.lib-group-list',
                Data: Lure.User.Cache.LibraryGroupList,
                ListElement: `<div class="tree-element cbs">
                             <div class="lib-line l-row">
                                <input class="l-checkbox checkbox checkbox-cbs" type="${Options.MultiSelect ? 'checkbox':'radio'}" id="libtree-{{($g.Lure.GetID())}}"  data-id="{{ID}}">
                                <label class="label l-checkbox-label label-cbs l-pointer" for="libtree-{{($g.Lure.GetLastID())}}">{{Name}}</label>
                             </div>
                             <div class="sub">
                                {{#each LibraryList}}
                                <div class="lib-line lib-row l-row" data-name="{{($g.this.GetSearchName(o.Name))}}">
                                  <input class="l-checkbox checkbox checkbox-lib" type="${Options.MultiSelect ? 'checkbox':'radio'}" id="libtree-{{($g.Lure.GetID())}}" data-id="{{ID}}" data-cbsid="{{$item.ID}}">
                                  <label class="label l-checkbox-label l-pointer" for="libtree-{{($g.Lure.GetLastID())}}">{{Name}}</label>
                                 </div>
                                {{#endeach}}
                             </div>
                          </div>`,
            },
            Props: function(){
                this.InputSearch = this.Select('.search');
                this.Selected = [];
                this.SelectedCBS = [];

                this.Changes = [];
            },
            Methods: function(){
                this.GetSearchName = function (Text) {
                    return Text.replace(/"/g, '').toLowerCase();
                };
                this.SetSelectedLibraries = function (isInit=false) {
                    if (this.Selected.length < 1)
                        return Lure.System.ShowWarn('Выберите, по крайней мере, одну библиотеку');
                    if (Options.ControlPush){
                        if (this.SelectedCBS.length < 1){
                            let LibsNames = Lure.User.Cache.LibraryList
                                .Where(x=> this.Selected.indexOf(x.ID) > -1)
                                .Select(x=>x.Name);
                            let Names = LibsNames.join('\n');
                            this.Control._ControlList[0].Control[0].setAttribute('title', Names);
                            this.Control._ControlList[0].Control[0].innerHTML = LibsNames.length > 1 ? LibsNames[0]+` (и еще ${LibsNames.length-1})` : LibsNames[0];
                        }
                        else {
                            let Names = this.SelectedCBS
                                .Select(x=>Dictionary.LibraryRegionDict[x])
                                .join(', ');
                            this.Control._ControlList[0].Control[0].setAttribute('title', Names);
                            this.Control._ControlList[0].Control[0].innerHTML = Names;
                        }
                    }

                    if (isInit)
                        return;

                    if (Options.OnSelect){
                        Options.OnSelect(this.Selected);
                    }else{
                        Parent.Proto.Data.LibraryIDListSelected = this.Selected;
                        Parent.Refresh();
                    }
                    this.Hide();
                };
                this.SetDefaultLibrary = function () {
                    if (Options.SelectedList){
                        this.Selected = Options.SelectedList
                    }
                    else {
                        this.Selected = [this.Controller.Data[0].LibraryList.Last().ID];
                    }
                    for (let LibID of this.Selected){
                        this.Select(`.checkbox[data-id="${LibID}"]`).checked = true;
                    }
                    this.SetSelectedLibraries(true);
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
                this.OnChangeCBS = function (CBSCheckbox) {
                    let LibraryRegionID = parseInt(CBSCheckbox.dataset['id']);
                    let Libs = [];
                    let ChBoxes = this.SelectAll(`.checkbox-lib[data-cbsid="${LibraryRegionID}"]`);
                    for (let i = 0; i < ChBoxes.length; i++){
                        ChBoxes[i].checked = CBSCheckbox.checked;
                        if (ChBoxes[i].checked)
                            Libs.push(parseInt(ChBoxes[i].dataset['id']));
                        else
                            Lure.Array.Remove(Libs, x=>x===parseInt(ChBoxes[i].dataset['id']));
                    }
                    if (CBSCheckbox.checked && this.SelectedCBS.indexOf(LibraryRegionID) < 0){
                        this.SelectedCBS.push(LibraryRegionID)
                    }
                    else if (!CBSCheckbox.checked && this.SelectedCBS.indexOf(LibraryRegionID) > -1){
                        Lure.Array.Remove(this.SelectedCBS, x=>x===LibraryRegionID);
                    }
                    this.Selected = Libs;
                };
                this.OnChangeLibrary = function (Checkbox) {
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
                        this.SetSelectedLibraries();
                    }
                };


                this.SaveCheckboxStatuses = function () {
                    this.CheckboxStatuses = [];
                    for (let i = 0; i < this.Checkboxes.length; i++){
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
            },
            Refresh: function(){
                if (!Parent.HasPermission)
                    return;
                this.Controller.Refresh(Lure.User.Cache.LibraryGroupList);
                this.SetDefaultLibrary();
                this.Checkboxes = this.SelectAll('.checkbox');
            },
            BeforeShow: function(){
                this.SaveCheckboxStatuses();
            },
            AfterBuild: function () {
                this.Refresh();

                this.Select('.btn-ok').addEventListener('click', ()=>{
                    this.SetSelectedLibraries();
                });
                this.Select('.btn-cancel').addEventListener('click', ()=>{
                    this.Cancel();
                });

                this.InputSearch.addEventListener('keyup', (e)=>{
                    this.Search(e.currentTarget.value.toLowerCase());
                });
                this.AddEventListener('change', '.checkbox-cbs', function (e) {
                    if (!Options.MultiSelect)
                        return;
                    this.Changes.push(e.currentTarget);
                    this.OnChangeCBS(e.currentTarget);
                });
                this.AddEventListener('change', '.checkbox-lib', function (e) {
                    this.Changes.push(e.currentTarget);
                    this.OnChangeLibrary(e.currentTarget);
                });

                document.addEventListener('click', (e)=>{
                    //calling this.isActive is cheaper than isVisible, so if inactive than invisible too
                    if (this.isActive && this.isVisible && e.target !== this.Content && e.target.closest('.library-tree') === null){
                        this.Cancel();
                        e.stopPropagation();
                    }
                })
            },
        });
    }
}

module.exports = LibraryTree;