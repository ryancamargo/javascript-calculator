let buffer = '0';
const screen = document.querySelector('.screen');

// Creating function to handle button click event
// And checking if the button clicked is a number or a symbol
function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleNumber(number) {
    if (buffer === '0') {
        buffer = number;
    } else {
        buffer += number;
    }
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            break;
        case '=':
            console.log('equals');
            break;
        case '←':
            console.log('back arrow');
            break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            console.log('math symbol');
            break;
    }
}

// Adding event listener to the buttons in the calculator
function init() {
    document
        .querySelector('.calc-buttons')
        .addEventListener("click", function(event) {
            buttonClick(event.target.innerText);
        });
}

function rerender() {
    screen.innerText = buffer;
}

init();