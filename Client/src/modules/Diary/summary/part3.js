new Lure.Content({
    Parent: Diary.Summary,
    Name: 'SummaryPart3',
    Type: 'diary-summary-content',
    Control:{
        Target: '#nav-diary-summary-3',
    },
    Content: `<div class="summary-part">
                <div class="tabs">
                    <div class="tab">
                        <input class="l-radio tab-radio" type="radio" name="summary-part3" id="summary-part3-1" data-tableid="1" checked="checked">
                        <label class="label tab-label" for="summary-part3-1">УЧЕТ ВЫДАЧИ ЭЛЕКТРОННЫХ РЕСУРСОВ</label>
                    </div>
                </div>
                <table class="table summary-table fixed-height">
                    <thead class="thead">
                        {{#each TableHead}}
                            <tr class="trow head-{{Line}}">
                                {{#each Cells}}
                                    <th colspan="{{Colspan}}" rowspan="{{Rowspan}}" class="tcell" title="{{Name}}">{{Name}}</th>
                                {{#endeach}}
                            </tr>
                        {{#endeach}}
                    
                    </thead>
                    <tbody class="tbody"></tbody>
                </table>
              </div>`,
    Proto:{
        TableID: 1,
        TableHead: [
            {
                Line: 1,
                Cells: [
                    {
                        Name: 'Дата',
                        Colspan: 1,
                        Rowspan: 2,
                    },
                    {
                        Name: 'Всего выдано',
                        Colspan: 1,
                        Rowspan: 2,
                    },
                    {
                        Name: 'По типу носителя',
                        Colspan: 4,
                        Rowspan: 1,
                    },
                ]
            },
            {
                Line: 2,
                Cells: [
                    {
                        Name: 'Инсталлированные документы',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Сетевые удаленные лицензионные',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Из электронной (цифровой) библиотеки',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'DVD / CD-ROM',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                ]
            },
            {
                Line: 3,
                Cells:[
                    {
                        Name: "1",
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: '2',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: '3',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: '4',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: '5',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: '6',
                        Colspan: 1,
                        Rowspan: 1,
                    },

                ]
            }
        ],
    },
    Controller: {
        Target: '.tbody',
        ListElement: `<tr class="{{#if ( i === 0 || i #more this.Data.length-3) ? 'srow':'trow'}} {{#if (o.isChangedByOutside) ? 'changed-outside':''}}{{DayType}}"> 
                          <td class="tcell sum-part-date l-pointer" title="{{DateVisual}}">{{DateVisual}}</td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} lock {{P3V2.State}}"  data-prop="P3V2">
                            <div class="hint {{#if (o.P3V2.D.Description) ? '':'none'}}" data-hint="{{P3V2.D.Description}}">f</div>
                            <div class="value">{{P3V2.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P3V3.State}}"  data-prop="P3V3">
                            <div class="hint {{#if (o.P3V3.D.Description) ? '':'none'}}" data-hint="{{P3V3.D.Description}}">f</div>
                            <div class="value">{{P3V3.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P3V4.State}}"  data-prop="P3V4">
                            <div class="hint {{#if (o.P3V4.D.Description) ? '':'none'}}" data-hint="{{P3V4.D.Description}}">f</div>
                            <div class="value">{{P3V4.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P3V5.State}}"  data-prop="P3V5">
                            <div class="hint {{#if (o.P3V5.D.Description) ? '':'none'}}" data-hint="{{P3V5.D.Description}}">f</div>
                            <div class="value">{{P3V5.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P3V6.State}}"  data-prop="P3V6">
                            <div class="hint {{#if (o.P3V6.D.Description) ? '':'none'}}" data-hint="{{P3V6.D.Description}}">f</div>
                            <div class="value">{{P3V6.Value}}</div>
                          </td>
                      </tr>`,
        EmptyMessage: `<div class="list-empty">нет данных</div>`,
    },
    PropTypes:{
        TableID: Lure.PropTypes.Int
    },
    Show(){
        this.Parent.Subscription.Subscribe();
    },
    Refresh: function () {
        if (this.Controller.Data.length > 0){
            this.Controller.Refresh(Diary.Summary.DataPrepared);
        }
        else if (this.Controller.Data.length < 1 && Diary.Summary.DataPrepared.length > 0){
            this.Controller.Refresh(Diary.Summary.DataPrepared);
        }
        else if (this.Controller.Data.length < 1 && Diary.Summary.DataPrepared.length < 1){
            Diary.Summary.GetData()
                .then(()=>{
                    this.Controller.Refresh(Diary.Summary.DataPrepared);
                })
        }
    },
    BeforeShow: function () {
        Diary.CheckForBread();
        this.Refresh();
    },
});