module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:tailwindcss/recommended'
  ],
  ignorePatterns: ['dist', 'node_modules'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'no-console': 'off',
    semi: [2, 'never'],
    'comma-dangle': ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/function-component-definition': 'off',
    'operator-linebreak': ['error', 'after'],
    'import/extensions': [0],
    'import/no-extraneous-dependencies': [0]
  }
}
