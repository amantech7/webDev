exports.add = function add(a, b) {
  return a + b;
};

exports.sub = function sub(a, b) {
  return a - b;
};

exports.mul = function mul(a, b) {
  return a * b;
};

exports.div = function div(a, b) {
  return a / b;
};

// Default
module.exports = function () {
  console.log('Hey, I am default');
};

// 1. Named Exports
// 2. Default Exports


//diffrene between named and default exports

// Named Exports - you can export multiple things from a module
// Default Exports - you can export only one thing as default from a module

// example:

// Named Exports
// module.exports.add = function add() {}
// module.exports.sub = function sub() {}

// Default Exports
// module.exports = function() {} 

// Importing Named Exports
// const { add, sub } = require('./math');

// Importing Default Exports
// const mathDefault = require('./math');
// mathDefault(); 

// Importing both Named and Default Exports
// const mathDefault = require('./math');
// const { add, sub } = require('./math');
// mathDefault();


