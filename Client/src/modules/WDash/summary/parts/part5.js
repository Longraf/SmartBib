WDash.WDashSummary.Part5 = new Lure.Content({
    Name: 'DashPart5',
    Target: '.summary-content',
    Type: 'dash-summary-content',
    Control:{
        Target: '#nav-wdash-summ-p5'
    },
    Permission: {
        Roles: [Dictionary.Role.Dashboard]
    },
    Content:
`<div>
   <div class="part-header">
      <div class="req-tab selected">ВЫСТАВКИ</div>
   </div>
   <table class="data-table">
      <thead>
         <tr class="trow head-1">
            <th colspan="1" rowspan="1" >Дата</th>
            <th colspan="1" rowspan="1" >Название</th>
            <th colspan="1" rowspan="1" >Количество представленных документов</th>
            <th colspan="1" rowspan="1" >Количество выданных документов</th>
            <th colspan="1" rowspan="1" >Ответственный</th>
            <th colspan="1" rowspan="1" >Примечания</th>
         </tr>
      </thead>
      <tbody>
         {{IsEmpty}}
         {{#each Part5}}
         <tr>
            <td data-prop="DATES">{{DateStart}} - {{DateFinish}}</td>
            <td data-prop="P5V2">{{P5V2}}</td>
            <td data-prop="P5V3">{{P5V3}}</td>
            <td data-prop="P5V4">{{P5V4}}</td>
            <td data-prop="P5V5">{{P5V5}}</td>
            <td data-prop="P5V6">{{P5V6}}</td>
         </tr>
         {{#endeach}}
      </tbody>
   </table>
</div>`,
    Proto: {
        IsEmpty: ''
    },
    PropFormat: {
        IsEmpty: (x, p) => (p.Part5 || []).length > 0 ? '' : `<tr><td class="empty-row" colspan="6">Нет данных</td></tr>`,
        DateStart: (d)=>Lure.Date(d).Format('DD.MM.YYYY'),
        DateFinish: (d)=>Lure.Date(d).Format('DD.MM.YYYY'),
        'P5V5': (UserID)=>{
            let User = Lure.User.Cache.UserList.Where(x=>x.ID === UserID).FirstOrDefault();
            if (User === null)
                return 'Не задан *';
            return User.Name
        }
    },
    Show: function () {

    }
});