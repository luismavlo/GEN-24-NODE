const Post = require('../models/posts.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.validPost = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findOne({
    where: {
      id,
      status: 'active',
    },
  });

  if (!post) next(new AppError(`Post with id: ${id} not found`));

  req.post = post;
  next();
});
