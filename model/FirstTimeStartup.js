module.exports = function (opts) {
  opts = opts || {};
  return {
    "pv": opts.pv || 700,
    "store": opts.store || "APPLAND_SE",
    "language": opts.language || "en",
    "operator": opts.operator || "310260"
  };
};
