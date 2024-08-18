const display = document.querySelector(".display");

// operators
const divideBtn = document.querySelector(".divide-btn");
const multiplyBtn = document.querySelector(".multiply-btn");
const minusBtn = document.querySelector(".minus-btn");
const addBtn = document.querySelector(".add-btn");
const equalBtn = document.querySelector(".equal-btn");
const decimalBtn = document.querySelector(".decimal-btn");

const digitsBtn = document.querySelectorAll(".digitBtn");
const operatorBtn = document.querySelectorAll(".operatorBtn");

const clearBtn = document.querySelector(".clear-btn");

let firstNumber;
let secondNumber;
let operator;
let displayValue = 0;

let displayInfo = "";

////---------//// Populate Display

display.innerText = displayValue;

digitsBtn.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    let inputDigit = e.target.innerText;
    displayInfo += inputDigit;

    displayValue = +displayInfo; // converting to number
    display.innerText = displayValue;
  });
});

//// -----------//// operator clicked

operatorBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (firstNumber) {
      // firstNumber = calculation();

      calculation();
    } else {
      firstNumber = displayValue;
    }

    operator = e.target.innerText;

    displayInfo = "";
  });
});

//// -----------//// calculation

function calculation() {
  secondNumber = displayValue;

  displayInfo = "";

  switch (operator) {
    case "+":
      let sum = add(firstNumber, secondNumber);

      if (!Number.isInteger(sum)) {
        sum = sum.toFixed(2);
      }
      display.textContent = sum;
      return sum;

    case "-":
      let difference = subtract(firstNumber, secondNumber);

      if (!Number.isInteger(difference)) {
        difference = difference.toFixed(2);
      }
      display.innerText = difference;
      return difference;

    case "*":
      let multiplication = multiply(firstNumber, secondNumber);

      if (!Number.isInteger(multiplication)) {
        multiplication = multiplication.toFixed(2);
      }
      display.innerText = multiplication;
      return multiplication;

    case "/":
      let division = divide(firstNumber, secondNumber);

      if (!Number.isInteger(division)) {
        division = division.toFixed(2);
      }
      display.innerText = division;
      return division;

    default:
      break;
  }
}

//// -----------//// calc functions

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

//// -----------//// Equal button functionality

equalBtn.addEventListener("click", () => {
  calculation();
  resetValues();
});

//// -----------//// decimal point button functionality

decimalBtn.addEventListener("click", () => {
  if (!displayInfo.includes(".")) {
    displayInfo += ".";
    display.innerText = displayInfo;
    displayValue = +displayInfo;
  }
});

//// -----------//// clear display

clearBtn.addEventListener("click", () => {
  displayValue = 0;
  display.innerHTML = displayValue;

  resetValues();
});

function resetValues() {
  firstNumber = null;
  secondNumber = null;
  operator = null;
  displayInfo = "";
}

//// -----------//// Keyboard functionality

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "1":
      keyboardfunction(e);
      break;

    case "2":
      keyboardfunction(e);
      break;

    case "3":
      keyboardfunction(e);
      break;

    case "4":
      keyboardfunction(e);
      break;

    case "5":
      keyboardfunction(e);
      break;

    case "6":
      keyboardfunction(e);
      break;

    case "7":
      keyboardfunction(e);
      break;

    case "8":
      keyboardfunction(e);
      break;

    case "9":
      keyboardfunction(e);
      break;

    case "0":
      keyboardfunction(e);
      break;

    case "+":
      if (firstNumber) {
        calculation();
      } else {
        firstNumber = displayValue;
      }

      operator = "+";
      addBtn.focus();
      displayInfo = "";
      break;

    case "-":
      if (firstNumber) {
        calculation();
      } else {
        firstNumber = displayValue;
      }

      operator = "-";
      minusBtn.focus();
      displayInfo = "";
      break;

    case "*":
      if (firstNumber) {
        calculation();
      } else {
        firstNumber = displayValue;
      }

      operator = "*";
      multiplyBtn.focus();
      displayInfo = "";
      break;

    case "/":
      if (firstNumber) {
        calculation();
      } else {
        firstNumber = displayValue;
      }

      operator = "/";
      divideBtn.focus();
      displayInfo = "";
      break;

    case "Enter":
      calculation();
      resetValues();
      break;

    case "=":
      calculation();
      resetValues();
      break;

    case "Backspace":
      displayInfo = displayInfo.toString();
      let displayArr = displayInfo.split("");
      displayArr.pop();
      displayInfo = displayArr.join("");
      display.innerText = displayInfo;
      displayValue = +displayInfo;

      break;

    case ".":
      if (!displayInfo.includes(".")) {
        displayInfo += ".";
        display.innerText = displayInfo;
        displayValue = +displayInfo;
      }
      break;

    case "Escape":
      resetValues();
      operatorBtn.forEach((btn) => {
        btn.blur();
      });
      display.innerText = 0;
  }
});

function keyboardfunction(e) {
  displayInfo += e.key;
  displayValue = +displayInfo;
  display.innerText = displayInfo;
}
