console.log('Loaded!');

//change text of using javascript
//var element = document.getElementById("main-text");
//element.innerHTML = "Hari Prasad";

//move image on click
/*var img = document.getElementById("madi");
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + "px";  
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
  //img.style.marginLeft = "100px";  
};*/

var counter = 0;
var batn = document.getElementById("counter");
batn.onclick = function () {
    // create request object
    var req = new XMLHttpRequest();
    req.onreadystatechange = function (){
      if (req.readyState  === XMLHttpRequest.DONE){
          if (req.status === 200)
          {
            var counter = req.responseText;
            var eles = document.getElementById("cnt");
            eles.innerHTML = counter;
          }
          else
            console.log(req.status);
      }
    };
    
    // make request
    req.open("GET","http://ghp161.imad.hasura-app.io/counter",true);
    req.send(null);
};


var submnt = document.getElementById("submit_com");
submnt.onclick = function () {
    // create request object
    console.log("submit called");
    var req = new XMLHttpRequest();
    req.onreadystatechange = function (){
      if (req.readyState  === XMLHttpRequest.DONE){
          if (req.status === 200)
          {
            var names = req.responseText;
            names = JSON.parse(names);
            var list = "";
            for(var i=0; i < names.length; i++){
                list += "<li>" + names[i] + "</li>"
            }
            var eles = document.getElementById("comlist");
            eles.innerHTML = list;
          }
          else
            console.log(req.status);
      }
    };
    
    var nameEle = document.getElementById("comments");
    var name = nameEle.value;
    console.log(name);
    // make request
    req.open("GET","http://ghp161.imad.hasura-app.io/submit-com?name=" + name,true);
    req.send(null);
};
