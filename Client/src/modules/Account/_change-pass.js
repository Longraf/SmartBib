module.exports = new Lure.Content({
    Parent: Account,
    Name: 'AccountChangePass',
    Type: 'account-content',
    Visible: true,
    Content: `<div class="change-pass">
                <div class="h3">Изменение Пароля</div>
                <div class="line"><input class="textbox l-textbox pass1" type="password" placeholder="Новый пароль"></div>
                <div class="line"><input class="textbox l-textbox pass2" type="password" placeholder="Новый пароль еще раз"></div>
                <button class="button l-button btn-commit">Сменить</button> 
              </div>`,
    Props: function () {
        this.TextBoxPass1 = this.Select('.pass1');
        this.TextBoxPass2 = this.Select('.pass2');
        this.ButtonChangePass = this.Select('.btn-commit');
    },
    Methods: function () {
        this.ChangePass = function () {
            let pass1 = this.TextBoxPass1.value;
            let pass2 = this.TextBoxPass2.value;

            if (pass1.length < 8)
                return Lure.System.Warn('Пароль менее 8 символов');

            if (pass1 !== pass2){
                return Lure.System.Warn('Пароли не совпрадают');
            }

            Lure.Button.Lock(this.ButtonChangePass);
            api.ChangePass(pass1, {
                Then: ()=>{
                    Lure.System.Success('Пароль изменен');
                },
                Catch: (e)=>{
                    Lure.System.Error('не удалось сменить пароль', e);
                },
                Finally: ()=>{
                    Lure.Button.Release(this.ButtonChangePass);
                }
            })
        }
    },
    AfterBuild: function () {
        this.ButtonChangePass.addEventListener('click', ()=>{
            this.ChangePass();
        })
    }
});