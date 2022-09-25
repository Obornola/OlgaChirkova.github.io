const numA = document.querySelector('#num_a');
const numB = document.querySelector('#num_b');
const result = document.querySelector('#result');
const sumBtn = document.querySelector('.sum');
const subBtn = document.querySelector('.subtraction');
const mulBtn = document.querySelector('.multiplication');
const divBtn = document.querySelector('.division');

let a;
let b;

class Calculator {

    static calcSum() {
        result.value = a + b;
    }

    static calcSubtraction() {
        result.value = a - b;
    }

    static calcMultiplication() {
        result.value = a * b;
    }

    static calcDivision() {
        if (b == 0) {
            result.value = "На ноль делить нельзя!";
        } else {
            result.value = a / b;
        }
    }

    static getValues() {
        a = +numA.value;
        b = +numB.value;
    }
}

sumBtn.addEventListener('click', () => {
    Calculator.calcSum(Calculator.getValues());
})

subBtn.addEventListener('click', () => {
    Calculator.calcSubtraction(Calculator.getValues());
})

mulBtn.addEventListener('click', () => {
    Calculator.calcMultiplication(Calculator.getValues());
})

divBtn.addEventListener('click', () => {
    Calculator.calcDivision(Calculator.getValues());
})