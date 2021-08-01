function ConvertNumberToObject(inputNumber) {
    let number = parseInt(inputNumber);
    if (isNaN(number))
    {
        console.log("Введено не число");
        return {};
    }
    if (number > 999) {
        console.log("Число больше 999");
        return {};
    }
    let n100 = Math.floor(number / 100);
    number = number % 100;
    let n10 = Math.floor(number / 10);
    let n1 = number % 10;
    return {
        "единицы" : n1,
        "десятки" : n10,
        "сотни" : n100
    }
}

var numForConvert = prompt("Введите число от 0 до 999");
console.log(ConvertNumberToObject(numForConvert));