let products = [
    {name : "Product 1", price : 100},
    {name : "Product 2", price : 200},
    {name : "Product 3", price : 300},
    {name : "Product 4", price : 400},
]

let basket = {
    goods: [
    ],
    countBasketPrice: function() {
        var price = 0;
        for (let good of this.goods)
        {
            price += good.price;
        }
        return price;
    },
    addProduct: function(newProduct) {
        this.goods.push(newProduct);
        var sum = this.countBasketPrice();
        var basket =document.getElementById("basket");
        var item = document.createElement("ul");
        item.innerHTML = newProduct.name + " " + newProduct.price;
        basket.appendChild(item);
        var totalSum = document.getElementById("totalSum");
        totalSum.innerHTML = sum;
    }
}

function addToBasket(event) {
    const targetButton = event.target;
    let index = targetButton.id;
    basket.addProduct(products[index]);
}

function showPicture(event) {
}

function init() {
    var list = document.getElementById("productList");
    for (var i = 0; i < products.length; i++) {
        var item = document.createElement("li");
        var button = document.createElement("button");
        button.innerHTML = "Добавить в корзину";
        button.id = i;
        button.addEventListener("click", addToBasket)
        item.innerHTML = products[i].name;
        item.addEventListener('click', showPicture);
        list.appendChild(item);
        item.appendChild(button);
    }
}

window.onload = init;



