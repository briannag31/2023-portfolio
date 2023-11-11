module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true,
        browser: true,
        es2021: true,
        jest: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'no-multi-spaces': ['error']
  }
};
