function createCalculator(a, b, op, result) {
  if (a == undefined) a = "";
  if (b == undefined) b = "";

  const getA = () => a;
  const getB = () => b;
  const getOp = () => op;
  const getResult = () => result;

  const handleNumber = (value) => {
    if (result != undefined) result = undefined;
    if (op == undefined) a += value;
    else b += value;
  };

  const handleOp = (opClicked) => {
    return a == "" || b != "" ? "ERROR" : (op = opClicked);
  };

  const logVars = () => console.log(a, op, b, result);

  const calculate = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    if (bNum == 0) return "ERROR";
    else {
      switch (op) {
        case "+":
          result = aNum + bNum;
          break;
        case "-":
          result = aNum - bNum;
          break;
        case "*":
          result = aNum * bNum;
          break;
        case "/":
          result = aNum / bNum;
          break;
      }
      a = undefined;
      b = undefined;
      op = undefined;
    }
    logVars();
  };

  const handleDecimal = () => {
    if (op == undefined) a = setDecimal(a);
    else b = setDecimal(b);
    logVars();
  };

  const setDecimal = (value) => {
    if (value.indexOf(".") > 0) return value;
    else return (value += ".");
  };

  const getDisplayText = () => {
    if (a == undefined) {
      displayText = "";
    }
  };

  // const backSpace = () => {};

  // const handleClear = () => {};

  return {
    getA,
    getB,
    getOp,
    getResult,

    handleNumber,
    handleOp,
    calculate,
    setDecimal,
    handleDecimal,

    logVars,
  };
}

const calc = createCalculator();

const displayText = document.querySelector(".display-text");

const numberBtns = document.querySelectorAll("[data-number]");
numberBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calc.handleNumber(e.target.getAttribute("value"));
    displayText = calc.getDisplayText();
    calc.logVars();
  });
});

const opBtns = document.querySelectorAll("[data-operator");
opBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    calc.handleOp(e.target.getAttribute("value"));
    displayText = calc.getDisplayText();
    calc.logVars();
  });
});

const equalsBtn = document.querySelector("#equalsBtn");
equalsBtn.addEventListener("click", (e) => {
  calc.calculate();
  displayText = calc.getDisplayText();
  calc.logVars();
});

const decimalBtn = document.querySelector("#decimalBtn");
decimalBtn.addEventListener("click", (e) => {
  calc.handleDecimal();
  displayText = calc.getDisplayText();
  calc.logVars();
});

module.exports = {
  createCalculator,
};
