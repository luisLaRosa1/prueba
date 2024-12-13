module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [2, 'never', ['snake-case', 'start-case', 'pascal-case']],
    'scope-case': [2, 'always', ['lower-case', 'upper-case', 'kebab-case']],
  }
}
