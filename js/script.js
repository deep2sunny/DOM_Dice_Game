
var scores, roundScore,activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 1;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.dice').style.display = 'none'; //manipulate css

// function btn(){
//
// }
//
// document.querySelector('.btn-roll').addEventListener('click', btn); //btn is called callback function

document.querySelector('.btn-roll').addEventListener('click', function(){
  //1. Random Number
  var dice = Math.floor((Math.random() * 6) + 1);

  //2. Display result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'img/dice-' + dice + '.png';


  //3. Update the round score IF the rolled number was NOT 1
});






//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;  //setter
//console.log(x);
