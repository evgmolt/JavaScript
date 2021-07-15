function IsPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

var n = 0;
while (n <= 100) {
    if (IsPrime(n)) {
        console.log(n);
    }
    n++;
}