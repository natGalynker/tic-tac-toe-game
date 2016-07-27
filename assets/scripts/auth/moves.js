'use strict';
//need to see if the space is available
//if it is available set a boolean to it
//where the boolean determines whose turn it is
//if one of the booleans is true change the value of that
//space to the marker of that player.
let box = [0, 1, 2, 3, 4, 5, 6 ,7 8];

let player1 = player_o;
let player2 = player_x;

const turnClick = function(ifAvailable, box){
  for (let i = 0; i < box.length; i++) {
    
  }
}
//
let players = ['player-x', 'player-o'];
let player = '';

  $('.space').on('click', function(){
  let currentCell = $(this);
    if (turnClick % 2 === 0) {
      player = players[0];
    } else {
      player = players[1];
    }
    console.log(turnClick);
});

$('.box').on('click', function(){
  let currentCell = $(this);
  if (currentCell.hasClass('available')) {
    currentCell.removeClass('available');
    currentCell.addClass('player');
  if (player === 'player-x') {
    currentCell.addClass('player-x');
      turnClick++;
  }else {
    currentCell.addClass('player-o');
      turnClick++;
    }
  }
  }
);
