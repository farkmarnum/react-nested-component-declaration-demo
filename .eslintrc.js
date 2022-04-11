module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': 'off',
    'react/react-in-jsx-scope': 'off', // suppress errors for missing 'import React' in files (React 17+)

    'react/no-unstable-nested-components': 'off', // suppress this error since it's part of the demo
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      extends: ['airbnb-typescript'],

      parserOptions: {
        project: ['./tsconfig.json'],
      },

      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
