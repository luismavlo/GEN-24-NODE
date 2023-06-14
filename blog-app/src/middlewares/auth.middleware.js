const catchAsync = require('../utils/catchAsync');

exports.protect = catchAsync(async (req, res, next) => {
  //1. extraer el token
  let token;
  console.log(req.headers.authorization);

  next();
});
