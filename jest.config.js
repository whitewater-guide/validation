module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/cjs/',
    '<rootDir>/esm/',
    '<rootDir>/node_modules/',
  ],
};
