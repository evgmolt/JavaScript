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
    event.stopPropagation();
}

function showImages(event) {
    const target = event.target;
    var number=  target.dataset.number;
    var modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay");
    modal.classList.toggle("closed");
    modalOverlay.classList.toggle("closed");
    let images = document.getElementsByClassName("thumbnails")[0];
    images.innerHTML = "";
    for (var i = 0; i < 3; i++)
    {
        var image = document.createElement("img");
        var image = new Image();
        image.src = "img/IMG" + number + "_" + i + "_thumb.webp";
        image.dataset.imageNumber = i;
        image.dataset.productNumber = number;
        image.addEventListener("click", openBigImage);
        images.appendChild(image);
        if (i === 0) {
            image.click();
        }
    }
}

function openBigImage(event) {
    const galery = document.getElementsByClassName("galery")[0];
    galery.innerHTML = "";
    const target = event.target;
    var productNumber = target.dataset.productNumber;
    var imageNumber = target.dataset.imageNumber;
    const image = document.createElement("img");
    
    image.src = "img/IMG" + productNumber + "_" + imageNumber + ".webp";
    galery.appendChild(image);
 }
 

function init() {
    var list = document.getElementById("productList");
    for (var i = 0; i < products.length; i++) {
        var item = document.createElement("li");
        var button = document.createElement("button");
        item.innerHTML = products[i].name + " ";
        item.dataset.number = i;
        item.addEventListener('click', showImages);
        button.innerHTML = "Добавить в корзину";
        button.id = i;
        button.addEventListener("click", addToBasket);
        list.appendChild(item);
        item.appendChild(button);
    }
}

window.onload = init;





