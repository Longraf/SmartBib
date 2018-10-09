Dash.DashSummary.Part1 = new Lure.Content({
    Name: 'DashPart1',
    Target: '.summary-content',
    Type: 'dash-summary-content',
    Visible: true,
    Control:{
        Target: '#nav-dash-summ-p1'
    },
    Permission: {
        Roles: [Dictionary.Role.Dashboard]
    },
    Content:
`<div>
   <div class="part-header">
      <div class="req-tab selected p11">ЗАПИСЬ И ПОСЕЩЕНИЯ</div>
      <div class="req-tab p12">МЕРОПРИЯТИЯ И КЛУБЫ</div>
   </div>
   <table class="data-table p11 fixed-height">
      <thead class="thead">
         <tr class="trow head-1">
            <th colspan="1" rowspan="2" >Дата</th>
            <th colspan="1" rowspan="2" >Всего</th>
            <th colspan="1" rowspan="2" >Вновь записавшихся</th>
            <th colspan="1" rowspan="2" >Всего стационар</th>
            <th colspan="2" rowspan="1" >Возраст</th>
            <th colspan="1" rowspan="2" >Удаленные пользователи</th>
            <th colspan="5" rowspan="1" >Школьники</th>
            <th colspan="4" rowspan="1" >Отдельные группы</th>
            <th colspan="1" rowspan="2" >Всего посещений</th>
            <th colspan="3" rowspan="1" >В том числе</th>
         </tr>
         <tr class="trow head-2">
            <th colspan="1" rowspan="1" >до 14 лет</th>
            <th colspan="1" rowspan="1" >14-30 лет</th>
            <th colspan="1" rowspan="1" >д/ш</th>
            <th colspan="1" rowspan="1" >7-10 лет</th>
            <th colspan="1" rowspan="1" >11-14 лет</th>
            <th colspan="1" rowspan="1" >Старшеклассники</th>
            <th colspan="1" rowspan="1" >РДЧ</th>
            <th colspan="1" rowspan="1" >Пенсионеры</th>
            <th colspan="1" rowspan="1" >Служащие</th>
            <th colspan="1" rowspan="1" >Студенты</th>
            <th colspan="1" rowspan="1" >Прочие</th>
            <th colspan="1" rowspan="1" >Стационар</th>
            <th colspan="1" rowspan="1" >Внестационар</th>
            <th colspan="1" rowspan="1" >Интернет</th>
         </tr>
      </thead>
      <tbody>
         {{#each p11}}
         <tr class="{{#if ($this.QQQ===-2) ? 'special-day' : ''}} {{#if ($this.IsDayOff) ? 'day-off' : ''}}">
            <td data-prop="DV">{{DateValue}}</td>
            <td data-prop="P1V2">{{P1V2}}</td>
            <td data-prop="P1V3">{{P1V3}}</td>
            <td data-prop="P1V4">{{P1V4}}</td>
            <td data-prop="P1V5">{{P1V5}}</td>
            <td data-prop="P1V6">{{P1V6}}</td>
            <td data-prop="P1V7">{{P1V7}}</td>
            <td data-prop="P1V8">{{P1V8}}</td>
            <td data-prop="P1V9">{{P1V9}}</td>
            <td data-prop="P1V10">{{P1V10}}</td>
            <td data-prop="P1V11">{{P1V11}}</td>
            <td data-prop="P1V12">{{P1V12}}</td>
            <td data-prop="P1V13">{{P1V13}}</td>
            <td data-prop="P1V14">{{P1V14}}</td>
            <td data-prop="P1V15">{{P1V15}}</td>
            <td data-prop="P1V16">{{P1V16}}</td>
            <td data-prop="P1V17">{{P1V17}}</td>
            <td data-prop="P1V18">{{P1V18}}</td>
            <td data-prop="P1V19">{{P1V19}}</td>
            <td data-prop="P1V20">{{P1V20}}</td>
         </tr>
         {{#endeach}}
      </tbody>
   </table>
   <table class="data-table p12 fixed-height none">
      <thead class="thead">
         <tr class="trow head-1">
            <th colspan="1" rowspan="2" >Дата</th>
            <th colspan="1" rowspan="2" >Всего посещений мероприятия стационар</th>
            <th colspan="2" rowspan="1" >Посещения мероприятий</th>
            <th colspan="1" rowspan="2" >Всего мероприятий</th>
            <th colspan="2" rowspan="1" >Количество мероприятий</th>
            <th colspan="1" rowspan="2" >Всего посещений мероприятия внестационар</th>
            <th colspan="2" rowspan="1" >Посещения мероприятий</th>
            <th colspan="1" rowspan="2" >Всего мероприятий внестационар</th>
            <th colspan="2" rowspan="1" >Посещения мероприятий</th>
            <th colspan="2" rowspan="1" >Бесплатные клубы</th>
            <th colspan="2" rowspan="1" >Платные клубы</th>
         </tr>
         <tr class="trow head-2">
            <th colspan="1" rowspan="1" >Бесплатные</th>
            <th colspan="1" rowspan="1" >Платные</th>
            <th colspan="1" rowspan="1" >Бесплатные</th>
            <th colspan="1" rowspan="1" >Платные</th>
            <th colspan="1" rowspan="1" >Бесплатные</th>
            <th colspan="1" rowspan="1" >Платные</th>
            <th colspan="1" rowspan="1" >Бесплатные</th>
            <th colspan="1" rowspan="1" >Платные</th>
            <th colspan="1" rowspan="1" >Количество заседаний</th>
            <th colspan="1" rowspan="1" >Число посещений</th>
            <th colspan="1" rowspan="1" >Количество заседаний</th>
            <th colspan="1" rowspan="1" >Число посещений</th>
         </tr>
      </thead>
      <tbody>
         {{#each p12}}
         <tr class="{{#if ($this.QQQ===-2) ? 'special-day' : ''}} {{#if ($this.IsDayOff) ? 'day-off' : ''}}">
            <td data-prop="DV">{{DateValue}}</td>
            <td data-prop="P1V21">{{P1V21}}</td>
            <td data-prop="P1V22">{{P1V22}}</td>
            <td data-prop="P1V23">{{P1V23}}</td>
            <td data-prop="P1V24">{{P1V24}}</td>
            <td data-prop="P1V25">{{P1V25}}</td>
            <td data-prop="P1V26">{{P1V26}}</td>
            <td data-prop="P1V27">{{P1V27}}</td>
            <td data-prop="P1V28">{{P1V28}}</td>
            <td data-prop="P1V29">{{P1V29}}</td>
            <td data-prop="P1V30">{{P1V30}}</td>
            <td data-prop="P1V31">{{P1V31}}</td>
            <td data-prop="P1V32">{{P1V32}}</td>
            <td data-prop="P1V33">{{P1V33}}</td>
            <td data-prop="P1V34">{{P1V34}}</td>
            <td data-prop="P1V35">{{P1V35}}</td>
            <td data-prop="P1V36">{{P1V36}}</td>
         </tr>
         {{#endeach}}
      </tbody>
   </table>
</div>`,
    Show: function () {
        this.Proto.Refresh()
    },
    Props: function () {
        this.SelectedTab = this.Select('.req-tab.selected');
        this.T_p11 = this.Select('table.p11');
        this.T_p12 = this.Select('table.p12');
    },
    AfterBuild: function () {
        this.AddEventListener('click', '.part-header .req-tab', e => {
            if (e.currentTarget === this.SelectedTab) return;
            this.SelectedTab.classList.remove('selected');
            this.SelectedTab = e.currentTarget;
            let cl = e.currentTarget.classList;
            cl.add('selected');
            if (cl.contains('p11')) {
                this.T_p11.classList.remove('none');
                this.T_p12.classList.add('none');
            }
            if (cl.contains('p12')) {
                this.T_p11.classList.add('none');
                this.T_p12.classList.remove('none');
            }

        })
    }
});