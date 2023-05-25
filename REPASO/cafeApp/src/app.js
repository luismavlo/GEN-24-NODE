const express = require("express");

const app = express();
//este middleware de aca me sirve para que mi servidor
//entienda formatos json que le estan llegando
app.use(express.json());

app.get("/api/v1/products", (req, res) => {
  res.json({
    message: "Hello from the get products",
  });
});

app.post("/api/v1/products", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Hello from the post products",
    product: req.body,
  });
});

app.get("/api/v1/products/:id", (req, res) => {
  res.json({
    message: "Hello from the get one products",
  });
});

app.patch;

app.delete;

app.listen(3000, () => {
  console.log("Server running on port 3000! 🐱‍🐉");
});
