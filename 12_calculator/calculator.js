const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const sum = function (array) {
    return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
    return array.reduce((total, current) => total * current);
};

const power = function (num1, num2) {
    return Math.pow(num1, num2);
};

const factorial = function (num) {
    let output = 1;
    for (let i = num; i > 0; i--) {
        output *= i;
    }
    return output;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
