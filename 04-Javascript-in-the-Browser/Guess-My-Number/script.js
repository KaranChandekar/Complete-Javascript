'use strict';

const checkBtn = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const again = document.querySelector('.again');

const secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

checkBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    message.textContent = '⛔ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When guess is too hight
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

again.addEventListener('click', function () {
  const secretNumber = Math.floor(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  guessInput.value = '';
});
