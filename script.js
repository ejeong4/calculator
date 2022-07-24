const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');

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
    for (const button of buttons) {
        button.addEventListener('click', () => {
            display.textContent += ` ${button.textContent} `;
        })
    }
}

displayNum();