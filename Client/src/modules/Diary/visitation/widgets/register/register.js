const HistoryMaster = require("../../../../_common/history-master/history-master");
const InputBox = require("../../../../_common/input-box/input-box");

Widget.VisitRegister = new Lure.Content({
    Parent: Diary.Visitation,
    Name: 'WidgetRegister',
    Target: '.widget-row',
    Content: `<div draggable="true" class="widget draggable diary-widget register-widget {{DayType}}" data-tutor="Виджет записи нового посетителя">
                <div class="widget-head l-row">
                  <div class="widget-title l-row">
                    <div class="widget-icon icon-visitor-new"></div>  
                    <div class="widget-caption">ЗАПИСЬ В БИБЛИОТЕКУ</div> 
                  </div> 
                  <div class="widget-controls l-row l-flexa-center">
                    <div class="widget-control widget-control-move" title="Переместить"></div>
                    <div class="widget-control widget-control-favorite" title="На главный экран"></div>
                  </div>  
                </div>
                <div class="widget-content">
                    <div class="stat">
                        <div class="caption-today l-row l-flexa-center">
                            <div class="count-caption">
                                <div class="strong">{{Count}}</div>
                                <div class="casual">новых читателей записано {{Date}}</div>
                            </div>
                        </div>
                        <div class="visit-other">
                            <div class="line line-interlinear l-row l-flexa-center l-flex-between">
                                <div>Записано читателей {{DatePrev}}</div>
                                <div>{{CountPrev}}</div>
                            </div>
                            <div class="line line-interlinear l-row l-flexa-center l-flex-between">
                                <div>В среднем записей в день</div>
                                <div>{{CountAverage}}</div>
                            </div>
                            <div class="line line-interlinear l-row l-flexa-center l-flex-between">
                                <div>Записано в этом месяце</div>
                                <div>{{CountMonth}}</div>
                            </div>
                        </div>
                        <div class="visit-plan l-col l-flex-center">
                            <div class="line l-row l-flexa-baseline">
                                <div class="casual">Исполнение установленных нормативных показателей:</div>
                            </div>
                            <div class="progress-bar" style="--progress-percent: {{CountPercent}}%;">
                                <div class="progress-caption">
                                    <div class="strong">{{Count}}/{{CountPlan}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="button-plus-wrapper">
                            <div class="button-plus-cutter left" data-tutor="Нажмите здесь, для отмены последнего записанного посетителя. Отменить запись можно только один раз после записи нового посетителя.">
                                <button class="button-minus btn-rewind"></button>
                            </div>
                            <div class="button-plus-cutter right" data-tutor="Нажмите «плюс» для открытия формы записи нового посетителя">
                                <button class="button-plus btn-switcher"></button>
                            </div>
                        </div>
                    </div>
                    <!-- WIZARD -->
                    <div class="wizard none">
                        <div class="gender wizard-group0 l-row">
                            <div class="radio-element">
                                <input class="l-radio radio-gender" type="radio" name="gender" id="gender-male">
                                <label class="l-radio-label" for="gender-male">мужчина <span class="current-val">{{MaleCount}}</span></label> 
                            </div>
                            <div class="radio-element">
                                <input class="l-radio radio-gender" type="radio" name="gender" id="gender-female">
                                <label class="l-radio-label" for="gender-female">женщина <span class="current-val">{{FemaleCount}}</span></label> 
                            </div>
                        </div>
                        <div class="age wizard-group l-row">
                            <div class="caption">Возраст</div>
                            <div class="value l-row l-pointer">
                                <div class="age-digit">{{age1}}</div>
                                <div class="age-digit">{{age2}}</div>
                                <div class="age-digit">{{age3}}</div>
                            </div>
                        </div>
                        <div class="social wizard-group">
                            <div class="caption">Социальная группа</div>
                            <div class="social-columns l-col l-flex-wrap">
                                <div>
                                    <input class="l-radio radio-social" type="radio" name="reg-social" data-type="5" id="reg-retired">
                                    <label class="l-radio-label" for="reg-retired">пенсионеры <span class="current-val">{{RetiredCount}}</span></label> 
                                </div>
                                <div>
                                    <input class="l-radio radio-social" type="radio" name="reg-social" data-type="4" id="reg-warrior">
                                    <label class="l-radio-label" for="reg-warrior">служащие <span class="current-val">{{ServantCount}}</span></label> 
                                </div>
                                <div>
                                    <input class="l-radio radio-social" type="radio" name="reg-social" data-type="3" id="reg-student">
                                    <label class="l-radio-label" for="reg-student">студенты <span class="current-val">{{StudentCount}}</span></label> 
                                </div>
                                <div>
                                    <input class="l-radio radio-social" type="radio" name="reg-social" data-type="1" id="reg-pupil">
                                    <label class="l-radio-label" for="reg-pupil">школьники <span class="current-val">{{SchoolCount}}</span></label> 
                                </div>
                                <div>
                                    <input class="l-radio radio-social" type="radio" name="reg-social" data-type="7" id="reg-pre-pupil">
                                    <label class="l-radio-label" for="reg-pre-pupil">дошкольники <span class="current-val">{{PreschoolCount}}</span></label> 
                                </div>
                                <div>
                                    <input class="l-radio radio-social" type="radio" name="reg-social" data-type="2" id="reg-rdc">
                                    <label class="l-radio-label" for="reg-rdc">РДЧ <span class="current-val">{{SchoolRDCCount}}</span></label> 
                                </div><div>
                                    <input class="l-radio radio-social" type="radio" name="reg-social" data-type="6" id="reg-other">
                                    <label class="l-radio-label" for="reg-other">прочее  <span class="current-val">{{OtherCount}}</span></label> 
                                </div>
                                
                            </div>
                        </div>
                        <div class="disability wizard-group">
                            <div class="caption">Инвалидность</div>
                            <div class="l-row">
                                <div class="radio-element">
                                    <input class="l-radio radio-disabled" type="radio" name="reg-disability" id="reg-disability-y">
                                    <label class="l-radio-label" for="reg-disability-y">есть <span class="current-val">{{DisabledCount}}</span></label>
                                </div>
                                <div class="radio-element">
                                    <input class="l-radio radio-disabled" type="radio" name="reg-disability" id="reg-disability-n" checked="checked">
                                    <label class="l-radio-label" for="reg-disability-n">нет <span class="current-val">{{Count - DisabledCount}}</span></label>
                                </div>
                            </div>
                        </div>
                        <div class="actual-new-visitor wizard-group">
                            <input class="l-checkbox checkbox" type="checkbox" id="reg-actual-new">
                            <label class="l-checkbox-label" for="reg-actual-new">Новый посетитель</label>
                        </div>
                        <div class="button-holder">
                            <button class="l-button button button2 btn-cancel">ОТМЕНА</button>
                            <button class="l-button button btn-confirm">ЗАПИСАТЬ</button>
                        </div>
                    </div>
                </div>
              </div>`,
    State:{
        Count: 0,
        CountPrev: 0,
        CountAverage: 0,
        CountMonth: 0,
        CountPlan: 1,

        MaleCount: 0,
        FemaleCount: 0,
        SchoolCount: 0,
        SchoolRDCCount: 0,
        StudentCount: 0,
        ServantCount: 0,
        RetiredCount: 0,
        OtherCount: 0,
        PreschoolCount: 0,

        DatePrev: 0,
        Widget: {},
        Reg: {
            Age: 0,
            Gender: -1,
            Social: -1,
            isDisabled: 0,
            isActualNew: false,
        }
    },
    Load: '',
    PropFormat:{
        DayType: ()=>{
            return !Diary.Proto.Data.DateSelected || Lure.Date(Diary.Proto.Data.DateSelected).isToday ? '':' previous';
        },
        Date: ()=>{
            if (!Diary.Proto.Data.DateSelected)
                return '';
            let D = Lure.Date(Diary.Proto.Data.DateSelected);
            return D.isToday ? 'сегодня':D.Format('DD MMMM YYYY', true)},
        DatePrev: (d)=>Lure.Date(d).AddDays(1).isToday ? 'вчера':Lure.Date(d).Format('DD MMMM YYYY', true),

        CountPercent: (c, p)=>{
            let percent = p.Count/p.CountPlan*100;
            if (percent <=100)
                return percent;
            return 100;
        },
        age1:  (c, p)=>Global.GetDigit(p.Reg.Age, 1, 3),
        age2:  (c, p)=>Global.GetDigit(p.Reg.Age, 2, 3),
        age3:  (c, p)=>Global.GetDigit(p.Reg.Age, 3, 3),
    },
    Refresh: function () {
        this.CheckForFavor();
        this.Load.Show();

        api.Diary_Visitation_RegisterGet(Diary.Proto.Data.DateSelected, Diary.Proto.Data.Library.ID, {
            Then: (Data)=>{
                this.Proto.Data.Count        = Data.Count;
                this.Proto.Data.CountPrev    = Data.CountPrev;
                this.Proto.Data.CountAverage = Data.CountAverage.toFixed(2);
                this.Proto.Data.CountPlan    = Data.CountPlan;
                this.Proto.Data.CountMonth   = Data.CountMonth;
                this.Proto.Data.DatePrev     = Lure.Date(Data.DatePrev).Date;
                this.Proto.Data.DateStampAdded   = Data.DateStampAdded;
                this.Proto.Data.DateStampRemoved = Data.DateStampRemoved;

                this.Proto.Data.MaleCount      = Data.MaleCount;
                this.Proto.Data.FemaleCount    = Data.FemaleCount;
                this.Proto.Data.SchoolCount    = Data.SchoolCount;
                this.Proto.Data.SchoolRDCCount = Data.SchoolRDCCount;
                this.Proto.Data.StudentCount   = Data.StudentCount;
                this.Proto.Data.ServantCount   = Data.ServantCount;
                this.Proto.Data.RetiredCount   = Data.RetiredCount;
                this.Proto.Data.OtherCount     = Data.OtherCount;
                this.Proto.Data.PreschoolCount = Data.PreschoolCount;
                this.Proto.Data.DisabledCount  = Data.DisabledCount;

                this.ButtonRewind.disabled = Data.DateStampRemoved >= Data.DateStampAdded;
                this.Proto.Refresh();
            },
            Catch: ()=>{

            },
            Finally: ()=>{

                this.Load.Hide();
            }
        });

        //this.Proto.Data.CountPercent = Math.round(Data.Count/Data.CountPlan*100);
    },
    Props: function () {
        this.StatContent   = this.Select('.stat');
        this.WizardContent = this.Select('.wizard');

        this.ButtonWizardConfirm = this.Select('.btn-confirm');
        this.ButtonRewind = this.Select('.btn-rewind');

        this.RadioMale = this.Select('#gender-male');
        this.RadioFemale = this.Select('#gender-female');
        this.RadioPersonDisabledY = this.Select('#reg-disability-y');
        this.RadioPersonDisabledN = this.Select('#reg-disability-n');

        this.CheckboxActualNew = this.Select('#reg-actual-new');

        this._FavoriteIcon = this.Select('.widget-control-favorite');
    },
    Methods: function () {
        this.Switch = function () {
            this.StatContent  .classList.toggle('none');
            this.WizardContent.classList.toggle('none');
        };
        this.Clear = function () {
            this.RadioMale.checked = false;
            this.RadioFemale.checked = false;
            this.Proto.Data.Reg.Age = 0;
            this.Proto.Data.Reg.Gender = -1;
            this.Proto.Data.Reg.Social = -1;
            this.Proto.Data.Reg.isDisabled = false;
            this.Proto.Data.Reg.isActualNew = false;
            this.Proto.Refresh();
            let PersonType = this.Select('input[name="reg-social"]:checked');
            if (PersonType)
                PersonType.checked = false;
            this.RadioPersonDisabledN.checked = true;
            this.CheckboxActualNew.checked = false;
        };
        this.WizardClose = function () {
            this.Switch();
            this.Clear();
        };
        this.WizardConfirm = function () {
            let isValid = true;
            let Reg = this.State.Reg;
            if (Reg.Age < 1){
                isValid = false;
                Lure.System.ShowWarn('Введите возраст посетителя');
            }
            if (Reg.Social < 0){
                isValid = false;
                Lure.System.ShowWarn('Выберите социальную группу посетителя');
            }
            if (Reg.Gender < 0){
                isValid = false;
                Lure.System.ShowWarn('Выберите пол посетителя');
            }
            if (!isValid)
                return;
            Lure.Button.Lock(this.ButtonWizardConfirm);
            api.Diary_Visitation_RegisterAdd(Diary.Proto.Data.DateSelected, Diary.Proto.Data.Library.ID, Reg.Age, Reg.Social, Reg.Gender, Reg.isActualNew, {
                Then: ()=>{
                    let St = this.State;
                    Lure.System.ShowSuccess('Посетитель зарегистрирован');
                    St.DateStampAdded   = 1;
                    St.DateStampRemoved = 0;
                    this.WizardClose();
                },
                Catch: ()=>{
                    Lure.System.ShowWarn('Посетитель не зарегистрирован');
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonWizardConfirm);
                    this.Refresh();
                }
            });
        };
        this.Rewind = function () {
            if (this.Proto.Data.DateStampAdded < this.Proto.Data.DateStampRemoved){
                console.log('cant remove ast reg');
                return;
            }


            Lure.Confirm('Отмена посетителя', 'Вы собираетесь отменить регистрацию последнего посетителя. Продолжить?', {
                OnAgree: ()=>{
                    this.ButtonRewind.disabled = true;
                    api.Diary_Visitation_RegisterRewind(Diary.Proto.Data.DateSelected, Diary.Proto.Data.Library.ID, {
                        Then: (res)=>{

                            if (!res)
                                return;
                            this.Proto.Data.DateStampRemoved = 1;
                            this.Proto.Data.DateStampAdded   = 0;
                            if (this.Proto.Data.Count < 0) {
                                this.Proto.Data.Count =0
                            } else {
                                this.Proto.Data.Count--;
                            }
                            //this.Proto.Data.Count < 0 ? this.Proto.Data.Count =0 : this.Proto.Data.Count--;
                            this.Proto.Refresh();
                        },
                        Finally: ()=>{
                            this.ButtonRewind.disabled = true;
                        }
                    });
                },
                OnCancel: ()=>{}
            })

        };
        this.NumPadSetAge = function (value) {
            this.Proto.Data.Reg.Age = value;
            this.Proto.Refresh();
        };

        this.SwitchFavorite = function () {
            let p;
            if (this.isFavorite){
                p = Featured.RemoveWidget(this.FullName);
            }
            else{
                p = Featured.AddWidget(this.FullName);
            }
            p.then(()=>{
                this.CheckForFavor();
            })
        };
        this.CheckForFavor = function () {
            this.isFavorite = Lure.User.WebSettings.Featured.Widgets.indexOf(this.FullName) > -1;
            if (this.isFavorite)
                this._FavoriteIcon.classList.add('active');
            else
                this._FavoriteIcon.classList.remove('active');
        };
    },
    AfterBuild: function () {
        this.Select('.btn-switcher').onclick = ()=>{this.Switch()};
        this.Select('.btn-cancel').onclick = ()=>{this.WizardClose()};
        this.ButtonWizardConfirm.onclick = ()=>{this.WizardConfirm()};
        this.ButtonRewind.onclick = ()=>{this.Rewind()};

        this.Select('.age .value').onclick = (e)=>{
            InputBox.Run(e.currentTarget, this.Proto.Data.Reg.Age, this.NumPadSetAge, {Caption: 'Возраст посетителя'});
        };

        this.AddEventListener('change', '.radio-gender', (e)=>{
            this.State.Reg.Gender = e.currentTarget.id === 'gender-male' ? 1 : 0;
        });
        this.AddEventListener('change', '.radio-social', (e)=>{
            this.State.Reg.Social = e.currentTarget.dataset['type'];
        });
        this.AddEventListener('change', '.radio-disabled', (e)=>{
            this.State.Reg.isDisabled = e.currentTarget.id === 'reg-disability-y' ? 1 : 0;
        });

        this.CheckboxActualNew.addEventListener('change', ()=>{
            this.State.Reg.isActualNew = this.CheckboxActualNew.checked;
        });

        this._FavoriteIcon.addEventListener('click', this.SwitchFavorite);
    }
});
