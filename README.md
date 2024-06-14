# UP.js 📦

Welcome to **UP.js** - a versatile JavaScript utility library designed to make DOM manipulation, text processing, and file handling easier! 🎉

## Table of Contents 📚

- [Installation](#installation)
- [Usage](#usage)
  - [Element Manipulation](#element-manipulation)
  - [Text Utilities](#text-utilities)
  - [URL Utilities](#url-utilities)
  - [File Loading](#file-loading)
- [License](#license)

## Installation 🛠️

Simply include the `UP.js` script in your HTML file:

```html
<script src="path/to/UP.js"></script>
```

Or import it in your JavaScript project:

```javascript
import UP from 'path/to/UP.js';
```

## Usage 🚀

### Element Manipulation 🌐

Manipulate DOM elements with a fluent interface:

```javascript
// Select an element and chain methods to set multiple properties
let myElement = new UP("#myElement");

myElement.setC("red")
         .setBg("yellow")
         .setD("block")
         .setW("100px")
         .setH("100px")
         .setHTML("Hello World!");
```

### Text Utilities ✂️

Process text with ease:

```javascript
// Extract text after a specific character
let result = UP.text.beforeDate("example.txt", '.'); // Output: "txt"

// Get text between two characters
let betweenText = UP.text.getText("Hello [world]!", '[', ']'); // Output: "world"

// Split text using multiple delimiters
let array = UP.text.multiArr("apple,orange|banana&grape", ',', '|', '&'); 
// Output: ["apple", "orange", "banana", "grape"]
```

### URL Utilities 🌍

Work with URL parameters and hashes:

```javascript
// Get the value of a query parameter
let value = UP.url.search("key"); // Output: value of 'key' in the URL

// Get the hash from the URL
let hash = UP.url.hesh(true); // Output: #hashValue
```

### File Loading 📂

Load and process files easily:

```javascript
// Load a JSON file
let data = UP.fill.view("path/to/file.json", 'json'); 

// Load and auto-detect file type
let autoData = UP.fill.viewAutoType("path/to/file.json"); 
```

## License 📜

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute, raise issues, or share your thoughts! Happy coding! 💻🚀

---

