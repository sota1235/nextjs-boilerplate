module.exports = {
  roots: [
    "<rootDir>/(pages|components)",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "js",
  ],
};
