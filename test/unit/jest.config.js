/*!
 * Copyright Microsoft Corporation. All rights reserved.
 */

const path = require("path");

module.exports = {
  collectCoverageFrom: [
    "src/*/**/*.ts*",
    "!src/*",
    "!src/Adapters/**",
    "!src/External/**",
    "!src/config/*",
    "!src/typings/**",
  ],
  globals: {
    "ts-jest": {
      tsConfigFile: "./tsconfig.test.json",
    },
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "tsx",
  ],
  rootDir: path.join(__dirname, "../../"),
  setupFiles: [
    "<rootDir>/config/polyfills.js",
  ],
  setupTestFrameworkScriptFile: "<rootDir>/test/unit/setup",
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/?(*.)test.ts?(x)",
  ],
  testURL: "http://localhost",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
  ],
};