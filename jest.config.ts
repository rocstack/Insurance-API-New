import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  // collectCoverage: true,
  // collectCoverageFrom: ['<rootDir>/src/app/**/*.ts'],
  // "roots": ["src/tests"]
};

export default config;