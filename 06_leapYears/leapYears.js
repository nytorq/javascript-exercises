const leapYears = function(year) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        } else if (year % 400 !== 0) {
            return false;
        }
    } else if (year % 100 !== 0) {
        if ( year % 4 === 0) {
            return true;
        } else {return false;}
    }
    // v3
    // if (year % 4 === 0) {
    //     if (year % 100 === 0 && year % 400 === 0) {
    //         return true;
    //     } else if (year % 100 !== 0 && year % 400 !== 0) {
    //         return false;
    //     } else if (year % 100 !== 0 && year % 400 === 0) {
    //         return false;
    //     } else if (year % 100 === 0 && year % 400 !== 0) {
    //         return false;
    //     }
    // } else {
    //     return false;
    // }

    // if (year % 4 === 0) {
    //     if (year % 100 === 0 && year % 400 === 0) {
    //         return true;
    //     } else if (year % 100 !== 0 && year % 400 !== 0) {
    //         return false;
    //     } else if (year % 100 !== 0 && year % 400 === 0) {
    //         return false;
    //     } else if (year % 100 === 0 && year % 400 !== 0) {
    //         return false;
    //     }
    // } else {
    //     return false;
    // }

    // v2
    // if ( year % 100 === 0 && year % 400 === 0) {
    //     return true;
    // } else if (year % 100 !== 0 && year % 400 === 0 ) {
    //     return false;
    // } else if ( year % 4 === 0)  {
    //     return true;
    // } else {
    //     return false;
    // }
};

// Do not edit below this line
module.exports = leapYears;
