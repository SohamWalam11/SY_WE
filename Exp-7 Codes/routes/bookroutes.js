const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

// Create a book
router.post('/books', async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
});

// Get all books
router.get('/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get one book by ID
router.get('/books/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});

// Update a book
router.put('/books/:id', async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedBook);
});

// Delete a book
router.delete('/books/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: 'Book deleted' });
});

module.exports = router;
