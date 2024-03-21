const removeFromArray = function(array, ...target) {
    function isMatch(item) {
        for (i=0 ; i < target.length ; i++ ) {
            if(item === target[i]) {
                return false;
            }
        }
        return true;
    }
    return array.filter(isMatch);
};

// Do not edit below this line
module.exports = removeFromArray;

/* 

- Accept an array and a target via removeFromArray
- Pass that array and target into isMatch, which is the criteria for removing certain
  values from array.
  - Values that are false are removed from the array in the form of a shallow copy
- We then will iterate through array based upon the amount of values passed in target
- Return filtered array


*/