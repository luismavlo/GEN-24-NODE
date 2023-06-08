const express = require('express');

//controllers
const userController = require('../controllers/users.controller');

//middlewares
const userMiddleware = require('./../middlewares/users.middleware');

const router = express.Router();

router.get('/', userController.findAllUsers);

router
  .route('/:id')
  .get(userMiddleware.validUser, userController.findOneUser)
  .patch(userMiddleware.validUser, userController.updateUser)
  .delete(userMiddleware.validUser, userController.deleteUser);

module.exports = router;
