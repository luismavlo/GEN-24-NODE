const Comment = require('../models/comments.model');
const PostImg = require('../models/postImg.model');
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
    ],
  });

  if (!post) next(new AppError(`Post with id: ${id || postId} not found`));

  req.user = post.user;
  req.post = post;
  next();
});

exports.validPostPerFindOne = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findOne({
    where: {
      id,
      status: 'active',
    },
    include: [
      {
        model: User,
        attributes: {
          exclude: ['password', 'passwordChangedAt', 'role', 'status'],
        },
      },
      {
        model: PostImg,
      },
      {
        model: Comment,
        include: [
          {
            model: User,
            attributes: {
              exclude: ['password', 'passwordChangedAt', 'role', 'status'],
            },
          },
        ],
      },
    ],
  });

  if (!post) {
    return next(new AppError(`Post with id: ${id} not found`, 404));
  }

  req.post = post;
  next();
});
