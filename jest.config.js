module.exports = {
  roots: [
    "<rootDir>/pages",
    "<rootDir>/src",
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "tsx",
    "ts",
    "js",
  ],
};
