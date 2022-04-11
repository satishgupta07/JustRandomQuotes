# Just Random Quotes

**A simple NPM Package which returns random Hindi and English Quotes.

## Getting started

```
$ npm install --save justrandomquotes
```

## Usage

```js
const quotes = require('justrandomquotes');
console.log(quotes.getAllQuotes()); // return all quotes
console.log(quotes.getQuotesByCategory("Inspirational")); // return quotes by category
console.log(quotes.getQuotesByAuthor(authorName)); // return quotes by author name
console.log(quotes.getTodaysQuote()); // return any random quote
```
