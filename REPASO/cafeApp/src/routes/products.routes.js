const express = require("express");

//controllers
const productsController = require("./../controllers/products.controller");

//middlewares
const validationMiddleware = require("./../middlewares/validations.middleware");

const router = express.Router();

router
  .route("/")
  .get(productsController.findProducts)
  .post(validationMiddleware.validProduct, productsController.createProduct);

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
