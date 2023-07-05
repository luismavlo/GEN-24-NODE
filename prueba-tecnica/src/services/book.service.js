const db = require('./../database/models/index');

class BookServices {
  async findAll(options) {
    try {
      const { count, rows } = await db.Book.findAndCountAll(options);

      return { count, rows };
    } catch (error) {
      console.log(error);
      throw new Error('Something went very wrong!');
    }
  }

  async create(bookData) {
    try {
      const book = await db.Book.create(bookData);

      return book;
    } catch (error) {
      console.log(error);
      throw new Error('Something went very wrong!');
    }
  }

  async findOne(id) {
    const book = await db.Book.findOne({
      where: {
        id,
        status: true,
      },
    });

    return book;
  }

  async update(book, bookData) {
    try {
      const bookUpdated = await book.update(bookData);

      return bookUpdated;
    } catch (error) {
      console.log(error);
      throw new Error('Something went very wrong!');
    }
  }

  async delete(book) {
    try {
      const bookDeleted = await book.update({ status: false });

      return bookDeleted;
    } catch (error) {
      console.log(error);
      throw new Error('Something went very wrong!');
    }
  }
}

module.exports = BookServices;
