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


