const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(numArr) {
  if(numArr.length == 0) {
    return 0;
  } else {
    const toAdd = numArr.pop();
    return toAdd + sum(numArr);
  }
	
};

const multiply = function(numArr) {
  if(numArr.length == 0) {
    return 1;
  } else {
    const toAdd = numArr.pop();
    return toAdd * multiply(numArr);
  }
};

const power = function(num1, num2) {
  if(num2 == 0){
    return 1;
  } else {
    return num1 * power(num1, num2 - 1);
  }
	
};

const factorial = function(num) {
  if(num == 0){
    return 1;
  } else {
    return num * factorial(num-1);
  }
	
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
