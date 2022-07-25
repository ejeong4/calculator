// Initialize Variables
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.buttons .number');
const operators = document.querySelectorAll('.buttons .operator');
const clearBtn = document.querySelector('.buttons #Clear');
const enterBtn = document.querySelector('.buttons #equals')
const body = document.querySelector('body');
const allButtons = document.querySelectorAll('button');

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
            console.log(inputNum);
            if (display.textContent.length <= 7) {
                display.textContent += number.textContent;
            }
            console.log(display.textContent.length)
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
            if (display.textContent.length <= 7) {
                display.textContent += `${op.textContent}`;
            }
            console.log(display.textContent.length)
            console.log(inputs);
        })
    }
}

// Take inputed values, calculate, output
function calculate() {
    answer = operate(inputs[0], inputs[2], inputs[1]);
    inputs = [];
    inputs.push(answer);
    if (display.textContent.length > 8) {
        display.textContent = 'Too long';
    } else {
        display.textContent = answer.toFixed(1);
    }
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
    inputNum = "";
    inputs = [];
    display.textContent = "";
})

// Call Functions
display.textContent = '';
displayNum();
displayOperator();

allButtons.forEach((btn) => {
    btn.addEventListener('mouseover', () => btn.classList.add('hover'));
    btn.addEventListener('mouseout', () => btn.classList.remove('hover'));
    btn.addEventListener('mousedown', () => btn.classList.add('click'));
    btn.addEventListener('mouseup', () => btn.classList.remove('click'));
});
operators.forEach((btn) => {
    btn.addEventListener('mouseover', () => btn.classList.add('right-hover'));
    btn.addEventListener('mouseout', () => btn.classList.remove('right-hover'));
    btn.addEventListener('mousedown', () => btn.classList.add('right-click'));
    btn.addEventListener('mouseup', () => btn.classList.remove('right-click'));
})