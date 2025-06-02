const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    // index : true
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
}, 
{
  timestamps: true
});

bookSchema.index({ title: 'text' });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
