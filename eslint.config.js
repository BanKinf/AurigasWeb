import configLove from "eslint-config-love";
import configPrettier from "eslint-config-prettier";
import pluginAstro from "eslint-plugin-astro";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ["dist/*"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  configPrettier,
  ...pluginAstro.configs["flat/recommended"],
  ...pluginAstro.configs["flat/jsx-a11y-recommended"],
  {
    languageOptions: { ...globals },
    files: ["**/*.{js,mjs}", "**/*.ts"],
    ...configLove,
    rules: {
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  {
    files: ["*.astro"],
    parser: "astro-eslint-parser",
    parserOptions: {
      parser: "@typescript-eslint/parser",
    },
    rules: {
      semi: ["warn", "double"],
    },
  },
  {
    rules: {
      semi: ["warn", "double"],
    },
  },
];
