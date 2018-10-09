module.exports = function (
    {
        Control = null,
        target = '',
        Key = 'Key',
        Value = 'Value',
        CheckKey = 'Check',
        Data = () => ([]),
        onOK = () => {},
        right = '',
        checked = 'checked', // '' - ничего не выбрано, 'checked' - все выбрано, 'key' - по ключу
        AllSelector = true,
        UpdateListLive = false
    } = {} ) {
    let AllSelectorText = `<label><input type="checkbox" class="all-check" ${checked}>Все</label>`;
    if (!AllSelector)
        AllSelectorText = '';
    else AllSelector = true;

    return new Lure.Content({
        Target: target,
        Type: 'select-filter',
        Content:
            `<div class="filter-selector ${right}">
                ${AllSelectorText}
                <div class="wrap">
                {{#each ItemList}}
                    <label><input type="checkbox" value="{{${Key}}}" class="item-check" ${checked === 'checked' ? 'checked' : ''} {{CheckKey}}>{{${Value}}}</label>
                {{#endeach}}
                </div> 
                <button class="l-button button ok-button">OK</button>
            </div>`,
        Show: function () {
            if (!this.Proto.Data.ItemList || UpdateListLive)
                this.Proto.SetProperty('ItemList', (typeof Data === 'function' ? Data() : Data));
        },
        Hide: function () {
            this.needUpdate = true;
        },
        Proto: {ItemList: null},
        PropFormat: {
            CheckKey: (x, p) => checked === 'key' && p[CheckKey] ? 'checked' : ''
        },
        Props: function () {
            // this.needUpdate = true;
        },
        Methods: function () {
            this.ResetSelection = function () {
                for (let elem of Array.prototype.slice.call(Lure.SelectAll('.wrap input', this.Content)))
                    elem.checked = false;
            }
        },
        AfterBuild: function () {
            if (Control) Control.addEventListener('click', e => this.Show());
            this.AddEventListener('click', '.ok-button', () => {
                // console.log(a);
                onOK(Array.prototype.map.call(Lure.SelectAll('.wrap input:checked', this.Content), x => x.value));
                this.Hide();
            });
            if (AllSelector) {
                this.AddEventListener('change', '.wrap input', e => this.Select('.all-check').checked = false);
                this.AddEventListener('change', '.all-check', e => {
                    for (let elem of Array.prototype.slice.call(Lure.SelectAll('.wrap input', this.Content)))
                        elem.checked = e.currentTarget.checked;
                });
            }
            document.addEventListener('click', e => {
                if (e.target !== this.Content && e.target !== Control && e.target !== target &&  e.target.offsetParent !== this.Content) {
                    // console.log(e.target, e.target.offsetParent === this.Content);
                    this.Hide();
                    e.stopPropagation();
                }
            });
        }
    });
};
