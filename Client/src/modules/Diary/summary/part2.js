new Lure.Content({
    Parent: Diary.Summary,
    Name: 'SummaryPart2',
    Type: 'diary-summary-content',
    Control:{
        Target: '#nav-diary-summary-2',
    },
    Content: `<div class="summary-part">
                <div class="tabs">
                    <div class="tab">
                        <input class="l-radio tab-radio" type="radio" name="summary-part2" id="summary-part2-1" data-tableid="1" checked="checked">
                        <label class="label tab-label" for="summary-part2-1">КНИГИ И БРОШЮРЫ</label>
                    </div>
                    <div class="tab">
                        <input class="l-radio tab-radio" type="radio" name="summary-part2" id="summary-part2-2" data-tableid="2">
                        <label class="label tab-label" for="summary-part2-2">ДОКУМЕНТЫ И КОПИИ</label>
                    </div>
                    <div class="tab">
                        <input class="l-radio tab-radio" type="radio" name="summary-part2" id="summary-part2-3" data-tableid="3">
                        <label class="label tab-label" for="summary-part2-3">СПРАВКИ И КОНСУЛЬТАЦИИ</label>
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
                            Name: 'Всего выдано',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'По типу носителя',
                            Colspan: 5,
                            Rowspan: 1,
                        },
                        {
                            Name: 'По содержанию',
                            Colspan: 11,
                            Rowspan: 1,
                        },
                    ]
                },
                {
                    Line: 2,
                    Cells: [
                        {
                            Name: 'На физ носителях',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Внестационар и на дому (6.1, 6.2)',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Из электронной библиотеки',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Инсталированные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Удаленные лицензионные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
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
                        {
                            Name: '18',
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
                            Name: 'Выдано документов детям до 14 лет',
                            Colspan: 6,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Выдано документов пользователям 14-30 лет',
                            Colspan: 6,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Выдано документов пользователям 30+ лет',
                            Colspan: 6,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Изготовлено и выдано копий',
                            Colspan: 4,
                            Rowspan: 1,
                        },

                    ]
                },
                {
                    Line: 2,
                    Cells: [
                        {
                            Name: 'Всего выдано',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'На физ носителях',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Внестационар и на дому (6.1, 6.2)',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Из электронной библиотеки',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Инсталированные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Удаленные лицензионные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Всего выдано',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'На физ носителях',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Внестационар и на дому (6.1, 6.2)',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Из электронной библиотеки',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Инсталированные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Удаленные лицензионные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Всего выдано',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'На физ носителях',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Внестационар и на дому (6.1, 6.2)',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Из электронной библиотеки',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Инсталированные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Удаленные лицензионные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Всего',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Детям до 14 лет',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Пользователям 14-30 лет',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Пользователям 30+ лет',
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
                            Name: '19',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '20',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '21',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '22',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '23',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '24',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '25',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '26',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '27',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '28',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '29',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '30',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '25.1',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '26.1',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '27.1',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '28.1',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '29.1',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '30.1',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '31',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '32',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '33',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '33.1',
                            Colspan: 1,
                            Rowspan: 1,
                        },

                    ]
                }
            ],
            3:[
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
                            Name: 'Всего выдано из фондов других библиотек',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Выдано (просмотрено) док-ов из фондов других библиотек, единиц',
                            Colspan: 2,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Всего выполнено справок и консультаций',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'По возрасту',
                            Colspan: 3,
                            Rowspan: 1,
                        },
                        {
                            Name: 'По типу',
                            Colspan: 5,
                            Rowspan: 1,
                        },
                    ]
                },
                {
                    Line: 2,
                    Cells: [
                        {
                            Name: 'По системе МБА и ММБА',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Виртуальные читальные залы',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'до 14 лет',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '14-30 лет',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '30+ лет',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Тематические',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Фактографич.',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Библиографич',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Консультации',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Удаленные справки',
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
                            Name: '34',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '35',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '36',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '37',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '38',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '39',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '39.1',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '40',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '41',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '42',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '43',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '44',
                            Colspan: 1,
                            Rowspan: 1,
                        },

                    ]
                }
            ],
            4:[
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
                            Name: 'Бесплатные клубы',
                            Colspan: 2,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Платные клубы',
                            Colspan: 2,
                            Rowspan: 1,
                        },
                    ]
                },
                {
                    Line: 2,
                    Cells: [
                        {
                            Name: 'Количество заседаний',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Число посещений',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Количество заседаний',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Число посещений',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                    ]
                }
            ]
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
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} lock {{P2V2.State}}"  data-prop="P2V2">
  <div class="hint {{#if (o.P2V2.D.Description) ? '':'none'}}" data-hint="{{P2V2.D.Description}}">f</div>
  <div class="value">{{P2V2.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V3.State}}"  data-prop="P2V3">
  <div class="hint {{#if (o.P2V3.D.Description) ? '':'none'}}" data-hint="{{P2V3.D.Description}}">f</div>
  <div class="value">{{P2V3.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} lock {{P2V4.State}}"  data-prop="P2V4">
  <div class="hint {{#if (o.P2V4.D.Description) ? '':'none'}}" data-hint="{{P2V4.D.Description}}">f</div>
  <div class="value">{{P2V4.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V5.State}}"  data-prop="P2V5">
  <div class="hint {{#if (o.P2V5.D.Description) ? '':'none'}}" data-hint="{{P2V5.D.Description}}">f</div>
  <div class="value">{{P2V5.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V6.State}}"  data-prop="P2V6">
  <div class="hint {{#if (o.P2V6.D.Description) ? '':'none'}}" data-hint="{{P2V6.D.Description}}">f</div>
  <div class="value">{{P2V6.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V7.State}}"  data-prop="P2V7">
  <div class="hint {{#if (o.P2V7.D.Description) ? '':'none'}}" data-hint="{{P2V7.D.Description}}">f</div>
  <div class="value">{{P2V7.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V8.State}}"  data-prop="P2V8">
  <div class="hint {{#if (o.P2V8.D.Description) ? '':'none'}}" data-hint="{{P2V8.D.Description}}">f</div>
  <div class="value">{{P2V8.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V9.State}}"  data-prop="P2V9">
  <div class="hint {{#if (o.P2V9.D.Description) ? '':'none'}}" data-hint="{{P2V9.D.Description}}">f</div>
  <div class="value">{{P2V9.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V10.State}}"  data-prop="P2V10">
  <div class="hint {{#if (o.P2V10.D.Description) ? '':'none'}}" data-hint="{{P2V10.D.Description}}">f</div>
  <div class="value">{{P2V10.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V11.State}}"  data-prop="P2V11">
  <div class="hint {{#if (o.P2V11.D.Description) ? '':'none'}}" data-hint="{{P2V11.D.Description}}">f</div>
  <div class="value">{{P2V11.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V12.State}}"  data-prop="P2V12">
  <div class="hint {{#if (o.P2V12.D.Description) ? '':'none'}}" data-hint="{{P2V12.D.Description}}">f</div>
  <div class="value">{{P2V12.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V13.State}}"  data-prop="P2V13">
  <div class="hint {{#if (o.P2V13.D.Description) ? '':'none'}}" data-hint="{{P2V13.D.Description}}">f</div>
  <div class="value">{{P2V13.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V14.State}}"  data-prop="P2V14">
  <div class="hint {{#if (o.P2V14.D.Description) ? '':'none'}}" data-hint="{{P2V14.D.Description}}">f</div>
  <div class="value">{{P2V14.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V15.State}}"  data-prop="P2V15">
  <div class="hint {{#if (o.P2V15.D.Description) ? '':'none'}}" data-hint="{{P2V15.D.Description}}">f</div>
  <div class="value">{{P2V15.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V16.State}}"  data-prop="P2V16">
  <div class="hint {{#if (o.P2V16.D.Description) ? '':'none'}}" data-hint="{{P2V16.D.Description}}">f</div>
  <div class="value">{{P2V16.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V17.State}}"  data-prop="P2V17">
  <div class="hint {{#if (o.P2V17.D.Description) ? '':'none'}}" data-hint="{{P2V17.D.Description}}">f</div>
  <div class="value">{{P2V17.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P2V18.State}}"  data-prop="P2V18">
  <div class="hint {{#if (o.P2V18.D.Description) ? '':'none'}}" data-hint="{{P2V18.D.Description}}">f</div>
  <div class="value">{{P2V18.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock {{P2V19.State}}"  data-prop="P2V19">
  <div class="hint {{#if (o.P2V19.D.Description) ? '':'none'}}" data-hint="{{P2V19.D.Description}}">f</div>
  <div class="value">{{P2V19.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V20.State}}"  data-prop="P2V20">
  <div class="hint {{#if (o.P2V20.D.Description) ? '':'none'}}" data-hint="{{P2V20.D.Description}}">f</div>
  <div class="value">{{P2V20.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V21.State}}"  data-prop="P2V21">
  <div class="hint {{#if (o.P2V21.D.Description) ? '':'none'}}" data-hint="{{P2V21.D.Description}}">f</div>
  <div class="value">{{P2V21.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V22.State}}"  data-prop="P2V22">
  <div class="hint {{#if (o.P2V22.D.Description) ? '':'none'}}" data-hint="{{P2V22.D.Description}}">f</div>
  <div class="value">{{P2V22.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V23.State}}"  data-prop="P2V23">
  <div class="hint {{#if (o.P2V23.D.Description) ? '':'none'}}" data-hint="{{P2V23.D.Description}}">f</div>
  <div class="value">{{P2V23.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V24.State}}"  data-prop="P2V24">
  <div class="hint {{#if (o.P2V24.D.Description) ? '':'none'}}" data-hint="{{P2V24.D.Description}}">f</div>
  <div class="value">{{P2V24.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock {{P2V25.State}}"  data-prop="P2V25">
  <div class="hint {{#if (o.P2V25.D.Description) ? '':'none'}}" data-hint="{{P2V25.D.Description}}">f</div>
  <div class="value">{{P2V25.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V26.State}}"  data-prop="P2V26">
  <div class="hint {{#if (o.P2V26.D.Description) ? '':'none'}}" data-hint="{{P2V26.D.Description}}">f</div>
  <div class="value">{{P2V26.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V27.State}}"  data-prop="P2V27">
  <div class="hint {{#if (o.P2V27.D.Description) ? '':'none'}}" data-hint="{{P2V27.D.Description}}">f</div>
  <div class="value">{{P2V27.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V28.State}}"  data-prop="P2V28">
  <div class="hint {{#if (o.P2V28.D.Description) ? '':'none'}}" data-hint="{{P2V28.D.Description}}">f</div>
  <div class="value">{{P2V28.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V29.State}}"  data-prop="P2V29">
  <div class="hint {{#if (o.P2V29.D.Description) ? '':'none'}}" data-hint="{{P2V29.D.Description}}">f</div>
  <div class="value">{{P2V29.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V30.State}}"  data-prop="P2V30">
  <div class="hint {{#if (o.P2V30.D.Description) ? '':'none'}}" data-hint="{{P2V30.D.Description}}">f</div>
  <div class="value">{{P2V30.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock {{P2V251.State}}"  data-prop="P2V251">
  <div class="hint {{#if (o.P2V251.D.Description) ? '':'none'}}" data-hint="{{P2V251.D.Description}}">f</div>
  <div class="value">{{P2V251.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V261.State}}"  data-prop="P2V261">
  <div class="hint {{#if (o.P2V261.D.Description) ? '':'none'}}" data-hint="{{P2V261.D.Description}}">f</div>
  <div class="value">{{P2V261.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V271.State}}"  data-prop="P2V271">
  <div class="hint {{#if (o.P2V271.D.Description) ? '':'none'}}" data-hint="{{P2V271.D.Description}}">f</div>
  <div class="value">{{P2V271.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V281.State}}"  data-prop="P2V281">
  <div class="hint {{#if (o.P2V281.D.Description) ? '':'none'}}" data-hint="{{P2V281.D.Description}}">f</div>
  <div class="value">{{P2V281.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V291.State}}"  data-prop="P2V291">
  <div class="hint {{#if (o.P2V291.D.Description) ? '':'none'}}" data-hint="{{P2V291.D.Description}}">f</div>
  <div class="value">{{P2V291.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V301.State}}"  data-prop="P2V301">
  <div class="hint {{#if (o.P2V301.D.Description) ? '':'none'}}" data-hint="{{P2V301.D.Description}}">f</div>
  <div class="value">{{P2V301.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock {{P2V31.State}}"  data-prop="P2V31">
  <div class="hint {{#if (o.P2V31.D.Description) ? '':'none'}}" data-hint="{{P2V31.D.Description}}">f</div>
  <div class="value">{{P2V31.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V32.State}}"  data-prop="P2V32">
  <div class="hint {{#if (o.P2V32.D.Description) ? '':'none'}}" data-hint="{{P2V32.D.Description}}">f</div>
  <div class="value">{{P2V32.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V33.State}}"  data-prop="P2V33">
  <div class="hint {{#if (o.P2V33.D.Description) ? '':'none'}}" data-hint="{{P2V33.D.Description}}">f</div>
  <div class="value">{{P2V33.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} numpadable {{P2V331.State}}"  data-prop="P2V331">
  <div class="hint {{#if (o.P2V331.D.Description) ? '':'none'}}" data-hint="{{P2V331.D.Description}}">f</div>
  <div class="value">{{P2V331.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V34.State}}"  data-prop="P2V34">
  <div class="hint {{#if (o.P2V34.D.Description) ? '':'none'}}" data-hint="{{P2V34.D.Description}}">f</div>
  <div class="value">{{P2V34.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V35.State}}"  data-prop="P2V35">
  <div class="hint {{#if (o.P2V35.D.Description) ? '':'none'}}" data-hint="{{P2V35.D.Description}}">f</div>
  <div class="value">{{P2V35.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V36.State}}"  data-prop="P2V36">
  <div class="hint {{#if (o.P2V36.D.Description) ? '':'none'}}" data-hint="{{P2V36.D.Description}}">f</div>
  <div class="value">{{P2V36.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} lock {{P2V37.State}}"  data-prop="P2V37">
  <div class="hint {{#if (o.P2V37.D.Description) ? '':'none'}}" data-hint="{{P2V37.D.Description}}">f</div>
  <div class="value">{{P2V37.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V38.State}}"  data-prop="P2V38">
  <div class="hint {{#if (o.P2V38.D.Description) ? '':'none'}}" data-hint="{{P2V38.D.Description}}">f</div>
  <div class="value">{{P2V38.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V39.State}}"  data-prop="P2V39">
  <div class="hint {{#if (o.P2V39.D.Description) ? '':'none'}}" data-hint="{{P2V39.D.Description}}">f</div>
  <div class="value">{{P2V39.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V391.State}}"  data-prop="P2V391">
  <div class="hint {{#if (o.P2V391.D.Description) ? '':'none'}}" data-hint="{{P2V391.D.Description}}">f</div>
  <div class="value">{{P2V391.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V40.State}}"  data-prop="P2V40">
  <div class="hint {{#if (o.P2V40.D.Description) ? '':'none'}}" data-hint="{{P2V40.D.Description}}">f</div>
  <div class="value">{{P2V40.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V41.State}}"  data-prop="P2V41">
  <div class="hint {{#if (o.P2V41.D.Description) ? '':'none'}}" data-hint="{{P2V41.D.Description}}">f</div>
  <div class="value">{{P2V41.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V42.State}}"  data-prop="P2V42">
  <div class="hint {{#if (o.P2V42.D.Description) ? '':'none'}}" data-hint="{{P2V42.D.Description}}">f</div>
  <div class="value">{{P2V42.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V43.State}}"  data-prop="P2V43">
  <div class="hint {{#if (o.P2V43.D.Description) ? '':'none'}}" data-hint="{{P2V43.D.Description}}">f</div>
  <div class="value">{{P2V43.Value}}</div>
</td>
<td class="tcell {{#if (this.Proto.Data.TableID === 3)?'':'none'}} numpadable {{P2V44.State}}"  data-prop="P2V44">
  <div class="hint {{#if (o.P2V44.D.Description) ? '':'none'}}" data-hint="{{P2V44.D.Description}}">f</div>
  <div class="value">{{P2V44.Value}}</div>
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
        else if (this.Controller.Data.length < 1 && Diary.Summary.DataEvent.length > 0 && this.CurrentDate === Diary.Summary.CurrentDate){
            this.Controller.Refresh(Diary.Summary.DataPrepared);
        }
        else if (this.Controller.Data.length < 1 && Diary.Summary.DataPrepared.length < 1 || this.CurrentDate !== Diary.Summary.CurrentDate){
            Diary.Summary.GetData();
        }
    },
    Refresh2: function () {
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