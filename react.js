module.exports = {
  extends: [
    'airbnb',
    'orientsoft/style'
  ],
  rules: {
    'react/jsx-no-bind': 1,
    'jsx-quotes': [2, 'prefer-double'],
    'no-underscore-dangle': [2, { allowAfterThis: true }]
  }
}
