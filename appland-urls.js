const rc = require('./config');
const debug = require('debug')('appland-urls');

debug(rc);

const base = rc.url || 'https://appdoor2.appland.se';

module.exports = {
  LoginReq: base+'/api/com',
  FirstTimeStartupReq: base+'/api/com',
  Download: base+'/dl'
};
