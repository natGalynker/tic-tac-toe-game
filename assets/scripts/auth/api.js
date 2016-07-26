'use strict';
const app = require(`../example`);

const signUp = (data) => $.ajax({
  url: app.api + '/sign-up',
  method: 'POST',
  data,
});

const signIn = (data) => $.ajax({
  url: app.api + '/sign-in',
  method: 'POST',
  data,

});

module.exports = {
  signUp,
  signIn,
};
