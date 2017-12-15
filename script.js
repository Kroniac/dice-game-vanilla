let activePlayer = 0;
let roundScore = 0;
let scores = [0, 0];

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
  dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.dice').style.display = 'block';
  document.querySelector('.dice').src = 'dice-' + dice + '.png';

  if (dice !== 1) {
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    nexPlayer();
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer] += roundScore;
  document.getElementById('score-' + activePlayer).textContent =
    scores[activePlayer];
  nexPlayer();
});

nexPlayer = () => {
  roundScore = 0;
  document.getElementById('current-' + activePlayer).textContent = roundScore;
  document
    .querySelector('.player-' + activePlayer + '-panel')
    .classList.remove('active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector('.player-' + activePlayer + '-panel')
    .classList.add('active');
};
