const userController = require('../controllers/users.controller');
const express = require('express');

const router = express.Router();

router.get('/', userController.findAllUsers);

router
  .route('/:id')
  .get(userController.findOneUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
