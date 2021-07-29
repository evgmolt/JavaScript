const prefixForImageNum = "IMG";
const numOfImages = 3;

function openImage(event) {
   const galery = document.getElementsByClassName("galery")[0];
   galery.innerHTML = "";
   const target = event.target;
   const image = document.createElement("img");
   var name = target.id;
   image.src = "img/" + name + ".jpg";
   image.id = "bigPicture";
   let indexStr = name.slice(prefixForImageNum.length);
   let index = parseInt(indexStr);
   image.data = index;
   galery.appendChild(image);
}

function openImageByNum(num) {
   const galery = document.getElementsByClassName("galery")[0];
   galery.innerHTML = "";
   const image = document.createElement("img");
   image.src = "img/" + prefixForImageNum + num + ".jpg";
   image.id = "bigPicture";
   image.data = num;
   galery.appendChild(image);
}

function switchImage(event) {
   const bigImage = document.getElementById("bigPicture");
   let num = bigImage.data;
   if (event.key == "ArrowLeft") {
      num--;
      if (num < 1) {
         num = numOfImages;
      }
   }
   if (event.key == "ArrowRight") {
      num++;
      if (num > numOfImages) {
         num = 1;
      }
   }
   openImageByNum(num);
}

function init() {
   document.addEventListener("keydown", switchImage);
   const images = document.querySelectorAll(".thumbnails > img");
   for (let image of images) {
      image.addEventListener("click", openImage);
   }
   openImageByNum(1);
}

window.addEventListener("load", init);