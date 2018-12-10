'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Messages',
      [
        {
          id: '151edad1-6e63-44cb-8809-d38008d2a06d',
          message: 'I miss you',
          receiverId: '08025250445',
          senderId: '08068429137',
          createdAt: '2018-11-24T23:32:04.467Z',
          updatedAt: '2018-11-24T23:32:04.467Z',
        },
        {
          id: 'f65d63eb-d593-408a-b910-e26172ff58ea',
          message: 'Missing so much',
          receiverId: '08068429137',
          senderId: '08025250445',
          createdAt: '2018-11-24T23:33:21.281Z',
          updatedAt: '2018-11-24T23:33:21.281Z',
        },
        {
          id: '381c0799-7f25-42cf-baba-2e4bd89b829e',
          message: 'Missing so much again',
          receiverId: '08068429137',
          senderId: '08037136919',
          createdAt: '2018-11-24T23:33:21.281Z',
          updatedAt: '2018-11-24T23:33:21.281Z',
        },
      ],
      {},
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Messages', null, {});
  },
};
