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
const index = function () {
  return $.ajax({
    url: app.api + '/games',
    method: 'GET',
  });
};

const show = function (gameId) {
  return $.ajax({
    url: app.api + '/games/' + gameId,
    method: 'GET',
  });
};

// const createGame= function () {
//   return $.ajax({
//     url: app.api + '/games',
//     method: 'POST' + '{}',
//     Authorization: 'Token token=' + app.user.token,
//   },
//     data,
// });
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
const signOut = () => $.ajax({
  url: app.api +'/sign-out/' + app.user.id,
  method: 'DELETE',
  headers: {
    Authorization: 'Token token=' + app.user.token,
  },
});
const changePlayer = (data) => $.ajax({
  url: app.api + '/change-player' + app.user.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' +app.user.token,
  },
  data,
});
const newGame = (data) => $.ajax({
  url: app.api+ '/games',
  method: 'POST' + '{}',
  headers: {
    Authorization: 'Token token='+ app.user.token,
  },
  data,
});

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  changePlayer,
  newGame,
  // createGame,
  index,
  show,
};
