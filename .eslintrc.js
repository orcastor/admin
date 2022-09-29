module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "parser": "vue-eslint-parser",
    "extends": [
      "eslint:recommended",
      "plugin:vue/essential",
      "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": 6,
      "parser": "@typescript-eslint/parser",
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "plugins": ["vue", "@typescript-eslint"],
    rules: {
        "vue/multi-word-component-names": "off",
        "vue/no-v-for-template-key": "off",
        "vue/no-v-model-argument": "off",
        "vue/no-multiple-template-root": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-namespace": "off",
        "vue/no-mutating-props": "off",
        "no-empty": "off",
        "no-useless-escape": "off",
        "no-undef": "off",
        'no-console': 'off',
    },    
  }
