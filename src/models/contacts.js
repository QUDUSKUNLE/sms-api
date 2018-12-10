"use strict";

module.exports = function(sequelize, DataTypes) {
  const Contacts = sequelize.define("Contacts", {
    id: {
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "contact name is required",
          min: 2
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "phone number is required",
          max: 25
        }
      }
    }
  });

  Contacts.associate = (models) => {
    Contacts.hasMany(
      models.Messages,
      { foreignKey: 'receiverId', as: 'receiver' },
      { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
    );

    Contacts.hasMany(
      models.Messages,
      { foreignKey: 'senderId', as: 'sender' },
      { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
    );
  };
  return Contacts;
};
