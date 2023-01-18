// Add basic math operations
function add(x, y) {
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

const numbers = document.querySelectorAll(".num");
for (const num of numbers) {
  num.addEventListener("click", (e) => {
    firstNumber += e.target.textContent;
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

