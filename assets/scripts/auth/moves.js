'use strict';
let turnTracker = 0;
let marker = ' ';
let currentPlayer = ' ';
let boardArray = [];

const checkForWin = function (boardArray) {
  let win = true;

  if(currentPlayer === boardArray[0] && currentPlayer === boardArray[1] && currentPlayer === boardArray[2] ||
    currentPlayer === boardArray[3] && currentPlayer === boardArray[4] && currentPlayer === boardArray[5] ||
    currentPlayer === boardArray[6] && currentPlayer === boardArray[7] && currentPlayer === boardArray[8] ||
    currentPlayer === boardArray[0] && currentPlayer === boardArray[3] && currentPlayer === boardArray[6] ||
    currentPlayer === boardArray[1] && currentPlayer === boardArray[4] && currentPlayer === boardArray[7] ||
    currentPlayer === boardArray[2] && currentPlayer === boardArray[5] && currentPlayer === boardArray[8] ||
    currentPlayer === boardArray[0] && currentPlayer === boardArray[4] && currentPlayer === boardArray[8] ||
    currentPlayer === boardArray[2] && currentPlayer === boardArray[4] && currentPlayer === boardArray[6] === true){
    console.log("winner is" +currentPlayer);
    return win;
  }else{
    const isDraw = function(){
      let draw = false;
      console.log("It's a Draw!");
      if (turnTracker >=0 && checkForWin === false){
      draw = true;
  }
};
}
};
const swapPlayer = function(){
  if(turnTracker % 2 === 0) {
    currentPlayer = "Player X";
    marker = "X";
    turnTracker++;
} else {
  currentPlayer = "Player O";
  marker =  "O";
  turnTracker++;
}
};
// }
// let boxVal1 = $('.box-1').text();
// let boxVal2 = $('.box-2').text();
// let boxVal3 = $('.box-3').text();
// let boxVal4 = $('.box-4').text();
// let boxVal5 = $('.box-5').text();
// let boxVal6 = $('.box-6').text();
// let boxVal7 = $('.box-7').text();
// let boxVal8 = $('.box-8').text();
// let boxVal9 = $('.box-9').text();

// const setMove = function (event) {
//   event.preventDefault();
//   $(this).text(currentPlayer);
  // let id = $(this).attr('class');
  // console.log(id);
  // return id;
// let swapPlayer = function() {
//     if (currentPlayer === player_x) {
//         currentPlayer = player_o;
//     } else {
//         currentPlayer = player_o;
//     }
// };



$(() => {
  const setGame = function(boardArray){
    boardArray = [
        boardArray[0] = $('.box-1').val('class'),
        boardArray[1] = $('.box-2').attr('class'),
        boardArray[2] = $('.box-3').attr('class'),
        boardArray[3] = $('.box-4').attr('class'),
        boardArray[4] = $('.box-5').attr('class'),
        boardArray[5] = $('.box-6').attr('class'),
        boardArray[6] = $('.box-7').attr('class'),
        boardArray[7] = $('.box-8').attr('class'),
        boardArray[8] = $('.box-9').attr('class'),
];

};
    console.log(boardArray);
  });
    $('.main div').on('click', function(){
      if($(this).text() !== "X" && $(this).text() !== "O") {
        $(this).text(marker);
          console.log(marker);
             swapPlayer();
           }
        });
// let player_x;
// let player_o;
// let currentPlayer;
// let ifClicked = function(currentPlayer){
//     currentPlayer = player_o
//   ifClicked();
// $(() => {
// $('.space').on('click', function(){
//     $(this).html('o');
//     console.log("click");
//   });
//   return true;
// });
// };
// let playerClick = function(){
//
//   playerClick()
//
// if (currentPlayer === player_x){
//   return playerClick;
// }else{
//   return player_o;
// }
//
// };


//need to see if the space is available
//if it is available set a boolean to it
//where the boolean determines whose turn it is
//if one of the booleans is true change the value of that
//space to the marker of that player.
//check to see if there are available boxes
//if game is done endGame.
//test for x win
//test for y win
//test for draw
//button that will refresh the board.

//
// let players = ['player-x', 'player-o'];
// let player = '';
//
//   $('.space').on('click', function(){
//   let currentCell = $(this);
//     if (turnClick % 2 === 0) {
//       player = players[0];
//     } else {
//       player = players[1];
//     }
//     console.log(turnClick);
// });
//
// $('.box').on('click', function(){
//   let currentCell = $(this);
//   if (currentCell.hasClass('available')) {
//     currentCell.removeClass('available');
//     currentCell.addClass('player');
//   if (player === 'player-x') {
//     currentCell.addClass('player-x');
//       turnClick++;
//   }else {
//     currentCell.addClass('player-o');
//       turnClick++;
//     }
//   }
//   }
// );

module.exports = {
  swapPlayer,

};
