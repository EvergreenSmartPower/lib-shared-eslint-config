module.exports = {
  extends: [
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['warn', { multiline: { delimiter: 'none' }, singleline: { delimiter: 'comma' }}],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'warn',
    'no-useless-constructor': 'off'
  },
  overrides: [
    {
      "files": ["./test/**/*.{ts,tsx}"],
      "rules": {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
      }
    }
  ]
}
