const Product = require("../models/product.model");

exports.findProducts = async (req, res) => {
  const time = req.requestTime;

  const products = await Product.findAll();

  return res.json({
    requestTime: time,
    results: products.length,
    status: "success",
    message: "Products found",
    products,
  });
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;

  return res.json({
    message: "Hello from the patch product",
    id,
  });
};

exports.createProduct = async (req, res) => {
  try {
    // PASO 1: OBTENER INFORMACION A CREAR DE LA REQ.BODY
    const { name, image, ingredients, quantity, price, isNew, description } =
      req.body;

    //PASO 2: CREAR EL PRODUCTO UTILIZANDO EL MODELO

    const product = await Product.create({
      name,
      image,
      ingredients,
      quantity,
      price,
      isNew,
      description,
    });

    // PASO 3: ENVIAR UNA RESPUESTA AL CLIENTE

    return res.status(201).json({
      message: "The product has been created!",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: "Something went very wrong!",
    });
  }
};

exports.findProduct = (req, res) => {
  const id = req.params.id;
  console.log(req.params);

  return res.json({
    message: "Hello from the get one products",
    id,
  });
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  return res.json({
    message: "Hello from the delete product",
    id,
  });
};
