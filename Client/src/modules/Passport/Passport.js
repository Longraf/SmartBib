let EmptyLibraryInfo = require('./defaultData/defaultJSON.js');
let RussianPassportFields = require('./defaultData/russianFields.js');

let Passport = new Lure.Content({
    Name: 'Passport',
    Target: '.body',
    Type: 'content',
    Control:{
        Target: '#nav-passport'
    },
    Permission: {
        Roles: [Dictionary.Role.Passport],
        Write: [Dictionary.Role.PassportEdit]
    },
    Content:
        `<div class="passport content">
            <div class="diary-bread l-row passport-header">
                <div class="li">
                    Подразделение: 
                    <select class="l-select select passport-lib lib-list"></select>
                </div>
                <div class="li"><button class="save-button l-button none">Сохранить</button></div>
            </div>
            <div class="passport-data">
                <div></div>
                <h1 style="color: red;">Данные по состоянию на 2015 год</h1>
                <h1>Паспорт учреждения</h1>
                <div class="library-name strong editable">{{LibraryName}}</div>
                <div class="passport-data-tables"></div>
            </div>
        </div>`,
    Proto: {
        LibraryName: ''
    },
    Controller: {
        Target: '.passport-data-tables',
        Data: [ ],
        ListElement: `
                <div class="library-info-table">
                    <table class="table-passport">
                        <thead>
                            <tr><th colspan="2" class="table-passport-header strong">{{Name}}</th></tr>
                        </thead>
                        <tbody>
                        {{#each Value}}
                            <tr class="param-row">
                                <td class="views-field param-name strong">{{Name}}</td>
                                <td class="views-field param-value editable">{{Value}}</td>
                            </tr>
                        {{#endeach}}
                        </tbody>
                    </table>
                </div>`
    },/* editable-special - свой обработчик события на клик*/
    PropFormat: {
        Name: function(x) {return RussianPassportFields[x] ? RussianPassportFields[x] : x}
    },
    Props: function () {
        this.SaveButton = this.Select('.save-button');
        this.LibSelect = this.Select('.passport-lib.lib-list');
        this.LibraryID = this.LibSelect.value;
        this.ControllerLibList = new Lure.Controller.Templator({
            Owner: this,
            Target: '.passport-lib.lib-list',
            Data: Lure.User.Cache.LibraryList,
            ListElement: `<option value="{{ID}}">{{Name}}</option>`
        });
    },
    Methods: function () {

        this.PassportObjectToArray = function (passp_JSON) {

            if (Lure.Object.isEmpty(passp_JSON))
                passp_JSON = EmptyLibraryInfo;
            let data = [];
            for (let key in passp_JSON) {
                if (!passp_JSON.hasOwnProperty(key)) continue;
                let item = [];
                if (key === 'Position' && !passp_JSON.Position.CityDistrict) {
                    if (passp_JSON.ReadingHall.CityDistrict) {
                        passp_JSON.Position.CityDistrict = passp_JSON.ReadingHall.CityDistrict;
                        delete passp_JSON.ReadingHall.CityDistrict;
                    } else passp_JSON.Position.CityDistrict = '';
                }
                for (let key2 in passp_JSON[key]) {
                    if (key2 === 'LibraryName')
                        this.Proto.SetProperty('LibraryName', passp_JSON.CommonInfo.LibraryName);
                    if (passp_JSON[key].hasOwnProperty(key2))
                        item.push({Name: key2, Value: passp_JSON[key][key2]});
                }

                data.push({Name: key, Value: item});









            }
            // debugger;
            if (this.Proto.Data.LibraryName === '')
                this.Proto.SetProperty('LibraryName', this.ControllerLibList.Content.selectedOptions[0].innerText);
            return data;
        };
        this.PassportArrayToObject = function (data) {
            let JSON = {};
            for (let item of data) {
                JSON[item.Name] = {};
                for (let item2 of item.Value)
                    JSON[item.Name][item2.Name] = item2.Value;
            }
            return JSON;
        };

        this.OnLibraryChange = function () {
            let ID = parseInt(this.LibSelect.value);
            this.LibraryID = ID;
            this.SaveButton.classList.add('none');
            api.Passport_Get(ID, {})
                .then(JSON.parse)
                .then(result => this.Controller.Refresh(this.PassportObjectToArray(result)))
                .catch(error => {
                    console.log(' ');
                    console.error('ERROR', error);
                    console.log(' ');
                    Lure.System.ShowError("Произошла ошибка при получении данных!");
                });
        };
        this.OnClickSaveButton =  function () {
            api.Passport_Set(
                this.LibraryID,

                JSON.stringify(this.PassportArrayToObject(this.Controller.Data)), {
                    Then: () => Lure.System.ShowSuccess('Сохранено'),
                    Catch: () => Lure.System.ShowError('Ошибка сохранения'),
                    Finally: () => this.SaveButton.classList.add('none')
                });
        };
    },
    BeforeShow: function () {
        // this.LibSelect.value = this.LibraryID;
        this.OnLibraryChange();
    },
    AfterBuild: function () {
        this.Controller.Content.addEventListener('change', () => this.SaveButton.classList.remove('none'));
        this.ControllerLibList.Refresh();
        this.ControllerLibList.Content.addEventListener('change', () => this.OnLibraryChange());
        this.SaveButton.addEventListener('click', () => this.OnClickSaveButton());
    }
});
window.Passport = Passport;
module.exports = Passport;