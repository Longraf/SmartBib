WDash.SixNK.SixNKPart5 = new Lure.Content({
    Name: 'SixNKPart5',
    Target: '',
    Type: 'SixNK-content',
    Parent: WDash.SixNK,
    Control: {
        Target: '.six-nk .req-tab.p5'
    },
    Content:
`<div class="data-part">
    <div class="strong border">5. Библиотечно-информационное обслуживание пользователей</div>
    <div>
        <div class="right">Код по ОКЕИ: единица - 642</div>
        <table>
            <thead>
                <tr>
                    <th rowspan="3">Категории пользователей</th>
                    <th rowspan="3">№ строки</th>
                    <th colspan="5">Выдано (просмотрено) документов из фондов данной библиотеки, единиц</th>
                    <th colspan="3">Выдано (просмотрено) документов из фондов других библиотек, единиц</th>
                    <th rowspan="3">Изготовлено для пользователей</th>
                    <th rowspan="3">Выполнено справок и консультаций, единиц</th>
                </tr>
                <tr>
                    <th rowspan="2">всего</th>
                    <th colspan="4">в том числе (из гр. 3)</th>
                    <th rowspan="2">всего</th>
                    <th colspan="2">в том числе (из гр. 8)</th>
                </tr>
                <tr>
                    <th>из фонда на физических носителях</th>
                    <th>из электронной (цифровой) библиотеки</th>
                    <th>инсталлированных документов</th>
                    <th>сетевых удаленных лицензионных документов</th>
                    <th>полученных по системе МБА и ММБА</th>
                    <th>доступных в виртуальных читальных залах</th>
                </tr>
                <tr>
                    <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>В стационарном режиме</td>
                    <td class="center">13</td>
                    <td class="center">{{P5L13V3}}</td>
                    <td class="center">{{P5L13V4}}</td>
                    <td class="center">{{P5L13V5}}</td>
                    <td class="center">{{P5L13V6}}</td>
                    <td class="center">{{P5L13V7}}</td>
                    <td class="center">{{P5L13V8}}</td>
                    <td class="center">{{P5L13V9}}</td>
                    <td class="center">{{P5L13V10}}</td>
                    <td class="center">{{P5L13V11}}</td>
                    <td class="center">{{P5L13V12}}</td>
                </tr>
                <tr>
                    <td>в том числе дети до 14 лет</td>
                    <td class="center">14</td>
                    <td class="center">{{P5L14V3}}</td>
                    <td class="center">{{P5L14V4}}</td>
                    <td class="center">{{P5L14V5}}</td>
                    <td class="center">{{P5L14V6}}</td>
                    <td class="center">{{P5L14V7}}</td>
                    <td class="center">{{P5L14V8}}</td>
                    <td class="center">{{P5L14V9}}</td>
                    <td class="center">{{P5L14V10}}</td>
                    <td class="center">{{P5L14V11}}</td>
                    <td class="center">{{P5L14V12}}</td>
                </tr>
                <tr>
                    <td>в том числе молодежь 14 - 30 лет</td>
                    <td class="center">15</td>
                    <td class="center">{{P5L15V3}}</td>
                    <td class="center">{{P5L15V4}}</td>
                    <td class="center">{{P5L15V5}}</td>
                    <td class="center">{{P5L15V6}}</td>
                    <td class="center">{{P5L15V7}}</td>
                    <td class="center">{{P5L15V8}}</td>
                    <td class="center">{{P5L15V9}}</td>
                    <td class="center">{{P5L15V10}}</td>
                    <td class="center">{{P5L15V11}}</td>
                    <td class="center">{{P5L15V12}}</td>
                </tr>
                <tr>
                    <td>Удаленные пользователи</td>
                    <td class="center">16</td>
                    <td class="center">{{P5L16V3}}</td>
                    <td class="center">{{P5L16V4}}</td>
                    <td class="center">{{P5L16V5}}</td>
                    <td class="center">X</td>
                    <td class="center">{{P5L16V7}}</td>
                    <td class="center">X</td>
                    <td class="center">X</td>
                    <td class="center">X</td>
                    <td class="center">{{P5L16V11}}</td>
                    <td class="center">{{P5L16V12}}</td>
                </tr>
                <tr>
                    <td>Всего (сумма строк 13 и 16)</td>
                    <td class="center">17</td>
                    <td class="center">{{P5L17V3}}</td>
                    <td class="center">{{P5L17V4}}</td>
                    <td class="center">{{P5L17V5}}</td>
                    <td class="center">{{P5L17V6}}</td>
                    <td class="center">{{P5L17V7}}</td>
                    <td class="center">{{P5L17V8}}</td>
                    <td class="center">{{P5L17V9}}</td>
                    <td class="center">{{P5L17V10}}</td>
                    <td class="center">{{P5L17V11}}</td>
                    <td class="center">{{P5L17V12}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`,
    Proto: {
        P5L13V3: 0,
        P5L13V4: 0,
        P5L13V5: 0,
        P5L13V6: 0,
        P5L13V7: 0,
        P5L13V8: 0,
        P5L13V9: 0,
        P5L13V10: 0,
        P5L13V11: 0,
        P5L13V12: 0,

        P5L14V3: 0,
        P5L14V4: 0,
        P5L14V5: 0,
        P5L14V6: 0,
        P5L14V7: 0,
        P5L14V8: 0,
        P5L14V9: 0,
        P5L14V10: 0,
        P5L14V11: 0,
        P5L14V12: 0,

        P5L15V3: 0,
        P5L15V4: 0,
        P5L15V5: 0,
        P5L15V6: 0,
        P5L15V7: 0,
        P5L15V8: 0,
        P5L15V9: 0,
        P5L15V10: 0,
        P5L15V11: 0,
        P5L15V12: 0,

        P5L16V3: 0,
        P5L16V4: 0,
        P5L16V5: 0,
        P5L16V6: 0,
        P5L16V7: 0,
        P5L16V8: 0,
        P5L16V9: 0,
        P5L16V10: 0,
        P5L16V11: 0,
        P5L16V12: 0,

        P5L17V3: 0,
        P5L17V4: 0,
        P5L17V5: 0,
        P5L17V6: 0,
        P5L17V7: 0,
        P5L17V8: 0,
        P5L17V9: 0,
        P5L17V10: 0,
        P5L17V11: 0,
        P5L17V12: 0
    },
    Show: function () {
        if (!this.Parent.Updated) {
            this.Parent.RefreshData();
            this.Parent.Updated = true;
        }
    },
    Load: 'table',
    Methods: function () {
        this.RefreshData = function (data) {
            for (let key in this.Proto.Data)
                if (this.Proto.Data.hasOwnProperty(key))
                    this.Proto.Data[key] = data[key];
            this.Proto.Refresh();
        }
    }
});