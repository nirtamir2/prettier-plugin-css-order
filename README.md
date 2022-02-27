# @nirtamir2/prettier-plugin-css-order

This is just a prettier plugin that helps you to order your css properties in the order I like.

## Motivation

This project aims to:

- Create a package contains the stylistic order I like:
  - It Contains all css properties (the other orders not contains new css and are deprecated)
  - Move margins to be above height / width
- Create a prettier plugin that sort the css properties according to my order (I want to use it)
- Create a stylelint plugin that sort the css properties according to my order (because it's easy, and some people can find it helpful)

It helps order and format

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
