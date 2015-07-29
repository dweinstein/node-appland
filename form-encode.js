module.exports = function encode(obj) {
  var data;
  if (typeof obj === 'string')
    data = obj;
  if (typeof obj === 'object')
    data = JSON.stringify(obj);

  return encodeURIComponent(encodeURIComponent(data));
};
