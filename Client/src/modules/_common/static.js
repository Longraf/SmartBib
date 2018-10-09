let Dictionary = require('./dictionary.js');

let Static = {
    DateHoursEditingLimit: 14,

};


/* make lists from Dict*/
(function () {
    for (let k in Dictionary){
        if (Dictionary.hasOwnProperty(k) && k.indexOf('Dict') > -1){
            let StaticKey = k.replace('Dict', '') + 's';
            Static[StaticKey] = [];
            for (let ki in Dictionary[k]){
                if (Dictionary[k].hasOwnProperty(ki)){
                    Static[StaticKey].push({
                        ID: parseInt(ki),
                        Name: Dictionary[k][ki]
                    })
                }
            }

        }
    }
})();

module.exports = Static;




