var strTemperatureC = prompt("Введите температуру по Цельсию");
var temperatureC = parseInt(strTemperatureC);
var temperatureF = (9 / 5) * temperatureC + 32;
var strTemperatureF = (isNaN(temperatureF))? 
    "Ошибка. Введено не число" : 
    "Температура по Фаренгейту : " + temperatureF;
alert(strTemperatureF);