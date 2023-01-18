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

const numbers = document.querySelectorAll(".num");
for (const num of numbers) {
  num.addEventListener("click", (e) => {
    if (firstNumber === "") {
      firstNumber += e.target.textContent;
    } else {
      secondNumber += e.target.textContent;
    }
  });
}

let operation = "";
const sumKey = document.querySelector(".sum");
sumKey.addEventListener("click", () => {
  operation = sum;
});
const subtractKey = document.querySelector(".sub");
subtractKey.addEventListener("click", () => {
  operation = subtract;
});
const multiplyKey = document.querySelector(".mul");
multiplyKey.addEventListener("click", () => {
  operation = multiply;
});
const divideKey = document.querySelector(".divid");
divideKey.addEventListener("click", () => {
  operation = divide;
});

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
  operate(operation, firstNumber, secondNumber);
  firstNumber = operate(operation, firstNumber, secondNumber);
  secondNumber = '';
});