const removeFromArray = function(arr, ...args) {
    let set = [];
    arr.forEach(item => {
        if (!args.includes(item)) set.push(item);
    });
    return set;
};

// Do not edit below this line
module.exports = removeFromArray;