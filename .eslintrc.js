module.exports = {  
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
      "ecmaVersion": 2017
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true, 
        trailingComma: 'all',
      },
    ],
    "no-console": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "react/prefer-stateless-function": 0,
    "no-unused-vars": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "consistent-return": 0,
    "react/no-array-index-key": 0,
    "react/no-unescaped-entities": ["error", {"forbid": [">", "}"]}],
    "react/no-unused-state": 0,
    "prefer-const": 0,
    "no-use-before-define": 0,
    "import/prefer-default-export": 0,
    "array-callback-return": 0,
    "no-unused-expressions": 0,
    "no-shadow": 0,
    "no-param-reassign": 0,
    "jsx-a11y/anchor-is-valid":0,
    "no-lonely-if": 0,
    "no-plusplus": 0
  }
};