const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

//routes
const authorRouter = require('./routes/author.route');
const bookRouter = require('./routes/book.route');

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/authors', authorRouter);
app.use('/api/v1/books', bookRouter);

module.exports = app;
