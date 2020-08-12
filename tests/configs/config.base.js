module.exports = {
  preset: "ts-jest",
  verbose: true,
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](build|docs|node_modules|scripts)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]Utils[/\\\\].+\\.(js|jsx)$"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/styleMock.ts",
    "\\l8n$": "<rootDir>/tests/__mocks__/l8n.ts",
  },
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Test Report",
        outputPath: "./tests/reports/test-report.html",
        includeFailureMsg: true
      }
    ]
  ],
  rootDir: process.cwd(),
  collectCoverage: false,
  coverageDirectory: "<rootDir>/tests/reports/coverage/",
  coverageReporters: ["json", "lcov", "text", "clover"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.json"
    }
  }
};