const removeFromArray = function(arr, ...args) {
    let arrLength = arr.length;
    let set = [];
    for (let i = 0; i < arrLength; i++) {
        if (args.includes(arr[i])) continue;
        set.push(arr[i]);
    }
    return set;
};

// Do not edit below this line
module.exports = removeFromArray;
