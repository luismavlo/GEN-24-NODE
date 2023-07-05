'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Authors', [
      {
        name: 'Junior',
        surname: 'Pacheco',
        birthdate: '1997-10-10',
        biography: 'Junior Pacheco is a software engineer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Juanito',
        surname: 'alimaña',
        birthdate: '1993-10-10',
        biography: 'Juanito alimaña is a fireman',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  },
};
