'use strict';
const app = require('../example');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = data => {
  app.user = data.user;
  console.log(app);

};

module.exports = {
  success,
  failure,
  signInSuccess,
};
