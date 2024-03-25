const sumAll = function(val1, val2) {
    let result = 0;
    if (val1 < 0 || 
        val2 < 0 || 
        typeof val1 === 'string' || 
        typeof val2 === 'string' ||
        Array.isArray(val1) || 
        Array.isArray(val2)
        ) {
        result = "ERROR";
    } else {
        if (val1 > val2) {
            for (i = val2 ; i <= val1 ; i++) {
                result += i;
            }
        } else {
            for (i = val1 ; i <= val2 ; i++) {
                result += i;
            }
        }
    } 
    return result
};

// Do not edit below this line
module.exports = sumAll;
