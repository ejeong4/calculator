const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.buttons .number');
const operators = document.querySelectorAll('.buttons .operator');
const clearBtn = document.querySelector('.buttons #Clear');

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
    return a - b;
}

function operate(a, b, operator) {
    operator(a, b);
}

let inputNum = '';
let inputOperator = '';
let inputs = [];

function displayNum() {
    for (const number of numbers) {
        number.addEventListener('click', () => {
            inputNum += number.id;
            console.log(inputNum);
            display.textContent += number.textContent;
        })

    }
}

function displayOperator() {
    for (const operate of operators) {
        operate.addEventListener('click', () => {
            inputOperator += operate.id;
            inputs.push(inputNum);
            inputs.push(inputOperator);
            inputOperator = '';
            inputNum = '';
            console.log(inputs);

            display.textContent += ` ${operate.textContent} `;
        })

    }
}

function clear() {
    clearBtn.addEventListener('click', () => {
        inputNum = '';
        inputOperator = '';
        inputs = [];
        console.log(inputNum);
        display.textContent = "";
    })
}


displayNum();
displayOperator();
clear();