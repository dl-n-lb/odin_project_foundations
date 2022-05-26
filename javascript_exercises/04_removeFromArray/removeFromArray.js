const removeFromArray = function() {
    let remove_items = Array.from(arguments).slice(1);

    let arr = arguments[0];
    for(let r = 0; r < remove_items.length; r++) {
        arr = arr.filter((i) => i !== remove_items[r]);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
