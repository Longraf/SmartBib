WDash.WDashSummary.Part4 = new Lure.Content({
    Name: 'DashPart4',
    Target: '.summary-content',
    Type: 'dash-summary-content',
    Control:{
        Target: '#nav-wdash-summ-p4'
    },
    Permission: {
        Roles: [Dictionary.Role.Dashboard]
    },
    Content:
`<div>
   <div class="part-header">
      <div class="req-tab selected">КУЛЬТУРНО-МАССОВАЯ РАБОТА</div>
   </div>
   <table class="data-table">
      <thead class="thead">
         <tr class="trow head-1">
            <th colspan="1" rowspan="2" >Даты проведения</th>
            <th colspan="1" rowspan="2" >Название мероприятия</th>
            <th colspan="1" rowspan="2" >Форма проведения</th>
            <th colspan="5" rowspan="1" >Стационар</th>
            <th colspan="5" rowspan="1" >Внестационар</th>
            <th colspan="3" rowspan="1" >Бесплатные клубы</th>
            <th colspan="3" rowspan="1" >Платные клубы</th>
            <th colspan="1" rowspan="2" >Выездное (название)</th>
            <th colspan="1" rowspan="2" >Ответственный</th>
         </tr>
         <tr class="trow head-2">
            <th colspan="1" rowspan="1" >Бесплатно</th>
            <th colspan="1" rowspan="1" >Платно</th>
            <th colspan="1" rowspan="1" >Инвалиды</th>
            <th colspan="1" rowspan="1" >Мигранты</th>
            <th colspan="1" rowspan="1" >Проф. семинары, лекции, и т.п.</th>
            <th colspan="1" rowspan="1" >Бесплатно</th>
            <th colspan="1" rowspan="1" >Платно</th>
            <th colspan="1" rowspan="1" >Инвалиды</th>
            <th colspan="1" rowspan="1" >Мигранты</th>
            <th colspan="1" rowspan="1" >Проф. семинары, лекции, и т.п.</th>
            <th colspan="1" rowspan="1" >Посещения</th>
            <th colspan="1" rowspan="1" >Инвалиды</th>
            <th colspan="1" rowspan="1" >Мигранты</th>
            <th colspan="1" rowspan="1" >Посещения</th>
            <th colspan="1" rowspan="1" >Инвалиды</th>
            <th colspan="1" rowspan="1" >Мигранты</th>
         </tr>
      </thead>
      <tbody>
         {{IsEmpty}}
         {{#each Part4}}
         <tr>
            <td data-prop="P4V1">{{DateStart}}<br>{{DateFinish}}</td>
            <td data-prop="P4V2" style="white-space: pre-wrap;">{{P4V2}}</td>
            <td data-prop="P4V3">{{P4V3}}</td>
            <td data-prop="P4V4">{{P4V4}}</td>
            <td data-prop="P4V5">{{P4V5}}</td>
            <td data-prop="P4V6">{{P4V6}}</td>
            <td data-prop="P4V7">{{P4V7}}</td>
            <td data-prop="P4V8">{{P4V8}}</td>
            <td data-prop="P4V9">{{P4V9}}</td>
            <td data-prop="P4V10">{{P4V10}}</td>
            <td data-prop="P4V11">{{P4V11}}</td>
            <td data-prop="P4V12">{{P4V12}}</td>
            <td data-prop="P4V13">{{P4V13}}</td>
            <td data-prop="P4V14">{{P4V14}}</td>
            <td data-prop="P4V15">{{P4V15}}</td>
            <td data-prop="P4V16">{{P4V16}}</td>
            <td data-prop="P4V17">{{P4V17}}</td>
            <td data-prop="P4V18">{{P4V18}}</td>
            <td data-prop="P4V19">{{P4V19}}</td>
            <td data-prop="P4V20" title='{{P4V20}}' class="cut-cell">{{P4V20}}</td>
            <td data-prop="P4V21" title='{{P4V21}}' class="cut-cell">{{P4V21}}</td>
         </tr>
         {{#endeach}}
      </tbody>
   </table>
</div>`,
    Proto: {
        IsEmpty: ''
    },
    PropFormat: {
        DateStart: x => Lure.Date(x).Format('DD.MM.YYYY'),
        DateFinish: x => Lure.Date(x).Format('DD.MM.YYYY'),
        P4V3: x => Dictionary.EventTypeDict[x] || x,
        'IsEmpty': (x, p) => (p.Part4 || []).length > 0 ? '' : `<tr><td class="empty-row" colspan="21">Нет данных</td></tr>`,
        'P4V21': (UserID)=>{
            let User = Lure.User.Cache.UserList.Where(x=>x.ID === UserID).FirstOrDefault();
            if (User === null)
                return 'Не задан *';
            return User.Name
        }
    },
    Show: function () {

    }
});