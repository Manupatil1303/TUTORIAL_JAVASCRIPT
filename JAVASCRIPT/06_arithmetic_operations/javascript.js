const num1El = document.getElementById("num1-el");
const num2El = document.getElementById("num2-el");
const sumEl = document.getElementById("sum-el");

function add() {
    let num1 = parseFloat(num1El.value);
    let num2 = parseFloat(num2El.value);
    if (isNaN(num1) || isNaN(num2)) {
        sumEl.textContent = "Please enter valid numbers.";
        return;
    }


    let sum = num1 + num2;
    sumEl.textContent = `Sum: ${sum}`;
}

function subtract() {
    let num1 = parseFloat(num1El.value);
    let num2 = parseFloat(num2El.value);
    if (isNaN(num1) || isNaN(num2)) {
        sumEl.textContent = "Please enter valid numbers.";
        return;
    }

    let result = Number(num1) - Number(num2);
    sumEl.textContent = "Difference: " + result;
}

function divide() {
    let num1 = parseFloat(num1El.value);
    let num2 = parseFloat(num2El.value);
    if (isNaN(num1) || isNaN(num2)) {
        sumEl.textContent = "Please enter valid numbers.";
        return;
    }

    let quotient = num1 / num2;
    sumEl.textContent = `Quotient: ${quotient}`;
}

function multiply() {
    let num1 = parseFloat(num1El.value);
    let num2 = parseFloat(num2El.value);
    if (isNaN(num1) || isNaN(num2)) {
        sumEl.textContent = "Please enter valid numbers.";
        return;
    }

    let product = num1 * num2;
    sumEl.textContent = `Product: ${product}`;
}



