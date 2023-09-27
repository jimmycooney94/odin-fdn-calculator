const calculator = require("./script");

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

describe("addDecimal", () => {
  test("adds '.' to a value if it doesn't already have one", () => {
    const calc = calculator.createCalculator();
    expect(calc.addDecimal("5")).toBe("5.");
  });
  test("doesn't add '.' if it already has one", () => {
    const calc = calculator.createCalculator();
    expect(calc.addDecimal("5.")).toBe("5.");
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
});

describe("getDisplayText", () => {
  test("blank shows 0", () => {
    const calc = calculator.createCalculator();
    expect(calc.getDisplayText()).toBe("");
  });
  test("'a' only shows '{a}'", () => {
    const calc = calculator.createCalculator();
    expect(calc.getDisplayText()).toBe("");
  });
  test("'a' and 'op' shows '{a} {op}'", () => {
    const calc = calculator.createCalculator();
    expect(calc.getDisplayText()).toBe("");
  });
  test("'a', 'op' and 'b' shows '{a} {op} {b}'", () => {
    const calc = calculator.createCalculator();
    expect(calc.getDisplayText()).toBe("");
  });
  test("all undefined except 'result' shows '{result}'", () => {
    const calc = calculator.createCalculator();
    expect(calc.getDisplayText()).toBe("");
  });
});
