HelpDesk.NewReq.ReqSender = new Lure.Content({
    Name: 'RequestSender',
    // Parent: HelpDesk.NewReq,
    Visible: false,
    Route: false,
    Content: `<div class="request-overlay">
                <div class="form-container">
                    <div class="req-form-container shadow04 "> 
                        <div class="container-header strong">НОВАЯ ЗАЯВКА</div>
                        <div class="container-body">
                            <div class="form-row">
                                <div class="row-name">Тема</div>
                                <input class="problem-theme" type="text">
                            </div>
                            <div class="form-row">
                                <div class="row-name">Приоритет</div>
                                <select class="priority-select">
                                    <option value="1">Низкий</option>
                                    <option value="2" selected>Средний</option>
                                    <option value="3">Высокий</option>
                                    <option value="4">Точная дата</option>
                                </select>
                            </div>
                            <div class="form-row event-date-row none">
                                <div class="row-name">Дата исполнения</div>
                                <div class="event-date"></div>
                            </div>
                            <div class="form-row">
                                <div class="row-name">Подробное описание</div>
                                <textarea class="problem-description"></textarea>
                            </div>
                            <div class="form-row">
                                <div class="row-name">Файлы</div>
                                <div class="form-files"></div>
                                <input class="file-input none" name="problem-files" id="problem-files" type="file" multiple>
                                <label for="problem-files" class="add-new-file l-button">ЗАГРУЗИТЬ</label>
                            </div>
                        </div>
                        <div class="bottom-buttons">
                            <button class="cancel-button l-button">ОТМЕНА</button>
                            <button class="send-button l-button">ОТПРАВИТЬ</button>
                        </div>
                    </div>
                </div>
            </div>`,
    Target: '.new-req-dialog-wrap',
    Props: function () {
        this.ProblemTheme = this.Select('input.problem-theme');
        this.ProblemDescription = this.Select('textarea.problem-description');
        this.FormFiles = this.Select('.file-input');
        this.ThemeType = -1;
        this.allowedFileTypes = ['doc', 'docx', 'xls', 'xlsx', 'jpg', 'jpeg', 'png', 'txt', 'zip', 'rar'];
        this.maxFileSize = 9999999; // 10 Mb
        this.SendButton = this.Select('.send-button');
        this.EvDateRow = this.Select('.event-date-row');
        this.PrioritySelect = this.Select('.priority-select');

        this.FilesController = new Lure.Controller.Templator({
            Target: '.form-files',
            Data: [
                // { NameFull: 'Screen1', NameSub: 'Scr...', Type: 'png', File: {}, Order: 0 }
            ],
            ListElement:
                `<div class="uploading-file">
                    <div class="file-icon">
                        {{#if (['png', 'jpg', 'jpeg'].indexOf($this.Type) !== -1)}}
                        <img id="img_preview_{{Order}}" src="#" alt="{{NameSub}}" width="80"/>
                        {{#endif}}
                    </div>
                    <div class="file-params" data-order="{{Order}}">
                        <div class="name-type"><span class="filename" title="{{NameFull}}.{{Type}}">{{NameSub}}</span>.<span class="filetype">{{Type}}</span></div>
                        <div class="rename-remove"><span class="remove">удалить</span> I <span class="rename">переименовать</span></div>
                    </div>
                </div>`,
            EmptyMessage:
                `<div>Вы еще не загрузили ни одного файла</div>`,
            AfterBuild: function () {
                for (let i of this.Data) {
                    if (['png', 'jpg', 'jpeg'].indexOf(i.Type.toLowerCase()) === -1) continue;
                    let reader = new FileReader();
                    reader.onload = e => {let x = Lure.Select('#img_preview_' + i.Order, this.Content);return x ? x.src = e.target.result : {}};
                    reader.readAsDataURL(i.File);
                }
            }
        });
    },
    Show: function () {
        this.FilesController.Refresh([]);
        this.Parent.BlurWidgets();
    },
    Hide: function(){
        this.Parent.BlurWidgets(false);
        this.ProblemDescription.value = '';
        this.ProblemTheme.value = '';
    },
    Methods: function () {
        this.newRequest = function(type, pr_id, text, probName) {
            this.ThemeType = type;
            this.ProbSubType = pr_id;
            if (!this.ThemeType && this.ThemeType !== 0) return false;
            if (!this.ProbSubType && this.ProbSubType !== 0) return false;
            this.ProblemTheme.value = probName/* + (text === '' ? '' : ' (' + text + ')')*/;
            if (text !== '')
                this.ProblemDescription.value = text;
            return true;
        };

        this.RequestSendFiles = function (HelpRequestID, FileList) {
            let FilesReq = [];
            let files;
            if (FileList)
                files = FileList;
            else files = this.FilesController.Data.map(x => ({Name: x.NameFull + '.' + x.Type, File: x.File}));
            for (let f of files)
                FilesReq.push( api.HelpDesk_RequestFileAdd(f.File, {filename: this.Transliterate(f.Name), HelpRequestID: HelpRequestID}, {}) );
            return Promise.all(FilesReq);
        };
        this.RequestSend = async function () {
            Lure.Button.Lock(this.SendButton);
            let execDate = Lure.Date();
            let prior = parseInt(this.PrioritySelect.value);
            if (prior === 4)
                execDate = this.ExecTimePicker.Date;
            else {
                if (prior === 1) execDate.AddDays(3);
                if (prior === 2) execDate.AddDays(1);
                if (prior === 3) execDate.AddHours(8);
            }
            try {
                let HelpRequestID = await api.HelpDesk_RequestAdd(
                    parseInt(this.Parent.LibSelect.value),
                    this.ThemeType,
                    this.ProblemTheme.value,
                    this.ProblemDescription.value,
                    prior,
                    execDate, {});
                if (HelpRequestID === -1){
                    return Lure.System.Error('Произошла ошибка при отправке!');
                }
                await this.RequestSendFiles(HelpRequestID);
                Lure.System.Success('ОТПРАВЛЕНО');
            }
            catch (e) {
                Lure.System.Error('Ошибка сервера', e);
            }
            Lure.Button.Release(this.SendButton);
            this.Hide();
            this.ProblemDescription.value = '';
            this.ProblemTheme.value = '';
            HelpDesk.MyReqs.Show();
        };
        this.Transliterate = function (string) {
            let trans = {"щ":"shh","ш":"sh","ч":"ch","ц":"cz","ю":"yu","я":"ya","ё":"yo","ж":"zh","ъ":"``","ы":"y","э":"e","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"x","ь":"`"," ":"_"};
            let res = '';
            for (let b of string)
                res += trans[b.toLowerCase()] || b;
            return res;
        };
        this.NewFile = function () {
            let data = this.FilesController.Data;
            let k = 0;
            for (let d of data)
                d.Order = k++;
            let notAllowed = '';
            let bigSize = '';
            for (let d of this.FormFiles.files) {
                let name = d.name.split('.');
                let filetype = name.pop().toLowerCase();
                if (this.allowedFileTypes.indexOf(filetype) === -1) {
                    notAllowed += ', ' + name + '.' + filetype;
                    continue;
                } else if (d.size > this.maxFileSize) {
                    bigSize += ', ' + name + '.' + filetype;
                    continue;
                }
                name = name.join('.');
                data.push({
                    Type: filetype,
                    NameFull: name,
                    NameSub: name.length > 30 ? name.substr(0, 30) + '...' : name,
                    File: d,
                    Order: k++
                });
            }
            if (notAllowed) Lure.System.ShowError('Следующие файлы не разрешены для загрузки: <br>' + notAllowed.substr(2));
            if (bigSize) Lure.System.ShowError('Размер следующих файлов превышает максимально допустимый: <br>' + bigSize.substr(2));
            this.FilesController.Refresh(data);
            this.FormFiles.value = '';
        };
        this.RemoveFile = function (n) {
            let data = this.FilesController.Data;
            data.splice(n, 1);
            let k = 0;
            for (let d of data)
                d.Order = k++;
            this.FilesController.Refresh(data);
        };
        this.RenameFile = function (elem, n) {
            InputBox.Run(elem, data[n].NameFull,
                newName => {
                    if (!newName || newName === '') return;
                    let data = this.FilesController.Data;
                    data[n].NameFull = newName;
                    data[n].NameSub = newName.length > 30 ? newName.substr(0, 30) + '...' : newName;
                    this.FilesController.Refresh(data);
                }, {Caption: 'Переименовать файл'});
        }
    },
    AfterBuild: function () {
        this.Select('.cancel-button').addEventListener('click', () => this.Hide());
        this.Select('.send-button').addEventListener('click', () => this.RequestSend());

        this.AddEventListener('click', '.rename-remove .remove, .rename-remove .rename', function (e) {
            if (e.currentTarget.classList.contains('remove'))
                this.RemoveFile(e.currentTarget.parentElement.parentElement.dataset['order']);
            if (e.currentTarget.classList.contains('rename'))
                this.RenameFile(e.currentTarget, e.currentTarget.parentElement.parentElement.dataset['order']);
        });
        this.FormFiles.addEventListener('change', () => this.NewFile());
        this.PrioritySelect.onchange = e => {
            if (this.PrioritySelect.value + '' === '4')
                this.ExecTimePicker.Target.parentElement.classList.remove('none');
            else this.ExecTimePicker.Target.parentElement.classList.add('none');
        };

        this.ExecTimePicker = new Lure.PeriodPicker({
            Target: this.Select('.event-date'),
            NoRange: true,
            DateTarget: Lure.Date(),
            AutoConfirm: true,
            ButtonFullscreen: false,
            OnConfirm: function () {
                // FD(this.Date, true);
            }
        });

    }
    /*, Dialog: {
        Blur: '.new-requests .widgets', //HelpDesk.NewReq.Content is undefined right now
        Close: false
    }*/

});
