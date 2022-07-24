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

function displayNum() {
    for (const number of numbers) {
        number.addEventListener('click', () => {
            display.textContent += number.textContent;
        })

    }
}

function displayOperator() {
    for (const operator of operators) {
        operator.addEventListener('click', () => {
            display.textContent += ` ${operator.textContent} `;
        })

    }
}

function clear() {
    clearBtn.addEventListener('click', () => {
        display.textContent = "";
    })
}


displayNum();
displayOperator();
clear();