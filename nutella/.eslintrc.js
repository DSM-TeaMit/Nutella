module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": "warn",
    "@typescript-eslint/no-empty-function": "off",
    "prefer-const": "warn",
    "no-constant-condition": "off",
    "react/display-name": "warn",
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "jsx-a11y/alt-text": "off",
  },
};
