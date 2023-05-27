const express = require("express");

const router = express.Router();

const findProducts = (req, res) => {
  res.json({
    message: "Hello from the get products",
  });
};

const updateProduct = (req, res) => {
  const id = req.params.id;

  res.json({
    message: "Hello from the patch product",
    id,
  });
};

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

router.get("/", findProducts);

router.post("/", createProduct);

router.get("/:id", findProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
