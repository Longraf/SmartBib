module.exports = {
    GetDigit(number, n, NumberSockets=4){
        let count = number.toString();
        if (n <= NumberSockets - count.length){
            return "0";
        }
        return count.charAt(n-(NumberSockets+1-count.length));
    }
};