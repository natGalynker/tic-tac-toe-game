'use strict';
const getFormFields = require(`../../../lib/get-form-fields`);


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
  event.preventDefault();
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};
const onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.SignOut()
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
  api.createGame()
  .done(ui.success)
  .fail(ui.failure);
};
const addHandlers = () => {
  $('#player-sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn); //grab element from the dom with element
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);    //id on sign-up. Then does something
  $('#change-player').on('submit', onChangePlayer);  //with the id it grabbed.
  $('#new-game').on('click', onNewGame);

};
$(() => {
  $('.space').on('click', function(){
    console.log('it clicked!');
  });


});
module.exports = {
  addHandlers,
//only use module.exports on variables which are needed to be accessed outside
//of that file
};

//   $('#signUpModal').on('click', function () {
//     $('#signUpModal').modal('show');
//     $('.this-test-modal').on('click', function(){
//       console.log($('.test-message').val());
//       let words = $('#test-modal').modal('hide');
//       console.log(words);
//     });
//   });
// });
