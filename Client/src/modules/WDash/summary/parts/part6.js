WDash.WDashSummary.Part6 = new Lure.Content({
    Name: 'DashPart6',
    Target: '.summary-content',
    Type: 'dash-summary-content',
    Control:{
        Target: '#nav-wdash-summ-p6'
    },
    Permission: {
        Roles: [Dictionary.Role.Dashboard]
    },
    Content:
`<div>
   <div class="part-header">
      <div class="req-tab selected p61">ПОЛЬЗОВАТЕЛИ НА ДОМУ</div>
      <div class="req-tab p62">РАБОТА ПЕРЕДВИЖЕК</div>
   </div>
   <table class="data-table p61 fixed-height">
      <thead>
         <tr class="trow head-1">
            <th colspan="1" rowspan="2" >Дата</th>
            <th colspan="1" rowspan="2" >Зарегестрировано пользователей</th>
            <th colspan="1" rowspan="2" >Из них инвалидов</th>
            <th colspan="1" rowspan="2" >Выдано книг на дом</th>
            <th colspan="3" rowspan="1" >Работа с передвижками</th>
         </tr>
         <tr class="trow head-2">
            <th colspan="1" rowspan="1" >Посещение пользователей</th>
            <th colspan="1" rowspan="1" >Консультация пользователей</th>
            <th colspan="1" rowspan="1" >Семинар передвижников</th>
         </tr>
      </thead>
      <tbody>
         {{#each p61}}
         <tr class="{{#if ($this.QQQ===-2) ? 'special-day' : ''}} {{#if ($this.IsDayOff) ? 'day-off' : ''}}">
            <td data-prop="DV">{{DateValue}}</td>
            <td data-prop="P6V2">{{P61V2}}</td>
            <td data-prop="P6V3">{{P61V3}}</td>
            <td data-prop="P6V4">{{P61V4}}</td>
            <td data-prop="P6V5">{{P61V5}}</td>
            <td data-prop="P6V6">{{P61V6}}</td>
            <td data-prop="P6V7">{{P61V7}}</td>
         </tr>
         {{#endeach}}
      </tbody>
   </table>
   <table class="data-table p62 fixed-height none">
      <thead>
         <tr class="trow head-1">
            <th colspan="1" rowspan="2" >Дата</th>
            <th colspan="1" rowspan="2" >Количество передвижек</th>
            <th colspan="1" rowspan="2" >Число читателей в них</th>
            <th colspan="1" rowspan="2" >Всего выдано книг</th>
            <th colspan="11" rowspan="1" >По тематике</th>
            <th colspan="2" rowspan="1" >Массовые мероприятия</th>
         </tr>
         <tr class="trow head-2">
            <th colspan="1" rowspan="1" >ОПЛ</th>
            <th colspan="1" rowspan="1" >Е/зн</th>
            <th colspan="1" rowspan="1" >Техника</th>
            <th colspan="1" rowspan="1" >С/х</th>
            <th colspan="1" rowspan="1" >Искусство</th>
            <th colspan="1" rowspan="1" >Спорт</th>
            <th colspan="1" rowspan="1" >81.83</th>
            <th colspan="1" rowspan="1" >Справочники</th>
            <th colspan="1" rowspan="1" >Дет. лит-ра</th>
            <th colspan="1" rowspan="1" >Худ. лит-ра</th>
            <th colspan="1" rowspan="1" >Дополнит.</th>
            <th colspan="1" rowspan="1" >Количество</th>
            <th colspan="1" rowspan="1" >Число обслуженных</th>
         </tr>
      </thead>
      <tbody>
         {{#each p62}}
         <tr class="{{#if ($this.QQQ===-2) ? 'special-day' : ''}} {{#if ($this.IsDayOff) ? 'day-off' : ''}}">
            <td data-prop="DV">{{DateValue}}</td>
            <td data-prop="P62V2">{{P62V2}}</td>
            <td data-prop="P62V3">{{P62V3}}</td>
            <td data-prop="P62V4">{{P62V4}}</td>
            <td data-prop="P62V5">{{P62V5}}</td>
            <td data-prop="P62V6">{{P62V6}}</td>
            <td data-prop="P62V7">{{P62V7}}</td>
            <td data-prop="P62V8">{{P62V8}}</td>
            <td data-prop="P62V9">{{P62V9}}</td>
            <td data-prop="P62V10">{{P62V10}}</td>
            <td data-prop="P62V11">{{P62V11}}</td>
            <td data-prop="P62V12">{{P62V12}}</td>
            <td data-prop="P62V13">{{P62V13}}</td>
            <td data-prop="P62V14">{{P62V14}}</td>
            <td data-prop="P62V15">{{P62V15}}</td>
            <td data-prop="P62V16">{{P62V16}}</td>
            <td data-prop="P62V17">{{P62V17}}</td>
         </tr>
         {{#endeach}}
      </tbody>
   </table>
</div>`,
    Show: function () {

    },
    Props: function () {
        this.SelectedTab = this.Select('.req-tab.selected');
        this.T_p61 = this.Select('table.p61');
        this.T_p62 = this.Select('table.p62');
    },
    AfterBuild: function () {
        this.AddEventListener('click', '.part-header .req-tab', e => {
            if (e.currentTarget === this.SelectedTab) return;
            this.SelectedTab.classList.remove('selected');
            this.SelectedTab = e.currentTarget;
            let cl = e.currentTarget.classList;
            cl.add('selected');
            if (cl.contains('p61')) {
                this.T_p61.classList.remove('none');
                this.T_p62.classList.add('none');
            }
            if (cl.contains('p62')) {
                this.T_p61.classList.add('none');
                this.T_p62.classList.remove('none');
            }

        })
    }
});