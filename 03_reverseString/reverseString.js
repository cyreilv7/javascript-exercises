const reverseString = function(str) {
    let finalStr = '';
    let strLength = str.length;
    for (let i = strLength - 1; i >= 0 ; i--) {
        finalStr += str[i];
    }
    return finalStr;
};

// Do not edit below this line
module.exports = reverseString;
