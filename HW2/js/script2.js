var a = 2;
var x = 1 + (a *= 2); //  Аналогично x = 1 + (a = a * 2). "=" является оператором, 
                      //  поэтому такая запись допустима.
alert(x);             //  5  