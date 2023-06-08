const User = require('../models/users.model');

exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        status: 'active',
      },
    });

    res.status(200).json({
      status: 'success',
      results: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};

exports.findOneUser = async (req, res) => {
  try {
    const { user } = req;

    res.status(200).json({
      status: 'success',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { user } = req;

    await user.update({ name, description });

    res.status(200).json({
      status: 'success',
      message: 'user has been updated!',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { user } = req;

    await user.update({ status: 'disabled' });

    res.status(200).json({
      status: 'success',
      message: 'user has been deleted',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 🧨',
    });
  }
};
