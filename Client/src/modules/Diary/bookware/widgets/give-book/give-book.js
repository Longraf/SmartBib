const D = require('../../../../_common/dictionary');
Widget.GiveBook = new Lure.Content({
    Parent: Diary.Bookware,
    Name: 'WidgetGiveBook',
    Target: '.widget-row',
    Content: `<div draggable="true" class="widget draggable diary-widget give-book-widget" style="--widget-width: {{Widget.Width}}; --widget-height: {{Widget.Height}}">
                <div class="widget-head l-row">
                  <div class="widget-title l-row">
                    <div class="widget-icon icon-visitor-new"></div>  
                    <div class="widget-caption">КНИГИ И БРОШЮРЫ</div> 
                  </div> 
                  <div class="widget-controls l-row l-flexa-center">
                    <div class="widget-control widget-control-move" title="Переместить"></div>
                    <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                  </div>  
                </div>
                <div class="widget-content">
                    <div class="column l-col">
                        <div class="caption-today l-row l-flexa-center">
                            <div class="count-caption">
                                <div class="strong">{{Count}}</div>
                                <div class="casual">книг и брошюр выдано сегодня</div>
                            </div>
                        </div>
                        <div class="give-book-place">
                            <div class="caption">Место выдачи</div>
                            <div class="inputs l-row">
                                <div>
                                    <input class="l-radio" type="radio" name="give-book-place" data-prop="PlaceID" data-value="1" id="give-book-place-state" checked="checked">
                                    <label class="l-radio-label" for="give-book-place-state">Стационар <span class="current-val">{{StationaryCount}}</span></label>
                                </div>
                                <div>
                                    <input class="l-radio" type="radio" name="give-book-place" data-prop="PlaceID" data-value="2" id="give-book-place-out">
                                    <label class="l-radio-label" for="give-book-place-out">Внестационар <span class="current-val">{{Count - StationaryCount}}</span></label>
                                </div>
                            </div>
                        </div>
                        <div class="give-book-age">
                            <div class="caption">Возраст</div>
                            <div class="inputs l-row">
                                <div>
                                    <input class="l-radio" type="radio" name="give-book-age" data-prop="Age" data-value="1" id="give-book-age-14">
                                    <label class="l-radio-label" for="give-book-age-14">до 14 лет <span class="current-val">{{Age14Count}}</span></label>
                                </div>
                                <div>
                                    <input class="l-radio" type="radio" name="give-book-age" data-prop="Age" data-value="14" id="give-book-age-30">
                                    <label class="l-radio-label" for="give-book-age-30">от 14 до 30 лет <span class="current-val">{{AgeUnder30Count}}</span></label>
                                </div>
                                <div>
                                    <input class="l-radio" type="radio" name="give-book-age" data-prop="Age" data-value="31" id="give-book-age-30-plus">
                                    <label class="l-radio-label" for="give-book-age-30-plus">старше 30 лет <span class="current-val">{{AgeOver30Count}}</span></label>
                                </div>
                            </div>
                            
                        </div>
                        <div class="give-book-disability">
                            <div class="caption">Инвалидность</div>
                            <div class="inputs l-row">
                                <div>
                                    <input class="l-radio" type="radio" name="give-book-disability" data-prop="isDisabled" data-value="true" id="give-book-disability-yes" {{#if (o.isDisabled) ? 'checked':''}}>
                                    <label class="l-radio-label" for="give-book-disability-yes">есть <span class="current-val">{{DisabledCount}}</span></label>
                                </div>
                                <div>
                                    <input class="l-radio" type="radio" name="give-book-disability" data-prop="isDisabled" data-value="false" id="give-book-disability-no" {{#if (o.isDisabled) ? '':'checked'}}>
                                    <label class="l-radio-label" for="give-book-disability-no">нет <span class="current-val">{{Count - DisabledCount}}</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column column2 l-col">
                        <div class="give-book-carry-type">
                            <div class="caption">Тип носителя</div>
                            <div class="inputs l-row l-flex-wrap">
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-carry-type" data-prop="BookCarryTypeID" data-value="${D.LibraryBookCarryType.Physical}" id="give-book-carry-type-phys" checked="checked">
                                    <label class="l-radio-label" for="give-book-carry-type-phys">физический <span class="current-val">{{TypePhysCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-carry-type" data-prop="BookCarryTypeID" data-value="${D.LibraryBookCarryType.Electron}" id="give-book-carry-type-electron">
                                    <label class="l-radio-label" for="give-book-carry-type-electron">электронный <span class="current-val">{{TypeElectronCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-carry-type" data-prop="BookCarryTypeID" data-value="${D.LibraryBookCarryType.Installed}" id="give-book-carry-type-install">
                                    <label class="l-radio-label" for="give-book-carry-type-install">инсталлированный <span class="current-val">{{TypeInstalledCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-carry-type" data-prop="BookCarryTypeID" data-value="${D.LibraryBookCarryType.Remote}" id="give-book-carry-type-remote">
                                    <label class="l-radio-label" for="give-book-carry-type-remote">удаленный лицензированный <span class="current-val">{{TypeRemoteCount}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="give-book-type">
                            <div class="caption">Тематика</div>
                            <div class="inputs l-row l-flex-wrap">
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.OPL}" id="give-book-type-opl">
                                    <label class="l-radio-label" for="give-book-type-opl">ОПЛ <span class="current-val">{{ThemeOPLCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.Nature}" id="give-book-type-nat">
                                    <label class="l-radio-label" for="give-book-type-nat">естествознание <span class="current-val">{{ThemeNatureCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.Tech}" id="give-book-type-tech">
                                    <label class="l-radio-label" for="give-book-type-tech">техника <span class="current-val">{{ThemeTechCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.Agriculture}" id="give-book-type-agriculture">
                                    <label class="l-radio-label" for="give-book-type-agriculture">сельское хозяйство <span class="current-val">{{ThemeAgricultureCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.Art}" id="give-book-type-art">
                                    <label class="l-radio-label" for="give-book-type-art">искусство <span class="current-val">{{ThemeArtCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.Sport}" id="give-book-type-sport">
                                    <label class="l-radio-label" for="give-book-type-sport">спорт <span class="current-val">{{ThemeSportCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.WTF_8183}" id="give-book-type-8183">
                                    <label class="l-radio-label" for="give-book-type-8183">81, 83 <span class="current-val">{{Theme8183Count}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.Catalog}" id="give-book-type-catalog">
                                    <label class="l-radio-label" for="give-book-type-catalog">справочники <span class="current-val">{{ThemeCatalogCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.Children}" id="give-book-type-child">
                                    <label class="l-radio-label" for="give-book-type-child">детская литература <span class="current-val">{{ThemeChildrenCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.Fiction}" id="give-book-type-fiction" checked="checked">
                                    <label class="l-radio-label" for="give-book-type-fiction">художественная литература <span class="current-val">{{ThemeFictionCount}}</label>
                                </div>
                                <div class="radio-item">
                                    <input class="l-radio" type="radio" name="give-book-type" data-prop="BookTypeID" data-value="${D.LibraryBookType.Other}" id="give-book-type-other">
                                    <label class="l-radio-label" for="give-book-type-other">дополнительно <span class="current-val">{{ThemeOtherCount}}</label>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div class="button-holder">
                            <button class="l-button button btn-commit">ВЫДАТЬ</button>
                        </div>
                    </div>
                </div>
              </div>`,
    Load: '',
    State:{
        Count: 42,
        PlaceID: 1,
        Age: -1,
        isDisabled: false,
        BookCarryTypeID: D.LibraryBookCarryType.Physical,
        BookTypeID: D.LibraryBookType.Fiction,

        StationaryCount:0,
        Age14Count: 0,
        AgeUnder30Count: 0,
        AgeOver30Count: 0,
        DisabledCount: 0,
        TypePhysCount: 0,
        TypeElectronCount: 0,
        TypeInstalledCount: 0,
        TypeRemoteCount: 0,

        ThemeOPLCount: 0,
        ThemeNatureCount: 0,
        ThemeTechCount: 0,
        ThemeAgricultureCount: 0,
        ThemeArtCount: 0,
        ThemeSportCount: 0,
        Theme8183Count: 0,
        ThemeCatalogCount: 0,
        ThemeChildrenCount: 0,
        ThemeFictionCount: 0,
        ThemeOtherCount: 0,



        Widget:{
            Width:  4,
            Height: 2,
        }
    },
    PropTypes:{
        PlaceID: Lure.PropTypes.UInt,
        Count: Lure.PropTypes.UInt,
        isDisabled: Lure.PropTypes.Bool
    },
    PropFormat:{
        age1:  (c, p)=>Global.GetDigit(p.Reg.Age, 1, 3),
        age2:  (c, p)=>Global.GetDigit(p.Reg.Age, 2, 3),
        age3:  (c, p)=>Global.GetDigit(p.Reg.Age, 3, 3),
    },
    Refresh: function () {
        this.Load.Show();
        api.Diary_Bookware_GivingBookGet(Diary.CurrentLibraryID, Diary.CurrentDate, {
            Then: (Data)=>{
                let St = this.State;
                St.Count = Data.Count;
                St.StationaryCount = Data.StationaryCount;
                St.Age14Count = Data.Age14Count;
                St.AgeUnder30Count = Data.AgeUnder30Count;
                St.AgeOver30Count = Data.AgeOver30Count;
                St.DisabledCount = Data.DisabledCount;
                St.TypePhysCount = Data.TypePhysCount;
                St.TypeElectronCount = Data.TypeElectronCount;
                St.TypeInstalledCount = Data.TypeInstalledCount;
                St.TypeRemoteCount = Data.TypeRemoteCount;

                St.ThemeOPLCount = Data.ThemeOPLCount;
                St.ThemeNatureCount = Data.ThemeNatureCount;
                St.ThemeTechCount = Data.ThemeTechCount;
                St.ThemeAgricultureCount = Data.ThemeAgricultureCount;
                St.ThemeArtCount = Data.ThemeArtCount;
                St.ThemeSportCount = Data.ThemeSportCount;
                St.Theme8183Count = Data.Theme8183Count;
                St.ThemeCatalogCount = Data.ThemeCatalogCount;
                St.ThemeChildrenCount = Data.ThemeChildrenCount;
                St.ThemeFictionCount = Data.ThemeFictionCount;
                St.ThemeOtherCount = Data.ThemeOtherCount;
                this.Proto.Refresh();
            },
            Finally: ()=>{
                this.Load.Hide();
            }
        })
    },
    Props: function () {
        this.RadioPlaceStation = this.Select('#give-book-place-state');
        this.RadioDisabilityN = this.Select('#give-book-disability-no');
        this.RadioBookCarryTypePhysical = this.Select('#give-book-carry-type-phys');
        this.RadioBookType = this.Select('#give-book-type-fiction');
        this.ButtonCommit = this.Select('.btn-commit');

    },
    Methods: function () {
        this.Clear = function () {
            this.RadioPlaceStation.checked = true;
            this.Proto.Data.PlaceID = 1;

            this.RadioDisabilityN.checked = true;
            this.Proto.Data.isDisabled = false;

            this.RadioBookCarryTypePhysical.checked = true;
            this.Proto.Data.BookCarryTypeID = D.LibraryBookCarryType.Physical;



            let RadioAge = this.Select('[name="give-book-age"]:checked');
            if (RadioAge)
                RadioAge.checked = false;
            this.RadioBookType.checked = true;
            this.Proto.Data.Age = -1;
            this.Proto.Data.BookTypeID = D.LibraryBookType.Fiction;
        };
        this.Confirm = function () {
            let isValid = true;
            if (this.Proto.Data.Age < 0){
                isValid = false;
                Lure.System.ShowWarn('Выберите возраст получателя');
            }
            if (this.Proto.Data.BookTypeID < 0){
                isValid = false;
                Lure.System.ShowWarn('Выберите тематику');
            }

            if (!isValid)
                return;

            Lure.Button.Lock(this.ButtonCommit);

            api.Diary_Bookware_GivingBookAdd(
                Diary.CurrentLibraryID,
                Diary.CurrentDate,
                this.State.PlaceID,
                this.State.Age,
                this.State.BookCarryTypeID,
                this.State.BookTypeID,
                this.State.isDisabled, {
                Then: (x)=>{
                    if (x>0){
                        Lure.System.ShowSuccess('Книга или брошюра выдана');
                        this.Proto.SetProperty('Count', this.State.Count+1);
                        Widget.GiveBookProgress.Update(1);
                        this.Clear();
                        this.Refresh();
                    }
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonCommit);
                }
            });
        };
    },
    AfterBuild: function () {
        this.AddEventListener('change', '.l-radio', function (e) {
            this.Proto.SetProperty(e.currentTarget.dataset['prop'], e.currentTarget.dataset['value']);
        });
        this.ButtonCommit.onclick = ()=>{this.Confirm();};
    }
});









