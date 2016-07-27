'use strict';

const app = require('../main'); //put it in app because there isnt any real code
                            // we do this to avoid circular dependency
                            //this way we can share data from one file and share
                        //among all the different files that depend on that data

const success = (data) => {
  if(data){
  console.log(data);
}
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) =>{
  app.user = data.user; //can use app.user or app.token. we know this because the
  console.log(app);     //console in browser told us that we have the key user
                        //even though we did not define one. User contains the
  };                      //token that we care about

const signOutSuccess = () =>{
  app.user = app.user;
  console.log(app);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess
};
// $(() => {
// $('#signUpModal').on('click', function () {
//   $('#signUp').modal('show');
//
// });
// $('.sign-button').on('click', function() {
//   $('#signUp').modal('hide');
//
//
// $('#signInModal').on('click', function () {
//   $('#signIn').modal('show');
//
// });
// $('.play-button').on('click', function() {
//   $('#signIn').modal('hide');
//
// $('#changePwModal').on('click', function () {
// $('#changePw').modal('show');
// });
// $('.change-password').on('click', function() {
// $('#changePw').modal('hide');
// });
// });
//
// });
