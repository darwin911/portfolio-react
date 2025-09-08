import tsParser from "@typescript-eslint/parser";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  {
    ignores: ["node_modules/**", ".next/**", "dist/**", "out/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: false,
      },
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        JSX: "readonly",
      },
    },
    plugins: {
      tailwindcss: tailwind,
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        config: "tailwind.config.ts",
      },
    },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/enforces-shorthand": "warn",
      "tailwindcss/no-custom-classname": "off",
    },
  },
];
