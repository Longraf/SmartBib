Diary.Summary.SummaryPart1 = new Lure.Content({
    Parent: Diary.Summary,
    Name: 'SummaryPart1',
    Type: 'diary-summary-content',
    Control:{
        Target: '#nav-diary-summary-1',
    },
    Visible: true,   
    Content: `<div class="summary-part">
                <div class="tabs">
                    <div class="tab">
                        <input class="l-radio tab-radio" type="radio" name="summary-part1" id="summary-part1-1" data-tableid="1" checked="checked">
                        <label class="label tab-label" for="summary-part1-1">ЗАПИСЬ И ПОСЕЩЕНИЯ</label>
                    </div>
                    <div class="tab">
                        <input class="l-radio tab-radio" type="radio" name="summary-part1" id="summary-part1-2" data-tableid="2">
                        <label class="label tab-label" for="summary-part1-2">МЕРОПРИЯТИЯ И КЛУБЫ</label>
                    </div>
                </div>
                <div class="table-holder">
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
                </div>
              </div>`,
    Load: '',
    State:{
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
                            Name: 'Всего',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Вновь записавшихся',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Всего стационар',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Возраст',
                            Colspan: 3,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Удаленные пользователи',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Школьники',
                            Colspan: 5,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Отдельные группы',
                            Colspan: 4,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Всего посещений',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'В том числе',
                            Colspan: 3,
                            Rowspan: 1,
                        },
                    ]
                },
                {
                    Line: 2,
                    Cells: [
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
                            Name: 'д/ш',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '7-10 лет',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: '11-14 лет',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Старшеклассники',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'РДЧ',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Пенсионеры',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Служащие',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Студенты',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Прочие',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Стационар',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Внестационар',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Интернет',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                    ]
                },
                {
                    Line: 3,
                    Cells:[
                        {
                            Name: '1',
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
                            Name: '6.1',
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
                            Name: 'Всего посещений мероприятия стационар',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Посещения мероприятий',
                            Colspan: 2,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Всего мероприятий стационар',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Количество мероприятий',
                            Colspan: 2,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Всего посещений мероприятия внестационар',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Посещения мероприятий',
                            Colspan: 2,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Всего мероприятий внестационар',
                            Colspan: 1,
                            Rowspan: 2,
                        },
                        {
                            Name: 'Посещения мероприятий',
                            Colspan: 2,
                            Rowspan: 1,
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
                            Name: 'Бесплатные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Платные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Бесплатные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Платные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Бесплатные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Платные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Бесплатные',
                            Colspan: 1,
                            Rowspan: 1,
                        },
                        {
                            Name: 'Платные',
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

                    ]
                }

            ],
        },
    },
    GetSet:{
        get TableHead(){
            return this.Proto.Data.TableHead[this.Proto.Data.TableID]
        }
    },
    PropTypes:{
        TableID: Lure.PropTypes.Int,
    },
    Controller: {
        Target: '.tbody',
        ListElement: `<tr class="{{#if ( i === 0 || i #more this.Data.length-3 ) ? 'srow':'trow'}} {{#if (o.isChangedByOutside) ? 'changed-outside':''}}{{DayType}}">   
                          <td class="tcell sum-part-date l-pointer" title="{{DateVisual}}">{{DateVisual}}</td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} lock       {{P1V2.State}}"  data-prop="P1V2">
                            <div class="hint {{#if (o.P1V2.D.Description) ? '':'none'}}" data-hint="{{P1V2.D.Description}}">f</div>
                            <div class="value">{{P1V2.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V3.State}}"  data-prop="P1V3">
                            <div class="hint {{#if (o.P1V3.D.Description) ? '':'none'}}" data-hint="{{P1V3.D.Description}}">f</div>
                            <div class="value">{{P1V3.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} lock {{P1V4.State}}"  data-prop="P1V4">
                            <div class="hint {{#if (o.P1V4.D.Description) ? '':'none'}}" data-hint="{{P1V4.D.Description}}">f</div>
                            <div class="value">{{P1V4.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} lock       {{P1V5.State}}"  data-prop="P1V5">
                            <div class="hint {{#if (o.P1V5.D.Description) ? '':'none'}}" data-hint="{{P1V5.D.Description}}">f</div>
                            <div class="value">{{P1V5.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V6.State}}"  data-prop="P1V6">
                            <div class="hint {{#if (o.P1V6.D.Description) ? '':'none'}}" data-hint="{{P1V6.D.Description}}">f</div>
                            <div class="value">{{P1V6.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V61.State}}"  data-prop="P1V61">
                            <div class="hint {{#if (o.P1V61.D.Description) ? '':'none'}}" data-hint="{{P1V61.D.Description}}">f</div>
                            <div class="value">{{P1V61.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} {{#if (Lure.User.Roles.indexOf(D.Role.DairySummaryEditRemote) > -1)?'numpadable':''}} {{P1V7.State}}"  data-prop="P1V7">
                            <div class="hint {{#if (o.P1V7.D.Description) ? '':'none'}}" data-hint="{{P1V7.D.Description}}">f</div>
                            <div class="value">{{P1V7.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V8.State}}"  data-prop="P1V8">
                            <div class="hint {{#if (o.P1V8.D.Description) ? '':'none'}}" data-hint="{{P1V8.D.Description}}">f</div>
                            <div class="value">{{P1V8.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V9.State}}"  data-prop="P1V9">
                            <div class="hint {{#if (o.P1V9.D.Description) ? '':'none'}}" data-hint="{{P1V9.D.Description}}">f</div>
                            <div class="value">{{P1V9.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V10.State}}" data-prop="P1V10">
                            <div class="hint {{#if (o.P1V10.D.Description) ? '':'none'}}" data-hint="{{P1V10.D.Description}}">f</div>
                            <div class="value">{{P1V10.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V11.State}}" data-prop="P1V11">
                            <div class="hint {{#if (o.P1V11.D.Description) ? '':'none'}}" data-hint="{{P1V11.D.Description}}">f</div>
                            <div class="value">{{P1V11.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V12.State}}" data-prop="P1V12">
                            <div class="hint {{#if (o.P1V12.D.Description) ? '':'none'}}" data-hint="{{P1V12.D.Description}}">f</div>
                            <div class="value">{{P1V12.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V13.State}}" data-prop="P1V13">
                            <div class="hint {{#if (o.P1V13.D.Description) ? '':'none'}}" data-hint="{{P1V13.D.Description}}">f</div>
                            <div class="value">{{P1V13.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V14.State}}" data-prop="P1V14">
                            <div class="hint {{#if (o.P1V14.D.Description) ? '':'none'}}" data-hint="{{P1V14.D.Description}}">f</div>
                            <div class="value">{{P1V14.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V15.State}}" data-prop="P1V15">
                            <div class="hint {{#if (o.P1V15.D.Description) ? '':'none'}}" data-hint="{{P1V15.D.Description}}">f</div>
                            <div class="value">{{P1V15.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V16.State}}" data-prop="P1V16">
                            <div class="hint {{#if (o.P1V16.D.Description) ? '':'none'}}" data-hint="{{P1V16.D.Description}}">f</div>
                            <div class="value">{{P1V16.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} lock       {{P1V17.State}}" data-prop="P1V17">
                            <div class="hint {{#if (o.P1V17.D.Description) ? '':'none'}}" data-hint="{{P1V17.D.Description}}">f</div>
                            <div class="value">{{P1V17.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V18.State}}" data-prop="P1V18">
                            <div class="hint {{#if (o.P1V18.D.Description) ? '':'none'}}" data-hint="{{P1V18.D.Description}}">f</div>
                            <div class="value">{{P1V18.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V19.State}}" data-prop="P1V19">
                            <div class="hint {{#if (o.P1V19.D.Description) ? '':'none'}}" data-hint="{{P1V19.D.Description}}">f</div>
                            <div class="value">{{P1V19.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 1)?'':'none'}} numpadable {{P1V20.State}}" data-prop="P1V20">
                            <div class="hint {{#if (o.P1V20.D.Description) ? '':'none'}}" data-hint="{{P1V20.D.Description}}">f</div>
                            <div class="value">{{P1V20.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V21.State}}" data-prop="P1V21">
                            <div class="hint {{#if (o.P1V21.D.Description) ? '':'none'}}" data-hint="{{P1V21.D.Description}}">f</div>
                            <div class="value">{{P1V21.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V22.State}}" data-prop="P1V22">
                            <div class="hint {{#if (o.P1V22.D.Description) ? '':'none'}}" data-hint="{{P1V22.D.Description}}">f</div>
                            <div class="value">{{P1V22.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V23.State}}" data-prop="P1V23">
                            <div class="hint {{#if (o.P1V23.D.Description) ? '':'none'}}" data-hint="{{P1V23.D.Description}}">f</div>
                            <div class="value">{{P1V23.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V24.State}}" data-prop="P1V24">
                            <div class="hint {{#if (o.P1V24.D.Description) ? '':'none'}}" data-hint="{{P1V24.D.Description}}">f</div>
                            <div class="value">{{P1V24.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V25.State}}" data-prop="P1V25">
                            <div class="hint {{#if (o.P1V25.D.Description) ? '':'none'}}" data-hint="{{P1V25.D.Description}}">f</div>
                            <div class="value">{{P1V25.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V26.State}}" data-prop="P1V26">
                            <div class="hint {{#if (o.P1V26.D.Description) ? '':'none'}}" data-hint="{{P1V26.D.Description}}">f</div>
                            <div class="value">{{P1V26.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V27.State}}" data-prop="P1V27">
                            <div class="hint {{#if (o.P1V27.D.Description) ? '':'none'}}" data-hint="{{P1V27.D.Description}}">f</div>
                            <div class="value">{{P1V27.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V28.State}}" data-prop="P1V28">
                            <div class="hint {{#if (o.P1V28.D.Description) ? '':'none'}}" data-hint="{{P1V28.D.Description}}">f</div>
                            <div class="value">{{P1V28.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V29.State}}" data-prop="P1V29">
                            <div class="hint {{#if (o.P1V29.D.Description) ? '':'none'}}" data-hint="{{P1V29.D.Description}}">f</div>
                            <div class="value">{{P1V29.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V30.State}}" data-prop="P1V30">
                            <div class="hint {{#if (o.P1V30.D.Description) ? '':'none'}}" data-hint="{{P1V30.D.Description}}">f</div>
                            <div class="value">{{P1V30.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V31.State}}" data-prop="P1V31">
                            <div class="hint {{#if (o.P1V31.D.Description) ? '':'none'}}" data-hint="{{P1V31.D.Description}}">f</div>
                            <div class="value">{{P1V31.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V32.State}}" data-prop="P1V32">
                            <div class="hint {{#if (o.P1V32.D.Description) ? '':'none'}}" data-hint="{{P1V32.D.Description}}">f</div>
                            <div class="value">{{P1V32.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V33.State}}" data-prop="P1V33">
                            <div class="hint {{#if (o.P1V33.D.Description) ? '':'none'}}" data-hint="{{P1V33.D.Description}}">f</div>
                            <div class="value">{{P1V33.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V34.State}}" data-prop="P1V34">
                            <div class="hint {{#if (o.P1V34.D.Description) ? '':'none'}}" data-hint="{{P1V34.D.Description}}">f</div>
                            <div class="value">{{P1V34.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V35.State}}" data-prop="P1V35">
                            <div class="hint {{#if (o.P1V35.D.Description) ? '':'none'}}" data-hint="{{P1V35.D.Description}}">f</div>
                            <div class="value">{{P1V35.Value}}</div>
                          </td>
                          <td class="tcell {{#if (this.Proto.Data.TableID === 2)?'':'none'}} lock       {{P1V36.State}}" data-prop="P1V36">
                            <div class="hint {{#if (o.P1V36.D.Description) ? '':'none'}}" data-hint="{{P1V36.D.Description}}">f</div>
                            <div class="value">{{P1V36.Value}}</div>
                          </td>
                      </tr>`,
        EmptyMessage: `<div class="list-empty">нет данных</div>`,
        AfterBuild: function () {
            /* if (this.Controller.Content.scrollHeight > this.Controller.Content.clientHeight){
                 this.ScrollCompensator.style.width = Lure.DOM.ScrollBarWidth+ 'px';
             }
             else{
                 this.ScrollCompensator.style.width = '0';
             }*/
        }
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