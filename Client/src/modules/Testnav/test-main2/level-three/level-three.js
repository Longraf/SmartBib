Testnav.TestMain2.Level3v2 = new Lure.Content({
    Parent: Testnav.TestMain2,
    Name: 'Level3v2',
    Type: 'diary-summary-content',
    Control:{
        Target: '#nav-test-main2-1',
    },
    // Visible: true,
    Content: `<div class="summary-part">
                  <p style="padding-top: 20px">Второй стол - Параграф 1W</p>
                  <p>Второй стол - Параграф 2W</p>
                  <p>Второй стол - Параграф 3W</p>
                  <p>Второй стол - Параграф 4W</p>
                  <p>Второй стол - Параграф 5W</p>
              </div>`,

    // Show(){
    //     this.Parent.Subscription.Subscribe();
    // },
    Refresh: function () {
    },
    AfterBuild: function () {
        let yearMounth = {
            0: 'Январь',
            1: 'Февраль',
            2: 'Март',
            3: 'Апрель',
            4: 'Май',
            5: 'Июнь',
            6: 'Июль',
            7: 'Август',
            8: 'Сентябрь',
            9: 'Октябрь',
            10: 'Ноябрь',
            11: 'Декабрь',
        };
        console.log(`${new Date().getMonth() + 1} число это - ${yearMounth[new Date().getMonth() ]}`);
    }
});