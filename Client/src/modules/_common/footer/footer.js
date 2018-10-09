let Footer = new Lure.Content({
    Name: 'Footer',
    Target: 'body',
    Content: `<div class="footer l-row">
                  <div class="foot-left l-row">
                    <div class="foot-item">Организация: {{Organisation}}</div>  
                    <div class="foot-item">|</div>
                    <div class="foot-item">ID клиента: {{ClientID}}</div>  
                    <div class="foot-item">|</div>  
                    <div class="foot-item">№ лицензии: {{LicenseID}}</div>  
                  </div>
                  <div class="foot-right l-row">
                    <div class="foot-item">© ${Lure.Date().Format('YYYY')} БиблиоPRO</div>    
                    <div class="foot-item">|</div>  
                    <div class="foot-item">Круглосуточная служба технической поддержки 8-800-228-14-88</div>  
                  </div>
              </div>`,
    State: {
        Organisation: 'ГБУК г. Москвы «ЦБС ЦАО»',
        ClientID: 'L234324324324',
        LicenseID: '010201020102010201',
    },
    AfterBuild: function () {
        //this.Proto.SetProperty('Name', Lure.User.Name);
        //this.Proto.SetProperty('Position', Dictionary.UserPositionDict[Lure.User.PositionID]);
    }
});