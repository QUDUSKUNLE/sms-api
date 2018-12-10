'use strict';

module.exports = function (sequelize, DataTypes) {
  const Messages = sequelize.define('Messages', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    message: { type: DataTypes.STRING, allowNull: false },
    receiverId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Messages.associate = (models) => {
    Messages.belongsTo(models.Contacts, { foreignKey: 'receiverId' });
    Messages.belongsTo(models.Contacts, { foreignKey: 'senderId' });
  };

  return Messages;
};
