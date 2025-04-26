function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
};function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSin() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.sin(value);
    } else {
        display.value = 'Error';
    }
}

function calculateCos() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.cos(value);
    } else {
        display.value = 'Error';
    }
}

function calculateTan() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.tan(value);
    } else {
        display.value = 'Error';
    }
}

function calculateMod(val_1,val_2){
    const display = document.getElementById('display');
    const val_1 = parseFloat(display.val_1);
    const val_2 = parseFloat(display.val_2);
    if(!isNaN(value)){
        display.value = val_1 % val_2
    } else{
        display.value = 'Error';
    }
}