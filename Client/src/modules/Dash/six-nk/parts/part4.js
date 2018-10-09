Dash.SixNK.SixNKPart4 = new Lure.Content({
    Name: 'SixNKPart4',
    Target: '',
    Type: 'SixNK-content',
    Parent: Dash.SixNK,
    Control: {
        Target: '.six-nk .req-tab.p4'
    },
    Content:
`<div class="data-part">
    <div class="strong border">4. Число пользователей и посещений библиотеки</div>
    <div>
        <table>
            <thead>
                <tr>
                    <th rowspan="3">№ строки</th>
                    <th colspan="5">Число зарегистрированных пользователей библиотеки, человек</th>
                    <th colspan="3">Число посещений библиотеки, посещений</th>
                    <th colspan="2">Число обращений </th>
                </tr>
                <tr>
                    <th rowspan="2">всего</th>
                    <th colspan="3">в том числе пользователей, обслуженных в стенах библиотеки (из гр. 2)</th>
                    <th rowspan="2">в том числе удаленных пользователей (из гр. 2)</th>
                    <th rowspan="2">всего</th>
                    <th rowspan="2">из них для получения библиотечно-информационных услуг (из гр. 7)</th>
                    <th rowspan="2">число посещений массовых мероприятий (из гр. 7)</th>
                    <th rowspan="2">всего</th>
                    <th rowspan="2">из них обращений к веб-сайту (из гр. 10)</th>
                </tr>
                <tr>
                    <th>всего</th>
                    <th>из них (из гр. 3) дети до 14 лет включительно</th>
                    <th>из них (из гр. 3) молодежь 15 - 30 лет</th>
                </tr>
                <tr>
                    <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="center">12</td>
                    <td class="center">{{P4L12V2}}</td>
                    <td class="center">{{P4L12V3}}</td>
                    <td class="center">{{P4L12V4}}</td>
                    <td class="center">{{P4L12V5}}</td>
                    <td class="center">{{P4L12V6}}</td>
                    <td class="center">{{P4L12V7}}</td>
                    <td class="center">{{P4L12V8}}</td>
                    <td class="center">{{P4L12V9}}</td>
                    <td class="center">{{P4L12V10}}</td>
                    <td class="center">{{P4L12V11}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`,
    Proto: {
        P4L12V2: 0,
        P4L12V3: 0,
        P4L12V4: 0,
        P4L12V5: 0,
        P4L12V6: 0,
        P4L12V7: 0,
        P4L12V8: 0,
        P4L12V9: 0,
        P4L12V10: 0,
        P4L12V11: 0,
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