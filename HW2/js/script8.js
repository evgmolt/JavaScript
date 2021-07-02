function power(val, pow) {
    if (pow <= 0) {
        return 1;
    } else {
        return val * power(val, pow-1);
    }
}

alert(power(2, 4));