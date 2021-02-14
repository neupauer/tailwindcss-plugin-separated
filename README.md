# Tailwind CSS Plugin – Separated

Utilities for adding separators between items.

## Install

1. Install the plugin:

```bash
# Using npm
npm install @neupauer/tailwindcss-plugin-separated

# Using Yarn
yarn add @neupauer/tailwindcss-plugin-separated
```

2. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [require("@neupauer/tailwindcss-plugin-separated")],
};
```

## Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    // default
    separated: {
      comma: ", ",
    },
  },
  variants: {
    // default
    separated: [],
  },
};
```

## Usage

### Example Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    separated: {
      comma: ", ",
      // Custom separator string
      bullet: " • ",
      // Custom separator object
      funny: {
        content: "' • '", // do not forget double quotes !
        backgroundColor: "pink",
      },
    },
  },
};
```

Syntax `.separated-{key}` e.g. `.separated-comma`, `.separated-bullet`

```html
<ul>
  <li class="inline separated-comma">milk</li>
  <li class="inline separated-comma">eggs</li>
  <!-- empty item will be ignored -->
  <li class="inline separated-comma"></li>
  <li class="inline separated-comma">bread</li>
</ul>

<!-- milk, eggs, bread -->
```

```html
<ul>
  <li class="inline separated-comma">
    <a href="#milk">milk</a>
  </li>
  <li class="inline separated-comma">
    <a href="#eggs">eggs</a>
  </li>
  <li class="inline separated-comma">
    <a href="#bread">bread</a>
  </li>
</ul>

<!-- <a>milk</a>, <a>eggs</a>, <a>bread</a> -->
```
