'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.belongsTo(models.Author, { foreignKey: 'authorId' });
    }
  }
  Book.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sypnosis: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      numberPages: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'number_pages',
      },
      editorial: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publicationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'publication_date',
      },
      score: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'author_id',
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
