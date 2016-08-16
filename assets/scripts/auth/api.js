'use strict';

 const app = require('../main');
// keep eye on the names used as the form id. they correlate to the end points
//that are being assigned to the url's value here.
const signUp =  function(data) {
console.log(data);
return $.ajax({ //same as return $.ajax({
    url: app.api + '/sign-up',
    method: 'POST',
    data,
});
};
const signIn = function (data) {
  console.log(data);
  return $.ajax({
    url: app.api + '/sign-in',
    method: 'POST',
    data,
});
};

const getGamesById = function (data){
  return $.ajax({
    url: app.api + '/games/' + data.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};

const changePassword = function (data) {
  console.log(data);
  console.log(app.user.token);
  return $.ajax({
  url: app.api + '/change-password/'  + app.user.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
    data,
});
};
const newGame = () => $.ajax({
  url: app.api+ '/games/',
  method: 'POST',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});


const updateGame = function updateGame(marker, index, over) {
	  return $.ajax({
	    url: app.api + '/games/' + app.game.id,
	    method: 'PATCH',
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    },
	    data: {
	      "game": {
	        "cell": {
	          "index": index,
	          "value": marker
	        },
	        "over": over
	      }
	    }
	  });
	};



const signOut = () => $.ajax({
  url: app.api +'/sign-out/' + app.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGame,
  getGamesById,
  updateGame

};
