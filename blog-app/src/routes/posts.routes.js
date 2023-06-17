const express = require('express');

//controllers
const postController = require('../controllers/posts.controller');

//middlewares
const validationMiddleware = require('./../middlewares/validations.middleware');
const authMiddleware = require('./../middlewares/auth.middleware');
const postMiddleware = require('./../middlewares/post.middleware');

const router = express.Router();

router
  .route('/')
  .get(postController.findAllPost)
  .post(
    validationMiddleware.createPostValidation,
    authMiddleware.protect,
    postController.createPost
  );

router
  .use(authMiddleware.protect)
  .use('/:id', postMiddleware.validPost)
  .route('/:id')
  .get(postController.findOnePost)
  .patch(
    validationMiddleware.createPostValidation,
    authMiddleware.protectAccountOwner,
    postController.updatePost
  )
  .delete(authMiddleware.protectAccountOwner, postController.deletePost);

module.exports = router;
