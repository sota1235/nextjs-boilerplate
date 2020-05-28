module.exports = {
  roots: [
    "<rootDir>/src",
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  setupFiles: ['<rootDir>/.jest/register-context.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleFileExtensions: [
    "tsx",
    "ts",
    "js",
    "json",
  ],
};
