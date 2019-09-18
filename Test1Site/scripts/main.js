var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');
var x = document.getElementById("geolocation");
function KnowMyGeo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}  

function ClearMyGeo() {
  x.innerHTML = "<br>Latitude: ..." +
  "<br>Longitude: ...<br>";
}  

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat1.jpg') {
      myImage.setAttribute ('src','images/cat2.jpg');
    } else {
      myImage.setAttribute ('src','images/cat1.jpg');
    }
}

function showPosition(position) {
  x.innerHTML = "<br>Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude+"<br>";
}

