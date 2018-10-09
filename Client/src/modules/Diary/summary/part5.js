Diary.Summary.SummaryPart5 = new Lure.Content({
    Parent: Diary.Summary,
    Name: 'SummaryPart5',
    Type: 'diary-summary-content',
    Control:{
        Target: '#nav-diary-summary-5',
    },
    Content: `<div class="summary-part">
                <div class="tabs">
                    <div class="tab">
                        <input class="l-radio tab-radio" type="radio" name="summary-part5" id="summary-part5-1" data-tableid="1" checked="checked">
                        <label class="label tab-label" for="summary-part5-1">ВЫСТАВКИ</label>
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
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Название',
                        Colspan: 2,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Количество представленных документов',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Количество выданных документов',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Ответственный',
                        Colspan: 1,
                        Rowspan: 1,
                    },
                    {
                        Name: 'Примечания',
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
                        Colspan: 2,
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
        ListElement: `<tr class="trow {{#if (o.isChangedByOutside) ? 'changed-outside':''}}"> 
                          <td class="tcell" title="{{DateStart}} - {{DateFinish}}">{{DateStart}} - {{DateFinish}}</td>
                          <td colspan="2" class="tcell lock" data-prop="P5V2">{{P5V2.Value}}</td>
                          <td class="tcell numpadable  {{P5V3.State}}" data-prop="P5V3">{{P5V3.Value}}</td>
                          <td class="tcell numpadable  {{P5V4.State}}" data-prop="P5V4">{{P5V4.Value}}</td>
                          <td class="tcell {{P5V5.State}}" data-prop="P5V5">{{P5V5.Value}}</td> 
                          <td class="tcell textboxable {{P5V6.State}}" data-prop="P5V6">{{P5V6.Value}}</td>
                      </tr>`,
        EmptyMessage: `<td colspan="6" class="list-empty">нет данных</td>`,
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
    PropFormat: {
        DateStart: (d)=>Lure.Date(d).Format('DD.MM.YYYY'),
        DateFinish: (d)=>Lure.Date(d).Format('DD.MM.YYYY'),
        'P5V5.Value': (UserID)=>{
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
            this.Controller.Refresh(Diary.Summary.DataExhibition);
        }
        else if (this.Controller.Data.length < 1 && Diary.Summary.DataExhibition.length > 0 && this.CurrentDate === Diary.Summary.CurrentDate){
            this.Controller.Refresh(Diary.Summary.DataExhibition);
        }
        else if (this.Controller.Data.length < 1 && Diary.Summary.DataExhibition.length < 1 || this.CurrentDate !== Diary.Summary.CurrentDate){
            Diary.Summary.GetData();
        }
    },
    BeforeShow: function () {
        Diary.CheckForBread();
        this.Refresh();
    },
});