'use strict';
const urls = require('./appland-urls');
const debug = require('debug')('login-request');
const co = require('co');
const applandRequest = require('./appland-request');

module.exports = co.wrap(function* (opts) {
  return yield applandRequest(urls.LoginReq, {
    LoginReq: require('./model/LoginRequest')(opts)
  });
});
