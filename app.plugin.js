const { createRunOncePlugin } = require("@expo/config-plugins");

const pkg = require("../package.json");

const withTCCorePlugin = (config) => {
  return config;
};

module.exports = createRunOncePlugin(
  withTCCorePlugin,
  pkg.name,
  pkg.version
)
