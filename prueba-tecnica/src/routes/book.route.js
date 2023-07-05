const express = require('express');

//controllers
const bookController = require('../controllers/book.controller');

const router = express.Router();

router.route('/').get(bookController.findAll).post(bookController.create);

router
  .route('/:id')
  .get(bookController.findOne)
  .patch(bookController.update)
  .delete(bookController.delete);

module.exports = router;
