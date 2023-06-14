const express = require('express');

//controllers
const authController = require('./../controllers/auth.controller');

//middlewares
const validationMiddleware = require('./../middlewares/validations.middleware');
const userMiddleware = require('./../middlewares/users.middleware');
const authMiddleware = require('./../middlewares/auth.middleware');

const router = express.Router();

router.post(
  '/signup',
  validationMiddleware.createUserValidation,
  authController.signup
);

router.post('/login', authController.login);

router.get('/renew', authController.renew);

router.patch(
  '/password/:id',
  authMiddleware.protect,
  validationMiddleware.updateUserValidation,
  userMiddleware.validUser,
  authController.updatePassword
);

module.exports = router;
