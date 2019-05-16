const api = require("./api");
const auth = require("./auth");
const broadcast = require("./broadcast");
const config = require("./config");
const formatter = require("./formatter")(api);
const utils = require("./utils");

const morpheneJS = {
  api,
  auth,
  broadcast,
  config,
  formatter,
  utils
};

if (typeof window !== "undefined") {
  window.morpheneJS = morpheneJS;
}

if (typeof global !== "undefined") {
  global.morpheneJS = morpheneJS;
}

exports = module.exports = morpheneJS;
