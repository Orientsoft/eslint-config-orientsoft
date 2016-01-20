module.exports = {
  extends: [
    'airbnb/base',
    'orientsoft/style'
  ],
  rules: {
    'new-cap': [2, {
      'capIsNewExceptions': [
        // express router
        'Router'
      ]
    }]
  }
}
