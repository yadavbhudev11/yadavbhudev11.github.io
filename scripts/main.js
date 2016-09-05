document.querySelector('h1').onclick = function() {
    alert('Har Har Mahadev!');
}
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shiva.jpg') {
      myImage.setAttribute ('src','images/shiva2.jpg');
    } else {
      myImage.setAttribute ('src','images/shiva.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('#author');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'By ParamBhakt: ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'By ParamBhakt: ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
//myHeading.textContent = 'Dev';
