/*!
 * is-valid-app (https://github.com/jonschlinkert/is-valid-app)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isRegistered = require('is-registered');
var isValid = require('is-valid-instance');

module.exports = function(app, name, types) {
  if (typeof name !== 'string') {
    throw new TypeError('expected plugin name to be a string');
  }
  if (!isValid(app, types)) {
    return false;
  }
  if (isRegistered(app, name)) {
    return false;
  }
  return true;
};
