const config = {
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/empty.js"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  modulePaths: ["src", "test"]
};

module.exports = config;
