const D = require('../../../_common/dictionary');

Meter.MeterIncoming.MeterValueInput = new Lure.Content({
    Parent: Meter.MeterIncoming,
    Name: 'MeterValueInput',
    Route: false,
    Permission: {
        Roles: [D.Role.Meter]
    },
    Dialog: {

    },
    Content: `<div class="meter-value-input meter-content l-col dialog">
                <div class="head">Показания счетчика на {{DateValue}}</div> 
                <div class="close l-close"></div>
                <div class="inner-content">
                    <div class="line l-row">
                        <div class="caption">Показания</div>
                        <div class="value"><input class="textbox l-textbox tbx-value" type="number"  min="0" value="{{Value}}"></div>
                    </div>
                    <div class="line l-row">
                        <div class="caption">Прикрепить файл</div>
                        <div class="value"><input class="input-file" type="file"></div>
                    </div>
                    <div class="button-holder l-row l-flex-center">
                        <button class="button l-button btn-commit">Отправить</button>
                    </div>
                </div>
              </div>`,
    Load: '',
    State: {
        Value: 0,
        DateValue: 0,
        File: null
    },
    PropFormat:{
        DateValue: (d)=>Lure.Date(d).Format('MMMM YYYY'),
    },

    Props: function () {
        this.TextboxValue = this.Select('.tbx-value');
        this.ButtonCommit = this.Select('.btn-commit');
        this.FilePicker = this.Select('.input-file');
    },
    Methods: function () {
        this.Run = function (DataItem, j, target) {
            this._DataItem = DataItem;
            this._j = j;
            this._Target = target;
            this.Proto.Refresh(DataItem.Data.Values[j]);
            this.Show();
        };
        this.SetValue = async function () {
            let Value = parseInt(this.TextboxValue.value);
            if (Value <= 0 || isNaN(Value)){
                return Lure.System.Warn('Введите показание счетчика');
            }
            Lure.Button.Lock(this.ButtonCommit);
            let ResID = await api.Meter_AddValue(this._DataItem.Data.LibraryID, this._DataItem.Data.ID, this.State.DateValue, Value, {});
            let FileID = -1;
            if (ResID > 0 && this.FilePicker.files.length > 0){
                FileID = await api.Meter_AddFile(this.FilePicker.files[0], {LibraryMeterID: this._DataItem.Data.ID});
            }
            this._DataItem.Data.Values[this._j].Value = Value;
            this._DataItem.Chart.Options.Series[0].Data[this._j] = Value;
            this._DataItem.Chart.Refresh({Animation:false});
            Meter.MeterIncoming.Controller.Refresh(this._DataItem.LineID);
            this.Hide();
            Lure.Button.Release(this.ButtonCommit);

        }
    },
    BeforeHide: function(){
        this._Target.classList.remove('active');
    },
    AfterBuild: function () {
        this.ButtonCommit.addEventListener('click', ()=>this.SetValue());
    },

});

module.exports = Meter.MeterValueInput;

