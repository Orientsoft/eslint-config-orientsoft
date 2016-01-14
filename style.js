module.exports = {
  rules: {
    'semi': [2, 'never'],
    'comma-dangle': [2, 'always-multiline'],
    'no-param-reassign': 0,
    'one-var': 0,
    'curly': [2, 'multi'],
    'max-len': [2, 80, 2],
    'indent': [2, 2, {
      'SwitchCase': 0,
      'VariableDeclarator': {
        'var': 2, 'let': 2, 'const': 3
      }
    }]
  }
}
