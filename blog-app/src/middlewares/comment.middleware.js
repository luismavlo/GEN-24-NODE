const Comment = require('../models/comments.model');
const User = require('../models/users.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.commentExist = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const comment = await Comment.findOne({
    where: {
      id,
      status: true,
    },
    include: [
      {
        model: User,
      },
    ],
  });

  if (!comment)
    return next(new AppError(`Comment with id: ${id} not found`, 404));

  req.user = comment.user;
  req.comment = comment;
  next();
});
