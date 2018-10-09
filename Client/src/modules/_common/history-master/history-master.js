let CoolDown = 3000;

let WindowInterval = null;
let Subscribers = [];
let LastID = -1;
let ClientID = Lure.String.Random(36, true); //something like 'Q3dP9eXk2k8lZ02kYUVSmLlWggSn265kld5X'

function GetHistory() {
    api.Cache_GetMasterHistoryLast(LastID, {
        Then: async (history)=>{
            /*for (let i = 0; i < history.length; i++){
                let Man = await DataStorage.GetUser(history[i].ManagerID);
                history[i].Manager = Man.Name;
                history[i].Position = Man.Position;
            }*/
            if (LastID > 0 && history.length > 0){
                Check(history);
            }
            if (history.length > 0){
                LastID = history.Last().ID;
            }
        },
        Catch: (e)=>{
            //HistoryMaster.Stop();
            //HistoryMaster.Reset();
            //console.error(e);
        }
    });
}
function Check(history) {
    for (let i = 0; i < Subscribers.length; i++) {
        let Subscriber = Subscribers[i];
        if (Subscriber._isDisabled){
            continue;
        }
        let Data = history.Where(Subscriber._Condition);
        if (Data.length > 0) {
            Subscriber._OnSubscribe(Lure.Object.Clone(Data));
        }
    }
}

let HistoryMaster = {
    Run(Interval=2000){
        WindowInterval = window.setInterval(GetHistory, Interval);
    },
    Stop(){
        window.clearInterval(WindowInterval);
        WindowInterval = null;
    },
    Reset(){
        //console.info('HistoryMaster.Reset');
        this.Stop();
        window.setTimeout(this.Run, CoolDown);
    },
    AddSubscription(Subscription){
        Subscribers.push(Subscription);
    },

    IncreaseLastID(){
        LastID++;
    },
    DecreaseLastID(){
        LastID++;
    }
};



let HMD = {  //history master dictionary
    Type: {
        Visitation:{
            ID: 0,
            MessageType:{
                Register:   1,
                Count:      2,
                EventFree:  3,
                EventPaid:  4,
                ClubFree:   5,
                ClubPaid:   6,
                Exhibition: 7,
            }
        }
    },
    TypeID:{
        Visitation: 0,
        Bookware: 1,
        Summary: 2,
        Passport: 3,
        Meters: 4,
        SetupEvents: 5,
    }
};

module.exports = HistoryMaster;