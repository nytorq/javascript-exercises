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
        // for (i = val1 ; i <= val2 ; i++) {
        //     result += val1;
        // }
        /* PSEUDOCODE
            - Determine which of the values is larger and Makes that the stopping point for the loop
            - Make result equal to smaller value
            - For loop:
                - Start i at smaller value    
                - Determine how many iterations to do  (larger val - smaller val + 1)
                - Store current value as i
                - 
        */
    } 
    return result
};

// Do not edit below this line
module.exports = sumAll;
