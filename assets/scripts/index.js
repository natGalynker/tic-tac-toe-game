'use strict';

const authEvents = require('./auth/handles.js');

















$(() => {
  authEvents.addHandlers(); //whatever is in here is what gets run
});
