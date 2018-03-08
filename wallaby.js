// Simplified to remove some project-specific wildcards
module.exports = () => ({
  env: {
    type: "node",
  },

  files: [
    "tsconfig.test.json",
    "test/unit/jest.config.js",
    "test/unit/setup.js",
    "config/polyfills.js",
    "src/**/*.ts",
    "!src/**/*.test.ts",
    "src/**/*.tsx",
    "!src/**/*.test.tsx",
    "src/External/**/*.js",
  ],

  filesWithNoCoverageCalculated: [
    "config/*",
    "src/Adapters/**",
    "src/External/**",
    "src/*.tsx",
    "src/*.ts",
  ],

  hints: {
    ignoreCoverage: /istanbul ignore next/,
  },

  setup: (wallaby) => {
    wallaby.testFramework.configure(require("./test/unit/jest.config"));
  },

  testFramework: "jest",

  tests: [
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
  ],
});