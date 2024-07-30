const palindromes = function (arg) {
    let argArray = arg.split('');
    const noPunctuation = (x) => { return !/\p{P}|\s/u.test(x) };
    const depunctuatedArray = argArray.filter(noPunctuation);
    let comparisonArray = [];
    for (i = depunctuatedArray.length -1 ; i >= 0 ; i-- ) {
        // console.log(`We are at iteration ${i}. And i is ${depunctuatedArray[i]}`)
        comparisonArray.push(depunctuatedArray[i]);
    }
    console.log(JSON.stringify(depunctuatedArray));
    console.log(JSON.stringify(comparisonArray));
    if (JSON.stringify(depunctuatedArray).toLowerCase() === JSON.stringify(comparisonArray).toLowerCase()) {
        return true;
    } else { return false;}
};

/* 
Steps
- Convert string to array
- Tolowercase
- Remove punctuation
- Create new array based upon reverse of original array
- check if arrays are the same
*/

// Do not edit below this line
module.exports = palindromes;
