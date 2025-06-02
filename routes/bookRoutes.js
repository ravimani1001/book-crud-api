const express = require("express");
const router = express.Router();
const { getBooks, addBook, updateBook, deleteBook } = require("../controllers/bookController");


// Routes
router.get("/books", getBooks);
router.post("/books", addBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);

module.exports = router;
