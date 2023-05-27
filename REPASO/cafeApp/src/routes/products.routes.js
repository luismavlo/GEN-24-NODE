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

const helloFromProduct = (req, res, next) => {
  console.log("hello fron de product route");
  next();
};

router.route("/").get(findProducts).post(createProduct);

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
