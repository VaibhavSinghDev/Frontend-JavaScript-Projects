'use strict';
const min = 1;
const max = 20;

let randomNumber = Math.trunc(Math.random() * (max - min + 1)) + min;

let score = 20;
let highScore = 0;

//function to print the winning and losing msg along with the case of no input
const printMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);

  // No input provided
  if (!inputNumber) {
    printMessage("No number provided!");
  }

  // When the guess is wrong
  else if (inputNumber !== randomNumber) {
    if (score > 1) {

      printMessage(inputNumber > randomNumber ? "Your guess is too high!" : "Your guess is too low!");

      score = score - 1;

      document.querySelector('.score').textContent = score;
    }

    // Player exhausts the score and loses the game.
    else {
      printMessage("You lost!");
      document.querySelector('.score').textContent = 0;
    }
  }

  // Player Wins 
  else {
    printMessage("Congratulations! Your guess is correct ");

    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

//Reset the game
document.querySelector('.again').addEventListener('click', function () {

  randomNumber = Math.trunc(Math.random() * (max - min + 1)) + min;

  score = 20;

  printMessage("Start guessing...");

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = score;
});