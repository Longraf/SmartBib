const NumPad = new Lure.Content({
    Name: 'NumPad',
    Target: 'body',
    Visible: false,
    Route: false,
    Content: `<div class="numpad">
                <div class="numpad-inner">
                  <div class="head"><div class="caption">{{Caption}}</div></div>
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
    Props: function () {

        this._ControlConfirmDelegate = null;
        this._JustShowed = true;

        this.Wires = [
            this.Select('.wire-1'),
            this.Select('.wire-2'),
            this.Select('.wire-3'),
            //this.Select('.wire-4')
        ];
        this._RegexDigit = new RegExp("\\d"); // /\d/
    },
    Methods: function () {
        this.Run = function (Element, CurrentValue, ConfirmDelegate, ExtraOptions={}) {
            this.State.Caption = '';
            if (ExtraOptions.Caption)
                this.State.Caption = ExtraOptions.Caption;
            InputBox.Hide();
            this._ControlConfirmDelegate = ConfirmDelegate;
            this.Proto.SetProperty('Value', CurrentValue);
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
            if (!this.Element.classList.contains('tcell'))
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


            let Dots = [];
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
                //console.log(P, Dot);
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
            this._ControlConfirmDelegate(parseInt(this.Proto.Data.Value));
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
        this.Positions.Height = this.Content.offsetHeight;
        this.Positions.Width  = this.Content.offsetWidth;
        this.SetWires();
    },
    Hide: function () {
        if (this.Element)
            this.Element.classList.remove('numpad-edit');

    },
    AfterBuild: function () {
        this.Draggable = Lure.Draggable(this.Select('.head'), this.Content, {OnMove: this.SetWires});

        let Rect = this.Content.getBoundingClientRect();
        this.State.Width  = Rect.width;
        this.State.Height = Rect.height;
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

        this.Select('.btn-confirm').onclick = ()=>{this.Confirm();};
        this.Select('.btn-cancel').onclick = ()=>{this.Cancel();};
        /*document.addEventListener('click', (e)=>{
            if (!e.target.classList.contains('.numpad-edit') || !e.target.closest('.numpad'))
                this.Hide();
        })*/

        document.addEventListener('keyup', (e)=>{
            //numpad open and pressed 0-9
            //if (this.isActive && (e.keyCode >= 48 && e.keyCode <= 57){
            if (this.isActive && this._RegexDigit.test(e.key) ){
                this.AddDigit(e.key);
            }
            else if (this.isActive && e.keyCode === 13){
                this.Confirm();
            }
        })
    }
});

module.exports = NumPad;