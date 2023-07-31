const dev = require("./config/webpack.config.dev.cjs");
const pro = require("./config/webpack.config.pro.cjs");

module.exports = (_env, argv) =>
  argv["mode"] === "production" ? pro(__dirname) : dev(__dirname);
