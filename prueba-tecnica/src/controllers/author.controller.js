const AuthorServices = require('./../services/author.service');

const authorService = new AuthorServices();

exports.findAll = async (req, res) => {
  try {
    const authors = await authorService.findAll();

    res.status(200).json({
      status: 'success',
      authors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, surname, birthdate, biography } = req.body;

    const newAuthor = await authorService.create({
      name,
      surname,
      birthdate,
      biography,
    });

    res.status(201).json({
      status: 'success',
      newAuthor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await authorService.findOne(id);

    if (!author) {
      return res.status(404).json({
        status: 'error',
        message: 'Author not found!',
      });
    }

    return res.status(200).json({
      status: 'success',
      author,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname } = req.body;

    const author = await authorService.findOne(id);

    if (!author) {
      return res.status(404).json({
        status: 'error',
        message: 'Author not found!',
      });
    }

    await authorService.update(author, { name, surname });

    return res.status(200).json({
      status: 'success',
      message: 'Author updated successfully!',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;

    const author = await authorService.findOne(id);

    if (!author) {
      return res.status(404).json({
        status: 'error',
        message: 'Author not found!',
      });
    }

    await authorService.delete(author);

    return res.status(200).json({
      status: 'success',
      message: 'Author deleted successfully!',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};
