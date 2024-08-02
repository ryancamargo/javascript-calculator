// Creating function to handle button click event
// And checking if the button clicked is a number or a symbol
function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}

function handleNumber(number) {
    console.log('number');
}

function handleSymbol(symbol) {
    console.log('symbol');
}

// Adding event listener to the buttons in the calculator
function init() {
    document
        .querySelector('.calc-buttons')
        .addEventListener("click", function(event) {
            buttonClick(event.target.innerText);
        });
}

init();