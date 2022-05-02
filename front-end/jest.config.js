const config = {
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/empty.js"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};

module.exports = config;
