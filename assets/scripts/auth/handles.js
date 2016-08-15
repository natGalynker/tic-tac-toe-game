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
  $('.new-game').on('click', onNewGame);
  $('#game-id').on('submit', onGetGamesById);

};
module.exports = {
  addHandlers,
  onUpdateGame
};
