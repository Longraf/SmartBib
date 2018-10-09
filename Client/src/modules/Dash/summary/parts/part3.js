Dash.DashSummary.Part3 = new Lure.Content({
    Name: 'DashPart3',
    Target: '.summary-content',
    Type: 'dash-summary-content',
    Control:{
        Target: '#nav-dash-summ-p3'
    },
    Permission: {
        Roles: [Dictionary.Role.Dashboard]
    },
    Content:
`<div>
   <div class="part-header">
      <div class="req-tab selected">УЧЕТ ВЫДАЧИ ЭЛЕКТРОННЫХ РЕСУРСОВ</div>
   </div>
   <table class="data-table fixed-height">
      <thead class="thead">
         <tr class="trow head-1">
            <th colspan="1" rowspan="2" >Дата</th>
            <th colspan="1" rowspan="2" >Всего выдано</th>
            <th colspan="4" rowspan="1" >По типу носителя</th>
         </tr>
         <tr class="trow head-2">
            <th colspan="1" rowspan="1" >Инсталлированные документы</th>
            <th colspan="1" rowspan="1" >Сетевые удаленные лицензионные</th>
            <th colspan="1" rowspan="1" >Из электронной (цифровой) библиотеки</th>
            <th colspan="1" rowspan="1" >DVD / CD-ROM</th>
         </tr>
      </thead>
      <tbody>
         {{#each p3}}
         <tr class="{{#if ($this.QQQ===-2) ? 'special-day' : ''}} {{#if ($this.IsDayOff) ? 'day-off' : ''}}">
            <td data-prop="DV">{{DateValue}}</td>
            <td data-prop="P3V2">{{P3V2}}</td>
            <td data-prop="P3V3">{{P3V3}}</td>
            <td data-prop="P3V4">{{P3V4}}</td>
            <td data-prop="P3V5">{{P3V5}}</td>
            <td data-prop="P3V6">{{P3V6}}</td>
         </tr>
         {{#endeach}}
      </tbody>
   </table>
</div>`,
    Show: function () {

    }
});