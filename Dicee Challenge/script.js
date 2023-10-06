
var dice6 = document.querySelectorAll('img');
dice6[0].setAttribute('src', 'images/dice6.png');
dice6[1].setAttribute('src', 'images/dice6.png');

var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomDiceImage1);

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomDiceImage2);