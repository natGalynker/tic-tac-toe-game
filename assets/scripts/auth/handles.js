'use strict';
const getFormFields = require(`../../../lib/get-form-fields`);


const  api= require('./api');
const ui = require('./ui');

// const signUp =  function(data) {
// console.log(data);
// return $.ajax({ //same as return $.ajax({
//     url: app + '/sign-up',
//     method: 'POST',
//     data,
// });
// };
// const signIn = function (data) {
//   console.log(data);
//   return $.ajax({
//     url: app + '/sign-in',
//     method: 'POST',
//     data,
// });
// };
//
// const getGamesById = function (data){
//   return $.ajax({
//     url: app+ '/games/' + data.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//   });
// };
//
// const changePassword = function (data) {
//   console.log(data);
//   console.log(app.user.token);
//   return $.ajax({
//   url: app + '/change-password/'  + app.user.id,
//   method: 'PATCH',
//   headers: {
//     Authorization: 'Token token=' + app.user.token,
//   },
//     data,
// });
// };
// const newGame = () => $.ajax({
//   url: app+ '/games/',
//   method: 'POST',
//   headers: {
//     Authorization: 'Token token=' + app.user.token,
//   },
// });
//
//
// const updateGame = function updateGame(marker, index, over) {
// 	  return $.ajax({
// 	    url: app + '/games/' + app.game.id,
// 	    method: 'PATCH',
// 	    headers: {
// 	      Authorization: 'Token token=' + app.user.token
// 	    },
// 	    data: {
// 	      "game": {
// 	        "cell": {
// 	          "index": index,
// 	          "value": marker
// 	        },
// 	        "over": over
// 	      }
// 	    }
// 	  });
// 	};
//
//
//
// const signOut = () => $.ajax({
//   url: app +'/sign-out/' + app.user.id,
//   method: 'DELETE',
//   headers: {
//     Authorization: 'Token token=' + app.user.token,
//   },
// });
//

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);
};
const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onChangePassword = function onChangePassword(event) {
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};
const onGetGamesById = function onGetGamesById(event) {
  let data = getFormFields(this);
  console.log(data.id);
  event.preventDefault();
  api.getGamesById(data)
    .done(ui.getGamesByIdSuccess)
    .fail(ui.failure);
};
const onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onNewGame = function (event) {
  event.preventDefault();
  api.newGame()
  .done(ui.newGameSuccess)
  .fail(ui.failure);
};
const onUpdateGame = function onUpdateGame(marker, index, over) {
	  event.preventDefault();
	  api.updateGame(marker, index, over)
    .done(ui.updateGameSuccess)
    .fail(ui.failure);
	};


const addHandlers = () => {
  $('#player-sign-up').on('submit', onSignUp);
  $('#player-sign-in').on('submit', onSignIn); //grab element from the dom with element
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);    //id on sign-up. Then does something
  $('#game-id').on('submit', onGetGamesById);
  $('.new-game').on('click', onNewGame);

};
module.exports = {
  addHandlers,
  onUpdateGame,
};
