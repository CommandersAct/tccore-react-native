const { createRunOncePlugin } = require("@expo/config-plugins");

const packageInfo = require("../package.json");

const pkg = (config) => {
  return config;
};

module.exports = createRunOncePlugin(
  withTCCorePlugin,
  pkg.name,
  pkg.version
)