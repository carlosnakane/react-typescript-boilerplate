module.exports = {
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: [
        '<rootDir>/devtools/jest/jest-setup.js',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': "<rootDir>/src/__mocks__/fileMock.ts",
        '~src/(.*)': '<rootDir>/src/$1',
        '~images/(.*)': '<rootDir>/src/images/$1',
        '~components/(.*)': '<rootDir>/src/components/$1',
    },
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!<rootDir>/src/index.{ts,tsx}',
    ]
}