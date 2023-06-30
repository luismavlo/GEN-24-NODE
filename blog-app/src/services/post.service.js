const { ref, getDownloadURL } = require('firebase/storage');
const PostImg = require('../models/postImg.model');
const Post = require('../models/posts.model');
const User = require('../models/users.model');
const AppError = require('../utils/appError');
const { storage } = require('../utils/firebase');

class PostService {
  async findPost(id) {
    try {
      const post = await Post.findOne({
        where: {
          id,
          status: 'active',
        },
        attributes: {
          exclude: ['userId', 'status'],
        },
        include: [
          {
            model: User,
            attributes: ['id', 'name', 'profileImgUrl', 'description'],
          },
          {
            model: PostImg,
          },
        ],
      });

      if (!post) {
        throw new AppError(`Post with id: ${id} not found 😪`, 404);
      }

      return post;
    } catch (error) {
      throw new Error(error);
    }
  }

  async downloadImgsPost(post) {
    try {
      const imgRefUserProfile = ref(storage, post.user.profileImgUrl);
      const urlProfileUser = await getDownloadURL(imgRefUserProfile);

      post.user.profileImgUrl = urlProfileUser;

      const postImgsPromises = post.postImgs.map(async (postImg) => {
        const imgRef = ref(storage, postImg.postImgUrl);
        const url = await getDownloadURL(imgRef);

        postImg.postImgUrl = url;
        return postImg;
      });

      await Promise.all(postImgsPromises);

      return post;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = PostService;
