const display = document.querySelector(".display");

// operators
const divideBtn = document.querySelector(".divide-btn");
const multiplyBtn = document.querySelector(".multiply-btn");
const minusBtn = document.querySelector(".minus-btn");
const addBtn = document.querySelector(".add-btn");
const equalBtn = document.querySelector(".equal-btn");

// all digit and operator buttons
const digitsBtn = document.querySelectorAll(".digitBtn");
const operatorBtn = document.querySelectorAll(".operatorBtn");

// clear button
const clearBtn = document.querySelector(".clear-btn");

// initial values
let firstNumber;
let secondNumber;
let operator;
let displayValue = 0;

let displayInfo = '';

////---------//// Populate Display

display.innerText = displayValue;



