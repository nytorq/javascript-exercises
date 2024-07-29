const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(x) {
  let accumulator = 0;
	for (i = 0; i<x.length ; i++) {
    accumulator += x[i];
  }
  return accumulator;
};

const multiply = function(a) { 
  a.reduce((accumulator, currentValue)=>{
    accumulator *= currentValue;
  }, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  // if (x === 0) {
  //   return 1;
  // } else {
  //   let accumulator = x;>>>>
  //   for (i=x ; i > 0 ; i--) {
  //     accumulator *= x[i];
  //   }
  //   return accumulator;
  // }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
