const palindromes = function (string) {
    let str = string.toLowerCase().replace(/[^\w\s\']| |_/g, "");
    console.log(str);
    let rev_string = str.split("").reverse().join("");
    return (str == rev_string);
};

// Do not edit below this line
module.exports = palindromes;
