const data = require("../data/quotes.json");

const getAllQuotes = () => {
  return data;
};

const getQuotesByCategory = (category) => {
  const categorizedQuotes = data.filter((quote) => {
    return quote.category === category;
  });
  return categorizedQuotes;
};

const getQuotesByAuthor = (author) => {
  const filterByAuthor = data.filter((quote) => {
    return quote.by === author;
  });
  return filterByAuthor;
};

const getTodaysQuote = () => {
  const length = data.length;
  const number = Math.floor(Math.random() * length);
  const todaysQuote = data[number];
  return todaysQuote;
};

const getAllCategories = () => {
  const arr = data.map((quote) => {
    return quote.category;
  });
  const categories = [...new Set(arr)];
  return categories;
};

module.exports = {
  getAllQuotes,
  getQuotesByAuthor,
  getQuotesByCategory,
  getTodaysQuote,
  getAllCategories,
};