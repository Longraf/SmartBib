(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
window.DEBUG = true;
window.isMobile = false;


Lure.Settings.Locale = navigator.language.substring(0,2);
Lure.Route.Enabled = false;
Lure.Application.Entry = 'Logon';

Lure.Settings.Controller.Common.Undefined = '???';
//api.debug = true;
//api.debugExcludes.push('ChatMessagesGet');



api.onUnauth = null;
if (window.isMobile){
   //something to do
}

require('./_auth/logon.js');

Lure.Application.Run();
},{"./_auth/logon.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbW9kdWxlcy9fYXV0aC9sb2dvbi5qcyIsInNyYy9tb2R1bGVzL2F1dGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IExvZ2luID0gbmV3IEx1cmUuQ29udGVudCh7XHJcbiAgICBOYW1lOiAnTG9naW4nLFxyXG4gICAgVGFyZ2V0OiAnLmJvZHknLFxyXG4gICAgLy9UeXBlOiAnbW9kdWxlJyxcclxuICAgIENvbnRlbnQ6IGA8ZGl2IGNsYXNzPVwiYXV0aGVudGljYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0ZXh0Ym94IHRleHRib3gtbG9naW5cIiBpZD1cImF1dGgtbG9naW5cIiB0eXBlPVwidGV4dFwiICAgICBwbGFjZWhvbGRlcj1cItCb0L7Qs9C40L1cIiAgdmFsdWU9XCJBZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRleHRib3ggdGV4dGJveC1wYXNzXCIgIGlkPVwiYXV0aC1wYXNzXCIgIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwi0J/QsNGA0L7Qu9GMXCIgdmFsdWU9XCJwYXNzMnJvb3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibC1yb3cgbC1mbGV4LWJldHdlZW4gd2lkLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aC1yZW1lbWJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwibC1jaGVja2JveFwiIGlkPVwiY2gtcmVtZW1iZXJcIiBjaGVja2VkPVwiY2hlY2tlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibC1jaGVja2JveC1sYWJlbFwiIGZvcj1cImNoLXJlbWVtYmVyXCI+0JfQsNC/0L7QvNC90LjRgtGMINC80LXQvdGPPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRoLWZvcmdldCBsLXBvaW50ZXJcIj7Ql9Cw0LHRi9C70Lgg0L/QsNGA0L7Qu9GMPzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJsLWJ1dHRvbiBidXR0b25cIiBpZD1cImJ0bi1hdXRoLWxvZ2luXCIgdHlwZT1cImJ1dHRvblwiPtCS0KXQntCUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgaWQ9XCJlcnJvclwiPjxzcGFuPtCd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70Yw8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gLFxyXG4gICAgUm91dGU6IGZ1bmN0aW9uKHRva2VuKXtcclxuICAgICAgICBhcGkuVXNlcl9QYXNzd29yZFJlc3RvcmUodG9rZW4sIHtcclxuICAgICAgICAgICAgVGhlbjogKHIpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAociA+IDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICdtYWluLmh0bWw/QWNjb3VudC8nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBMdXJlLlN5c3RlbS5Ob3RpY2UoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0LLQvtGB0YHRgtCw0L3QvtCy0LjRgtGMINC/0LDRgNC+0LvRjCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBDYXRjaDogKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMuU2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuICAgIFN1YkNvbnRlbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5Qd2RSZXN0b3JlID0gbmV3IEx1cmUuQ29udGVudCh7XHJcbiAgICAgICAgICAgIFRhcmdldDogJy5ib2R5JyxcclxuICAgICAgICAgICAgR2xvYmFsOiB0cnVlLFxyXG4gICAgICAgICAgICBEaWFsb2c6IHRydWUsXHJcbiAgICAgICAgICAgIENvbnRlbnQ6IGA8ZGl2IGNsYXNzPVwicHdkLXJlc3RvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImwtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW5wdXQgY2xhc3M9XCJ0ZXh0Ym94IGwtdGV4dGJveCB0ZXh0Ym94LWVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJleGFwbWxlQGhvc3Qub3JnXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBsLWJ1dHRvbiBidG4tcmVzdG9yZS1wYXNzXCI+0J7RgtC/0YDQsNCy0LjRgtGMPC9idXR0b24+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmAsXHJcbiAgICAgICAgICAgIFByb3BzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5CdXR0b25TZW5kUmVzdG9yZSA9IHRoaXMuU2VsZWN0KCcuYnRuLXJlc3RvcmUtcGFzcycpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5UZXh0Ym94RW1haWwgPSB0aGlzLlNlbGVjdCgnLnRleHRib3gtZW1haWwnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgTWV0aG9kczogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVzdG9yZVNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IEVtYWlsID0gdGhpcy5UZXh0Ym94RW1haWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEVtYWlsID09PSAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEx1cmUuU3lzdGVtLldhcm4oJ9CS0LLQtdC00LjRgtC1INCw0LTRgNC10YEg0Y3Qu9C10LrRgtGA0L7QvdC90L7QuSDQv9C+0YfRgtGLJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgTHVyZS5CdXR0b24uTG9jayh0aGlzLkJ1dHRvblNlbmRSZXN0b3JlKTtcclxuICAgICAgICAgICAgICAgICAgICBhcGkuVXNlcl9QYXNzd29yZFJlc3RvcmVfR2V0VG9rZW4oRW1haWwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlbjogKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMgPT09IC0zKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMdXJlLlN5c3RlbS5TaG93Tm90aWNlKCfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YEg0YLQsNC60LjQvCBFbWFpbCDQvdC1INC90LDQudC00LXQvScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMgPT09IC0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMdXJlLlN5c3RlbS5TaG93Tm90aWNlKCfQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YPQtNCw0LvQtdC9JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcyA9PT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEx1cmUuU3lzdGVtLlNob3dOb3RpY2UoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L7RgtC/0YDQsNCy0LjRgtGMINC90LAg0YPQutCw0LfQsNC90L3Ri9C5INCw0LTRgNC10YEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTHVyZS5TeXN0ZW0uU3VjY2Vzcygn0KHRgdGL0LvQutCwINCy0L7RgdGB0YLQsNC90L7QstC70LXQvdC40Y8g0L/QsNGA0L7Qu9GPINC+0YLQv9GA0LDQstC70LXQvdCwINC90LAg0YPQutCw0LfQsNC90L3Ri9C5INCw0LTRgNC10YEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDYXRjaDogKGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMdXJlLlN5c3RlbS5FcnJvcign0J3QtdC40LfQstC10YHRgtC90LDRjyDQvtGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LAnLCBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5hbGx5OiAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTHVyZS5CdXR0b24uUmVsZWFzZSh0aGlzLkJ1dHRvblNlbmRSZXN0b3JlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBBZnRlckJ1aWxkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQnV0dG9uU2VuZFJlc3RvcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVzdG9yZVNlbmQoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBQcm9wczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuSW5wdXRMb2dpbiAgPSB0aGlzLlNlbGVjdCgnI2F1dGgtbG9naW4nKTtcclxuICAgICAgICB0aGlzLklucHV0UGFzcyAgID0gdGhpcy5TZWxlY3QoJyNhdXRoLXBhc3MnKTtcclxuICAgICAgICB0aGlzLkJ1dHRvbkxvZ2luID0gdGhpcy5TZWxlY3QoJyNidG4tYXV0aC1sb2dpbicpO1xyXG4gICAgfSxcclxuICAgIE1ldGhvZHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLkxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgTG9naW4gPSB0aGlzLklucHV0TG9naW4udmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICBsZXQgUGFzcyA9IHRoaXMuSW5wdXRQYXNzLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKExvZ2luID09PSAnJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBMdXJlLkVycm9ySGludCh0aGlzLklucHV0TG9naW4sICfQktCy0LXQtNC40YLQtSDQu9C+0LPQuNC9Jyk7XHJcbiAgICAgICAgICAgIGlmIChQYXNzID09PSAnJylcclxuICAgICAgICAgICAgICAgIHJldHVybiBMdXJlLkVycm9ySGludCh0aGlzLklucHV0UGFzcywgJ9CS0LLQtdC00LjRgtC1INC/0LDRgNC+0LvRjCcpO1xyXG4gICAgICAgICAgICBMdXJlLkJ1dHRvbi5Mb2NrKHRoaXMuQnV0dG9uTG9naW4pO1xyXG4gICAgICAgICAgICBhcGkuTG9naW4oTG9naW4sIFBhc3MsIG51bGwpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIC8vTHVyZS5CdXR0b24uUmVsZWFzZSh0aGlzLkJ1dHRvbkxvZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJ21haW4uaHRtbCc7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgTHVyZS5TeXN0ZW0uRXJyb3IoJ9Cd0LXQv9GA0LDQstC40LvRjNC90YvQuSDQu9C+0LPQuNC9INC40LvQuCDQv9Cw0YDQvtC70YwnKTtcclxuICAgICAgICAgICAgICAgICAgICBMdXJlLkJ1dHRvbi5SZWxlYXNlKHRoaXMuQnV0dG9uTG9naW4pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuTG9naW5CeUlucHV0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvZ2luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIEFmdGVyQnVpbGQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLkJ1dHRvbkxvZ2luLm9uY2xpY2sgPSB0aGlzLkxvZ2luO1xyXG4gICAgICAgIHRoaXMuSW5wdXRMb2dpbi5vbmtleXVwICA9IHRoaXMuTG9naW5CeUlucHV0O1xyXG4gICAgICAgIHRoaXMuSW5wdXRQYXNzLm9ua2V5dXAgICA9IHRoaXMuTG9naW5CeUlucHV0O1xyXG5cclxuICAgICAgICB0aGlzLlNlbGVjdCgnLmF1dGgtZm9yZ2V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLlB3ZFJlc3RvcmUuU2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxud2luZG93LkxvZ2luID0gTG9naW47XHJcbm1vZHVsZS5leHBvcnRzID0gTG9naW47Iiwid2luZG93LkRFQlVHID0gdHJ1ZTtcclxud2luZG93LmlzTW9iaWxlID0gZmFsc2U7XHJcblxyXG5cclxuTHVyZS5TZXR0aW5ncy5Mb2NhbGUgPSBuYXZpZ2F0b3IubGFuZ3VhZ2Uuc3Vic3RyaW5nKDAsMik7XHJcbkx1cmUuUm91dGUuRW5hYmxlZCA9IGZhbHNlO1xyXG5MdXJlLkFwcGxpY2F0aW9uLkVudHJ5ID0gJ0xvZ29uJztcclxuXHJcbkx1cmUuU2V0dGluZ3MuQ29udHJvbGxlci5Db21tb24uVW5kZWZpbmVkID0gJz8/Pyc7XHJcbi8vYXBpLmRlYnVnID0gdHJ1ZTtcclxuLy9hcGkuZGVidWdFeGNsdWRlcy5wdXNoKCdDaGF0TWVzc2FnZXNHZXQnKTtcclxuXHJcblxyXG5cclxuYXBpLm9uVW5hdXRoID0gbnVsbDtcclxuaWYgKHdpbmRvdy5pc01vYmlsZSl7XHJcbiAgIC8vc29tZXRoaW5nIHRvIGRvXHJcbn1cclxuXHJcbnJlcXVpcmUoJy4vX2F1dGgvbG9nb24uanMnKTtcclxuXHJcbkx1cmUuQXBwbGljYXRpb24uUnVuKCk7Il19
