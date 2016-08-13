'use strict';
const handles = require('./handles');
let turnTracker = 0;
let marker = ' ';
let index;
let over = false;
let currentPlayer = ' ';
let boardArray = [null, null, null, null, null, null, null, null, null];

//Draw conditions'
let checkForDraw = function(){
	let draw = false;
	if(turnTracker ===8){
		draw = true;
		over = true;
		console.log("over is" + " " + over);
	} else {
		draw = false;
	}
	console.log("over should be true");
	return draw;
};

//win conditions

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
			over = true;
			//console.log("over is" + " "+ over);
			// console.log("winner is " +marker);
		}
		return win;
	};

	//alternate players after
	const swapPlayer = function(){
		if(turnTracker % 2 === 0) {
			currentPlayer = "Player o";
			marker = "o";
		} else {
			currentPlayer = "Player x";
			marker =  "x";
		}
		turnTracker++;
	};

	const setPlay = function(){
		turnTracker = 0;
		over = false;
		currentPlayer = 'Player x';
		marker = 'x';
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
		// //clear the UI so so multiple games can happen
		$('.space').text('');
		$('h1').text('');
		setPlay();
	};
	//check to see if square is null
	const isSquareFree = function(index) {
		return (boardArray[index] === null);
	};
	//mark the square as  occupied
	const markSquare = function(index, domSquare) {
		$(domSquare).text(marker);
		// mark this square as taken on the board.
		boardArray[index] = marker;
	};

	$(() => {

		// init the game board

		setGame();
		//set up the click handlers
		$('#refresh-game').on('click', setGame);
		$('.main').on('click', 'div', function() {
			index = parseInt($(this).data('number'), 10);
			if (isSquareFree(index)) {
				//mark the square with x or o
				markSquare(index, this);
				//checking if the game is won
				let isWon = checkForWin();
					//upate the game with each move
					//with PATCH AJAX request
				handles.onUpdateGame(marker, index, over);
				let doubleCheck = checkForDraw();
				if(isWon){
					//display winner on the screen
					$('h1').text("Winner is player" +" " +marker );
					//check for  a tie
				} else if(doubleCheck) {
					over = true;
					//display that its a draw on the screeu
					console.log('Its a draw');
					$('h1').text("It's a Cats Game!");
				} else {
					// 	// game is still going
					swapPlayer();
				}
			}
		});
	});
	module.exports = {
		swapPlayer,
		checkForDraw,
		checkForWin,
		setGame,
		handles,
		setPlay
	};
