'use strict';
const min = 1;
const max = 20;

let randomNumber = Math.trunc(Math.random() * (max - min + 1)) + min;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);

  // No input provided
  if (!inputNumber) {
    document.querySelector('.message').innerHTML = "No number provided!";
  }
  // When the guess is too low
  else if (inputNumber < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = "Your guess is too small!";

      score = score - 1;
      document.querySelector('.score').textContent = score;
    }
    // Player exhausts the score and loses the game.
    else {
      document.querySelector('.message').innerHTML = "You lost!";
      document.querySelector('.score').innerHTML = 0;
    }
  }
  // When the guess is too high
  else if (inputNumber > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = "Your guess is too high!";

      score = score - 1;
      document.querySelector('.score').textContent = score;
    }
    // Player exhausts the score and loses the game.
    else {
      document.querySelector('.message').innerHTML = "You lost!";

      document.querySelector('.score').innerHTML = 0;
    }
  }
  // Player Wins 
  else {
    document.querySelector('.message').innerHTML = "Congratulations! Your guess is correct ";

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
  document.querySelector('.message').innerHTML = "Start guessing...";
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});