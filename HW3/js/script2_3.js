var basketArray = []; 

basketArray.push({
    name : "Товар 1",
    price : 100
});

basketArray.push({
    name : "Товар 2",
    price : 200
});

basketArray.push({
    name : "Товар 3",
    price : 300
});

function countBasketPrice() {
    var price = 0;
    for (var i = 0; i < basketArray.length; i++) {
        price += basketArray[i].price;
    }
    return price;
}

alert(countBasketPrice());


