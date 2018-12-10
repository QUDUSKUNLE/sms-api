'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      message: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senderId: {
        type: Sequelize.STRING,
        references: {
          model: 'Contacts',
          key: 'phoneNumber',
          as: 'sender',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      receiverId: {
        type: Sequelize.STRING,
        references: {
          model: 'Contacts',
          key: 'phoneNumber',
          as: 'receiver',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
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
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Messages');
  },
};
