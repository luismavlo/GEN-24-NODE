const Post = require('./posts.model');
const User = require('./users.model');

const initModel = () => {
  User.hasMany(Post, { foreignKey: 'userId' });
  Post.belongsTo(User, { foreignKey: 'userId' });
};

module.exports = initModel;
