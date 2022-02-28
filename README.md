# @nirtamir2/prettier-plugin-css-order

This is a prettier plugin that helps you to order your css properties in the order I like.

[![npm version](https://badge.fury.io/js/@nirtamir2%2Fprettier-plugin-css-order.svg)](https://badge.fury.io/js/@nirtamir2%2Fprettier-plugin-css-order)

## Installation

### pnpm

```
pnpm add -D @nirtamir2/prettier-plugin-css-order
```

add the plugin to `.prettierrc.js`

```
module.exports = {
  plugins: [
    require.resolve("@nirtamir2/prettier-plugin-css-order"),
  ],
```

### npm

```
npm install -D @nirtamir2/prettier-plugin-css-order
```

## Credits

I used prettier-plugin-style-order's and just change the properties order to the order I like.

- [prettier-plugin-style-order](https://github.com/natemoo-re/prettier-plugin-style-order)
  - [`postcss-sorting`](https://github.com/hudochenkov/postcss-sorting)
  - [`stylelint-config-rational-order`](https://github.com/constverum/stylelint-config-rational-order)
  - [`prettier-plugin-package`](https://github.com/shellscape/prettier-plugin-package)

## Related projects

- known-css-properties
- stylelint-config-rational-order
- stylelint-config-recess-order
