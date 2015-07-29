'use strict';
const assert = require('assert');
const formPost = require('./form-post');
const urls = require('./appland-urls');
const debug = require('debug')('download-app');
const stringify = require('querystring').stringify;

module.exports = function download(sessionId, appId) {
  assert(typeof sessionId !== 'undefined', 'require sessionId');
  assert(typeof appId !== 'undefined', 'require appId');

  const data = {
    pv: 700,
    appId: appId,
    sessionId: sessionId,
    blocking: 0,
    store: 'APPLAND_SE',
    t: 'OA/LSTARTPAGE_ODPA/P2'
  };

  debug(data);

  return formPost({
    url: urls.Download,
    body: stringify(data),
    headers: {
      'user_agent': 'Android' // consistent with appland client
    }
  });
};
