# Color Shade Generator for TailwindCSS

## Usage
```js
const { default: shadesOf } = require('tailwind-shades');

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
