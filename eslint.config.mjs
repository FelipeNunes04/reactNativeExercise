import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactNative from "eslint-plugin-react-native";
import eslintPluginExpo from "eslint-plugin-expo";
import typescriptEslintParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["node_modules/"],
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: typescriptEslintParser,
      globals: {
        __DEV__: "readonly",
      },
    },
    plugins: {
      react: eslintPluginReact,
      "react-native": eslintPluginReactNative,
      expo: eslintPluginExpo,
    },
    rules: {
      quotes: ["error", "single"],
      "react-native/split-platform-components": "warn",
      "react-native/no-color-literals": "off",
      "react-native/no-raw-text": "off",
    },
    
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
