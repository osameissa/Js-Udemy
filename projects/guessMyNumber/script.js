'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🤷🏿‍♂️ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🥳 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = 'green';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Guess too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👾 GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Guess too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👾 GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.background = 'black';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});