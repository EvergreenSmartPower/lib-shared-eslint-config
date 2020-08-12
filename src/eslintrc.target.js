module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': ['warn', { multiline: { delimiter: 'semi' }, singleline: { delimiter: 'comma' } }],
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-throw-literal': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unused-vars-experimental': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'warn',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'no-unused-expressions': 'off', // Disabled to allow `foo?.bar()` syntax
    'no-useless-constructor': 'off' // Disabled to allow `constructor (private foo: string) {}` syntax
  },
  overrides: [
    {
      files: ['./test/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/unbound-method': 'off',
        'no-await-in-loop': 'off',
        'no-restricted-syntax': 'off'
      }
    }
  ]
}
