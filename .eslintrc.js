// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      node: true,
    },
    extends: [
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
    ],
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // don't require .vue extension when importing
      'import/extensions': ['error', 'always', {
        js: 'never'
      }],
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  }
