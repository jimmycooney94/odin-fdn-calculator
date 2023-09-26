
function createCalculator(a, b, op, result) {

    if (a == undefined) a = "";
    if (b == undefined) b = "";

    const getA = () => a;
    const getB = () => b;
    const getOp = () => op;

    const handleNumber = value => {
        if (result != undefined)
            result = undefined;
        if (op == undefined)
            a += value;
        else
            b += value;
    }

    const handleOp = opClicked => {
        if (a === "")
            ;
        else
            return op = opClicked;
    }

    const handleEquals = () => {
        switch (op) {
            case "add":
                a = a + b;
                break;
            case "subtract":
                a = a - b;
                break;
            case "multiply":
                a = a * b;
                break;
            case "divide":
                a = a / b;
                break;
        }
        a = undefined;
        b = undefined;
        op = undefined;
    };

    const handleDecimal = () => {

    };

    const handleClear = () => {

    };

    return {
        getA,
        getB,
        getOp,

        handleNumber,
        handleOp,
        handleEquals,
        handleDecimal,
        handleClear
    };
}

module.exports = {
    createCalculator
};