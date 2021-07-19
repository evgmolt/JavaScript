let basket = {
    goods: [
        {name : "Товар 1", price : 100},
        {name : "Товар 2", price : 200},
    ],

    countBasketPrice: function() {
        var price = 0;
        for (let good of this.goods)
        {
            price += good.price;
        }
        return price;
    }
}

console.log(basket.countBasketPrice());







