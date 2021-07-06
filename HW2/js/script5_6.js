function sum(x, y) {
    return x + y;
}

function diff(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
    case "sum":
        return sum(arg1, arg2);
    case "diff":
        return diff(arg1, arg2);
    case "mult":
        return mult(arg1, arg2);
    case "div":
        return div(arg1, arg2);
    }
}