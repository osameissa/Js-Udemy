'use strict';

// Selectors
// getElementByID/Class technically faster if you're using large number of selectors
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const toggleWinner = function () {
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  toggleWinner();
};

// Initiate score = 0
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Event-handler to reset the game
newBtn.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  current0El.textContent = 0;
  current1El.textContent = 0;
  toggleWinner();
});

// Event-handler to roll the dice
rollBtn.addEventListener('click', function () {
  // 1. Generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled a: ${dice}`);

  // 2.Display dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  // 3. Check if rolled 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //    If true switch to next player
    switchPlayer();
  }
});

// Event-handler for hold-button
holdBtn.addEventListener('click', function () {
  // 1. Add to current score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // 2. Check if score >= 100 otherwise switch player
  if (scores[activePlayer] >= 10) {
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    switchPlayer();
  }
});