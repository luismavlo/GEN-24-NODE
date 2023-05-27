const express = require("express");

const router = express.Router();

const validProduct = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "the name is required",
    });
  }

  next();
};

const findProducts = (req, res) => {
  const time = req.requestTime;

  return res.json({
    requestTime: time,
    message: "Hello from the get products",
  });
};

const updateProduct = (req, res) => {
  const id = req.params.id;

  return res.json({
    message: "Hello from the patch product",
    id,
  });
};

const createProduct = (req, res) => {
  return res.status(201).json({
    message: "Hello from the post products",
    product: req.body,
  });
};

const findProduct = (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  return res.json({
    message: "Hello from the get one products",
    id,
  });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;

  return res.json({
    message: "Hello from the delete product",
    id,
  });
};

router.route("/").get(findProducts).post(validProduct, createProduct);

router
  .route("/:id")
  .get(findProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

// router.get("/", findProducts);

// router.post("/", createProduct);

// router.get("/:id", findProduct);

// router.patch("/:id", updateProduct);

// router.delete("/:id", deleteProduct);

module.exports = router;
