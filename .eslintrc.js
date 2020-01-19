module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'nuxt/no-cjs-in-config': 'off',
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
  },
};
