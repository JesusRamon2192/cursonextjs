module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules: {
    'semi': 0,
    'prettier/prettier': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/no-unescaped-entities': 0,
    '@next/next/no-html-link-for-pages': 0,
    '@next/next/no-img-element': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0
  }
}