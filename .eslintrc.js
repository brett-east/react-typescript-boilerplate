module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        // allow eslint to resolve paths to these extensions
        extensions: ['.ts', '.tsx', '.js', '.json', '.jsx'],
      }
    },
  },
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    // this allows JSX in .tsx files
    'react/jsx-filename-extension': ['error', { 'extensions': ['.tsx', '.jsx'] }],

    // don't error for devDependencies
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': ['**/*.test.ts', '**/*.test.tsx'] }],

    // allow any, sometimes you need it to get to the bottom of a bug/type
    'no-explicit-any': '0',

    // this takes away the need to include the listed extensions when importing files
    // there is a bug here, where the third argument (the object), is not honored
    'import/extensions': ['error', 'never', {
      ignorePackages: true,
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],

    // this is off in case you have a functional component that just immediately
    // returns some jsx and you don't want to have to destructure and then explicitly
    // write a return statement
    'react/destructuring-assignment': 'off',

    // this is off so that we can use multiple string variables in a line of content
    // and recognize the spacing. it helps to avoid the need for &nbsp; everywhere
    'react/jsx-one-expression-per-line': 'off',
  }
}
