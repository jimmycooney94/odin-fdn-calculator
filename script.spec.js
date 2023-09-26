const calculator = require('./script')

describe('handleNumber', () => {
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

describe('handleOp', () => {
    test("sets op if 'a' isn't blank", () => {
        const calc = calculator.createCalculator("1");
        expect(calc.handleOp("*")).toBe("*");
    });
    test("error if 'a' is blank", () => {
        const calc = calculator.createCalculator();
        expect(calc.handleOp("*")).toBe("ERROR: 'a' is blank");
    });

});