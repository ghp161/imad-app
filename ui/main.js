console.log('Loaded!');

//change text of using javascript
var element = document.getElementById("main-text");

element.innerHTML = "Hari Prasad";

//move image on click
var img = document.getElementByID("madi");
img.onclick = function () {
  img.style.marginleft = "200px";  
};