document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
  dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.dice').style.display = 'block';
  document.querySelector('.dice').src = 'dice-' + dice + '.png';
});
