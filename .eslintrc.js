module.exports = {
  'extends': [
    'next',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  'rules': {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off'
  }
};
