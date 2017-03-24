// toggle the images
// select the image
var myImage = document.querySelector('img');
// toggle the image when it is clicked
myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src', 'images/firefox2.png');
	} else {
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}
}

// Personalized welcome message code

var myButton = document.querySelector('button');
//console.log(myButton);
var myHeading = document.querySelector('h1');
//console.log(myHeading);

// function to setup name
function setUserName() {
	var myName = prompt('Please enter your name. ');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}
