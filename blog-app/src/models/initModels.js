const Comment = require('./comments.model');
const PostImg = require('./postImg.model');
const Post = require('./posts.model');
const User = require('./users.model');

const initModel = () => {
  User.hasMany(Post, { foreignKey: 'userId' });
  Post.belongsTo(User, { foreignKey: 'userId' });

  Post.hasMany(Comment);
  Comment.belongsTo(Post);

  User.hasMany(Comment);
  Comment.belongsTo(User);

  Post.hasMany(PostImg);
  PostImg.belongsTo(Post);
};

module.exports = initModel;
