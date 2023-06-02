const cors = require('cors');
const express = require('express');

//routes
const productRouter = require('./routes/products.routes');

const app = express();
//este middleware de aca me sirve para que mi servidor
//entienda formatos json que le estan llegando
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  const time = new Date().toISOString();

  req.requestTime = time;
  next();
});

app.use('/api/v1/products', productRouter);

module.exports = app;
