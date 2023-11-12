const displayInput = document.getElementById('inputBar');
const operators = ['+','-','/','*'];



function display(val) {
    const lastInputElement = displayInput.value.slice(-1);
    if (!lastInputElement && operators.includes(val)) {
        return;
    } else if (operators.includes(lastInputElement) && operators.includes(val)) {
        return;
    }

    displayInput.value += val;
}
function solve () {
    const inputValue = displayInput.value;
    const result = eval(inputValue);

    displayInput.value = result;
}
function clearscreen () {
    displayInput.value = '';
}


