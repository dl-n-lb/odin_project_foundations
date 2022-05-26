const repeatString = function(val, times) {
    if (times < 0) return "ERROR";
    let res = "";
    for(let i = 0; i < times; ++i) {
        res += val;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
