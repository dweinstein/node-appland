'use strict';
const q = require('hyperquest');
const fs = require('fs');
const Promise = require('bluebird');
const rc = require('./config');
const assert = require('assert');
const debug = require('debug')('form-post');
const xtend = require('xtend');

function handleRedirect(url, opts) {
  return new Promise(function (resolve, reject) {
    debug('redirect to %s', url);
    const conn = q(url, opts, function (err, res) {
      if (err) {
        return reject(err);
      }
      if (res.statusCode === 302) {
        return handleRedirect(res.headers.location || res.headers.Location, opts);
      }
      if (res.statusCode === 200) {
        return resolve(conn);
      } else {
        return reject(res.statusCode);
      }
    });
  }).timeout(rc.timeout);
}

module.exports = function postFormForResp(opts) {
  return new Promise(function (resolve, reject) {
    assert(typeof opts.url !== 'undefined', 'opts.url required');

    const url = opts.url;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    };

    if (opts.body) {
      req.headers['Content-Length'] = opts.body.length;
    }

    if (opts.headers) {
      req.headers = xtend(req.headers, opts.headers);
    }

    debug(req);
    const conn = q(url, req, function (err, res) {
      if (err) {
        return reject(err);
      }
      if (res.statusCode === 200) {
        return resolve(conn);
      }
      else if (res.statusCode === 302) {
        return resolve(
          handleRedirect(res.headers.location || res.headers.Location, opts.headers)
        );
      } else {
        return reject(res.statusCode);
      }
    });

    if (opts.body) {
      debug(opts.body);
      conn.write(opts.body);
      conn.end();
    }

  }).timeout(rc.timeout);
};

