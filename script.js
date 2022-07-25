// Initialize Variables
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.buttons .number');
const operators = document.querySelectorAll('.buttons .operator');
const clearBtn = document.querySelector('.buttons #Clear');
const enterBtn = document.querySelector('.buttons #equals')
const body = document.querySelector('body');

let inputNum = "";
let inputs = [];
let answer;

// Basic Arithmetic Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Operate Function
function operate(a, b, operator) {
    if (operator === 'add') return add(a, b);
    if (operator === 'multiply') return multiply(a, b);
    if (operator === 'divide') return divide(a, b);
    if (operator === 'subtract') return subtract(a, b);
}

// Display Numbers with click
function displayNum() {
    for (const number of numbers) {
        number.addEventListener('click', () => {
            inputNum += number.id;
            display.textContent += number.textContent;
        })
    }
}

// Display Operators with click
function displayOperator() {
    for (const op of operators) {
        op.addEventListener('click', () => {
            inputs.push(parseInt(inputNum));
            inputNum = '';
            if (inputs.length >= 3) calculate();
            inputs.push(op.id);
            display.textContent += ` ${op.textContent} `;
            console.log(inputs);
        })
    }
}

// Take inputed values, calculate, output
function calculate() {
    answer = operate(inputs[0], inputs[2], inputs[1]);
    inputs = [];
    inputs.push(answer);
    display.textContent = answer;
}

enterBtn.addEventListener('click', () => {
    inputs.push(parseInt(inputNum));
    console.log(inputs);
    calculate();
    numbers.forEach((num) => num.disabled = true);
    operators.forEach((op) => op.disabled = true);
    enterBtn.disabled = true;
});

// Clear Display with click
clearBtn.addEventListener('click', () => {
    numbers.forEach((num) => num.disabled = false);
    operators.forEach((op) => op.disabled = false);
    enterBtn.disabled = false;
    inputs = [];
    display.textContent = "";
})

// Call Functions
displayNum();
displayOperator();