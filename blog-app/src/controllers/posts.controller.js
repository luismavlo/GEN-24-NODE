const Post = require('../models/posts.model');
const User = require('../models/users.model');
const catchAsync = require('../utils/catchAsync');

exports.findAllPost = catchAsync(async (req, res, next) => {
  const posts = await Post.findAll({
    where: {
      status: 'active',
    },
    attributes: {
      exclude: ['userId', 'status'],
    },
    include: [
      {
        model: User,
        attributes: ['id', 'name', 'profileImgUrl', 'description'],
      },
    ],
    order: [['createdAt', 'DESC']],
    limit: 10,
  });

  return res.status(200).json({
    status: 'success',
    results: posts.length,
    posts,
  });
});

exports.createPost = catchAsync(async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.sessionUser;

  const post = await Post.create({
    title,
    content,
    userId: id,
  });

  return res.status(201).json({
    status: 'success',
    post,
  });
});

exports.findOnePost = catchAsync(async (req, res, next) => {
  const { post } = req;

  return res.status(200).json({
    status: 'success',
    post,
  });
});

exports.updatePost = catchAsync(async (req, res, next) => {
  const { post } = req;
  const { title, content } = req.body;

  const postUpdated = await post.update({ title, content });

  return res.status(200).json({
    status: 'success',
    post: postUpdated,
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const { post } = req;

  await post.update({ status: 'disabled' });

  return res.status(200).json({
    status: 'success',
  });
});
