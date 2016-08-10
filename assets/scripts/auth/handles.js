'use strict';
const getFormFields = require(`../../../lib/get-form-fields`);

// const moves = require('./moves');
const api = require('./api');
const ui = require('./ui');

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
// if(bookId.length ===0){
// libraryApi.index()
//   .done(ui.onSuccess)
//   .fail(ui.onError);
// } else{
//   libraryApi.show(bookId)
//   .done(ui.onSuccess)
//   .fail(ui.onError);
const onGetGames = function onGetGames(event) {
  event.preventDefault();
  let gameId = $('#getGame').val();
 if (gameId.length === 0) {
   api.index()
   .done(ui.getGameSuccess)
   .fail(ui.failure);
} else {
api.show(gameId)
.done(ui.getGameSuccess)
.fail(ui.failure);
 }
 };
const onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};
const onChangePlayer = function onChangePlayer(event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePlayer(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onNewGame = function (event) {
  event.preventDefault();
  api.newGame()
  .done(ui.newGameSuccess)
  .fail(ui.failure);
};
const onUpdateGame = function onUpdateGame(marker, index) {
  event.preventDefault();
  api.updateGame(marker, index)
  .done(ui.updateGameSuccess)
  .fail(ui.failure);

};
const addHandlers = () => {
  $('#player-sign-up').on('submit', onSignUp);
  $('#player-sign-in').on('submit', onSignIn); //grab element from the dom with element
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);    //id on sign-up. Then does something
  $('#change-player').on('submit', onChangePlayer);  //with the id it grabbed.
  $('.new-game').on('click', onNewGame);
  $('#getGame').on('click', onGetGames);




};
$(() => {

});
module.exports = {
  addHandlers,
  onUpdateGame
};
