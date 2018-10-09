const D = require('../../_common/dictionary');

Diary.Summary.SummaryPart4 = new Lure.Content({
    Parent: Diary.Summary,
    Name: 'SummaryPart4',
    Type: 'diary-summary-content',
    Control:{
        Target: '#nav-diary-summary-4',
    },
    Content: `<div class="summary-part">
                <div class="tabs">
                    <div class="tab">
                        <input class="l-radio tab-radio" type="radio" name="summary-part4" id="summary-part4-1" data-tableid="1" checked="checked">
                        <label class="label tab-label" for="summary-part4-1">КУЛЬТУРНО-МАССОВАЯ РАБОТА</label>
                    </div>
                </div>
                <table class="table summary-table">
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
                        Colspan: 2,
                        Rowspan: 2,
                    },
                    {
                        Name: 'Название мероприятия',
                        Colspan: 3,
                        Rowspan: 2,
                    },
                    {
                        Name: 'Форма проведения',
                        Colspan: 2,
                        Rowspan: 2,
                    },
                    {
                        Name: 'Стационар',
                        Colspan: 5,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Внестационар',
                        Colspan: 5,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Бесплатные клубы',
                        Colspan: 3,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Платные клубы',
                        Colspan: 3,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Выездное (название)',
                        Colspan: 2,
                        Rowspan: 2,
                    },
                    {
                        Name: 'Ответственный',
                        Colspan: 2,
                        Rowspan: 2,
                    },
                ]
            },
            {
                Line: 2,
                Cells: [
                    {
                        Name: 'Бесплатно',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Платно',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Инвалиды',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Мигранты',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Проф. семинары, лекции, и т.п.',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Бесплатно',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Платно',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Инвалиды',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Мигранты',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Проф. семинары, лекции, и т.п.',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Посещения',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Инвалиды',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Мигранты',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Посещения',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Инвалиды',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Мигранты',
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
                        Colspan: 2,
                        Rowspan: 1,
                    },
                    {
                        Name: '2',
                        Colspan: 3,
                        Rowspan: 1,
                    },
                    {
                        Name: '3',
                        Colspan: 2,
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
                    {
                        Name: '19',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: '20',
                        Colspan: 2,
                        Rowspan: 1,
                    },
                    {
                        Name: '21',
                        Colspan: 2,
                        Rowspan: 1,
                    },

                ]
            }
        ],
        TableData: [],
    },

    Controller: {
        Target: '.tbody',
        ListElement: `<tr class="trow {{#if (o.isChangedByOutside) ? 'changed-outside':''}}"> 
                          <td colspan="2" class="tcell" title="{{DateStart}} - {{DateFinish}}">{{DateStart}}<br>{{DateFinish}}</td>
                          <td colspan="3" class="tcell lock" title="{{P4V2.Value}}" data-prop="P4V2">
                            <div class="hint {{#if (o.P4V2.D.Description) ? '':'none'}}" data-hint="{{P4V2.D.Description}}">?</div>
                            <div class="value">{{P4V2.Value}}</div>
                          </td>
                          <td colspan="2" class="tcell lock {{P4V3.State}}" data-prop="P4V3" title="{{P4V3.Value}}">
                            <div class="hint {{#if (o.P4V3.D.Description) ? '':'none'}}" data-hint="{{P4V3.D.Description}}">?</div>
                            <div class="value">{{P4V3.Value}}</div>
                          </td>
                          <td class="tcell {{#if (o.EventPlaceTypeID==1 && (o.EventTypeID==1 ) )?'numpadable':'lock'}}  {{P4V4.State}}" data-prop="P4V4">{{P4V4.Value}}</td>
                          <td class="tcell {{#if (o.EventPlaceTypeID==1 && (o.EventTypeID==2) )?'numpadable':'lock'}}  {{P4V5.State}}" data-prop="P4V5">{{P4V5.Value}}</td>
                          <td class="tcell {{#if (o.EventPlaceTypeID==1 && (o.EventTypeID==1 || o.EventTypeID==2) )?'numpadable':'lock'}}  {{P4V6.State}}" data-prop="P4V6">{{P4V6.Value}}</td>
                          <td class="tcell {{#if (o.EventPlaceTypeID==1 && (o.EventTypeID==1 || o.EventTypeID==2) )?'numpadable':'lock'}}  {{P4V7.State}}" data-prop="P4V7">{{P4V7.Value}}</td>
                          <td class="tcell {{#if (o.EventPlaceTypeID==1 && (o.EventTypeID==1 || o.EventTypeID==2) )?'numpadable':'lock'}}  {{P4V8.State}}" data-prop="P4V8">{{P4V8.Value}}</td>
                          <td class="tcell {{#if (o.EventPlaceTypeID==2 && (o.EventTypeID==1 || o.EventTypeID==2) )?'numpadable':'lock'}}  {{P4V9.State}}" data-prop="P4V9">{{P4V9.Value}}</td>
                          <td class="tcell {{#if (o.EventPlaceTypeID==2 && (o.EventTypeID==1 || o.EventTypeID==2) )?'numpadable':'lock'}} {{P4V10.State}}" data-prop="P4V10">{{P4V10.Value}}</td>
                          <td class="tcell {{#if (o.EventPlaceTypeID==2 && (o.EventTypeID==1 || o.EventTypeID==2) )?'numpadable':'lock'}} {{P4V11.State}}" data-prop="P4V11">{{P4V11.Value}}</td>
                          <td class="tcell {{#if (o.EventPlaceTypeID==2 && (o.EventTypeID==1 || o.EventTypeID==2) )?'numpadable':'lock'}} {{P4V12.State}}" data-prop="P4V12">{{P4V12.Value}}</td>
                          <td class="tcell {{#if (o.EventPlaceTypeID==2 && (o.EventTypeID==1 || o.EventTypeID==2) )?'numpadable':'lock'}} {{P4V13.State}}" data-prop="P4V13">{{P4V13.Value}}</td>
                          <td class="tcell {{#if (o.EventTypeID==3)?'numpadable':'lock'}} {{P4V14.State}}" data-prop="P4V14">{{P4V14.Value}}</td>
                          <td class="tcell {{#if (o.EventTypeID==3)?'numpadable':'lock'}} {{P4V15.State}}" data-prop="P4V15">{{P4V15.Value}}</td>
                          <td class="tcell {{#if (o.EventTypeID==3)?'numpadable':'lock'}} {{P4V16.State}}" data-prop="P4V16">{{P4V16.Value}}</td>
                          <td class="tcell {{#if (o.EventTypeID==4)?'numpadable':'lock'}} {{P4V17.State}}" data-prop="P4V17">{{P4V17.Value}}</td>
                          <td class="tcell {{#if (o.EventTypeID==4)?'numpadable':'lock'}} {{P4V18.State}}" data-prop="P4V18">{{P4V18.Value}}</td>
                          <td class="tcell {{#if (o.EventTypeID==4)?'numpadable':'lock'}} {{P4V19.State}}" data-prop="P4V19">{{P4V19.Value}}</td>
                          <td colspan="2" class="tcell textboxable {{P4V20.State}}" data-prop="P4V20" title="{{P4V20.Value}}">{{P4V20.Value}}</td>
                          <td colspan="2" class="tcell {{P4V21.State}}" data-prop="P4V21" title="{{P4V21.Value}}">{{P4V21.Value}}</td>
                      </tr>`,
        EmptyMessage: `<td colspan="26" class="tcell list-empty">нет данных</td>`,
        // BeforeBuild: function(RefreshType){
        //     this.TBody.style.height = this.Content.clientHeight +'px';
        //     this.TBody.style.width = this.Content.clientWidth +'px';
        //     debugger;
        // },
        LineSave: function (DataItem, a, Val) {
            let td = Lure.Select(`.tcell[data-prop="${a.split('.')[0]}"]`, DataItem.DOM);
            if (td)
                td.setAttribute('title', Val);
            if (Lure.Object.GetProperty(DataItem.Data, a.replace('Value', '_Value')) !== Val){
                td.classList.add('changed');
                Lure.Object.SetProperty(DataItem.Data, a, Val);
                Diary.Summary.Check(DataItem.Data);
            }else{
                td.classList.remove('changed');
            }
            return Promise.resolve('');
        }
    },
    PropTypes:{
        TableID: Lure.PropTypes.Int
    },
    PropFormat: {
        DateStart: (d)=>Lure.Date(d).Format('DD.MM.YYYY'),
        DateFinish: (d)=>Lure.Date(d).Format('DD.MM.YYYY'),

        'P4V3.Value': (r)=>D.EventTypeDict[r],
        'P4V21.Value': (UserID)=>{
            UserID = parseInt(UserID);
            let User = Lure.User.Cache.UserList.Where(x=>x.ID === UserID).FirstOrDefault();
            if (User === null)
                return 'Не задан *';
            return User.Name;//`${User.Name} [${User.Position}], Email: ${User.Email}, Тел. ${User.Phone}`
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
            this.Controller.Refresh(Diary.Summary.DataEvent);
        }
        else if (this.Controller.Data.length < 1 && Diary.Summary.DataEvent.length > 0 && this.CurrentDate === Diary.Summary.CurrentDate){
            this.Controller.Refresh(Diary.Summary.DataEvent);
        }
        else if (this.Controller.Data.length < 1 && Diary.Summary.DataEvent.length < 1 || this.CurrentDate !== Diary.Summary.CurrentDate){
            Diary.Summary.GetData();
        }
    },
    BeforeShow: function () {
        Diary.CheckForBread();
        this.Refresh();
    },
});