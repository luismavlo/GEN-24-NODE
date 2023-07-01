const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

module.exports = app;
