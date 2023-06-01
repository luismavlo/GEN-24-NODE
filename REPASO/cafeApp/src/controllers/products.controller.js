const Product = require("../models/product.model");

exports.findProducts = async (req, res) => {
  const time = req.requestTime;

  const products = await Product.findAll({
    where: {
      status: true,
    },
  });

  return res.json({
    requestTime: time,
    results: products.length,
    status: "success",
    message: "Products found",
    products,
  });
};

exports.updateProduct = async (req, res) => {
  try {
    // 1. TRAERNOS EL PRODUCTO QUE IBAMOS A ACTUALIZAR
    const { id } = req.params;
    // 2. NOS TRAJIMOS DE EL BODY LA INFORMACION QUE VAMOS A ACTUALIZAR
    const { quantity, price } = req.body;
    // 3. BUSCAR EL PRODUCTO QUE VAMOS A ACTUALIZAR
    const product = await Product.findOne({
      where: {
        id,
        status: true,
      },
    });
    // 4. VALIDAR SI EL PRODUCTO EXISTE
    if (!product) {
      return res.status(404).json({
        status: "error",
        message: `Product with id: ${id} not found`,
      });
    }
    // 5. PROCEDO A ACTUALIZARLO
    await product.update({ quantity, price });

    // 6. ENVIO LA CONFIRMACIÓN DE EXITO AL CLIENTE

    res.status(200).json({
      status: "success",
      message: "The product has been updated",
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong!",
    });
  }
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
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong!",
    });
  }
};

exports.findProduct = async (req, res) => {
  try {
    //? 1. NOS TRAEMOS EL ID DE LOS PARAMETROS
    const { id } = req.params; //DESTRUCION DE OBJETOS

    //? 2. BUSCO EL PRODUCTO EN LA BASE DE DATOS
    const product = await Product.findOne({
      where: {
        // id: id
        id,
        status: true,
      },
    });

    //? 3. VALIDAR SI EL PRODUCTO EXISTE, SI NO, ENVIAR UN ERROR 404
    if (!product) {
      return res.status(404).json({
        status: "error",
        message: `The product with id: ${id} not found!`,
      });
    }

    //? 4. ENVIAR LA RESPUESTA AL CLIENTE
    return res.status(200).json({
      status: "success",
      message: "Product found",
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "fail",
      message: "Something went very wrong!",
    });
  }
};

exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  return res.json({
    message: "Hello from the delete product",
    id,
  });
};
