const sumAll = function (num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    let output = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) output += i;
    } else {
        for (let i = num2; i <= num1; i++) output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
