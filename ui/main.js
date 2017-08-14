console.log('Loaded!');

//change text of using javascript
var element = document.getElementById("main-text");

element.innerHTML = "Hari Prasad";

//move image on click
var img = document.getElementById("madi");
img.onclick = function () {
  img.style.marginLeft = "200px";  
};