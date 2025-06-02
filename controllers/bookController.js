const Book = require("../models/Book");

// GET /api/books => To list all the books with optional search query
const getBooks = async (req, res) => {
  try {
    const { title } = req.query;
    let filter = {};
    
    // Optional search for title using $regex
    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }

    const books = await Book.find(filter);
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// POST /api/books => To add a book to database
const addBook = async (req, res) => {
  try {
    const { title, author, price, publishedDate } = req.body;

    if (!title || !author || !price || !publishedDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBook = await Book.create({
      title,
      author,
      price,
      publishedDate,
    });
    res.status(201).json({message : "Book added successfully" , newBook});
  } catch (err) {
    res.status(500).json({ message: "Failed to add book", error: err.message, suggestion : "Use YYYY-MM-DD date format" });
  }
};

// PUT /api/books/:id => To update a book's data using its id
const updateBook = async (req, res) => {
  try {
    // const { title, author, price, publishedDate } = req.body;

    // if (!title || !author || !price || !publishedDate) {
    //   return res.status(400).json({ message: "All fields are required" });
    // }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({message : "Updated successfully",updatedBook});
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update book", error: err.message, suggestion : "Use YYYY-MM-DD date format"  });
  }
};

// DELETE /books/:id => To delete a book from the database using its id
const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" , deletedBook });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete book", error: err.message });
  }
};

module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
};
