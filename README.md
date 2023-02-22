# Color Shade Generator for TailwindCSS

## Usage
```js
const shadesOf = require('tailwind-shades');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                accent: shadesOf('#913985')
            }
        }
    },
    plugins: []
}
```
