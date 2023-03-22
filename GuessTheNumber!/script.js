'use strict';
const min = 1;
const max = 20;

const randomNumber = Math.trunc(Math.random() * (max - min + 1)) + min;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  //console.log(inputNumber);
  if (!inputNumber) {
    document.querySelector('.message').innerHTML = "No number provided!";
  }

  else if (inputNumber < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = "Your guess is too small!";

      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').innerHTML = "You lost!";
      document.querySelector('.score').innerHTML = 0;
    }
  }
  else if (inputNumber > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = "Your guess is too high!";

      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').innerHTML = "You lost!";

      document.querySelector('.score').innerHTML = 0;
    }
  }
  else {
    document.querySelector('.message').innerHTML = "Congratulations! Your guess is correct ";

    document.querySelector('.number').textContent = randomNumber;
  }
})