'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sypnosis: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      numberPages: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'number_pages',
      },
      editorial: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      publicationDate: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'publication_date',
      },
      score: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      authorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'author_id',
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  },
};
