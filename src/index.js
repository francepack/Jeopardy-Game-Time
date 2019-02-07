// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';
//  Tell webpack to use an image (link to it in index.html)
// import './images/turing-logo.png'

import Player from './player.js';
import Clue from './clue.js';
import Gameboard from './gameboard.js';
import Finalround from './finalRound.js';
import Dailydouble from './dailyDouble.js';
import $ from 'jquery';
import domUpdates from './domUpdates.js';

let game = new Gameboard();
console.log("start game", game);

let $startBtn = $('#playBtn');
let $gameboard = $('.game-board');
let $answerClue = $('.answer-btn')

$startBtn.on('click', function(e) {
  e.preventDefault();
  game.startGame();
  pullNames();
  domUpdates.removeStartScreen();
})

// $('body').on('click', '.answer-btn', function() {
//   let $playerAnswer = $('#playerAnswer').val();
//   game.changePlayerTurn();
// })

$gameboard.on('click', function(e) {
  if (e.target.className === 'clue-box') {
    let selectedClueLocation = e.target.id;
    let selectedClue = game.roundClues[selectedClueLocation]
    let clue = new Clue();
    clue.showClue(selectedClue);
    domUpdates.populateClueCard(selectedClue);
    $answerClue.on('click', function(e) {
      e.preventDefault();
      let $playerAnswer = $('#playerAnswer').val();
      clue.checkAnswer(game, selectedClue, $playerAnswer);
      // game.updateScore()
    })
  }
})

// $answerClue.on('click', function(e) {
//   e.preventDefault();
//   domUpdates.removeClueCard();
//   domUpdates.answerFeedback(selectedClue);
// })
  //clue.checkAnswer() ??


function pullNames() {
  let $playerName1 = $('#playerNameInput1').val();
  let $playerName2 = $('#playerNameInput2').val();
  let $playerName3 = $('#playerNameInput3').val();
  game.createPlayers(game, $playerName1, $playerName2, $playerName3)
}
