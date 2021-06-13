module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'jest', '@typescript-eslint', 'prettier'],
    env: {
      es6: true,
      jest: true,
      browser: true,
      node: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
        'eslint-config-prettier',
        'plugin:prettier/recommended',
      ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
              extensions: ['.ts'],
            },
          },
        'import/ignore': ['.d.ts$'],
    },
};
