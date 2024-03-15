const repeatString = function(string, num) {
    let output = '';
    if (num > 0) {
        for (i = 0 ; i < num ; i++) {
            output = output.concat(string);
        }
        return output;
    } else if (num < 0) {
        return "ERROR";
    } else if (num === 0) {
        return ""
    }
};


// Do not edit below this line
module.exports = repeatString;
