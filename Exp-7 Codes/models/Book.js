const mongoose = require('mongoose');

// book schema for json
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  year: Number,
  genre: String,
});

module.exports = mongoose.model('Book', BookSchema);
