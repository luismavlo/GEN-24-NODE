const User = require('../models/users.model');
const catchAsync = require('./../utils/catchAsync');

exports.signup = catchAsync(async (req, res) => {
  const { name, email, password, description } = req.body;

  const user = await User.create({ name, email, password, description });

  res.status(200).json({
    status: 'success',
    message: 'The user has been created',
    user,
  });
});

exports.login = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});
