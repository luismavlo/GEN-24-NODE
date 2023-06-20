const express = require('express');

//controllers
const commentController = require('../controllers/comment.controller');

//middlewares
const commentMiddleware = require('./../middlewares/comment.middleware.js');
const authMiddleware = require('./../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware.protect);

router.get('/', commentController.findAllComments);

router.post('/:postId', commentController.createComment);

router
  .use('/:id', commentMiddleware.commentExist)
  .route('/:id')
  .get(commentController.findComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);

module.exports = router;
