const baseConfig = require("./config.base.js");

module.exports = Object.assign({}, baseConfig, {
  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testPathIgnorePatterns: ["browser.test.ts"]
});