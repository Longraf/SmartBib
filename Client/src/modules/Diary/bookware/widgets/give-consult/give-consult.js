const D = require('../../../../_common/dictionary');

Widget.GiveRef = new Lure.Content({
    Parent: Diary.Bookware,
    Name: 'WidgetGiveConsult',
    Target: '.widget-row',
    Content: `<div draggable="true" class="widget draggable diary-widget give-consult-widget" style="--widget-width: {{Widget.Width}}; --widget-height: {{Widget.Height}}">
                <div class="widget-head l-row">
                  <div class="widget-title l-row">
                    <div class="widget-icon icon-visitor-new"></div>  
                    <div class="widget-caption">СПРАВКИ И КОНСУЛЬТАЦИИ</div> 
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
                            <div class="casual">справок и консультаций выдано сегодня</div>
                        </div>
                    </div>
                    <div class="give-consult-age">
                        <div class="caption">Возраст</div>
                        <div class="inputs l-row">
                            <div>
                                <input class="l-radio" type="radio" name="give-consult-age" data-prop="Age" data-value="1" id="give-consult-age-14">
                                <label class="l-radio-label" for="give-consult-age-14">до 14 лет <span class="current-val">{{Age14Count}}</span></label>
                            </div>
                            <div>
                                <input class="l-radio" type="radio" name="give-consult-age" data-prop="Age" data-value="14" id="give-consult-age-30">
                                <label class="l-radio-label" for="give-consult-age-30">от 14 до 30 лет <span class="current-val">{{AgeUnder30Count}}</span></label>
                            </div>
                            <div>
                                <input class="l-radio" type="radio" name="give-consult-age" data-prop="Age" data-value="31" id="give-consult-age-30-plus">
                                <label class="l-radio-label" for="give-consult-age-30-plus">старше 30 лет <span class="current-val">{{AgeOver30Count}}</span></label>
                            </div>
                        </div>
                    </div>
                    <div class="give-consult-type">
                        <div class="caption">Тип носителя</div>
                        <div class="inputs l-row l-flex-wrap">
                            <div class="radio-item">
                                <input class="l-radio" type="radio" name="give-consult-type" data-prop="ConsultTypeID" data-value="${D.LibraryConsultType.Theme}" id="give-consult-type-theme">
                                <label class="l-radio-label" for="give-consult-type-theme">тематический <span class="current-val">{{TypeThemeCount}}</span></label>
                            </div>
                            <div class="radio-item">
                                <input class="l-radio" type="radio" name="give-consult-type" data-prop="ConsultTypeID" data-value="${D.LibraryConsultType.Factor}" id="give-consult-type-factor">
                                <label class="l-radio-label" for="give-consult-type-factor">фактографический <span class="current-val">{{TypeFactorCount}}</span></label>
                            </div>
                            <div class="radio-item">
                                <input class="l-radio" type="radio" name="give-consult-type" data-prop="ConsultTypeID" data-value="${D.LibraryConsultType.Library}" id="give-consult-type-lib">
                                <label class="l-radio-label" for="give-consult-type-lib">библиографический <span class="current-val">{{TypeLibraryCount}}</span></label>
                            </div>
                            <div class="radio-item">
                                <input class="l-radio" type="radio" name="give-consult-type" data-prop="ConsultTypeID" data-value="${D.LibraryConsultType.Consult}" id="give-consult-type-consult" checked="checked">
                                <label class="l-radio-label" for="give-consult-type-consult">консультация <span class="current-val">{{TypeConsultCount}}</span></label>
                            </div>
                            <div class="radio-item">
                                <input class="l-radio" type="radio" name="give-consult-type" data-prop="ConsultTypeID" data-value="${D.LibraryConsultType.Copy}" id="give-consult-type-copy">
                                <label class="l-radio-label" for="give-consult-type-copy">удаленные справки <span class="current-val">{{TypeCopyCount}}</span></label><!--копия-->
                            </div>
                        </div>
                    </div>
                    
                    <div class="button-holder">
                        <button class="l-button button btn-commit">ВЫДАТЬ</button>
                    </div>
                </div>
              </div>`,
    Load: '',
    State: {
        Count: 0,
        Age: -1,
        ConsultTypeID: D.LibraryConsultType.Consult,

        Age14Count: 0,
        AgeUnder30Count: 0,
        AgeOver30Count: 0,

        TypeThemeCount: 0,
        TypeFactorCount: 0,
        TypeLibraryCount: 0,
        TypeConsultCount: 0,
        TypeCopyCount: 0,

        Widget:{
            Width:  2,
            Height: 2,
        }
    },
    Refresh: function () {
        this.Load.Show();
        api.Diary_Bookware_GivingConsultGet(Diary.CurrentLibraryID, Diary.CurrentDate, {
            Then: (Data)=>{
                let St = this.State;
                St.Count            = Data.Count;
                St.Age14Count       = Data.Age14Count;
                St.AgeUnder30Count  = Data.AgeUnder30Count;
                St.AgeOver30Count   = Data.AgeOver30Count;
                St.DisabledCount    = Data.DisabledCount;
                St.TypeThemeCount   = Data.TypeThemeCount;
                St.TypeFactorCount  = Data.TypeFactorCount;
                St.TypeLibraryCount = Data.TypeLibraryCount;
                St.TypeConsultCount = Data.TypeConsultCount;
                St.TypeCopyCount    = Data.TypeCopyCount;
                this.Proto.Refresh();
            },
            Finally: ()=>{
                this.Load.Hide();
            }
        })
    },
    Props: function () {
        this.RadioCopy = this.Select('#give-consult-type-copy');
        this.RadioConsultType = this.Select('#give-consult-type-consult');
        this.ButtonCommit = this.Select('.btn-commit');

    },
    Methods: function () {
        this.Clear = function () {
            let RadioAge = this.Select('[name="give-consult-age"]:checked');
            if (RadioAge)
                RadioAge.checked = false;
            this.RadioConsultType.checked = true;
            this.Proto.Data.Age = -1;
            this.Proto.Data.ConsultTypeID = D.LibraryConsultType.Consult;
        };
        this.Confirm = function () {
            let isValid = true;
            if (this.Proto.Data.Age < 0){
                isValid = false;
                Lure.System.ShowWarn('Выберите возраст получателя');
            }
            if (this.Proto.Data.ConsultTypeID < 0){
                isValid = false;
                Lure.System.ShowWarn('Выберите тип носителя');
            }
            if (!isValid)
                return;
            Lure.Button.Lock(this.ButtonCommit);
            api.Diary_Bookware_GivingConsultAdd(Diary.CurrentLibraryID, Diary.CurrentDate, this.State.Age, this.State.ConsultTypeID,  {
                    Then: (x)=>{
                        if (x>0){
                            Lure.System.ShowSuccess(this.RadioCopy.checked ? 'Копия справки выдана':'Справка или консультация выдана');
                            this.Proto.SetProperty('Count', this.State.Count+1);
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