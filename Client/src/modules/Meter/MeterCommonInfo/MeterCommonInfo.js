const D = require('../../_common/dictionary');
Meter.MeterCommonInfo = new Lure.Content({
    Parent: Meter,
    Name: 'MeterCommonInfo',
    Route: false,
    Target: '.subs',
    Content: `<div class="meter-common-info meter-sidebar">
                <div class="side-top">
                    <div class="head">
                        {{LibraryName}}
                    </div>
                    <div class="data-card">
                        <div class="card-header">КРАТКАЯ ИНФОРМАЦИЯ</div>
                        <div class="card-data-row">
                            <div class="data-name">Индекс</div>
                            <div class="data-value">{{Index}}</div>
                        </div>
                        <div class="card-data-row">
                            <div class="data-name">Адрес</div>
                            <div class="data-value">{{Address}}</div>
                        </div>
                        <div class="card-data-row">
                            <div class="data-name">Площадь</div>
                            <div class="data-value">{{Square}} м<span class="sup-small">2</span></div>
                        </div>
                    </div>
                    <div class="data-card">
                        <div class="card-header">ЭЛЕКТРИЧЕСТВО</div>
                        <div class="card-data-row">
                            <div class="data-name">Договор</div>
                            <div class="data-value">{{Contract}}</div>
                        </div>
                        <div class="card-data-row">
                            <div class="data-name">Номер абонента</div>
                            <div class="data-value">{{ContractUserNumber}}</div>
                        </div>
                        <div class="card-data-row">
                            <div class="data-name">Тариф</div>
                            <div class="data-value">{{TariffElectricity}} руб/КВт⋅Ч</div>
                        </div>
                        <div class="card-data-row">
                            <div class="data-name">Счетчиков</div>
                            <div class="data-value">{{MeterElectricityCount}}</div>
                        </div>
                    </div>
                    <div class="data-card">
                        <div class="card-header">ВОДОСНАБЖЕНИЕ</div>
                        <div class="card-data-row">
                            <div class="data-name">Договор</div>
                            <div class="data-value">{{Contract}}</div>
                        </div>
                        <div class="card-data-row">
                            <div class="data-name">Тариф</div>
                            <div class="data-value">{{TariffWaterCold}} руб/м<span class="sup-small">3</span></div>
                        </div>
                        <div class="card-data-row">
                            <div class="data-name">Счетчиков</div>
                            <div class="data-value">ХВС: {{MeterWaterColdCount}}, ГВС: {{MeterWaterHotCount}}</div>
                        </div>
                    </div>
                </div>
                <div class="side-bottom">
                    <div class="data-card">
                        <div class="card-header">ЗАВЕДУЮЩИЙ БИБЛИОТЕКОЙ</div>
                        <div class="card-data-row">
                            <div>{{CommonInfo.managerSurname}} {{CommonInfo.ManagerName}} {{CommonInfo.ManagerMiddleName}}</div>
                        </div>
                        <div class="card-data-row">
                            <div class="data-name">Телефон</div>
                            <div class="data-value">+7 {{CommonInfo.ManagerPhone}}</div>
                        </div>
                        <div class="card-data-row">
                            <div class="data-name">e-mail</div>
                            <div class="data-value">{{CommonInfo.ManagerEmail}}</div>
                        </div>
                    </div>
                </div>
            </div>`,
    Load: '',
    State: {
        Date: Lure.Date().Format('DD MMMM YYYY', true),
        LibraryName: 'Библиотека №13 имени Н.Г. Чернышевского',
        Index: '115184',
        Address: 'ул. Большая Татарская, д.32',
        Square: 390,

        CommonInfo: {
            ManagerName: '',
            ManagerMiddleName: '',
            managerSurname: '',
            ManagerPhone: '',
            ManagerEmail: '',
        },

        ContractUserNumber: '987-654-321',
        Contract: '№123456 01.01.1970',
        TariffWaterCold: 0,
        TariffWaterHot: 0,
        TariffElectricity: 0,
        MeterWaterColdCount: 0,
        MeterWaterHotCount: 0,
        MeterElectricityCount: 0,

    },
    Show: function () {

    },
    Refresh: function () {
        this.Load.Show();
        api.Passport_Get(Meter.CurrentLibraryID, {
            Then: (x) => {
                x = JSON.parse(x);
                if (Lure.Object.isEmpty(x)){
                    return;
                }

                const St = this.State;
                St.CommonInfo = x.CommonInfo;
                St.LibraryName = x.CommonInfo.LibraryName;
                St.Square = x.Position.BuildingSquare;
                this.Proto.Refresh();
            },
            Finally: ()=>{
                this.Load.Hide();
            }
        });

    },
    Props: function () {



    },
    Methods: function () {

    },
    AfterBuild: function () {


    }
});

module.exports = Meter.MeterCommonInfo;

