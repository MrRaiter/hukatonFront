module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
  },
};
