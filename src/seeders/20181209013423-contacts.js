'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Contacts',
      [
        {
          id: 'beeb37d8-c3bf-47f3-9d7a-1e75bd7fc867',
          name: 'Iveren',
          phoneNumber: '08025250445',
          createdAt: '2018-11-24T23:32:04.467Z',
          updatedAt: '2018-11-24T23:32:04.467Z',
        },
        {
          id: '8f1df4b6-4d8e-4f45-84bd-08b7d7186654',
          name: 'Shaguy',
          phoneNumber: '08068429137',
          createdAt: '2018-11-24T23:33:21.281Z',
          updatedAt: '2018-11-24T23:33:21.281Z',
        },
        {
          id: '700cc12a-db58-4130-84e7-876e3c95a24d',
          name: 'Esther',
          phoneNumber: '08037136919',
          createdAt: '2018-11-24T23:33:21.281Z',
          updatedAt: '2018-11-24T23:33:21.281Z',
        },
      ],
      {},
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Contacts', null, {});
  },
};
