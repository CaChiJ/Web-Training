const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    powerOf: function (a, b) {
        return a ** b;
    },
};

console.log(calculator.plus(2, 3));
console.log(calculator.minus(2, 3));
console.log(calculator.divide(2, 3));
console.log(calculator.multiply(2, 3));
console.log(calculator.powerOf(2, 3));