'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Books', 'authorId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'author_id',
      references: {
        model: 'Authors',
        key: 'id',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Books', 'authorId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'author_id',
    });
  },
};
