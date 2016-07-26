'use strict';

// Load all specs so webpack can find them. Think of this as an automatic
// manifest for bundling specs.
let req = require.context('./', true, /spec\.js$/);
req.keys().forEach(req);
