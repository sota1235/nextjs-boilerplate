module.exports = {
  verbose: true,
  roots: [
    "<rootDir>/src",
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  testEnvironment: 'jsdom',
  moduleFileExtensions: [
    "tsx",
    "ts",
    "js",
    "json",
  ],
};
