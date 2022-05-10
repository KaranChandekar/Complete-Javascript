'use strict';

const checkBtn = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');

const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
  }
});
