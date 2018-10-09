const InputBox = require("../../../_common/input-box/input-box");

const ForbiddenToEditCols = ['P1V21','P1V22','P1V23','P1V24','P1V25','P1V26','P1V27','P1V28','P1V29','P1V30','P1V31','P1V32','P1V33','P1V34','P1V35','P1V36'];
Diary.Summary.LineEditor = new Lure.Content({
    Parent: Diary.Summary,
    Type: 'side-abs-content',
    //Visible: true,
    Route: false,
    Content: `<div class="line-editor l-col">
                  <div class="head">
                    <h2 class="h2">Редактирование данных за день</h2>
                    <div class="date-shifter l-row l-flex-center l-flexa-center">
                        <div class="date-shift-control left"></div> 
                        <div class="date-shift-value">{{DateSelected}}</div>
                        <div class="date-shift-control right"></div>
                    </div>
                  </div>
                  <div class="list"></div>
                  <div class="foot l-row l-flex-center">
                    <div class="errors abs">{{Errors}}</div>
                    <button class="btn-clear {{#if (this.Changes && this.Changes.length #more 0)? '':'none'}}" title="Очистить"></button>

                    <button class="l-button button button2 btn-cancel">ОТМЕНА</button>
                    <button class="l-button button btn-confirm">СОХРАНИТЬ</button>
                  </div>
              </div>`,
    Animation: {
        Show: 'animation-show',
        Hide: 'animation-hide',
    },
    State: {
        DateSelected: Lure.Date().Format('DD.MM.YYYY'),
        Errors: '',
        DataLine: null,
    },
    Controller: {
        Target: '.list',
        ListElement: `<div class="line-item l-row l-flex-between {{State}}"> 
                        <div class="name l-text-overflow" title="{{Name}}">{{Name}}</div>
                        <div class="value rel">
                            {{#if $this.Description}}
                            <div class="hint" data-hint="{{Description}}">f</div>
                            {{#endif}}
                            <div class="value-value {{#if (o.isEditable) ? 'numpadable':''}}">{{Value}}</div>
                        </div>
                      </div>`
    },
    Props: function () {
        this._Failed = []; //list of invalid props
        this._DataItem = null;
        this.Changes = [];

        this.ButtonConfirm = this.Select('.btn-confirm');
    },
    Methods: function () {
        this.Prepare = function (LineID) {
            this.State.Errors = [];
            this.Changes      = [];
            this.Proto.Data.LineID   = LineID;
            this.Proto.Data.DataLine = Lure.Object.Clone(Diary.Summary.CurrentPart.Controller.GetDataItemByLineID(LineID).Data);
            let DataLine = this.Proto.Data.DataLine;
            let List = [];
            for (let k in DataLine){
                if (DataLine.hasOwnProperty(k) && Diary.Summary._KeyRegex.test(k) ){
                    let D = DataLine[k].D;
                    D.GetValue = Diary.Summary.D[k].GetValue;
                    D.Check    = Diary.Summary.D[k].Check;
                    let ListElem = {
                        _Value: DataLine[k].Value,
                        Value: DataLine[k].Value,
                        State: '',
                        D: D,
                        Prop: k,
                        Name: k.replace('P', '').replace('V', '.') + " " + D.Name,
                        Description: D.Description,
                        //DataValue: DataLine[k].Value,
                        isEditable: D.GetValue === null && (ForbiddenToEditCols.indexOf(k) < 0),
                    };
                    List.push(ListElem)
                }
            }
            List = List.sort((a,b)=>{
                a = a.Name.match(/[\d]+.[\d]+/)[0].split('.');
                b = b.Name.match(/[\d]+.[\d]+/)[0].split('.');
                let PA = parseInt(a[0]);
                let PB = parseInt(b[0]);
                let VA = parseInt(a[1]);
                let VB = parseInt(b[1]);


                if (PA > PB)
                    return 1;
                if (PA < PB)
                    return -1;

                if (VA > VB)
                    return 1;
                if (VA < VB)
                    return -1;
                return 0;
            });
            this.Controller.Data = List;
            this.Controller.Refresh();
            this.Proto.SetProperty('DateSelected', Lure.Date(this.Proto.Data.DataLine.DateValue).Format('DD.MM.YYYY') );
        };
        this.Check = function () {
            let DataItems = this.Controller.DataItems;
            let Failed = [];
            this.State.Errors = '';
            for (let i = 0; i < DataItems.length; i++){
                //DataItems[i].DOM.classList.remove('invalid');
                let Line = DataItems[i].Data;
                let k = Line.Prop;
                Line.State = '';
                Line.Value = !Line.D.GetValue ? Line.Value : Line.D.GetValue(this.State.DataLine);
                this.State.DataLine[Line.Prop].Value = Line.Value;
                let isChanged = Line.Value !== Line._Value;

                if (isChanged){
                    Line.State = 'changed';
                    if (this.Changes.indexOf(k) < 0)
                        this.Changes.push(k);

                    this.Controller.Refresh(DataItems[i].LineID);
                }
                else if (!isChanged && this.Changes.indexOf(k) > -1){
                    Lure.Array.Remove(this.Changes, x=>x===k);
                }

                if (Line.D.Check){
                    if (!Line.D.Check(this.State.DataLine)){
                        Line.State = 'invalid';
                        Failed.push(Line.Prop.replace('P', '').replace('V', '.'));
                    }
                }
                // if (isChanged){
                //     this.Controller.Refresh(DataItems[i].LineID);
                // }

            }
            this.Controller.Refresh();
            this.State.Errors = Failed.length < 1 ? '': `Ошибки в полях: ${Failed.join(', ')}`;
            this.Proto.Refresh();
        };
        this.NumPadConfirm = function (Val, DataItem) {
            Val = parseInt(Val);
            DataItem.Data.Value = Val;
            this.State.DataLine[DataItem.Data.Prop].Value = Val;
            this.Check();
            //console.log(DataItem.LineID, this.Changes);
        };
        this.LineShift = function (delta) {
            this.State.Errors = [];
            this.Changes      = [];
            let DataItem = Lure.Object.Clone(Diary.Summary.CurrentPart.Controller.GetPrivateDataItemByLineID(this.State.LineID + delta));
            if ((this.State.LineID < 1 && delta < 0) || DataItem === null){
                console.log('limit');
                return;
            }
            this.State.LineID = this.State.LineID + delta;
            this.Prepare(this.State.LineID);
            this.Check();
        };
        this.Cancel = function () {
            this.Hide();
        };
        this.Clear = function () {
            this.Prepare(this.State.LineID);
        };
        this.Confirm = function () {
            if (this.Changes.length < 1){
                return Lure.System.ShowNotice('Нет изменений для сохранения');
            }
            let CurrentPart = Diary.Summary.CurrentPart;
            let DataReal = CurrentPart.Controller.GetDataItemByLineID(this.State.LineID).Data;

            let Changed = [];
            for (let i = 0; i < this.Changes.length; i++){
                let k = this.Changes[i];
                if (Diary.Summary.D[k].GetValue !== null){
                    continue;
                }
                Changed.push({
                    Name: k,
                    Value: this.State.DataLine[this.Changes[i]].Value
                });
            }
            console.info(this.Changes, Changed);
            let Changing = [{
                DateValue: Lure.Date(this.State.DataLine.DateValue).DateCs,
                Changed: Changed,
            }];
            Lure.Button.Lock(this.ButtonConfirm);
            api.Diary_Summary_Set(Diary.CurrentLibraryID, Changing, [], [], {
                Then: (x)=>{
                    if (x > 0){
                        for (let i = 0; i < this.Changes.length; i++){
                            let k = this.Changes[i];
                            DataReal[k].Value  = this.State.DataLine[k].Value;
                            DataReal[k]._Value = this.State.DataLine[k].Value;
                        }
                        CurrentPart.Controller.Refresh();
                        Lure.System.ShowSuccess('Изменения сохранены');
                        this.Changes = [];
                        this.Hide();
                    }
                    else{
                        return Lure.System.ShowError('Не удалось сохранить.');
                    }
                },
                Catch: ()=>{
                    //Lure.System.ShowNotice('Ошибка сервера');
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonConfirm);
                }
            });


        }
    },
    BeforeShow: function (LineID) {
        InputBox.Hide();
        LineID = parseInt(LineID);
        this.Prepare(LineID);
        //this.Check();
    },
    AfterBuild: function () {
        this.AddEventListener('click', '.line-item .value', function (e, p) {
            let DataItem = this.Controller.GetDataItemByLineID(p.LineID);
            if (DataItem.Data.D.GetValue)
                return;
            InputBox.Run(e.currentTarget, DataItem.Data.Value, (v)=>{
                this.NumPadConfirm(v, DataItem);
            });
        });
        this.Select('.date-shift-control.left').onclick = ()=>{this.LineShift(-1)};
        this.Select('.date-shift-control.right').onclick = ()=>{this.LineShift(1)};
        this.ButtonConfirm.onclick = ()=>{
            if (this.State.Errors.length > 0)
                return Lure.System.ShowWarn('Устраните ошибки валидации.');
            this.Confirm();
        };
        this.Select('.btn-cancel').onclick = ()=>{
            this.Cancel();
        };
        this.Select('.btn-clear').onclick = ()=>{
            this.Clear();
        };
    }
});





/*

(()=>{
    let x = '';
    for (let i = 2; i < 37; i++){
        x += `p1.Value_${i} as P1_Value_${i},
`;
    }
    console.log(x);
})();

*/





