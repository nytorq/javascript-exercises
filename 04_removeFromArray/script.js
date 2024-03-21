const removeFromArray = function(array, ...target) {
    function isMatch(target) {
        if (!target.isArray) {
            return target !== target;
        } else if (target.isArray) {
            for (i=0 ; i < target.length ; i++ ) {
                return target[i] !== target;
            }
        }
    }
    return array.filter(isMatch);
};

removeFromArray([1, 2, 3, 4], 3, 2);