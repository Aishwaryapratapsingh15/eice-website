module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['.next', 'dist', 'node_modules', '.eslintrc.cjs', 'next.config.mjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  rules: {
    'no-irregular-whitespace': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/jsx-key': 'off',
    'react/jsx-no-undef': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
}
