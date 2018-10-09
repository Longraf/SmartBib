Dash.DashSummary.Part2 = new Lure.Content({
    Name: 'DashPart2',
    Target: '.summary-content',
    Type: 'dash-summary-content',
    Control:{
        Target: '#nav-dash-summ-p2'
    },
    Permission: {
        Roles: [Dictionary.Role.Dashboard]
    },
    Content:
`<div>
   <div class="part-header">
      <div class="req-tab selected p21">КНИГИ И БРОШЮРЫ</div>
      <div class="req-tab p22">ДОКУМЕНТЫ И КОПИИ</div>
      <div class="req-tab p23">СПРАВКИ И КОНСУЛЬТАЦИИ</div>
   </div>
   <table class="data-table fixed-height p21">
      <thead class="thead">
         <tr class="trow head-1">
            <th colspan="1" rowspan="2" >Дата</th>
            <th colspan="1" rowspan="2" >Всего выдано</th>
            <th colspan="5" rowspan="1" >По типу носителя</th>
            <th colspan="11" rowspan="1" >По содержанию</th>
         </tr>
         <tr class="trow head-2">
            <th colspan="1" rowspan="1" >На физ носителях</th>
            <th colspan="1" rowspan="1" >Внестационар и на дому (6.1, 6.2)</th>
            <th colspan="1" rowspan="1" >Из электронной библиотеки</th>
            <th colspan="1" rowspan="1" >Инсталированные</th>
            <th colspan="1" rowspan="1" >Удаленные лицензионные</th>
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
         </tr>
      </thead>
      <tbody>
         {{#each p21}}
         <tr class="{{#if ($this.QQQ===-2) ? 'special-day' : ''}} {{#if ($this.IsDayOff) ? 'day-off' : ''}}">
            <td data-prop="DV">{{DateValue}}</td>
            <td data-prop="P2V2">{{P2V2}}</td>
            <td data-prop="P2V3">{{P2V3}}</td>
            <td data-prop="P2V4">{{P2V4}}</td>
            <td data-prop="P2V5">{{P2V5}}</td>
            <td data-prop="P2V6">{{P2V6}}</td>
            <td data-prop="P2V7">{{P2V7}}</td>
            <td data-prop="P2V8">{{P2V8}}</td>
            <td data-prop="P2V9">{{P2V9}}</td>
            <td data-prop="P2V10">{{P2V10}}</td>
            <td data-prop="P2V11">{{P2V11}}</td>
            <td data-prop="P2V12">{{P2V12}}</td>
            <td data-prop="P2V13">{{P2V13}}</td>
            <td data-prop="P2V14">{{P2V14}}</td>
            <td data-prop="P2V15">{{P2V15}}</td>
            <td data-prop="P2V16">{{P2V16}}</td>
            <td data-prop="P2V17">{{P2V17}}</td>
            <td data-prop="P2V18">{{P2V18}}</td>
         </tr>
         {{#endeach}}
      </tbody>
   </table>
   <table class="data-table p22 fixed-height none">
      <thead class="thead">
         <tr class="trow head-1">
            <th colspan="1" rowspan="2" >Дата</th>
            <th colspan="6" rowspan="1" >Выдано документов детям до 14 лет</th>
            <th colspan="6" rowspan="1" >Выдано документов пользователям 14-30 лет</th>
            <th colspan="3" rowspan="1" >Изготовлено и выдано копий</th>
         </tr>
         <tr class="trow head-2">
            <th colspan="1" rowspan="1" >Всего выдано</th>
            <th colspan="1" rowspan="1" >На физ носителях</th>
            <th colspan="1" rowspan="1" >Внестационар и на дому (6.1, 6.2)</th>
            <th colspan="1" rowspan="1" >Из электронной библиотеки</th>
            <th colspan="1" rowspan="1" >Инсталированные</th>
            <th colspan="1" rowspan="1" >Удаленные лицензионные</th>
            <th colspan="1" rowspan="1" >Всего выдано</th>
            <th colspan="1" rowspan="1" >На физ носителях</th>
            <th colspan="1" rowspan="1" >Внестационар и на дому (6.1, 6.2)</th>
            <th colspan="1" rowspan="1" >Из электронной библиотеки</th>
            <th colspan="1" rowspan="1" >Инсталированные</th>
            <th colspan="1" rowspan="1" >Удаленные лицензионные</th>
            <th colspan="1" rowspan="1" >Всего</th>
            <th colspan="1" rowspan="1" >Детям до 14 лет</th>
            <th colspan="1" rowspan="1" >Пользователям 14-30 лет</th>
         </tr>
      </thead>
      <tbody>
         {{#each p22}}
         <tr class="{{#if ($this.QQQ===-2) ? 'special-day' : ''}} {{#if ($this.IsDayOff) ? 'day-off' : ''}}">
            <td data-prop="DV">{{DateValue}}</td>
            <td data-prop="P2V19">{{P2V19}}</td>
            <td data-prop="P2V20">{{P2V20}}</td>
            <td data-prop="P2V21">{{P2V21}}</td>
            <td data-prop="P2V22">{{P2V22}}</td>
            <td data-prop="P2V23">{{P2V23}}</td>
            <td data-prop="P2V24">{{P2V24}}</td>
            <td data-prop="P2V25">{{P2V25}}</td>
            <td data-prop="P2V26">{{P2V26}}</td>
            <td data-prop="P2V27">{{P2V27}}</td>
            <td data-prop="P2V28">{{P2V28}}</td>
            <td data-prop="P2V29">{{P2V29}}</td>
            <td data-prop="P2V30">{{P2V30}}</td>
            <td data-prop="P2V31">{{P2V31}}</td>
            <td data-prop="P2V32">{{P2V32}}</td>
            <td data-prop="P2V33">{{P2V33}}</td>
         </tr>
         {{#endeach}}
      </tbody>
   </table>
   <table class="data-table p23 fixed-height none">
      <thead class="thead">
         <tr class="trow head-1">
            <th colspan="1" rowspan="2" >Дата</th>
            <th colspan="1" rowspan="2" >Всего выдано из фондов других библиотек</th>
            <th colspan="2" rowspan="1" >Выдано (просмотрено) док-ов из фондов других библиотек, единиц</th>
            <th colspan="1" rowspan="2" >Всего выполнено справок и консультаций</th>
            <th colspan="2" rowspan="1" >По возрасту</th>
            <th colspan="5" rowspan="1" >По типу</th>
         </tr>
         <tr class="trow head-2">
            <th colspan="1" rowspan="1" >По системе МБА и ММБА</th>
            <th colspan="1" rowspan="1" >Виртуальные читальные залы</th>
            <th colspan="1" rowspan="1" >до 14 лет</th>
            <th colspan="1" rowspan="1" >14-30 лет</th>
            <th colspan="1" rowspan="1" >Тематические</th>
            <th colspan="1" rowspan="1" >Фактографич.</th>
            <th colspan="1" rowspan="1" >Библиографич.</th>
            <th colspan="1" rowspan="1" >Консультации</th>
            <th colspan="1" rowspan="1" >Удаленные справки</th>
         </tr>
      </thead>
      <tbody>
         {{#each p23}}
         <tr class="{{#if ($this.QQQ===-2) ? 'special-day' : ''}} {{#if ($this.IsDayOff) ? 'day-off' : ''}}">
            <td data-prop="DV">{{DateValue}}</td>
            <td data-prop="P2V34">{{P2V34}}</td>
            <td data-prop="P2V35">{{P2V35}}</td>
            <td data-prop="P2V36">{{P2V36}}</td>
            <td data-prop="P2V37">{{P2V37}}</td>
            <td data-prop="P2V38">{{P2V38}}</td>
            <td data-prop="P2V39">{{P2V39}}</td>
            <td data-prop="P2V40">{{P2V40}}</td>
            <td data-prop="P2V41">{{P2V41}}</td>
            <td data-prop="P2V42">{{P2V42}}</td>
            <td data-prop="P2V43">{{P2V43}}</td>
            <td data-prop="P2V44">{{P2V44}}</td>
         </tr>
         {{#endeach}}
      </tbody>
   </table>
</div>`,
    Show: function () {

    },
    Props: function () {
        this.SelectedTab = this.Select('.req-tab.selected');
        this.T_p21 = this.Select('table.p21');
        this.T_p22 = this.Select('table.p22');
        this.T_p23 = this.Select('table.p23');
    },
    AfterBuild: function () {
        this.AddEventListener('click', '.part-header .req-tab', e => {
            if (e.currentTarget === this.SelectedTab) return;
            this.SelectedTab.classList.remove('selected');
            this.SelectedTab = e.currentTarget;
            let cl = e.currentTarget.classList;
            cl.add('selected');
            if (cl.contains('p21')) {
                this.T_p21.classList.remove('none');
                this.T_p22.classList.add('none');
                this.T_p23.classList.add('none');
            }
            if (cl.contains('p22')) {
                this.T_p21.classList.add('none');
                this.T_p22.classList.remove('none');
                this.T_p23.classList.add('none');
            }
            if (cl.contains('p23')) {
                this.T_p21.classList.add('none');
                this.T_p22.classList.add('none');
                this.T_p23.classList.remove('none');
            }

        })
    }
});