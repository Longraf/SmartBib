new Lure.Content({
    Parent: Diary.Summary,
    Name: 'SummaryPart6',
    Type: 'diary-summary-content',
    Control:{
        Target: '#nav-diary-summary-6',
    },
    Content: `<div class="summary-part">
                <div class="tabs">
                    <div class="tab">
                        <input class="l-radio tab-radio" type="radio" name="summary-part6" id="summary-part6-1" data-tableid="1" checked="checked">
                        <label class="label tab-label" for="summary-part6-1">ПОЛЬЗОВАТЕЛИ НА ДОМУ</label>
                    </div>
                    <div class="tab">
                        <input class="l-radio tab-radio" type="radio" name="summary-part6" id="summary-part6-2" data-tableid="2">
                        <label class="label tab-label" for="summary-part6-2">РАБОТА ПЕРЕДВИЖЕК</label>
                    </div>
                </div>
                <table class="table summary-table fixed-height">
                    <thead class="thead">
                        {{#each this.TableHead}}
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
        TableHead: {
            1:[
                {
                    Line: 1,
                    Cells: [
                        {
                            Name: 'Дата',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Зарегистрировано пользователей',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Из них инвалидов',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Выдано книг на дом',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Работа с передвижками',
                            Colspan: 3,
                            Rowspan: 1,
                        },
                    ]
                },
                {
                    Line: 2,
                    Cells: [
                        {
                            Name: 'Посещение пользователей',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Консультация пользователей',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Семинар передвижников',
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
                        {
                            Name: '7',
                            Colspan: 1,
                            Rowspan: 1,
                        },

                    ]
                }
            ],
            2:[
                {
                    Line: 1,
                    Cells: [
                        {
                            Name: 'Дата',
                            TableID: -1,
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Количество передвижек',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Число читателей в них',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Всего выдано книг',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'По тематике',
                            Colspan: 11,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Массовые мероприятия',
                            Colspan: 2,
                            Rowspan: 1,
                        },
                    ]
                },
                {
                    Line: 2,
                    Cells: [
                        {
                            Name: 'ОПЛ',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Е/зн',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Техника',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'С/х',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Искусство',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Спорт',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '81.83',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Справочники',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Дет. лит-ра',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Худ. лит-ра',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Дополнит.',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Количество',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Число обслуженных',
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
                        {
                            Name: '7',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '8',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '9',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '10',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '11',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '12',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '13',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '14',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '15',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '16',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '17',
                            Colspan: 1,
                            Rowspan: 1,
                        },

                    ]
                }
            ],

        },
        TableData: [],
    },
    GetSet:{
        get TableHead(){
            return this.Proto.Data.TableHead[this.Proto.Data.TableID]
        }
    },
    Controller: {
        Target: '.tbody',
        ListElement: `<tr class="{{#if ( i === 0 || i #more this.Data.length-3) ? 'srow':'trow'}} {{#if (o.isChangedByOutside) ? 'changed-outside':''}}{{DayType}}"> 
                          <td class="tcell sum-part-date l-pointer" title="{{DateVisual}}">{{DateVisual}}</td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P61V2.State}}"  data-prop="P61V2">
  <div class="hint {{#if (o.P61V2.D.Description) ? '':'none'}}" data-hint="{{P61V2.D.Description}}">f</div>
  <div class="value">{{P61V2.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P61V3.State}}"  data-prop="P61V3">
  <div class="hint {{#if (o.P61V3.D.Description) ? '':'none'}}" data-hint="{{P61V3.D.Description}}">f</div>
  <div class="value">{{P61V3.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P61V4.State}}"  data-prop="P61V4">
  <div class="hint {{#if (o.P61V4.D.Description) ? '':'none'}}" data-hint="{{P61V4.D.Description}}">f</div>
  <div class="value">{{P61V4.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P61V5.State}}"  data-prop="P61V5">
  <div class="hint {{#if (o.P61V5.D.Description) ? '':'none'}}" data-hint="{{P61V5.D.Description}}">f</div>
  <div class="value">{{P61V5.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P61V6.State}}"  data-prop="P61V6">
  <div class="hint {{#if (o.P61V6.D.Description) ? '':'none'}}" data-hint="{{P61V6.D.Description}}">f</div>
  <div class="value">{{P61V6.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P61V7.State}}"  data-prop="P61V7">
  <div class="hint {{#if (o.P61V7.D.Description) ? '':'none'}}" data-hint="{{P61V7.D.Description}}">f</div>
  <div class="value">{{P61V7.Value}}</div>
</td>

 <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V2.State}}"  data-prop="P62V2">
  <div class="hint {{#if (o.P62V2.D.Description) ? '':'none'}}" data-hint="{{P62V2.D.Description}}">f</div>
  <div class="value">{{P62V2.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V3.State}}"  data-prop="P62V3">
  <div class="hint {{#if (o.P62V3.D.Description) ? '':'none'}}" data-hint="{{P62V3.D.Description}}">f</div>
  <div class="value">{{P62V3.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock {{P62V4.State}}"  data-prop="P62V4">
  <div class="hint {{#if (o.P62V4.D.Description) ? '':'none'}}" data-hint="{{P62V4.D.Description}}">f</div>
  <div class="value">{{P62V4.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V5.State}}"  data-prop="P62V5">
  <div class="hint {{#if (o.P62V5.D.Description) ? '':'none'}}" data-hint="{{P62V5.D.Description}}">f</div>
  <div class="value">{{P62V5.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V6.State}}"  data-prop="P62V6">
  <div class="hint {{#if (o.P62V6.D.Description) ? '':'none'}}" data-hint="{{P62V6.D.Description}}">f</div>
  <div class="value">{{P62V6.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V7.State}}"  data-prop="P62V7">
  <div class="hint {{#if (o.P62V7.D.Description) ? '':'none'}}" data-hint="{{P62V7.D.Description}}">f</div>
  <div class="value">{{P62V7.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V8.State}}"  data-prop="P62V8">
  <div class="hint {{#if (o.P62V8.D.Description) ? '':'none'}}" data-hint="{{P62V8.D.Description}}">f</div>
  <div class="value">{{P62V8.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V9.State}}"  data-prop="P62V9">
  <div class="hint {{#if (o.P62V9.D.Description) ? '':'none'}}" data-hint="{{P62V9.D.Description}}">f</div>
  <div class="value">{{P62V9.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V10.State}}"  data-prop="P62V10">
  <div class="hint {{#if (o.P62V10.D.Description) ? '':'none'}}" data-hint="{{P62V10.D.Description}}">f</div>
  <div class="value">{{P62V10.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V11.State}}"  data-prop="P62V11">
  <div class="hint {{#if (o.P62V11.D.Description) ? '':'none'}}" data-hint="{{P62V11.D.Description}}">f</div>
  <div class="value">{{P62V11.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V12.State}}"  data-prop="P62V12">
  <div class="hint {{#if (o.P62V12.D.Description) ? '':'none'}}" data-hint="{{P62V12.D.Description}}">f</div>
  <div class="value">{{P62V12.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V13.State}}"  data-prop="P62V13">
  <div class="hint {{#if (o.P62V13.D.Description) ? '':'none'}}" data-hint="{{P62V13.D.Description}}">f</div>
  <div class="value">{{P62V13.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V14.State}}"  data-prop="P62V14">
  <div class="hint {{#if (o.P62V14.D.Description) ? '':'none'}}" data-hint="{{P62V14.D.Description}}">f</div>
  <div class="value">{{P62V14.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V15.State}}"  data-prop="P62V15">
  <div class="hint {{#if (o.P62V15.D.Description) ? '':'none'}}" data-hint="{{P62V15.D.Description}}">f</div>
  <div class="value">{{P62V15.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V16.State}}"  data-prop="P62V16">
  <div class="hint {{#if (o.P62V16.D.Description) ? '':'none'}}" data-hint="{{P62V16.D.Description}}">f</div>
  <div class="value">{{P62V16.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P62V17.State}}"  data-prop="P62V17">
  <div class="hint {{#if (o.P62V17.D.Description) ? '':'none'}}" data-hint="{{P62V17.D.Description}}">f</div>
  <div class="value">{{P62V17.Value}}</div>
</td>
                      </tr>`,
        EmptyMessage: `<div class="list-empty">нет данных</div>`,
    },
    PropTypes:{
        TableID: Lure.PropTypes.Int
    },

    Props: function(){
        this.CurrentDate = null;
    },
    Show(){
        this.Parent.Subscription.Subscribe();
    },
    Refresh: function () {
        if (this.Controller.Data.length > 0 && this.CurrentDate === Diary.Summary.CurrentDate){
            this.Controller.Refresh(Diary.Summary.DataPrepared);
        }
        else if (this.Controller.Data.length < 1 && Diary.Summary.DataPrepared.length > 0 && this.CurrentDate === Diary.Summary.CurrentDate){
            this.Controller.Refresh(Diary.Summary.DataPrepared);
        }
        else if (this.Controller.Data.length < 1 && Diary.Summary.DataPrepared.length < 1 || this.CurrentDate !== Diary.Summary.CurrentDate){
            Diary.Summary.GetData();
        }
    },
    BeforeShow: function () {
        Diary.CheckForBread();
        this.Refresh();
    },
});