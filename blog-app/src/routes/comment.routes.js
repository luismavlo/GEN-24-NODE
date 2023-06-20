const express = require('express');

//controllers
const commentController = require('../controllers/comment.controller');

//middlewares
const commentMiddleware = require('./../middlewares/comment.middleware.js');
const authMiddleware = require('./../middlewares/auth.middleware');
const postMiddleware = require('./../middlewares/post.middleware');

const router = express.Router();

router.use(authMiddleware.protect);

router.get('/', commentController.findAllComments);

router.post(
  '/:postId',
  postMiddleware.validPost,
  commentController.createComment
);

router
  .use('/:id', commentMiddleware.commentExist)
  .route('/:id')
  .get(commentController.findComment)
  .patch(authMiddleware.protectAccountOwner, commentController.updateComment)
  .delete(authMiddleware.protectAccountOwner, commentController.deleteComment);

module.exports = router;
