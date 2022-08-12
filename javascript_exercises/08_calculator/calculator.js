const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
  return args.reduce((xp, xn) => xp + xn, 0);
};

const multiply = function(args) {
  return args.length ? args.reduce((xp, xn) => xp*xn) : 0;
};

const power = function(n, p) {
  return Math.pow(n, p);
};

const factorial = function(n) {
  let res = 1;
  for (let i = 1; i < n; i++) {
    res *= i+1;
  }
  return res;
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
