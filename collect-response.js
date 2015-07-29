const bl = require('bl');

module.exports = function collectResponse(conn) {
  return new Promise(function (resolve, reject) {
    conn.pipe(bl(function (err, res) {
      if (err) { return reject(err); }
      return resolve(res);
    }));
  });
};
