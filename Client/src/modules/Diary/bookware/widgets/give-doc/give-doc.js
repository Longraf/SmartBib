const D = require('../../../../_common/dictionary');
Widget.GiveDoc = new Lure.Content({
    Parent: Diary.Bookware,
    Name: 'WidgetGiveDoc',
    Target: '.widget-row',
    Content: `<div draggable="true" class="widget draggable diary-widget give-doc-widget" style="--widget-width: {{Widget.Width}}; --widget-height: {{Widget.Height}}">
                <div class="widget-head l-row">
                  <div class="widget-title l-row">
                    <div class="widget-icon icon-visitor-new"></div>  
                    <div class="widget-caption">КОПИИ</div> 
                  </div> 
                  <div class="widget-controls l-row l-flexa-center">
                    <div class="widget-control widget-control-move" title="Переместить"></div>
                    <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                  </div>  
                </div>
                <div class="widget-content">
                    <div class="caption-today l-row l-flexa-center">
                        <div class="count-caption">
                            <div class="strong">{{Count}}</div>
                            <div class="casual">копий выдано сегодня</div>
                        </div>
                    </div>
                    <div class="give-doc-age">
                        <div class="caption">Возраст</div>
                        <div class="inputs">
                            <div class="checkbox-holder">
                                <input class="l-radio" type="radio" name="give-doc-age" data-prop="Age" data-value="1" id="give-doc-age-14">
                                <label class="l-radio-label" for="give-doc-age-14">до 14 лет <span class="current-val">{{Age14Count}}</span></label>
                            </div>
                            <div class="checkbox-holder">
                                <input class="l-radio" type="radio" name="give-doc-age" data-prop="Age" data-value="14" id="give-doc-age-30">
                                <label class="l-radio-label" for="give-doc-age-30">от 14 до 30 лет <span class="current-val">{{AgeUnder30Count}}</span></label>
                            </div>
                            <div class="checkbox-holder">
                                <input class="l-radio" type="radio" name="give-doc-age" data-prop="Age" data-value="31" id="give-doc-age-30-plus">
                                <label class="l-radio-label" for="give-doc-age-30-plus">старше 30 лет <span class="current-val">{{AgeOver30Count}}</span></label>
                            </div>
                        </div>
                        
                    </div>
                    <div class="give-doc-type none">
                        <div class="caption">Тип носителя</div>
                        <div class="inputs l-row l-flex-wrap">
                            <div class="radio-item">
                                <input class="l-radio" type="radio" name="give-doc-type" data-prop="BookCarryTypeID" data-value="${D.LibraryBookCarryType.Physical}" id="give-doc-type-phys" checked="checked">
                                <label class="l-radio-label" for="give-doc-type-phys">физический <span class="current-val">{{TypePhysCount}}</span></label>
                            </div>
                            <div class="radio-item">
                                <input class="l-radio" type="radio" name="give-doc-type" data-prop="BookCarryTypeID" data-value="${D.LibraryBookCarryType.Electron}" id="give-doc-type-electron">
                                <label class="l-radio-label" for="give-doc-type-electron">электронный <span class="current-val">{{TypeElectronCount}}</span></label>
                            </div>
                            <div class="radio-item">
                                <input class="l-radio" type="radio" name="give-doc-type" data-prop="BookCarryTypeID" data-value="${D.LibraryBookCarryType.Installed}" id="give-doc-type-installed">
                                <label class="l-radio-label" for="give-doc-type-installed">инсталированный <span class="current-val">{{TypeInstalledCount}}</span></label>
                            </div>
                            <div class="radio-item">
                                <input class="l-radio" type="radio" name="give-doc-type" data-prop="BookCarryTypeID" data-value="${D.LibraryBookCarryType.Remote}" id="give-doc-type-remote">
                                <label class="l-radio-label" for="give-doc-type-remote">удаленный лицензионный <span class="current-val">{{TypeRemoteCount}}</span></label>
                            </div>
                            <div class="radio-item">
                                <input class="l-radio" type="radio" name="give-doc-type" data-prop="BookCarryTypeID" data-value="${D.LibraryBookCarryType.Copy}" id="give-doc-type-copy">
                                <label class="l-radio-label" for="give-doc-type-copy">копия <span class="current-val">{{TypeCopyCount}}</span></label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="button-holder">
                        <button class="l-button button btn-commit">ВЫДАТЬ</button>
                    </div>
                </div>
              </div>`,
    Load: '',
    State:{
        Count: 0,
        Age: -1,
        //BookCarryTypeID: D.LibraryBookCarryType.Physical,

        Age14Count: 0,
        AgeUnder30Count: 0,
        AgeOver30Count: 0,

        // TypePhysCount: 0,
        // TypeElectronCount: 0,
        // TypeInstalledCount: 0,
        // TypeRemoteCount: 0,
        // TypeCopyCount: 0,
        Widget:{
            Width:  2,
            Height: 2,
        }
    },
    Refresh: function () {
        this.Load.Show();
        api.Diary_Bookware_GivingDocGet(Diary.CurrentLibraryID, Diary.CurrentDate, {
            Then: (Data)=>{
                let St = this.State;
                St.Count = Data.Count;
                St.Age14Count = Data.Age14Count;
                St.AgeUnder30Count = Data.AgeUnder30Count;
                St.AgeOver30Count = Data.AgeOver30Count;
                // St.TypePhysCount = Data.TypePhysCount;
                // St.TypeElectronCount = Data.TypeElectronCount;
                // St.TypeInstalledCount = Data.TypeInstalledCount;
                // St.TypeRemoteCount = Data.TypeRemoteCount;
                // St.TypeCopyCount = Data.TypeCopyCount;
                this.Proto.Refresh();
            },
            Finally: ()=>{
                this.Load.Hide();
            }
        })
    },
    Props: function () {
        this.RadioBookCarryTypePhysical = this.Select('#give-doc-type-phys');
        this.RadioCopy = this.Select('#give-doc-type-copy');
        this.ButtonCommit = this.Select('.btn-commit');
    },
    Methods: function () {
        this.Clear = function () {
            //this.RadioBookCarryTypePhysical.checked = true;
            //this.Proto.Data.BookCarryTypeID = D.LibraryBookCarryType.Physical;

            let RadioAge = this.Select('[name="give-doc-age"]:checked');
            if (RadioAge)
                RadioAge.checked = false;
            this.Proto.Data.Age = -1;
        };
        this.Confirm = function () {
            if (this.Proto.Data.Age < 0){
                return Lure.System.ShowWarn('Выберите возраст получателя');
            }
            Lure.Button.Lock(this.ButtonCommit);
            api.Diary_Bookware_GivingDocAdd(Diary.CurrentLibraryID, Diary.CurrentDate, this.State.Age, {
                    Then: (x)=>{
                        if (x>0){
                            Lure.System.ShowSuccess('Копия документа выдана');
                            this.Proto.SetProperty('Count', this.State.Count+1);
                            this.Clear();
                            this.Refresh();
                        }
                    },
                    Catch: ()=>{
                        Lure.System.Error('Операция не удалась');
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