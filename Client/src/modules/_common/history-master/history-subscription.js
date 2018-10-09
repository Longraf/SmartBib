let HistoryMaster = require('./history-master');

/**
 * @typedef {Object} HistoryItem
 * @property {int} ID
 *
 * @property {Date} DateCreated
 * @property {Date} DateValue
 * @property {int} TypeID
 * @property {int} MessageType

 * @property {int} ItemID
 * @property {int} LibraryID
 * @property {int} LoginID
 * @property {int} Value1
 * @property {int} Value2
 * @property {string} MessageText1
 * @property {string} MessageText2
 */

/**
 *@callback Condition_call
 * @param {HistoryItem} histItem
 */
/**
 *@callback OnSubscribe_call
 * @param {[HistoryItem]} histItem
 */

/**
 * @typedef {Object} HistoryConstructor
 * @property {Condition_call} Condition
 * @property {OnSubscribe_call} OnSubscribe
 * @property {boolean} isInstantSubscribe
 */
function HMSConstructor({
                            Condition          = (h)=>true,
                            OnSubscribe        = (histItemList)=>{},
                            isInstantSubscribe = false
                        }){
    this._isDisabled  = !isInstantSubscribe;
    this._OnSubscribe = OnSubscribe;
    this._Condition   = Condition;
    HistoryMaster.AddSubscription(this);
}


class HistorySubscription{
    Subscribe(){
        this._isDisabled = false;
    }
    Unsubscribe(){
        this._isDisabled = true;
    }
    get isActive(){
        return !this._isDisabled;
    }

    /**
     *
     * @param {HistoryConstructor} co
     */
    constructor(co){
        HMSConstructor.call(this, co);
    }
}

module.exports = HistorySubscription;