const InputBox = require("../../_common/input-box/input-box");
const D = require("../../_common/dictionary");

new Lure.Content({
    Parent: Diary,
    Name: 'Movings',
    Visible: false,
    Target: '.body',
    Route: false,
    Control: {
        Target: '#nav-diary-book-out',
        OnClick: function () {
            this.Toggle();
        }
    },
    Permission: {
        Roles: [D.Role.DairyInput]
    },
    Content:`<div class="moving-stations-container">
    <div class="ms-container-2">
        <div class="moving-stations content">
            <div class="content-container">
                <div class="header">Работа передвижек</div>
                <div class="date">
                    <span class="less l-pointer"></span> 
                    <span>{{DateValue}}</span> 
                    <span class="more l-pointer"></span>
                </div>
                <div class="content-block l-invert">
                    <div class="content-row">
                        <div class="row-left-one">Количество передвижек</div>
                        <div class="row-right-one value-cell editable editable-special">{{MovingsCount}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Количество читателей</div>
                        <div class="row-right-one value-cell editable editable-special">{{MovingsReaders}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Количество мероприятий</div>
                        <div class="row-right-one value-cell editable editable-special">{{MovingsEventCount}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Количество обслуженных на мероприятиях</div>
                        <div class="row-right-one value-cell editable editable-special">{{MovingsEventServedCount}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Всего выдано книг</div>
                        <div class="row-right-one value-cell">{{BookGiving}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">ОПЛ</div>
                        <div class="row-right-one value-cell editable editable-special">{{BookOPL}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Естествознание</div>
                        <div class="row-right-one value-cell editable editable-special">{{BookNature}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Техника</div>
                        <div class="row-right-one value-cell editable editable-special">{{BookTech}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Сельское хозяйство</div>
                        <div class="row-right-one value-cell editable editable-special">{{BookAgriculture}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Искусство</div>
                        <div class="row-right-one value-cell editable editable-special">{{BookArt}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Спорт</div>
                        <div class="row-right-one value-cell editable editable-special">{{BookSport}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">81, 83</div>
                        <div class="row-right-one value-cell editable editable-special">{{Book8183}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Справочники</div>
                        <div class="row-right-one value-cell editable editable-special">{{BookDict}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Детская литература</div>
                        <div class="row-right-one value-cell editable editable-special">{{BookChild}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Художественная литература</div>
                        <div class="row-right-one value-cell editable editable-special">{{BookFiction}}</div>
                    </div>
                    <div class="content-row">
                        <div class="row-left-one">Дополнительно</div>
                        <div class="row-right-one value-cell editable editable-special">{{BookOther}}</div>
                    </div>
                    
                    {{#each Empty}}
                    <div class="content-row">
                        <div class="row-left-one">&nbsp;</div>
                        <div class="row-right-one">&nbsp;</div>
                    </div>
                    {{#endeach}}
                </div>
             </div>
            <div class="button-container">
                <div class="button-holder">
                    <button class="l-button button button2 btn-cancel">ОТМЕНА</button>
                    <button class="l-button button btn-confirm">СОХРАНИТЬ</button>
                </div>
            </div>
        </div>
    </div>
</div>`,
    Proto: {
        Empty: new Array(7),
        /* ***  */
        LibraryID: 0,
        DateValue: Lure.Date().AddDays(-1).DayStart,
        MovingsCount: 0,
        MovingsReaders: 0,
        MovingsEventCount: 0,
        MovingsEventServedCount: 0,

        BookGiving: 0,
        BookOPL: 0,
        BookNature: 0,
        BookTech: 0,
        BookAgriculture: 0,
        BookArt: 0,
        BookSport: 0,
        Book8183: 0,
        BookDict:0,
        BookChild:0,
        BookFiction: 0,
        BookOther:0,
    },
    PropFormat: {
        DateValue: (d)=>Lure.Date(d).Format('DD MMMM YYYY', true),
    },
    Animation: {
        Show: 'le-show',
        Hide: 'le-hide'
    },
    Props: function(){
        this.DateLimit = Lure.Date().AddDays(-1).Date;

        this.ButtonConfirm = this.Select('.btn-confirm');
        this.ButtonCancel = this.Select('.btn-cancel');
    },
    Methods: function () {
        this.SaveInformation = function () {
            Lure.Button.Lock(this.ButtonConfirm);
            api.Diary_Movings_Add(Diary.CurrentLibraryID, this.State, {
                Then: (r)=>{
                    if (r === -2){
                        return Lure.System.Warn('За этот день данные уже внесены');
                    }
                    if (r < 0){
                        return Lure.System.Error('Ошибка сервера');
                    }
                    Lure.System.ShowSuccess('Сохранено!');
                },
                Catch: ()=>{
                    Lure.System.Error('Ошибка сервера');
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonConfirm);
                }
            });
        };
        this.Cancel = function () {
            for (let x in this.Proto.Data)
                if (this.Proto.Data.hasOwnProperty(x) && x !== 'Empty' && x !== 'DateValue')
                    this.Proto.Data[x] = 0;
            this.Proto.Refresh();
            this.Hide();
        };
        this.BookGivingCalc = function () {
            let s = 0;
            for (let b in this.Proto.Data){
                if (this.Proto.Data.hasOwnProperty(b) && b.indexOf('Book') > -1 && b !== 'BookGiving'){
                    s += this.Proto.Data[b];
                }
            }
            this.Proto.Data.BookGiving = s;
            this.Proto.Refresh();
        };

        this.MoveDay = function (delta) {
            if (delta < 0 && Lure.Date(this.State.DateValue).Day === 1){
                return;
            }
            if (delta > 0 && Lure.Date(this.State.DateValue).Day === Lure.Date(this.State.DateValue).CountDays){
                return;
            }
            this.State.DateValue = Lure.Date(this.State.DateValue).AddDays(delta).Date;
            this.Refresh();
        }
    },
    Refresh: function(){

        debugger
        this.DateLimit = Lure.Date().AddDays(-1).Date;
        console.log(this.DateLimit);
        api.Diary_Movings_Get(Diary.CurrentLibraryID, this.State.DateValue, {
            Then: (m)=>{
                this.Proto.Refresh(m);
                this.BookGivingCalc();
            }
        })
    },
    BeforeShow: function(){
        this.State.DateValue = Diary.CurrentDate;
        this.Refresh();
    },
    AfterBuild: function () {
        this.ButtonConfirm.addEventListener('click', ()=>this.SaveInformation());
        this.ButtonCancel.addEventListener('click', ()=>this.Cancel());
        this.AddEventListener('click', '.l-edit-btn-edit', (e)=>{
                let Property = e.currentTarget.parentElement.parentElement.parentElement.dataset['property'];
                InputBox.Run(
                    e.currentTarget,
                    this.Proto.GetProperty(Property),
                    (v) => {
                        this.Proto.SetProperty(Property, v);
                        this.BookGivingCalc();
                    },
                    {Caption: e.currentTarget.parentElement.children[0].innerText}
                )
            });

        this.Select('.less').addEventListener('click', ()=>this.MoveDay(-1));
        this.Select('.more').addEventListener('click', ()=>this.MoveDay(1));
    }
});