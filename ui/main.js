console.log('Loaded!');

//change text of using javascript
var element = document.getElementById("main-text");

element.innerHTML = "Hari Prasad";

//move image on click
var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";  
};
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
  //img.style.marginLeft = "100px";  
};

var counter = 0;
var batn = document.getElementById("counter");
batn.onclick = function () {
  
  var eles = document.getElementById("cnt");
  counter = counter + 1;
  eles.innerHTML = counter;
    
};