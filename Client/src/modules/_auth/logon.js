let Login = new Lure.Content({
    Name: 'Login',
    Target: '.body',
    //Type: 'module',
    Content: `<div class="authentication">
                  <div class="logo"></div>
                    <input class="textbox textbox-login" id="auth-login" type="text"     placeholder="Логин"  value="Admin">
                    <input class="textbox textbox-pass"  id="auth-pass"  type="password" placeholder="Пароль" value="pass2root">
                    <div class="l-row l-flex-between wid-100">
                        <div class="auth-remember">
                            <input type="checkbox" class="l-checkbox" id="ch-remember" checked="checked">
                            <label class="l-checkbox-label" for="ch-remember">Запомнить меня</label>
                        </div>
                        <div class="auth-forget l-pointer">Забыли пароль?</div>
                    </div>
                    <button class="l-button button" id="btn-auth-login" type="button">ВХОД</button>
                    <div class="error" id="error"><span>Неправильный логин или пароль</span></div>
                </div>`,
    Route: function(token){
        api.User_PasswordRestore(token, {
            Then: (r)=>{
                if (r > 0)
                {
                    document.location.href = 'main.html?Account/';
                }
                else{
                    Lure.System.Notice('Не удалось восстановить пароль');
                    this.Show();
                }
            },
            Catch: ()=>{
                this.Show();
            }
        });

    },
    SubContent: function(){
        this.PwdRestore = new Lure.Content({
            Target: '.body',
            Global: true,
            Dialog: true,
            Content: `<div class="pwd-restore">
                        <div class="l-row">
                          <div><input class="textbox l-textbox textbox-email" type="email" placeholder="exapmle@host.org"></div>
                          <button class="button l-button btn-restore-pass">Отправить</button>    
                        </div>
                      </div>`,
            Props: function(){
                this.ButtonSendRestore = this.Select('.btn-restore-pass');
                this.TextboxEmail = this.Select('.textbox-email');
            },
            Methods: function(){
                this.RestoreSend = function () {
                    let Email = this.TextboxEmail.value;
                    if (Email === '')
                        return Lure.System.Warn('Введите адрес электронной почты');
                    Lure.Button.Lock(this.ButtonSendRestore);
                    api.User_PasswordRestore_GetToken(Email, {
                        Then: (res)=>{
                            if (res === -3){
                                Lure.System.ShowNotice('Пользователь с таким Email не найден')
                            }
                            else if (res === -2){
                                Lure.System.ShowNotice('Пользователь удален')
                            }
                            else if (res === -1){
                                Lure.System.ShowNotice('Не удалось отправить на указанный адрес')
                            }
                            else if (res > 0){
                                Lure.System.Success('Ссылка восстановления пароля отправлена на указанный адрес')
                            }
                        },
                        Catch: (e)=>{
                            Lure.System.Error('Неизвестная ошибка сервера', e)
                        },
                        Finally: ()=>{
                            Lure.Button.Release(this.ButtonSendRestore);
                        }
                    });
                }
            },
            AfterBuild: function() {
                this.ButtonSendRestore.addEventListener('click', ()=>{
                    this.RestoreSend();
                })
            }
        });
    },
    Props: function () {
        this.InputLogin  = this.Select('#auth-login');
        this.InputPass   = this.Select('#auth-pass');
        this.ButtonLogin = this.Select('#btn-auth-login');
    },
    Methods: function () {
        this.Login = function () {
            let Login = this.InputLogin.value.trim();
            let Pass = this.InputPass.value.trim();
            if (Login === '')
                return Lure.ErrorHint(this.InputLogin, 'Введите логин');
            if (Pass === '')
                return Lure.ErrorHint(this.InputPass, 'Введите пароль');
            Lure.Button.Lock(this.ButtonLogin);
            api.Login(Login, Pass, null)
                .then(()=>{
                    //Lure.Button.Release(this.ButtonLogin);
                    document.location.href = 'main.html';
                })
                .catch(()=>{
                    Lure.System.Error('Неправильный логин или пароль');
                    Lure.Button.Release(this.ButtonLogin);
                })
        };
        this.LoginByInput = function (e) {
            if (e.keyCode === 13)
                this.Login();
        }
    },
    AfterBuild: function () {
        this.ButtonLogin.onclick = this.Login;
        this.InputLogin.onkeyup  = this.LoginByInput;
        this.InputPass.onkeyup   = this.LoginByInput;

        this.Select('.auth-forget').addEventListener('click', ()=>{
            this.PwdRestore.Show();
        });
    }
});
window.Login = Login;
module.exports = Login;