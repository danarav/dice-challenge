var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var winningMessage = "";

if (randomNumber1 > randomNumber2) {
  winningMessage = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  winningMessage = "Player 2 Wins";
} else {
  winningMessage = "Tie";
}

document.querySelector("h1").innerText = winningMessage;
