DataInput.DataPlanInput.PlanChart = new Lure.Content({
    Parent: DataInput.DataPlanInput,
    Target: '.data-plan-wrapper',
    Content: `<div class="plan-chart flex-100">
              </div>`,
    Props: function () {
        let labels = (()=>{
            let d = new Date(this.Parent.CurrentYear,0,1);
            let y = [];
            for (let i = 0 ; i < 365; i++)
            {
                    y.push(d);
                d = Lure.Date(d).AddDays(1).Date;
            }
            return y
        })();
        let data = () => (new Array(365)).Select(() => 0);
        this.Chart = new Lure.Chart({
            DrawAfterInit: false,
            Target: this.Content,
            Type: 'Line',
            Legend: {Position: 'right',},
            AxisX: {
                Data: labels,
                Format: (Val) => Lure.Date(Val).Format('MMMM'),
                Skip: (val) => val.getDate() !== 1
            },

            Series: [
                {
                    Name: 'Посещения',
                    Color: '#65599E',
                    Data: data(),
                    AxisX: {},
                    Marker: {Visible: false},
                    AxisY0: {Position: 'right'}
                }, {
                    Name: 'Книговыдача',
                    Color: '#9F4944',
                    AxisY3: {Max: 40},
                    Data: data(),
                }, {
                    Name: 'Запись',
                    Color: '#53AA62',
                    AxisY3: {},
                    Data: data(),
                },
            ],
            SeriesOptions: {
                Marker: {Visible: false}
            },
            Tooltip: {
                Format: (Tip) =>
                    `<div class="tip">
                        <div class="tip-bg"></div>
                        <div class="tip-value">
                            <div class="l-row">
                                <div class="tip-icon" style="background-color: ${Tip.Episode.Color}"></div>
                                <div class="tip-label">${Lure.Date(Tip.ValueX).Format('D MMMM YYYY', true)}</div>
                            </div>
                            <div class="l-row">${Tip.Episode.Name}: ${Tip.Value}</div>
                        </div>
                    </div>`
            }
        })
    },
    Methods: function () {
        /** @return {number} */
        this.DaysInMonth = function (month, year = this.Parent.CurrentYear) {
            if (month < 1 || month > 12) return 0;
            return new Date(year, month, 0).getDate();
        };
        /** @return {number} */
        this.DaysUntilMonth = function (month) {
            if (month < 1 || month > 12) return -1;
            if (this.MonthSizes) return this.MonthSizes[month];
            this.MonthSizes = [0, 0];
            for (let i = 2; i <= 12; i++) {
                this.MonthSizes.push(this.DaysInMonth(i - 1));
            }
            this.MonthSizes.reduce((x, y, t, m) => m[t] = x + y);
            return this.MonthSizes[month];
        };
        this.ChartRefresh = function () {
            // console.log(this.Parent.AllMonthsData);

            let data = {
                Visitors: (new Array(365)).Select(() => 0),
                Registers: (new Array(365)).Select(() => 0),
                BookGiving: (new Array(365)).Select(() => 0)
            };
            let CY = this.Parent.AllMonthsData[this.Parent.CurrentYear];

            for (let month in CY)
                if (CY.hasOwnProperty(month) && CY[month].length > 0)
                    for (let i = 0; i < this.DaysInMonth(month); i++) {
                        data.Visitors[i + this.DaysUntilMonth(month)] = (CY[month][i].Visitors || 0);
                        data.Registers[i + this.DaysUntilMonth(month)] = (CY[month][i].Registers || 0);
                        data.BookGiving[i + this.DaysUntilMonth(month)] = (CY[month][i].BookGiving || 0);
                    }
            this.Chart.Options.Series[0].Data = data.Visitors;
            this.Chart.Options.Series[1].Data = data.BookGiving;
            this.Chart.Options.Series[2].Data = data.Registers;
            // console.log(data);
            return this.Chart.Redraw();
        }
    }
});