function openImage(event) {
   const galery = document.getElementsByClassName("galery")[0];
   galery.innerHTML = "";
   const target = event.target;
   const image = document.createElement("img");
   var name = target.id;
   image.src = "img/" + name + ".jpg";
   galery.appendChild(image);
}

function init() {
   const images = document.querySelectorAll(".thumbnails > img");
   for (let image of images) {
      image.addEventListener("click", openImage);
   }
}

window.addEventListener("load", init);