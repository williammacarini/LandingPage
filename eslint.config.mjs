import globals from "globals";
import { pluginJs, js } from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  js.configs.recommended,
  {
    languageOptions: { globals: globals.browser },
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];
