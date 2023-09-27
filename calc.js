function createCalculator(a, b, op, result) {
  if (a == undefined) a = "";
  if (b == undefined) b = "";

  const getA = () => a;
  const getB = () => b;
  const getOp = () => op;
  const getResult = () => result;

  const handleNumber = (value) => {
    if (result != undefined) result = undefined;
    if (op == undefined)
      a = (a == "0") ? value : a += value;
    else
      b = (b == "0") ? value : b += value;
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
      result = Math.round(result * 1000) / 1000;
      a = "";
      b = "";
      op = undefined;
    }
  };

  const handleDecimal = () => {
    if (op == undefined) a = setDecimal(a);
    else b = setDecimal(b);
  };

  const setDecimal = (value) => {
    if (value.indexOf(".") > 0) return value;
    else return (value += ".");
  };

  const getDisplayText = () => {
    if (result != undefined)
      return result
    else if (a == "")
      return "0";
    else if (a != "" && op == undefined)
      return a;
    else if (a != "" && op != undefined && b == "")
      return `${a} ${op}`;
    else if (a != "" && op != undefined && b != "")
      return `${a} ${op} ${b}`;
  }

  const backspace = () => {

  }

  const clear = () => {
    a = "";
    b = "";
    op = undefined;
    result = undefined;
  }

  return {
    getA,
    getB,
    getOp,
    getResult,
    getDisplayText,

    handleNumber,
    handleOp,
    calculate,
    setDecimal,
    handleDecimal,

    clear,
    backspace,

    logVars,
  };
}

module.exports = { createCalculator };
// export { createCalculator }
