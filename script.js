const display = document.querySelector(".display");
const currentDisplay = document.querySelector(".current");
const previousDisplay = document.querySelector(".previous");

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

let previousValue = "";
let currentValue = "";

let operator = "";
let result = "";

////-------//////  digit function
// (commented out below function can be used if no keyboard support is required)
// I broke down the commented out part into functions so keys can also access them.

// digitsBtn.forEach((digit) => {
//   digit.addEventListener("click", (e) => {
//     let numClicked = e.target.textContent;

//     if (currentValue.length <= 7) {
//       currentValue += numClicked;
//     }

//     if (result != "") {
//       currentValue = "";
//       result = "";
//       currentValue += numClicked;
//     }
//     currentDisplay.textContent = currentValue;
//   });
// });

//// Keyboard supported function

digitsBtn.forEach((digit) => {
  digit.addEventListener("click", (e) => {
    digitClicked(e.target.textContent);
  });
});

function digitClicked(num) {
  if (currentValue.length <= 7) {
    currentValue += num;
  }

  if (result != "") {
    currentValue = "";
    result = "";
    currentValue += num;
  }
  currentDisplay.textContent = currentValue;
}

////-------//////  operator function
// (commented out below function can be used if no keyboard support is required)
// I broke down the commented out part into functions so keys can also access them.


// operatorBtn.forEach((opBtn) => {
//   opBtn.addEventListener("click", (e) => {
//     const opValue = e.target.textContent;

//     operator = opValue;

//     previousValue = currentValue;
//     previousDisplay.textContent = `${previousValue} ${operator}`;

//     currentValue = "";
//     currentDisplay.textContent = "";
//   });
// });

//// Keyboard supported function

operatorBtn.forEach((opBtn) => {
  opBtn.addEventListener("click", (e) => {
    operate(e.target.textContent);
  });
});

function operate(opValue) {
  operator = opValue;

  previousValue = currentValue;
  previousDisplay.textContent = `${previousValue} ${operator}`;

  currentValue = "";
  currentDisplay.textContent = "";
}

////-------//////  initializing calculation function

equalBtn.addEventListener("click", () => {
  if (currentValue != "" && previousValue != "") {
    calculation();

    currentDisplay.textContent = result;
    previousDisplay.textContent = "";

    currentValue = result;
    previousValue = "";
  }
});

////-------//////  decimal btn function

decimalBtn.addEventListener("click", () => {
  decimal();
});

function decimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
    currentDisplay.textContent = currentValue;
  }
}

////-------//////  clear function

clearBtn.addEventListener("click", () => {
  previousDisplay.textContent = "";
  currentDisplay.textContent = 0;

  resetValues();
});

function resetValues() {
  previousValue = "";
  currentValue = "";
  operator = "";
}

////-------//////  calc function

function calculation() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator == "+") {
    result = previousValue + currentValue;
  } else if (operator == "-") {
    result = previousValue - currentValue;
  } else if (operator == "x") {
    result = previousValue * currentValue;
  } else if (operator == "/") {
    result = previousValue / currentValue;
  }

  result = roundNum(result);
  result = result.toString();

  currentValue = currentValue.toString();
}

////-------//////  round function

function roundNum(num) {
  return Math.round(num * 1000) / 1000;
}
