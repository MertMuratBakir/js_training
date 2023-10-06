
var dice = document.querySelectorAll('img');
var h1 = document.querySelector('h1');
dice[0].setAttribute('src', 'images/dice6.png');
dice[1].setAttribute('src', 'images/dice6.png');

var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', randomDiceImage1);

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', randomDiceImage2);

if (randomNumber1 > randomNumber2) {
    h1.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    h1.innerHTML = "Player 2 Wins! 🚩";
} else {
    h1.innerHTML = "Draw!";
}

addEventListener('click', function() {
    location.reload(); 
});