const User = require('../models/users.model');
const catchAsync = require('../utils/catchAsync');
const { ref, getDownloadURL } = require('firebase/storage');
const { storage } = require('./../utils/firebase');

exports.findAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll({
    where: {
      status: 'active',
    },
  });
  //recorremos todos los usuarios para hacer el cambio del path x la url
  const usersPromises = users.map(async (user) => {
    //obtenemos la referencia
    const imgRef = ref(storage, user.profileImgUrl);
    //nos traemos la url
    const url = await getDownloadURL(imgRef);
    //hacemos el cambio del path x la url
    user.profileImgUrl = url;
    //retornamos el usuario
    return user;
  });

  const usersResolved = await Promise.all(usersPromises);

  res.status(200).json({
    status: 'success',
    results: users.length,
    users: usersResolved,
  });
});

exports.findOneUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  const imgRef = ref(storage, user.profileImgUrl);
  const url = await getDownloadURL(imgRef);

  res.status(200).json({
    status: 'success',
    user: {
      name: user.name,
      email: user.email,
      description: user.description,
      profileImgUrl: url,
      role: user.role,
    },
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const { name, description } = req.body;
  const { user } = req;

  await user.update({ name, description });

  res.status(200).json({
    status: 'success',
    message: 'user has been updated!',
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const { user } = req;

  await user.update({ status: 'disabled' });

  res.status(200).json({
    status: 'success',
    message: 'user has been deleted',
  });
});
