module.exports = {
  bracketSpacing: true,
  semi: false,
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    './shim',
    'raf/polyfill',
    'setimmediate',
    '^(react|react-native)$',
    '<THIRD_PARTY_MODULES>',
    '^@/',
    '^[./]',
  ],
};
