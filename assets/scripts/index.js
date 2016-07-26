'use strict';

const authEvents = require('./auth/handles.js');
//starts web serve, when page is loaded, index.js will run which holds
//information that relate to the other scripts file.
//webpack is the template we use. It turns everything into one gigantic
//javascript file.
// On document ready
$(() => {
  authEvents.addHandlers(); //whatever is in here is what gets run
});
