const display = document.querySelector(".display");

// operators
const divideBtn = document.querySelector(".divide-btn");
const multiplyBtn = document.querySelector(".multiply-btn");
const minusBtn = document.querySelector(".minus-btn");
const addBtn = document.querySelector(".add-btn");
const equalBtn = document.querySelector(".equal-btn");

const digitsBtn = document.querySelectorAll(".digitBtn");
const operatorBtn = document.querySelectorAll(".operatorBtn");

const clearBtn = document.querySelector(".clear-btn");

let firstNumber = null;
let firstOperator = null;
let secondNumber = null;
let displayValue = 0;

////---------//// Populate Display

function updateDisplay() {
  display.innerText = displayValue;
}

updateDisplay();
