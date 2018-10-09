const InputBox = new Lure.Content({
    Name: 'InputBox',
    Target: 'body',
    Visible: false,
    Route: false,
    Content: `<div class="input-box">
                <div class="inner">
                  <div class="head"><div class="caption">{{Caption}}</div></div>
                  <div class="screen text-screen">
                    <div class="range-block">
                        <div class="range-row">
                            <div class="start-value">От 0</div>
                            <div><input type="range" class="range range-start"></div>
                        </div>
                        <div class="range-row">
                            <div class="end-value">До 0</div>
                            <div><input type="range" class="range range-end"></div>
                        </div>
                    </div>
                    <input class="textbox l-textbox" type="text" value="{{Value}}">
                    <textarea class="textarea l-textarea">{{Value}}</textarea>
                    <textarea class="CKEditor-area" name="CKEditor-area">{{Value}}</textarea>
                    <select class="select l-select"></select>
                    <div class="select-screen">
                    </div>
                  </div>
                  <div class="numpad-inner">
                      <div class="screen">{{Value}}</div>
                      <div class="l-row">
                          <div class="cell btn-clear">ОЧИСТИТЬ</div>
                          <div class="cell btn-remove">УДАЛИТЬ</div>
                      </div>
                      <div class="l-row">
                          <div class="cell digit" data-value="1">1</div>
                          <div class="cell digit" data-value="2">2</div>
                          <div class="cell digit" data-value="3">3</div>
                      </div>
                      <div class="l-row">
                          <div class="cell digit" data-value="4">4</div>
                          <div class="cell digit" data-value="5">5</div>
                          <div class="cell digit" data-value="6">6</div>
                      </div>
                      <div class="l-row">
                          <div class="cell digit" data-value="7">7</div>
                          <div class="cell digit" data-value="8">8</div>
                          <div class="cell digit" data-value="9">9</div>
                      </div>
                      <div class="l-row">
                          <div class="cell digit" data-value="-">-</div>
                          <div class="cell digit" data-value="0">0</div>
                          <div class="cell digit" data-value="+">+</div>
                      </div>
                    </div>
                  
                  <div class="l-row">
                      <div class="cell button button2 btn-cancel">ОТМЕНА</div>
                      <div class="cell button btn-confirm">ОК</div>
                  </div>
                </div>
                
                
                
                
                <div class="wires">
                    <div class="wire wire-1"></div>
                    <div class="wire wire-2"></div>
                    <div class="wire wire-3"></div>
                    <div class="wire4 wire-4"></div> 
                </div>
              </div>`,
    Proto:{
        Caption: '',
        Value: '',

        Width: 0,
        Height: 0,
    },
    Controller: {
        Target: '.select',
        ListElement: `<option value="{{Value}}">{{View}}</option>`,
    },
    Props: function () {
        this.TextBox = this.Select('.textbox');
        this.TextArea = this.Select('.textarea');
        this.InputSelect = this.Select('.select');
        this.InputRange = this.Select('.range-block');
        this.InputRangeStart = this.Select('.range-block .range-start');
        this.InputRangeEnd = this.Select('.range-block .range-end');
        this.CKEditor = this.Select('.CKEditor-area');

        this.InputText = this.Select('.text-screen');
        this.InputNumPad = this.Select('.numpad-inner');

        this._ControlConfirmDelegate = null;
        this._JustShowed = true;

        this.Wires = [
            this.Select('.wire-1'),
            this.Select('.wire-2'),
            this.Select('.wire-3'),
            //this.Select('.wire-4')
        ];
        this._RegexDigit = new RegExp("\\d"); // /\d/

        this._Type = null;

        this.InnerContent = this.Select('.inner');

    },
    Methods: function () {


        this.ShowType = function (type) {
            if (!this.CKEditor)
                this.CKEditor = this.Select('#cke_CKEditor-area');
            this.CKEditor.style.display = 'none';
            switch (type) {
                case 'number':
                    this.InputNumPad.style.display = '';
                    this.InputText.style.display = 'none';
                    this.InputRange.style.display = 'none';
                    break;
                case 'select':
                    this.InputNumPad.style.display = 'none';
                    this.InputRange.style.display = 'none';
                    this.TextBox.style.display = 'none';
                    this.TextArea.style.display = 'none';
                    this.InputSelect.style.display = '';
                    this.InputText.style.display = '';
                    break;
                case 'richtext':
                    this.InputNumPad.style.display = 'none';
                    this.InputRange.style.display = 'none';
                    this.TextBox.style.display = 'none';
                    this.InputSelect.style.display = 'none';
                    this.InputText.style.display = '';
                    this.TextArea.style.display = '';
                    break;
                case 'text':
                    this.InputNumPad.style.display = 'none';

                    this.InputRange.style.display = 'none';
                    this.TextArea.style.display = 'none';
                    this.InputSelect.style.display = 'none';
                    this.TextBox.style.display = '';
                    this.InputText.style.display = '';
                    break;
                case 'range':
                    this.InputNumPad.style.display = 'none';
                    this.TextArea.style.display = 'none';
                    this.InputSelect.style.display = 'none';
                    this.TextBox.style.display = 'none';
                    this.InputRange.style.display = '';
                    break;
                case 'editor':
                    this.InputNumPad.style.display = 'none';
                    this.TextArea.style.display = 'none';
                    this.InputSelect.style.display = 'none';
                    this.TextBox.style.display = 'none';
                    this.InputRange.style.display = 'none';
                    this.CKEditor.style.display = '';
                    break;
            }
        };
        this._RunNumpad = function (Element, CurrentValue, ConfirmDelegate, ExtraOptions = {}) {
            this.ShowType('number');
            this._Type = 'number';
        };
        this._RunSelection = function (Element, CurrentValue, ConfirmDelegate, ExtraOptions) {
            // ExtraOptionsExample = {
            //     Data: [{ID: 1, Name: 'Kekropus'}],
            //     KeyValue: 'ID',
            //     KeyView: 'Name',
            //     TextArea: false,
            // }
            //

            this._Type = 'select';
            this.ShowType('select');

            let KeyValue = ExtraOptions.KeyValue;
            let KeyView = ExtraOptions.KeyView;
            let Data = [];
            for (let i = 0; i < ExtraOptions.Data.length; i++) {
                let Item = ExtraOptions.Data[i];
                if (KeyValue) {
                    Data.push({Value: Item[KeyValue], View: Item[KeyView]})
                } else {
                    Data.push({Value: Item, View: Item})
                }
            }
            this.Controller.Refresh(Data).then(() => this.InputSelect.value = CurrentValue);
        };
        this._RunText = function (Element, CurrentValue, ConfirmDelegate, ExtraOptions) {

            if (ExtraOptions.TextArea || ExtraOptions.Type === 'richtext')
                this._Type = 'richtext';
            else
                this._Type = 'text';

            this.ShowType(this._Type);

        };
        this._RunInterval = function (Element, CurrentValue, ConfirmDelegate, ExtraOptions) {
            this._Type = 'range';
            this.ShowType('range');
            let minValue = 0, maxValue = 100;
            if (ExtraOptions.hasOwnProperty('MinValue')) minValue = ExtraOptions.MinValue;
            if (ExtraOptions.hasOwnProperty('MaxValue')) maxValue = ExtraOptions.MaxValue;
            if (ExtraOptions.hasOwnProperty('Value') && ExtraOptions.Value[0] && ExtraOptions.Value[1]) {
                this.InputRangeStart.value = parseInt(ExtraOptions.Value[0]);
                this.InputRangeEnd.value = parseInt(ExtraOptions.Value[1]);
            } else {
                this.InputRangeStart.value = minValue;
                this.InputRangeEnd.value = maxValue;
            }

            this.InputRangeStart.min = minValue;
            this.InputRangeStart.max = maxValue;
            this.InputRangeEnd.min = minValue;
            this.InputRangeEnd.max = maxValue;

            let RStart = this.Select('.range-block .start-value');
            let REnd = this.Select('.range-block .end-value');
            RStart.innerText = "От " + this.InputRangeStart.value;
            REnd.innerText = "До " + this.InputRangeEnd.value;

            this.InputRangeStart.oninput = e => {
                let a = parseInt(this.InputRangeStart.value),
                    b = parseInt(this.InputRangeEnd.value);
                if (a >= b) this.InputRangeEnd.value = this.InputRangeStart.value;
                RStart.innerText = "От " + a;
                REnd.innerText = "До " + this.InputRangeEnd.value;
            };
            this.InputRangeEnd.oninput = e => {
                let a = parseInt(this.InputRangeStart.value),
                    b = parseInt(this.InputRangeEnd.value);
                if (b <= a) this.InputRangeStart.value = this.InputRangeEnd.value;
                RStart.innerText = "От " + this.InputRangeStart.value;
                REnd.innerText = "До " + b;
            };

        };
        let ck = false;
        this._RunEditor = function (Element, CurrentValue, ConfirmDelegate, ExtraOptions) {
            this._Type = 'editor';
            this.ShowType('editor');
            if (!ck) {
                CKEDITOR.replace('CKEditor-area');
                this.CKEditor = null;
                ck = true;
            }
            CKEDITOR.instances["CKEditor-area"].setData(CurrentValue);
        };
        this.Run = function (Element, CurrentValue, ConfirmDelegate, ExtraOptions = {}) {
            ExtraOptions.CustomWidth = ExtraOptions.CustomWidth ? ExtraOptions.CustomWidth : 124;
            ExtraOptions.Type = ExtraOptions.Type !== void 0 ? ExtraOptions.Type : 'auto';
            this.State.Caption = (ExtraOptions.Caption !== void 0 && ExtraOptions.Caption !== null) ? ExtraOptions.Caption : '';

            if (ExtraOptions.Type === 'range')
                ExtraOptions.CustomWidth = 210;
            this.TextArea.style.minHeight = ExtraOptions.CustomHeight + 'px';
            //this.TextArea.style.width = ExtraOptions.CustomWidth + 'px';
            //this.Content.style.width = ExtraOptions.CustomWidth + 'px';


            this.Content.style.width = ExtraOptions.CustomWidth + 'px';

            // if (ExtraOptions.Type === 'range' || this._Type === 'richtext') {
            //     if (!ExtraOptions.CustomWidth)
            //         this.Content.style.width = '210px';
            //     else
            //         this.Content.style.width = ExtraOptions.CustomWidth + 'px';
            // } else if (ExtraOptions.Type === 'editor') {
            //     this.Content.style.width = '550px';
            //     // this.CKEditor.style.minWidth = '550px';
            //     // this.CKEditor.style.minHeight = '550px';
            // } else this.Content.style.width = '';



            if (ExtraOptions.Type === 'range') {
                this._RunInterval(Element, CurrentValue, ConfirmDelegate, ExtraOptions);
            } else if (ExtraOptions.Data) {
                this._RunSelection(Element, CurrentValue, ConfirmDelegate, ExtraOptions);
            } else if (ExtraOptions.Type === 'number' || (ExtraOptions.Type === 'auto' && Lure.isNumeric(CurrentValue))) {
                this._RunNumpad(Element, CurrentValue, ConfirmDelegate, ExtraOptions);
            } else if (ExtraOptions.Type === 'editor') {
                this._RunEditor(Element, CurrentValue, ConfirmDelegate, ExtraOptions)
            } else {
                this._RunText(Element, CurrentValue, ConfirmDelegate, ExtraOptions);
            }

            this._ControlConfirmDelegate = ConfirmDelegate;
            this.TextBox.value = CurrentValue;
            this.TextArea.value = CurrentValue;
            this.Proto.Data.Value = CurrentValue;
            this.Proto.Refresh();
            if (this.Element)
                this.Element.classList.remove('numpad-edit');
            this.Element = Element;
            this.Element.classList.add('numpad-edit');
            this.HideWires();
            this.Show();
            this.SetPos(Element);
        };

        this.HideWires = function () {
            for (let i = 0; i < this.Wires.length; i++){
                this.Wires[i].style.display = 'none';
            }
        };
        this.ShowWires = function () {
            for (let i = 0; i < this.Wires.length; i++){
                this.Wires[i].style.display = '';
            }
        };
        this.SetPos = function(Element){
            let BodyRect = document.body.getBoundingClientRect();
            let ElemRect = Element.getBoundingClientRect();

            let OffsetTop =  ElemRect.top + ElemRect.height + 5;
            let OffsetLeft = ElemRect.left + ElemRect.width + 5;

            let MaxLeft = BodyRect.width - 130;
            let MaxTop = BodyRect.height - 230 - ElemRect.height;
            if (OffsetLeft > MaxLeft){
                OffsetLeft = ElemRect.left - 130;
            }
            if (OffsetTop > MaxTop){
                OffsetTop = ElemRect.top - 230;
            }
            this.Positions = {
                ElemRect: ElemRect,
                OffsetLeft: OffsetLeft,
                OffsetTop: OffsetTop,
            };
            this.Content.style.left = OffsetLeft + 'px';
            this.Content.style.top = OffsetTop + 'px';
            //console.log(`w: ${this.State.Width}, h: ${this.State.Height}, ew:${ElemRect.width}, eh:${ElemRect.height}, MaxLeft: ${MaxLeft}, MaxTop:${MaxTop}`)
        };
        this.SetWires = function () {
            if (!this.Element.classList.contains('tcell')) //wire
                return;

            let P = this.Positions;
            let Rect = this.Content.getBoundingClientRect();
            P.OffsetTop = Rect.top;
            P.OffsetLeft = Rect.left;
            let WireOffsetTop  = [
                P.OffsetTop > P.ElemRect.top ? -2 : 2,
                P.OffsetTop > P.ElemRect.top ? -2 : 2,
                P.OffsetTop > P.ElemRect.top ? -P.ElemRect.height:P.ElemRect.height-2,
                P.OffsetTop > P.ElemRect.top ? -P.ElemRect.height:P.ElemRect.height,
            ];
            let WireOffsetLeft = [
                P.OffsetLeft > P.ElemRect.left ? -2 : 2,
                P.OffsetLeft > P.ElemRect.left ? -P.ElemRect.width:P.ElemRect.width-2,
                P.OffsetLeft > P.ElemRect.left ? -2 : 2,
                P.OffsetLeft > P.ElemRect.left ? -P.ElemRect.width:P.ElemRect.width,
            ];

            for (let i = 0; i < this.Wires.length; i++){
                let Dot = {
                    Start: {
                        Top:  (P.OffsetTop  > P.ElemRect.top ? 0 : P.Height -2),
                        Left: (P.OffsetLeft > P.ElemRect.left? 0 : P.Width -2),
                    },
                    End: {
                        Top:  WireOffsetTop[i] + (P.OffsetTop  > P.ElemRect.top ? (P.ElemRect.top +P.ElemRect.height-P.OffsetTop) : (P.ElemRect.top-P.OffsetTop)  ),
                        Left: WireOffsetLeft[i]+ (P.OffsetLeft> P.ElemRect.left? (P.ElemRect.left+P.ElemRect.width -P.OffsetLeft): (P.ElemRect.left-P.OffsetLeft) ),
                    }
                };
                //1st
                let Width1 = Math.sqrt( Math.pow( (Dot.Start.Top-Dot.End.Top), 2) + Math.pow( (Dot.Start.Left-Dot.End.Left), 2)  );

                let k = (Dot.Start.Top - Dot.End.Top) / (Dot.Start.Left - Dot.End.Left);
                let angle = Math.atan(k);
                let angleDeg = angle * 180/ Math.PI;
                if (angle < 0)
                {
                    angleDeg = 180+ angleDeg;
                }
                //if input under output
                if (Dot.Start.Top - Dot.End.Top > 0)
                {
                    angleDeg = 180+ angleDeg;
                }
                //in same line bug fix
                if (Dot.Start.Top - Dot.End.Top === 0 && Dot.Start.Left > Dot.End.Left)
                {
                    angleDeg = 180+ angleDeg;
                }
                this.Wires[i].style.left = Dot.Start.Left + 'px';
                this.Wires[i].style.top  = Dot.Start.Top  + 'px';
                this.Wires[i].style.width = Width1  + 'px';
                this.Wires[i].style.transform = `rotate(${angleDeg}deg)`;
                this.Wires[i].style.display = '';
            }

        };
        this.Confirm = function () {
            let val = this.Proto.Data.Value;
            if (this._Type === 'number')
                val = parseInt(val);
            if (this._Type === 'range')
                val = [parseInt(this.InputRangeStart.value), parseInt(this.InputRangeEnd.value)];
            if (this._Type === 'editor')
                val = CKEDITOR.instances["CKEditor-area"].getData();
            this._ControlConfirmDelegate(val);
            this._JustShowed = true;
            this.Hide();
        };
        this.Cancel = function () {
            this._JustShowed = true;
            this.Hide();
        };

        this.AddDigit = function (v) {

            if (v === '-'){
                if (this.Proto.Data.Value === '' || this.Proto.Data.Value <= 1)
                    this.Proto.Data.Value = "0";
                else
                    this.Proto.Data.Value = parseInt(this.Proto.Data.Value) - 1 + '';
            }
            else if (v === '+'){
                if (this.Proto.Data.Value === '')
                {
                    this.Proto.Data.Value = "1";
                }
                else
                {
                    let val = parseInt(this.Proto.Data.Value) + 1;
                    if (val > 99999999)
                        return;
                    this.Proto.Data.Value = val + '';
                }
            }
            else {
                if (this.Proto.Data.Value.length > 7)
                    return;
                if (this._JustShowed){
                    this.Proto.Data.Value = "0";
                    this._JustShowed = false;
                }
                this.Proto.Data.Value = this.Proto.Data.Value + v;
            }
            this.Proto.Data.Value = this.Proto.Data.Value.replace(/^([0]+)[\d]*$/, function (m,zeros) {
                m = m.substring(zeros.length, m.length);
                return m==='' ? "0": m;
            });
            this.Proto.Refresh();
        };

    },
    Show: function () {
        if (this._Type === 'text'){
            this.TextBox.focus();
            this.TextBox.select();
        }
        else if (this._Type === 'richtext'){
            this.TextArea.focus();
            this.TextArea.select();

        }
        else if (this._Type === 'select'){
            let OptionDefault = Lure.Select(`[value="${this.Proto.Data.Value}"]`,InputBox.InputSelect);
            if (OptionDefault)
                OptionDefault.selected = true;
        }

        this.Positions.Height = this.Content.offsetHeight;
        this.Positions.Width  = this.Content.offsetWidth;
        this.SetWires();
    },
    Hide: function () {
        if (this.Element)
            this.Element.classList.remove('numpad-edit');

    },
    AfterBuild: function () {
        this.Draggable = Lure.Draggable(this.Select('.head'), this.Content, {OnMove: this.SetWires, Containment: [0, 0, 'auto', 'auto']});

        let Rect = this.Content.getBoundingClientRect();
        this.State.Width  = Rect.width;
        this.State.Height = Rect.height;


        this.Select('.btn-confirm').onclick = ()=>{this.Confirm();};
        this.Select('.btn-cancel').onclick = ()=>{this.Cancel();};


        this.InputSelect.addEventListener('change', (e)=>{
            this.Proto.Data.Value = e.currentTarget.value;
        });
        this.TextBox.addEventListener('keyup', (e)=>{
            this.Proto.Data.Value = e.currentTarget.value;
            if (this.isActive && e.keyCode === 13){
                this.Confirm();
            }
        });
        this.TextArea.addEventListener('keyup', (e)=>{
            this.Proto.Data.Value = e.currentTarget.value;
        });

        this.AddEventListener('click', '.digit', function (e) {
            let v = e.currentTarget.dataset['value'];
            this.AddDigit(v);
        });
        this.Select('.btn-clear').onclick = ()=>{
            this.Proto.Data.Value = '';
            this.Proto.Refresh();
        };
        this.Select('.btn-remove').onclick = ()=>{
            this.Proto.Data.Value = this.Proto.Data.Value.substring(0, this.Proto.Data.Value.length-1);
            this.Proto.Refresh();
        };

        document.addEventListener('keyup', (e)=>{
            //numpad open and pressed 0-9
            //if (this.isActive && (e.keyCode >= 48 && e.keyCode <= 57){
            if (this.isActive && this._Type==='number' && this._RegexDigit.test(e.key) ){
                this.AddDigit(e.key);
            }
            else if (this.isActive && e.keyCode === 13){
                this.Confirm();
            }
        })
    }
});

window.InputBox = InputBox;
module.exports = InputBox;