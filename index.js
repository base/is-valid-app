/*!
 * is-valid-app (https://github.com/jonschlinkert/is-valid-app)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('is-valid-app');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('is-valid-app')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    this.define('isValid', function() {
      debug('running isValid');
      
    });
  };
};
