'use strict';
const postForm = require('./form-post');
const encode = require('./form-encode');
const debug = require('debug')('appland-request');
const co = require('co');
const collectResponse = require('./collect-response');

module.exports = co.wrap(function* (url, data) {
  debug(url, data);
  const conn = yield postForm({
    url: url,
    body: 'REQ='+encode(data)
  });

  const ret = yield collectResponse(conn);
  debug(ret.toString());
  return ret;
});
