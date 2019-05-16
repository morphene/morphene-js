const api = require("./api");
const auth = require("./auth");
const broadcast = require("./broadcast");
const config = require("./config");
const formatter = require("./formatter")(api);
const utils = require("./utils");

const morphene = {
  api,
  auth,
  broadcast,
  config,
  formatter,
  utils
};

if (typeof window !== "undefined") {
  window.morphene = morphene;
}

if (typeof global !== "undefined") {
  global.morphene = morphene;
}

exports = module.exports = morphene;
