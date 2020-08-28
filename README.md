# Evergreen Smart Power shared-eslint-config

Evergreen Smart Power's shared config for ESLint projects

## Purpose

To provide a single source of common ESLint configuration across all Smart
Power projects

## Usage

Install this package as a dev dependency with `npm install --save-dev
@evergreen-smart-power/eslint-config`

Add it to the `extends` property in your `.eslintrc.js` like so:

```
module.exports = {
  root: true,
  extends: [
    '@evergreen-smart-power',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
}
```

## Developing

When changing the rules, make sure to change either a source file or a test
under `example` to include code which is acceptable.

Test linting of the example project by running `make test`.

## Copyright notice

Copyright 2020 Evergreen Smart Power. See `COPYING.LESSER` for licencing.
