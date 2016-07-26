'use strict';

const authEvents = require('./auth/handles.js');
//starts web serve, when page is loaded, index.js will run which holds
//information that relate to the other scripts file.
//webpack is the template we use. It turns everything into one gigantic
//javascript file.
// On document ready
$(() => {
  $('#mySignUpModal').on('click', function () {
    $('#test-modal').modal('show');
    $('.this-test-modal').on('click', function(){
      console.log($('.test-message').val());
      let words = $('#test-modal').modal('hide');
      console.log(words);
    });
  });
  authEvents.addHandlers(); //whatever is in here is what gets run
});
