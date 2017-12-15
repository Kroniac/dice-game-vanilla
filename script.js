let scores, roundscore, activePlayer, isGameActive, previousScore;

init();

//on click of Roll Dice button
document.querySelector('.btn-roll').addEventListener('click', function() {
  if (isGameActive) {
    //to get a random number between 1 and 6
    dice = Math.floor(Math.random() * 6) + 1;

    if (previousScore === 6 && dice === 6) {
      scores[activePlayer] = 0;
      document.getElementById('score-' + activePlayer).textContent =
        scores[activePlayer];
      nexPlayer();
    } else {
      previousScore = dice;
      //setting the display of dice to block
      document.querySelector('.dice').style.display = 'block';

      //setting the dice pic acc. to dice number
      document.querySelector('.dice').src = 'dice-' + dice + '.png';

      //if dice number is not 1
      if (dice !== 1) {
        //updating the round score
        roundScore += dice;
        //updating the round score in UI
        document.getElementById(
          'current-' + activePlayer
        ).textContent = roundScore;
      } else nexPlayer();
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  if (isGameActive) {
    //update total score of current player
    scores[activePlayer] += roundScore;

    //update total score of current player in UI
    document.getElementById('score-' + activePlayer).textContent =
      scores[activePlayer];

    let input = document.querySelector('.final-score').value;
    let winningScore;
    if (input) {
      winningScore = input;
    } else winningScore = 100;
    //check if player won the game
    if (scores[activePlayer] >= winningScore) {
      //setting the player name to Winner
      document.getElementById('name-' + activePlayer).textContent = 'Winner!!';
      //setting dice-pic to none display
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.active').classList.add('winner');
      document.querySelector('.active').classList.remove('active');
      isGameActive = false;
    } else nexPlayer();
  }
});

// if the player presses Hold Button or player gets a dice = 1
function nexPlayer() {
  //setting roundscore to 0
  roundScore = 0;

  //setting previous score to  0;
  previousScore = 0;
  //resetting players roundScore to 0 in UI
  document.getElementById('current-' + activePlayer).textContent = roundScore;

  //removing active class from current player
  document
    .querySelector('.player-' + activePlayer + '-panel')
    .classList.remove('active');

  //changing active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  //adding active class to current active player
  document
    .querySelector('.player-' + activePlayer + '-panel')
    .classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click', function() {
  init();
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.winner').classList.remove('winner');
});

//to initialize values
function init() {
  activePlayer = 0;
  roundScore = 0;
  previousScore = 0;
  scores = [0, 0];
  isGameActive = true;
  //initializing the scores
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  //setting dice-pic to none display
  document.querySelector('.dice').style.display = 'none';

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}
