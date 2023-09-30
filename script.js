import { createCalculator } from "./calc.js";

const calc = createCalculator();
window.calc = calc;

const displayText = document.querySelector(".display-text");

const numberBtns = document.querySelectorAll("[data-number]");
numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calc.handleNumber(e.target.getAttribute("value"));
    displayText.innerText = calc.getDisplayText();
  });
});

const opBtns = document.querySelectorAll("[data-operator");
opBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calc.handleOp(e.target.getAttribute("value"));
    displayText.innerText = calc.getDisplayText();
  });
});

const equalsBtn = document.querySelector("#equalsBtn");
equalsBtn.addEventListener("click", (e) => {
  calc.calculate();
  displayText.innerText = calc.getDisplayText();
});

const decimalBtn = document.querySelector("#decimalBtn");
decimalBtn.addEventListener("click", (e) => {
  calc.handleDecimal();
  displayText.innerText = calc.getDisplayText();
});

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", (e) => {
  calc.clear();
  displayText.innerText = calc.getDisplayText();
});

const backspaceBtn = document.querySelector("#backspaceBtn");
backspaceBtn.addEventListener("click", (e) => {
  calc.backspace();
  displayText.innerText = calc.getDisplayText();
});

window.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9) {
    calc.handleNumber(e.key);
    displayText.innerText = calc.getDisplayText();
  } else if (e.key == ".") {
    calc.handleDecimal();
    displayText.innerText = calc.getDisplayText();
  } else if (e.key == "Backspace" || e.key == "Delete") {
    calc.backspace();
    displayText.innerText = calc.getDisplayText();
  } else if (e.key == ".") {
    calc.handleDecimal();
    displayText.innerText = calc.getDisplayText();
  } else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
    calc.handleOp(e.key);
    displayText.innerText = calc.getDisplayText();
  } else if (e.key == "=") {
    calc.calculate();
    displayText.innerText = calc.getDisplayText();
  } else if (e.key == "Escape") {
    calc.clear();
    displayText.innerText = calc.getDisplayText();
  }
});
