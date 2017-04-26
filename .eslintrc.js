// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'no-underscore-dangle': 0,
    'import/no-unresolved': [0, {commonjs: true, amd: true}],
    'import/extensions': ['off', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'import/no-extraneous-dependencies': ['off', 'always'],

    'import/no-unreslved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
