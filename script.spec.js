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

describe("handleEquals", () => {
  test("add works as expected", () => {
    const calc = calculator.createCalculator("6", "5", "+");
    calc.handleEquals();
    expect(calc.getResult()).toBe(11);
  });
  test("subtract works as expected", () => {
    const calc = calculator.createCalculator("6", "5", "-");
    calc.handleEquals();
    expect(calc.getResult()).toBe(1);
  });
  test("multiply works as expected", () => {
    const calc = calculator.createCalculator("6", "5", "*");
    calc.handleEquals();
    expect(calc.getResult()).toBe(30);
  });
  test("divide works as expected", () => {
    const calc = calculator.createCalculator("6", "5", "/");
    calc.handleEquals();
    expect(calc.getResult()).toBe(1.2);
  });
  test("divide by zero does not work", () => {
    const calc = calculator.createCalculator("6", "0", "/");
    expect(calc.handleEquals()).toBe("ERROR");
  });
});
