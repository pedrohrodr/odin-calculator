const add = (a, b) => Number(a) + Number(b);
const subtract = (a, b) => Number(a) - Number(b);
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

displayDefaultText = "Enter a number";

let num1;
let num2;
let operator;

const operate = function(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "×":
            return multiply(num1, num2);
        case "÷":
            if (num2 === "0") {
                alert("You cannot divide by zero!")
                return displayDefaultText
            }
            return num1 % num2 === 0 ? divide(num1, num2) : divide(num1, num2).toFixed(6);
    }
}

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const display = document.querySelector("#display");
const backspace = document.querySelector(".backspace");
const decimalPoint = document.querySelector(".decimalPoint");

display.textContent = displayDefaultText;

const backspaceAction = () => {
    const displayText = display.textContent;
    if (displayText !== displayDefaultText) {
        if (displayText.length === 1) {
            display.textContent = "0"
        }
        else {
            display.textContent = displayText.slice(0, -1);
        }
    }
};

const clearDisplay = () => {
    display.textContent = "0";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
};

const updateDisplay = (e) => {
    const buttonValue = e.currentTarget.textContent;
    if (display.textContent === displayDefaultText || display.textContent === "0") {
        display.textContent = "";
    }
    display.append(buttonValue);
};

const getOperator = (e) => {
    if (display.textContent !== displayDefaultText || display.textContent === "") {
        num1 = display.textContent;
    }
    operator = e.currentTarget.textContent;
    display.textContent = "0"
}

const equalFunction = () => {
    if (num1 !== undefined) {
        if (display.textContent === displayDefaultText || display.textContent === "") {
            alert("Enter the second number first!");
        }
        num2 = display.textContent;
        const result = operate(operator, num1, num2);
        display.textContent = result;
    }
};

const addDecimalPoint = () => {
    if (display.textContent.indexOf(".") === -1 && display.textContent !== displayDefaultText) {
        const text = display.textContent
        display.textContent = text.concat(".");
    }
}

numbers.forEach(number => number.addEventListener("click", updateDisplay));
operators.forEach(operator => operator.addEventListener("click", getOperator));
clear.addEventListener("click", clearDisplay);
equal.addEventListener("click", equalFunction);
backspace.addEventListener("click", backspaceAction);
decimalPoint.addEventListener("click", addDecimalPoint);