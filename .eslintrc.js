module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    'process.env.NODE_ENV': true
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  root: true,
  rules: {
    'no-console': 0,
    'prettier/prettier': 1
  }
}
