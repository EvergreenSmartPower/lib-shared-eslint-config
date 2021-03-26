module.exports = {
  extends: [
    'standard-with-typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/consistent-type-assertions': ['error', { 'assertionStyle': 'never' }],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    'import/export': 'off',
    'no-case-declarations': 'off',
  },
  overrides: [
    {
      "files": ["./test/**/*.{ts,tsx}"],
      "rules": {
        '@typescript-eslint/consistent-type-assertions': ['error', { 'assertionStyle': 'as' }],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
      }
    }
  ]
}
