const express = require('express');

const authorController = require('../controllers/author.controller');

const router = express.Router();

router.route('/').get(authorController.findAll).post(authorController.create);

router
  .route('/:id')
  .get(authorController.findOne)
  .patch(authorController.update)
  .delete(authorController.delete);

module.exports = router;
