'use strict';
let turnTracker = 0;
let marker = ' ';
let currentPlayer = ' ';
let boardArray = [[false, false, false],
                 [false, false, false],
                 [false, false, false]];


let checkForDraw = function(){
	let draw = false;
	 if(turnTracker >= 8 ){
		draw = true;
		console.log("It's a tie!");
	}
};

let checkForWin = function () {
 let win = false;

 if(currentPlayer === boardArray[0] && currentPlayer === boardArray[1] && currentPlayer === boardArray[2] ||
   currentPlayer === boardArray[3] && currentPlayer === boardArray[4] && currentPlayer === boardArray[5] ||
   currentPlayer === boardArray[6] && currentPlayer === boardArray[7] && currentPlayer === boardArray[8] ||
   currentPlayer === boardArray[0] && currentPlayer === boardArray[3] && currentPlayer === boardArray[6] ||
   currentPlayer === boardArray[1] && currentPlayer === boardArray[4] && currentPlayer === boardArray[7] ||
   currentPlayer === boardArray[2] && currentPlayer === boardArray[5] && currentPlayer === boardArray[8] ||
   currentPlayer === boardArray[0] && currentPlayer === boardArray[4] && currentPlayer === boardArray[8] ||
   currentPlayer === boardArray[2] && currentPlayer === boardArray[4] && currentPlayer === boardArray[6] ){
	win = true;
	console.log("winner is" +currentPlayer);

   }

   return win;
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
	currentPlayer = "Player X";
	marker = "O";

	// should probably clear the ui too, just in case.
};

const isSquareFree = function(index) {
	// check the board to see if it's free.  Always returning true for now
	console.log("Checking square "+index);
	return true;
};

const markSquare = function(index) {
	// mark this square as taken on the board.
	console.log("Marking square "+index);
};


$(() => {

	// init the game board
	setGame();

	//set click handler
	$('.main').on('click', 'div', function() {

		console.log($(this).data());
		// get the id of the clicked div.  This is the square.
		// Is that what this line does?
		let index = parseInt($(this).data('number'));
		console.log("Clicked square representing index "+index);


		// see if the clicked square is free
		if (isSquareFree(index)) {
			// mark the square as taken by this player
			markSquare(index);

			// update the UI
			$(this).text(marker);

			// see if we're done
			if (checkForWin()) {
				// flag that the game is done and this player won, somehow
			} else if (checkForDraw()) {
				// flag that it's a draw, somehow
			} else {
				// game is still going
				swapPlayer();
			}
		}

	});
 });
 module.exports = {
  swapPlayer,
  checkForDraw,
  checkForWin,
  setGame
};
