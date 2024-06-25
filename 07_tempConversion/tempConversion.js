const convertToFahrenheit = function(value) {
  value = (value * 9 / 5) + 32;
  value = value.toFixed(1);
  value = parseFloat(value);
  return value;
};

const convertToCelsius = function(value) {
  value = (value - 32) *5/9;
  value = value.toFixed(1);
  value = parseFloat(value);
  return value;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
