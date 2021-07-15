const calculator = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    multiply: function (a, b) {
        console.log(a * b);
    },
    powerOf: function (a, b) {
        console.log(a ** b);
    },
};

calculator.plus(2, 3);
calculator.minus(2, 3);
calculator.divide(2, 3);
calculator.multiply(2, 3);
calculator.powerOf(2, 3);