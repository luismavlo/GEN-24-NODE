const express = require("express");

//routes
const productRouter = require("./routes/products.routes");

const app = express();
//este middleware de aca me sirve para que mi servidor
//entienda formatos json que le estan llegando
app.use(express.json());

const helloMiddleware = (req, res, next) => {
  console.log("Hello from the middleware!");

  next();
};

app.use(helloMiddleware);

const createProduct = (req, res) => {
  console.log(req.body);

  res.json({
    message: "Hello from the post products",
    product: req.body,
  });
};

const findProduct = (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  res.json({
    message: "Hello from the get one products",
    id,
  });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;

  res.json({
    message: "Hello from the delete product",
    id,
  });
};

app.use("/api/v1/products", productRouter);

// app.post("/api/v1/products", createProduct);

// app.get("/api/v1/products/:id", findProduct);

// app.delete("/api/v1/products/:id", deleteProduct);

app.listen(3000, () => {
  console.log("Server running on port 3000! 🐱‍🐉");
});
