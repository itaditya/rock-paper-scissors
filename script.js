const choices = ['rock', 'paper', 'scissors'];
let numMoves = 0;
let userWins = 0;

function checkUserWinner(userChoice, computerChoice) {
  if (userChoice === 'rock' && computerChoice === 'scissors') {
    return true;
  }
  if (userChoice === 'scissors' && computerChoice === 'paper') {
    return true;
  }
  if (userChoice === 'paper' && computerChoice === 'rock') {
    return true;
  }

  return false;
}

function getComputerChoice() {
  const numRandom = Math.floor(Math.random() * 3);
  const computerChoice = choices[numRandom];
  return computerChoice;
}

function newMove(userChoice) {
  const computerChoice = getComputerChoice();
  const isUserWinner = checkUserWinner(userChoice, computerChoice);

  numMoves += 1;
  if (isUserWinner) {
    userWins += 1;
  }

  const userQuery = `.js-item-user-${userChoice}`;
  const computerQuery = `.js-item-cpu-${computerChoice}`;

  document.querySelectorAll('.picked').forEach(function (item) {
    item.classList.remove('picked');
  });
  document.querySelector(userQuery).classList.add('picked');
  document.querySelector(computerQuery).classList.add('picked');
  document.querySelector('.js-user-score').textContent = userWins;
  document.querySelector('.js-total-moves').textContent = numMoves;
}

document.querySelector('.js-btn-rock').addEventListener('click', function () {
  newMove('rock');
});
document.querySelector('.js-btn-paper').addEventListener('click', function () {
  newMove('paper');
});
document.querySelector('.js-btn-scissors').addEventListener('click', function () {
  newMove('scissors');
});
