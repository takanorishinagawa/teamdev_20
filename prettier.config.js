module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",
    "^@/app/(.*)",
    "^@/components/(.*)",
    "^@/utils/(.*)",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
