const User = require('../models/users.model');
const catchAsync = require('./../utils/catchAsync');
const bcrypt = require('bcryptjs');

exports.signup = catchAsync(async (req, res) => {
  const { name, email, password, description } = req.body;

  const salt = await bcrypt.genSalt(12);
  const encryptedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: encryptedPassword,
    description,
  });

  res.status(200).json({
    status: 'success',
    message: 'The user has been created',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      description: user.description,
      profileImgUrl: user.profileImgUrl,
      role: user.role,
    },
  });
});

exports.login = catchAsync(async (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});
