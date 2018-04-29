module.exports = {
  root: true,
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    node: true
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', 80],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
