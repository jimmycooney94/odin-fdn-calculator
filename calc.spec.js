const calculator = require("./calc");

describe("handleNumber", () => {
  test("appends first digit to 'a'", () => {
    const calc = calculator.createCalculator();
    calc.handleNumber("1");
    expect(calc.getA()).toBe("1");
  });
  test("appends second digit to 'a'", () => {
    const calc = calculator.createCalculator("1");
    calc.handleNumber("5");
    expect(calc.getA()).toBe("15");
  });
  test("appends first digit to 'b'", () => {
    const calc = calculator.createCalculator("1", "", "*");
    calc.handleNumber("1");
    expect(calc.getB()).toBe("1");
  });
  test("appends second digit to 'b'", () => {
    const calc = calculator.createCalculator("1", "1", "*");
    calc.handleNumber("5");
    expect(calc.getB()).toBe("15");
  });
  test("appending '0' to '0' gives no change to 'a'", () => {
    const calc = calculator.createCalculator("0");
    calc.handleNumber("0");
    expect(calc.getA()).toBe("0");
  });
  test("hide leading '0' when changing 'a'", () => {
    const calc = calculator.createCalculator("0");
    calc.handleNumber("1");
    expect(calc.getA()).toBe("1");
  });
  test("appending '0' to '0' gives no change to 'b'", () => {
    const calc = calculator.createCalculator("1", "0", "*");
    calc.handleNumber("0");
    expect(calc.getB()).toBe("0");
  });
  test("hide leading '0' when changing 'b'", () => {
    const calc = calculator.createCalculator("1", "0", "*");
    calc.handleNumber("1");
    expect(calc.getB()).toBe("1");
  });
});




describe("handleOp", () => {
  test("sets op if 'a' isn't blank", () => {
    const calc = calculator.createCalculator("1");
    expect(calc.handleOp("*")).toBe("*");
  });
  test("error if 'a' is blank", () => {
    const calc = calculator.createCalculator();
    expect(calc.handleOp("*")).toBe("ERROR");
  });
  test("error if 'b' is not blank", () => {
    const calc = calculator.createCalculator();
    expect(calc.handleOp("*")).toBe("ERROR");
  });
});




describe("setDecimal", () => {
  test("adds '.' to a value if it doesn't already have one", () => {
    const calc = calculator.createCalculator();
    expect(calc.setDecimal("5")).toBe("5.");
  });
  test("doesn't add '.' if it already has one", () => {
    const calc = calculator.createCalculator();
    expect(calc.setDecimal("5.")).toBe("5.");
  });
});



describe("handleDecimal", () => {
  test("adds '.' to 'a' correctly", () => {
    const calc = calculator.createCalculator("1");
    calc.handleDecimal();
    expect(calc.getA()).toBe("1.");
  });
  test("adds '.' to 'b' correctly", () => {
    const calc = calculator.createCalculator("1", "2", "*");
    calc.handleDecimal();
    expect(calc.getB()).toBe("2.");
  });
});




describe("calculate", () => {
  test("add works as expected", () => {
    const calc = calculator.createCalculator("6", "5", "+");
    calc.calculate();
    expect(calc.getResult()).toBe(11);
  });
  test("subtract works as expected", () => {
    const calc = calculator.createCalculator("6", "5", "-");
    calc.calculate();
    expect(calc.getResult()).toBe(1);
  });
  test("multiply works as expected", () => {
    const calc = calculator.createCalculator("6", "5", "*");
    calc.calculate();
    expect(calc.getResult()).toBe(30);
  });
  test("divide works as expected", () => {
    const calc = calculator.createCalculator("6", "5", "/");
    calc.calculate();
    expect(calc.getResult()).toBe(1.2);
  });
  test("divide by zero does not work", () => {
    const calc = calculator.createCalculator("6", "0", "/");
    expect(calc.calculate()).toBe("ERROR");
  });
  test("calculates to 3dp rounded down correctly (2.6162 => 2.616)", () => {
    const calc = calculator.createCalculator("2.54", "1.03", "*");
    calc.calculate();
    expect(calc.getResult()).toBe(2.616);
  });
  test("calculates to 3dp rounded up correctly (3.2538 => 3.254", () => {
    const calc = calculator.createCalculator("3.19", "1.02", "*");
    calc.calculate();
    expect(calc.getResult()).toBe(3.254);
  });
});




describe("getDisplayText", () => {
  test("blank shows 0", () => {
    const calc = calculator.createCalculator();
    expect(calc.getDisplayText()).toBe("");
  });
  test("'a' only shows '{a}'", () => {
    const calc = calculator.createCalculator("1");
    expect(calc.getDisplayText()).toBe("1");
  });
  test("'a' and 'op' shows '{a} {op}'", () => {
    const calc = calculator.createCalculator(1, "", "*");
    expect(calc.getDisplayText()).toBe("1 *");
  });
  test("'a', 'op' and 'b' shows '{a} {op} {b}'", () => {
    const calc = calculator.createCalculator("1", "2", "*");
    expect(calc.getDisplayText()).toBe("1 * 2");
  });
  test("all undefined except 'result' shows '{result}'", () => {
    const calc = calculator.createCalculator("", "", "", "2");
    expect(calc.getDisplayText()).toBe("2");
  });
});

describe("clear", () => {
  test("clear has same effect as new calc", () => {
    const calc = calculator.createCalculator("12", "34", "*");
    calc.clear();
    const newCalc = calculator.createCalculator();
    expect(calc.getA()).toBe(newCalc.getA());
    expect(calc.getB()).toBe(newCalc.getB());
    expect(calc.getOp()).toBe(newCalc.getOp());
    expect(calc.getResult()).toBe(newCalc.getResult());
  });
});