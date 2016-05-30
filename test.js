'use strict';

require('mocha');
var assert = require('assert');
var isValid = require('./');
var Base = require('base');
var base;

describe('is-valid-app', function() {
  beforeEach(function() {
    base = new Base();
  });

  it('should export a function', function() {
    assert.equal(typeof isValid, 'function');
  });

  it('should return false if the instance is not valid', function() {
    var count = 0;
    function plugin(app) {
      if (!isValid(app, 'foo')) return;
      count++;
    }
    base.use(plugin);
    base.use(plugin);
    base.use(plugin);
    base.use(plugin);
    base.use(plugin);
    assert.equal(count, 0);
  });

  it('should allow custom instance types', function() {
    var collection = new Base({isCollection: true});
    var view = new Base({isView: true});
    var count = 0;
    function plugin(app) {
      if (!isValid(app, 'foo', ['view', 'collection'])) return;
      count++;
    }
    view.use(plugin);
    collection.use(plugin);
    base.use(plugin);
    base.use(plugin);
    base.use(plugin);
    base.use(plugin);
    base.use(plugin);
    assert.equal(count, 2);
  });

  it('should return false if a plugin is registered already', function() {
    base.isApp = true;
    var count = 0;
    function plugin(app) {
      if (!isValid(app, 'foo')) return;
      count++;
    }
    base.use(plugin);
    base.use(plugin);
    base.use(plugin);
    base.use(plugin);
    base.use(plugin);
    assert.equal(count, 1);
  });
});
