function display(val) {
    document.getElementById('inputBar').value += val;
    return val;
}
function solve () {
    let x = document.getElementById('inputBar').value;
    let y = eval(x);
    document.getElementById('inputBar').value = y;
    return y;
}
function clearscreen () {
    document.getElementById('inputBar').value = '';
}


