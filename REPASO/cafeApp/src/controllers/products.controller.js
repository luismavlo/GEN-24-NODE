exports.findProducts = (req, res) => {
  const time = req.requestTime;

  return res.json({
    requestTime: time,
    message: "Hello from the get products",
  });
};

exports.updateProduct = (req, res) => {
  const id = req.params.id;

  return res.json({
    message: "Hello from the patch product",
    id,
  });
};

exports.createProduct = (req, res) => {
  const { name, image, ingredients, quantity, price, isNew, description } =
    req.body;

  return res.status(201).json({
    message: "Hello from the post products",
    product: req.body,
  });
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
