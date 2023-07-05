const BookService = require('../services/book.service');

const bookService = new BookService();

exports.findAll = async (req, res) => {
  try {
    const { page = 0, size = 5 } = req.query;

    let options = {
      where: {
        status: true,
      },
      limit: +size,
      offset: +page * +size,
    };

    const { count, rows } = await bookService.findAll(options);

    return res.status(200).json({
      status: 'success',
      total: count,
      books: rows,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const {
      title,
      sypnosis,
      numberPages,
      editorial,
      publicationDate,
      score,
      authorId,
    } = req.body;

    const book = await bookService.create({
      title,
      sypnosis,
      numberPages,
      editorial,
      publicationDate,
      score,
      authorId,
    });

    return res.status(201).json({
      status: 'success',
      book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await bookService.findOne(id);

    if (!book) {
      return res.status(404).json({
        status: 'error',
        message: 'Book not found!',
      });
    }

    return res.status(200).json({
      status: 'success',
      book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, sypnosis } = req.body;

    const book = await bookService.findOne(id);

    if (!book) {
      return res.status(404).json({
        status: 'error',
        message: 'Book not found!',
      });
    }

    await bookService.update(book, { title, sypnosis });

    return res.status(200).json({
      status: 'success',
      message: 'Book updated successfully!',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await bookService.findOne(id);

    if (!book) {
      return res.status(404).json({
        status: 'error',
        message: 'Book not found!',
      });
    }

    await bookService.delete(book);

    return res.status(200).json({
      status: 'success',
      message: 'Book deleted successfully!',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};
