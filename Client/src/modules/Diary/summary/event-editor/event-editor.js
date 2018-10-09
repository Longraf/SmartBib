const InputBox = require("../../../_common/input-box/input-box");
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
        ListElement: `<div class="line-item l-row l-flex-between"> 
                        <div class="name l-text-overflow" title="{{Name}}">{{Name}}</div>
                        <div class="value rel">
                            {{#if $this.Description}}
                            <div class="hint" data-hint="{{Description}}">f</div>
                            {{#endif}}
                            <div class="value-value {{#if (o.isEditable) ? 'numpadable':''}}">{{DataValue}}</div>
                        </div>
                      </div>`
    },
    Props: function () {
        this._Failed = []; //list of invalid props (ex.: P1V4)

        this._DataItem = null;
    },
    Methods: function () {
        this.Prepare = function (LineID) {
            this.State.Errors = [];
            this.Changes      = [];
            this.Proto.Data.LineID   = LineID;
            this.Proto.Data.DataLine = Lure.Object.Clone(Diary.Summary.CurrentPart.Controller.GetDataItemByLineID(LineID).Data);
            let List = [];
            for (let k in Diary.Summary.D){
                if (Diary.Summary.D.hasOwnProperty(k)){
                    let DElem = Diary.Summary.D[k];
                    let ListElem = {
                        Name: k.replace('P', '').replace('V', '.') + " " + DElem.Name,
                        Description: Diary.Summary.D[k].Description,
                        Prop: k,
                        DataValue: this.Proto.Data.DataLine[k],
                        isEditable: Diary.Summary.D[k].GetValue === null,
                    };
                    List.push(ListElem)
                }
            }
            this.Controller.Data = List;
            this.Controller.Refresh();
            this.Proto.SetProperty('DateSelected', Lure.Date(this.Proto.Data.DataLine.DateValue).Format('DD.MM.YYYY') );
        };
        this.Check = function () {
            let DataItems = this.Controller.DataItems;
            let Failed = [];
            this.State.Errors = '';
            for (let i = 0; i < DataItems.length; i++){
                DataItems[i].DOM.classList.remove('invalid');
                let Line = DataItems[i].Data;
                if (Diary.Summary.D[Line.Prop].GetValue !== null){
                    let NewValue = Diary.Summary.D[Line.Prop].GetValue(this.State.DataLine);
                    if (Line.DataValue !== NewValue)
                    {
                        Line.DataValue = NewValue;
                        this.State.DataLine[Line.Prop] = NewValue;
                        if (this.Changes.indexOf(Line.Prop) < 0)
                        {
                            DataItems[i].DOM.classList.add('changed');
                            this.Changes.push(Line.Prop);
                        }
                        this.Controller.Refresh(DataItems[i].LineID);
                    }
                }
                else if (Diary.Summary.D[Line.Prop].GetValue === null && !Diary.Summary.D[Line.Prop].Check(this.State.DataLine)){
                    DataItems[i].DOM.classList.add('invalid');
                    console.log(`invalid ${Line.Prop}`);
                    Failed.push(Line.Prop.replace('P', '').replace('V', '.'));
                }
            }
            this.State.Errors = Failed.length < 1 ? '': `Ошибки в полях: ${Failed.join(', ')}`;
            this.Proto.Refresh();
        };
        this.NumPadConfirm = function (Val, DataItem) {
            Val = parseInt(Val);
            if (DataItem.Data.DataValue !== Val && this.Changes.indexOf(DataItem.Data.Prop) < 0)
            {
                this.Changes.push(DataItem.Data.Prop);
                DataItem.DOM.classList.add('changed');
            }
            DataItem.Data.DataValue = Val;
            this.State.DataLine[DataItem.Data.Prop] = Val;
            this.Check();
            this.Controller.Refresh(DataItem.LineID);
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
        this.Confirm = function () {
            if (this.Changes.length < 1){
                return Lure.System.ShowNotice('Nothing has been changed');
            }
            let DataReal = Diary.Summary.CurrentPart.Controller.GetDataItemByLineID(this.State.LineID).Data;

            let D = [];
            for (let i = 0; i < this.Changes.length; i++){
                DataReal[this.Changes[i]] = this.State.DataLine[this.Changes[i]];
                if (Diary.Summary.D[this.Changes[i]].GetValue !== null){
                    continue;
                }
                D.push({
                    Name: this.Changes[i],
                    Value: this.State.DataLine[this.Changes[i]]
                });
            }
            console.info(this.Changes, D);
            api.Diary_Summary_Set(Diary.CurrentLibraryID, this.State.DataLine.DateValue, D, {
                Then: (x)=>{
                    if (x > 0){
                        Diary.Summary.CurrentPart.Controller.Refresh();
                        Lure.System.ShowSuccess('Изменения сохранены');
                        this.Hide();
                    }
                    else{
                        return Lure.System.ShowError('Не удалось сохранить.');
                    }
                },
                Catch: ()=>{
                    Lure.System.ShowNotice('Ошибка сервера');
                },
                Finally: ()=>{

                }
            });


        }
    },
    BeforeShow: function (LineID) {
        InputBox.Hide();
        LineID = parseInt(LineID);
        this.Prepare(LineID);
        this.Check();
    },
    AfterBuild: function () {
        this.AddEventListener('click', '.line-item .value', function (e, p) {
            let Item = this.Controller.GetDataItemByLineID(p.LineID);
            if (Diary.Summary.D[Item.Data.Prop].GetValue)
                return;
            InputBox.Run(e.currentTarget, Item.Data.DataValue, (v)=>{
                this.NumPadConfirm(v, Item);
            });
        });
        this.Select('.date-shift-control.left').onclick = ()=>{this.LineShift(-1)};
        this.Select('.date-shift-control.right').onclick = ()=>{this.LineShift(1)};
        this.Select('.btn-confirm').onclick = ()=>{
            if (this.State.Errors.length > 0)
                return Lure.System.ShowWarn('Устраните ошибки валидации.');
            this.Confirm();
        };
        this.Select('.btn-cancel').onclick = ()=>{
            this.Cancel();
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





