const { db } = require('../database/config');
const PostImg = require('../models/postImg.model');
const Post = require('../models/posts.model');
const User = require('../models/users.model');
const catchAsync = require('../utils/catchAsync');
const { storage } = require('../utils/firebase');
const { ref, uploadBytes } = require('firebase/storage');

//TODO: Resolver las imagenes de firebase para cuando se traiga todos los post
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
      {
        model: PostImg,
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

  console.log(req.files);

  const postImgsPromises = req.files.map(async (file) => {
    const imgRef = ref(storage, `posts/${Date.now()}-${file.originalname}`);
    const imgUploaded = await uploadBytes(imgRef, file.buffer);

    return await PostImg.create({
      postId: post.id,
      postImgUrl: imgUploaded.metadata.fullPath,
    });
  });

  await Promise.all(postImgsPromises);

  return res.status(201).json({
    status: 'success',
    post,
  });
});

//TODO: Resolver las imagenes de firebase para findOnePost
exports.findOnePost = catchAsync(async (req, res, next) => {
  const { post } = req;

  return res.status(200).json({
    status: 'success',
    post,
  });
});

//TODO: Resolver las imagenes de firebase para findMyPost
exports.findMyPost = catchAsync(async (req, res, next) => {
  const { sessionUser } = req;

  const query = `SELECT * FROM posts WHERE "userId" = :iduser AND status = :status`;

  const [rows, fields] = await db.query(query, {
    replacements: {
      iduser: sessionUser.id,
      status: 'active',
    },
  });

  res.status(200).json({
    status: 'success',
    results: fields.rowCount,
    posts: rows,
  });
});

//TODO: Resolver las imagnes de firebase para findUserPost
exports.findUserPost = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const posts = await Post.findAll({
    where: {
      userId: id,
      status: 'active',
    },
    include: [
      {
        model: User,
        attributes: { exclude: ['password', 'passwordChangedAt'] },
      },
    ],
  });

  return res.status(200).json({
    status: 'success',
    results: posts.length,
    posts,
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
