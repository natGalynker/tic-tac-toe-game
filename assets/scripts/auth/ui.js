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

const newGameSuccess = (data) => {
  app.game = data.game;
  console.log(app);
};

const signInSuccess = (data) =>{
  app.user = data.user; //can use app.user or app.token. we know this because the
  console.log(app);     //console in browser told us that we have the key user
  $('.main').css("display", "block"); //even though we did not define one. User contains the
  $('.space').text('');                 //the token that we care about
  $('h1').text('');
  };

  const signOutSuccess = () =>{
    delete app.user;
    console.log(app);
    $('.main').css("display", "none");
  };
  const updateGameSuccess = (data) => {
    app.game = data.game;
    console.log(app.game);
  };

    const getGamesByIdSuccess = (data) => {
      app.game = data.game;
      $(".get-id-append").append('<h1>'+ data.game.player_x.email + '  was the player'+ '</h1>');
      console.log(data);


};

 module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  newGameSuccess,
  updateGameSuccess,
  getGamesByIdSuccess
};
