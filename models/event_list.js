'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event_List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event_List.belongsTo(models.User, {
        as: 'creator',
        foreignKey: 'userId'
      }),
      Event_List.belongsTo(models.Event, {
        as: "events",
        foreignKey: "eventId",
      });
    }
  }
  Event_List.init({
    trip: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    when: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "userId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        model: "users",
        Key: "id",
      },
    }, 
  }, {
    sequelize,
    modelName: 'Event_List',
    tableName: 'event_lists',
  });
  return Event_List;
};