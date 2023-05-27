const express = require("express");
// const { findProducts } = require('./../controllers/products.controller')
const productsController = require("./../controllers/products.controller");

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

router
  .route("/")
  .get(productsController.findProducts)
  .post(validProduct, productsController.createProduct);

router
  .route("/:id")
  .get(productsController.findProduct)
  .patch(productsController.updateProduct)
  .delete(productsController.deleteProduct);

// router.get("/", findProducts);

// router.post("/", createProduct);

// router.get("/:id", findProduct);

// router.patch("/:id", updateProduct);

// router.delete("/:id", deleteProduct);

module.exports = router;
