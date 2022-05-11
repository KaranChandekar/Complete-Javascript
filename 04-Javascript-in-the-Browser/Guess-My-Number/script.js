'use strict';

const checkBtn = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');

const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    message.textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    message.textContent = '📉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
