// Add basic math operations
function sum(x, y) {
  return +x + +y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function operate(operation, x, y) {
  return operation(x, y);
}

let firstNumber = "";
let secondNumber = "";

const display = document.querySelector('.display')

const numbers = document.querySelectorAll(".num");
console.log(numbers);
for (const num of numbers) {
  num.addEventListener("click", (e) => {
    if (operation === "") {
      firstNumber += e.target.textContent;
      display.textContent = firstNumber
    } else {
      secondNumber += e.target.textContent;
      display.textContent = "";
      display.textContent =  secondNumber;
    }
  });
}

let operation = "";
const sumKey = document.querySelector(".sum");
sumKey.addEventListener("click", () => {
  operation = sum;
  console.log(operation);
});
const subtractKey = document.querySelector(".sub");
subtractKey.addEventListener("click", () => {
  operation = subtract;
  console.log(operation);
});
const multiplyKey = document.querySelector(".mul");
multiplyKey.addEventListener("click", () => {
  operation = multiply;
  console.log(operation);
});
const divideKey = document.querySelector(".divid");
divideKey.addEventListener("click", () => {
  operation = divide;
  console.log(operation);
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  display.textContent = operate(operation, firstNumber, secondNumber);
  firstNumber = operate(operation, firstNumber, secondNumber);
  secondNumber = "";
  operation = "";
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  display.textContent = "0";
});
