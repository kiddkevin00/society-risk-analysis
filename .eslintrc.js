module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    'import/resolver':'webpack'
  },
  root: true,
  rules: {
    'prettier/prettier': ['error', {'singleQuote': true, 'printWidth': 100, 'trailingComma':'es5'}],
    'spaced-comment': 0,
    'padded-blocks': 0,
    'no-console': 2,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 1,
    'no-unused-vars': 2,
    'no-use-before-define': [2, { functions: false, classes: true }],
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-prototype-builtins': 1,
    'new-cap': 2,
    'jsx-a11y/anchor-is-valid': [ 'error', {
        'components': [ 'Link' ],
        'specialLink': ['to']
      }],
    'jsx-quotes': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-no-bind': 2,
    'react/default-props-match-prop-types': 2,
    'react/prefer-stateless-function': [2, { 'ignorePureComponents': true}],
    'import/first': 0,
    'import/order': [2, { groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin'] }],
    'import/no-extraneous-dependencies': [2, { devDependencies: true, optionalDependencies: false, peerDependencies: false }],
    'newline-after-var': [2, 'always'],
    'no-multi-assign': 1,
    'react/forbid-prop-types': 2,
  },
};
