const fibonacci = function (index) {
    if (index < 0) return "OOPS";
    if (index == 0) return 0;

    let a = 1;
    let b = 1;
    let output = 1;

    for (let i = 3; i <= index; i++) {
        output = a + b;
        b = a;
        a = output;
    }
    return output;
};

console.log(fibonacci(1));

console.log(fibonacci(2));

console.log(fibonacci(3));
// Do not edit below this line
module.exports = fibonacci;
