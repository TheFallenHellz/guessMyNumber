"use strict";
// Variables
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const changeBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

const reset = function () {
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = "?";
    displayMessage("Start guessing...");
    document.querySelector(".number").style.width = "15rem";
    changeBackgroundColor("#222");
    document.querySelector(".guess").value = "";
  });
};

// Game
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("😡 No number!");
  } else if (guess === randomNumber) {
    displayMessage("🥳 Correct Number");
    changeBackgroundColor("#60b347");
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? "😮 Too high" : "😔 Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("👎🏽 You lost the game");
      changeBackgroundColor("#ff0000");
      document.querySelector(".score").textContent = 0;
    }
  }
});

reset();
