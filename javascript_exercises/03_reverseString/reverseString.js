const reverseString = function(val) {
    let res = "";
    for (let i = 0; i < val.length; ++i) {
        res += val[val.length - i - 1];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
