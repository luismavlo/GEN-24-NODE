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

router.get("/", findProducts);

router.patch("/:id", updateProduct);

module.exports = router;
