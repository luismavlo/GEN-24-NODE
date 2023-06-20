const Comment = require('../models/comments.model');
const Post = require('../models/posts.model');
const User = require('../models/users.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.validPost = catchAsync(async (req, res, next) => {
  const { id, postId } = req.params;

  const post = await Post.findOne({
    where: {
      id: id || postId,
      status: 'active',
    },
    include: [
      {
        model: User,
      },
      {
        model: Comment,
      },
    ],
  });

  if (!post) next(new AppError(`Post with id: ${id || postId} not found`));

  req.user = post.user;
  req.post = post;
  next();
});
