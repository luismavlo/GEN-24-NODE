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

//! TAREA
//* 1. CREAR LA CARPETA MIDDLEWARES
//? 2. CREARSE EN LA CARPETA MIDDLEWARES UN ARCHIVO: validations.middleware.js
//* 3. COPIAR Y EXPORTAR LA FUNCION VALID PRODUCT
//? 4. IMPORTAR EN PRODUCT ROUTES LA FUNCIÓN ALGO COMO ESTO
//?         const validationMiddleware = require('./........') ----- validationMiddleware.validProduct

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
