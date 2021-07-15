alert(null == 0); //false 
alert(Number(null) == 0); //true  При явном приведении к типу Number null преобразуется в 0
alert(null > 0); //false
alert(null < 0); //false
alert(null >= 0); //true  В соответствии со спецификацией ECMAScript 5.1
                  //п. 11.8.4 Оператор 'Больше или равно'