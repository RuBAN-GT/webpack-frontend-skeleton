module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
    "process.env.NODE_ENV": true
  },
  "parser": "babel-eslint",
  "root": true,
  "rules": {
    "no-console": 1
  }
};
