const baseConfig = require('./devtools/eslint/config');

module.exports = {
  ...baseConfig,
  rules: {
    'import/no-unresolved': [2, { ignore: ['~src', '~images', '~components'] }],
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: [
          '**/__tests__/*.{ts,tsx}',
          '**/__mock__/*.{ts,js}',
          '**/testing-util/**/*.{ts,js}'
        ],
      },
    ],
    'import/extensions': [0],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,

    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowTypedFunctionExpressions: true },
    ],
    'no-undef': 0,
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
      },
    ],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],

    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
};
