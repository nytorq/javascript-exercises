/*
- Create and store the fib numbers in an array
  - Starts with 0.
  - 
  - Push accumulator to fibNumbers
  - Repeat 100 times
- Evaluates if arg is positive
- Converts arg from string to number
- Finds and returns number based on index


*/

const fibonacci = function(pos) {
    // const fibNumbers = [0,1,1,2,3,5,8,13,21,34,55,89,144];
    const fibNumbers = [0 , 1];
    function fibGenerator () {
        // fibNumbers.push(0);
        // let i = 0;
        // while (i < 100) {
        //     let currentValue;
        //     let accumulator;
        //     accumulator = fibNumbers${[i]}  + currentValue;
        //     fibNumbers.push(accumulator);
        //     i += 1;
        // }
        for (i = 2; i < 100 ; i ++) {
            let prevVal = fibNumbers[i-1];
            let twoPrevVal = fibNumbers[i-2];
            fibNumbers.push(prevVal + twoPrevVal);

        }
    }
    fibGenerator();
    if (pos < 0) {
        return "OOPS";
    } else {
        return fibNumbers[Number(pos)];
    }
};

// Do not edit below this line
module.exports = fibonacci;
