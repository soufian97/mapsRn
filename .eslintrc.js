const TypeScriptRecommendedRules = require('@typescript-eslint/eslint-plugin')
  .configs.recommended.rules;
const disabledTypeScriptRecommendedRules = {};

for (const rule in TypeScriptRecommendedRules) {
  rule.includes('@typescript-eslint') &&
    (disabledTypeScriptRecommendedRules[rule] = 'off');
}

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-native',
    'prettier',
    'standard',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-console': 'error',
    'no-promise-executor-return': 'error',
    'no-template-curly-in-string': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    camelcase: 'off',
    semi: [2, 'never'],
    'no-unused-vars': 'warn',
    'react/prop-types': [
      'error',
      {
        ignore: ['navigation', 'children', 't'],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        ...disabledTypeScriptRecommendedRules,
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    it: true,
    expect: true,
    jest: true,
    beforeAll: true,
    describe: true,
    __DEV__: true,
    gql: 'readonly',
  },
};
