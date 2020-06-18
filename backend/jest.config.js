const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  clearMocks: true,
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
};
