let products = [
    {name : "Product 1", price : 100},
    {name : "Product 2", price : 200},
    {name : "Product 3", price : 300},
    {name : "Product 4", price : 400},
]

const delPefix = "del";

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
    },
    removeProduct(index) {
        if (index == 0) {
            this.goods.shift();
        } else {
            this.goods.splice(index, index);
        }
    },
    updateBusket: function() {
        var basket =document.getElementById("basket");
        basket.innerHTML = '';
        for (var i = 0; i < this.goods.length; i++) {
            var item = document.createElement("ul");
            item.innerHTML = this.goods[i].name + " " + this.goods[i].price + " ";
            var button = document.createElement("button");
            button.innerHTML = "Удалить";
            button.id = delPefix + i;
            button.addEventListener("click", removeFromBasket)
            item.appendChild(button);
            basket.appendChild(item);
        }
        var sum = this.countBasketPrice();
        var totalSum = document.getElementById("totalSum");
        totalSum.innerHTML = sum;
    }
}

function addToBasket(event) {
    const targetButton = event.target;
    let index = targetButton.id;
    basket.addProduct(products[index]);
    basket.updateBusket();
}

function removeFromBasket(event) {
    const targetButton = event.target;
    const li = targetButton.parentNode;
    const ul = li.parentNode;
    ul.removeChild(li);
    let indexStr = targetButton.id;
    indexStr = indexStr.slice(delPefix.length);
    let index = parseInt(indexStr);
    basket.removeProduct(index);
    basket.updateBusket();
}

function init() {
    var list = document.getElementById("productList");
    for (var i = 0; i < products.length; i++) {
        var item = document.createElement("li");
        var button = document.createElement("button");
        button.innerHTML = "Добавить в корзину";
        button.id = i;
        button.addEventListener("click", addToBasket)
        item.innerHTML = products[i].name + " ";
        list.appendChild(item);
        item.appendChild(button);
    }
}

window.onload = init;



