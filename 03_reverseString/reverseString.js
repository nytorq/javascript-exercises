const reverseString = function(str) {
    let reversedArray = [];
    let reversedString = '';
    let splitString = str.split("");
    let stringLength = splitString.length;
    for (i = 0 ; i < stringLength ; i++) {
        let char = splitString.pop();
        reversedArray.push(char);
        reversedString = reversedArray.join("");
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
