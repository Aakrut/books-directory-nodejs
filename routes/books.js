const express = require('express');
const router = express.Router()

const { getBooks, addBook, deleteAllBooks, deleteBook, updateBook, getBook } = require('../controllers/books');

router.route('/').get(getBooks).post(addBook).delete(deleteAllBooks)
router.route('/:id').get(getBook).patch(updateBook).delete(deleteBook)

module.exports = router;