const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.buttons .number');
const operators = document.querySelectorAll('.buttons .operator');
const clearBtn = document.querySelector('.buttons #Clear');
const enterBtn = document.querySelector('.buttons #equals')

let inputNum = '';
let inputs = [];
let answer;

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

function operate(a, b, operator) {
    if (operator === 'add') return add(a, b);
    if (operator === 'multiply') return multiply(a, b);
    if (operator === 'divide') return divide(a, b);
    if (operator === 'subtract') return subtract(a, b);
}

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
    for (const op of operators) {
        op.addEventListener('click', () => {
            inputs.push(parseInt(inputNum));
            inputs.push(op.id);
            inputNum = '';
            console.log(inputs);

            display.textContent += ` ${op.textContent} `;
        })

    }
}

function clear() {
    clearBtn.addEventListener('click', () => {
        inputNum = '';
        inputs = [];
        console.log(inputs);
        display.textContent = "";
    })
}

function enter() {
    enterBtn.addEventListener('click', () => {
        console.log(inputs);
        inputs.push(parseInt(inputNum));

        answer = operate(inputs[0], inputs[2], inputs[1]);
        console.log(answer);
        if (inputs.length > 3) {
            for (i = 4; i < inputs.length; i += 2) {
                answer = operate(answer, inputs[i], inputs[i - 1]);
                console.log(answer);
            }
        }

        display.textContent = answer;
        inputNum = '';
        inputs = [];
    })
}

displayNum();
displayOperator();
clear();
enter();