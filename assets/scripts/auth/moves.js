'use strict';
const handles = require('./handles');
let turnTracker = 0;
let marker = ' ';
let win = false;
let index;
let draw;
let currentPlayer = ' ';
let boardArray = [[false, false, false],
                 [false, false, false],
                 [false, false, false]];


let checkForDraw = function(){
	draw = false;
	 if(turnTracker ===9 && !win){
		draw = true;
		console.log("It's a tie!");
}
};
let checkForWin = function () {
 let win = false;
 console.log(boardArray);
 if(marker === boardArray[0] && marker === boardArray[1] && marker === boardArray[2] ||
   marker === boardArray[3] && marker === boardArray[4] && marker === boardArray[5] ||
   marker === boardArray[6] && marker === boardArray[7] && marker === boardArray[8] ||
   marker === boardArray[0] && marker === boardArray[3] && marker === boardArray[6] ||
   marker === boardArray[1] && marker === boardArray[4] && marker === boardArray[7] ||
   marker === boardArray[2] && marker === boardArray[5] && marker === boardArray[8] ||
   marker === boardArray[0] && marker === boardArray[4] && marker === boardArray[8] ||
   marker === boardArray[2] && marker === boardArray[4] && marker === boardArray[6] ){
	win = true;
	console.log("winner is " +marker);

   }

   return win;
};

const swapPlayer = function(){
  //index = parseInt($(this).data('number'));
  // turnTracker = 0;
  // $('.space').text(' ');
  // $('.space').on('click', function(){
  //   $(this).off();
	     if(turnTracker % 2 === 0) {
		currentPlayer = "Player x";
		marker = "x";
    boardArray[index] = "x";
		turnTracker++;
	} else {
		currentPlayer = "Player o";
		marker =  "o";
    boardArray[index] = "o";
		turnTracker++;
	}
// });
};
const setGame = function(){
	// empty board
	boardArray = [];
	boardArray[0] = null;
	boardArray[1] = null;
	boardArray[2] = null;
	boardArray[3] = null;
	boardArray[4] = null;
	boardArray[5] = null;
	boardArray[6] = null;
	boardArray[7] = null;
	boardArray[8] = null;

	// set the first player
	// currentPlayer = "Player o";
	// marker = "o";
  $('.refresh-game').on('click', function(){
  $('.refresh-game').on('submit', setGame);
}
	// should probably clear the ui too, just in case.

);
};
const isSquareFree = function(index) {
  boardArray[index] = marker;
  //console.log(index);
  //   marker = index;
  //   console.log(index);
    console.log(currentPlayer);
	// check the board to see if it's free.  Always returning true for now
	//console.log("Checking square "+index);
	return true;
// }
};
const markSquare = function(index) {
	// mark this square as taken on the board.
	console.log("Marking square "+index);

};

$(() => {

	// init the game board

	setGame();

	$('.main').on('click', 'div', function() {

		//console.log($(this).data());
		// get the id of the clicked div.  This is the square.
		// Is that what this line does?
		// let index = parseInt($(this).data('number', 10));
	//	console.log("Clicked square representing index "+index);

  index = parseInt($(this).data('number'));
    //console.log(index);
		// see if the clicked square is free
		if (isSquareFree(index)) {
			// mark the square as taken by this player
			markSquare(index);

			// update the UI
			$(this).text(marker);

			// see if we're done
			if (checkForWin()) {
        $('h1').text("Winner is player" +" " +marker );
				console.log("winner is player " +" " + marker );// flag that the game is done and this player won, somehow
			} else if (checkForDraw()) {
        draw = true;
        $('h1').text("It's a Cats Game!");

        //console.log("draw");
				// flag that it's a draw, somehow
			} else {
			// 	// game is still going
				swapPlayer();
			// }
		}
}
	// });
 });
 });
 module.exports = {
  swapPlayer,
  checkForDraw,
  checkForWin,
  setGame,
  handles
};
