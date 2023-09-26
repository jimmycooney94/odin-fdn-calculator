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
  };

  const handleDecimal = () => {
    if (op == undefined) a = addDecimal(a);
    else b = addDecimal(b);
  };

  const addDecimal = (value) => {
    if (value.indexOf(".") > 0) return value;
    else return (value += ".");
  };

  const backSpace = () => {};

  const handleClear = () => {};

  return {
    getA,
    getB,
    getOp,
    getResult,

    handleNumber,
    handleOp,
    calculate,
    addDecimal,
    handleDecimal,
  };
}

module.exports = {
  createCalculator,
};
