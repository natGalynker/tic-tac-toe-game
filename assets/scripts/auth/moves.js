'use strict';
const handles = require('./handles');
let turnTracker = 0;
let marker = ' ';
let index;
let over;
let currentPlayer = ' ';
let boardArray = [null, null, null, null, null, null, null, null, null];

//Draw conditions'
let checkForDraw = function(){
	let draw = false;
	if(turnTracker ===8){
		draw = true;
		console.log("It's a tie!");
	} else {
		draw = false;
	}
	return draw;
};

//win conditions

let checkForWin = function () {
	let win = false;
	over = false;
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
			console.log("winner is " +marker);
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
		console.log(domSquare);
		// mark this square as taken on the board.
		boardArray[index] = marker;
		console.log("Marking square "+index);
	};

	$(() => {

		// init the game board
		setGame();
		//set up the click handlers
		$('#refresh-game').on('click', setGame);
		console.log("Refresh board when this button is clicked");
		$('.main').on('click', 'div', function() {

			index = parseInt($(this).data('number'), 10);
			if (isSquareFree(index)) {
				//check to see if the square is indeed free
				//if it is...
				// mark the square as taken by this player
				markSquare(index, this);
				handles.onUpdateGame(marker, index, over);
				//communicate with the api
				//log each move with index and marker
				//take the index of the array and send it to the api to update the array

				//with index and marker
				//to updateGame to save that move to the api
				// update the UI
				// see if we're done
				if (checkForWin()) {
						over = true;
					$('h1').text("Winner is player" +" " +marker );
					console.log("winner is player " +" " + marker );// flag that the game is done and this player won, somehow
				} else if (checkForDraw()) {
					console.log('Its a draw');
					$('h1').text("It's a Cats Game!");
					//else if checkForDraw or checkForWin true
					//stop game play. Game over
					//take this game over to send to api for update game

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
