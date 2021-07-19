let product = {
    name : "Наушники",
    price : 100,
    brand : "Koss",
    model : "KPH7",
    photo : "https://koss.ru/media/image/product/koss/kph7-wireless/kph7-wireless-1595423778825.jpg"
}

let img = new Image();
img = document.createElement('img');
img.src = product.photo;
document.body.appendChild(img);