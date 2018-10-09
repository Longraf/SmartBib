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