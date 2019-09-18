var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat1.jpg') {
      myImage.setAttribute ('src','images/cat2.jpg');
    } else {
      myImage.setAttribute ('src','images/cat1.jpg');
    }
}
