const db = require('./../database/models/index');

class AuthorServices {
  async findAll() {
    try {
      const authors = await db.Author.findAll({
        where: {
          status: true,
        },
        include: [
          {
            model: db.Book,
          },
        ],
      });

      return authors;
    } catch (error) {
      console.log(error);
      throw new Error('Something went very wrong!');
    }
  }

  async create(author) {
    try {
      const newAuthor = await db.Author.create(author);

      return newAuthor;
    } catch (error) {
      console.log(error);
      throw new Error('Something went very wrong!');
    }
  }

  async findOne(id) {
    try {
      const author = await db.Author.findOne({
        where: {
          id,
          status: true,
        },
        include: [
          {
            model: db.Book,
          },
        ],
      });

      return author;
    } catch (error) {
      console.log(error);
      throw new Error('Something went very wrong!');
    }
  }

  async update(author, authorData) {
    try {
      const authorUpdated = await author.update(authorData);

      return authorUpdated;
    } catch (error) {
      console.log(error);
      throw new Error('Something went very wrong!');
    }
  }

  async delete(author) {
    try {
      const authorDeleted = await author.update({ status: false });

      return authorDeleted;
    } catch (error) {
      console.log(error);
      throw new Error('Something went very wrong!');
    }
  }
}

module.exports = AuthorServices;
