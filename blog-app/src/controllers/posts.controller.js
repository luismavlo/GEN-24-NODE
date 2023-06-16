const catchAsync = require('../utils/catchAsync');

exports.findAllPost = catchAsync(async (req, res, next) => {
  return res.status(200).json({
    status: 'success',
  });
});

exports.createPost = catchAsync(async (req, res, next) => {
  return res.status(201).json({
    status: 'success',
  });
});

exports.findOnePost = catchAsync(async (req, res, next) => {
  return res.status(200).json({
    status: 'success',
  });
});

exports.updatePost = catchAsync(async (req, res, next) => {
  return res.status(200).json({
    status: 'success',
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  return res.status(200).json({
    status: 'success',
  });
});
