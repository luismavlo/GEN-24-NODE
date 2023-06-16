const postController = require('../controllers/posts.controller');
const express = require('express');

const router = express.Router();

router
  .route('/')
  .get(postController.findAllPost)
  .post(postController.createPost);

router
  .route('/:id')
  .get(postController.findOnePost)
  .patch(postController.updatePost)
  .delete(postController.deletePost);

module.exports = router;
