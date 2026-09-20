const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let num1;
let num2;
let operator;

const operate = function(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            if (num2 === 0) {
                return alert("You cannot divide by zero!")
            }
            return num1 % num2 === 0 ? divide(num1, num2) : divide(num1, num2).toFixed(2);
    }
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const display = document.querySelector("#display");

const clearDisplay = () => {
    display.textContent = "0"
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
};

const getButtonValue = (e) => console.log(e.currentTarget.textContent);

numbers.forEach(number => number.addEventListener("click", getButtonValue));
operators.forEach(operator => operator.addEventListener("click", getButtonValue))
equal.addEventListener("click", getButtonValue);
clear.addEventListener("click", clearDisplay);