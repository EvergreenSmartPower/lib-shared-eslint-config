module.exports = {
  root: true,
  extends: [
    '../src/eslintrc.js',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
}
