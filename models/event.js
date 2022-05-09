'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        as: 'creator',
        foreignKey: 'userId'
      }),
      Comment.belongsTo(models.Ntrest, {
        foreignKey: 'ntrestId'
      }),
      Post.belongsTo(models.Event_list, {
        foreignKey: "event_listId",
      });
    }
  }
  Event.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    directions: {
      type: DataTypes.STRING,
      allowNull: true,
    },  
    equipment: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    cost: {
      type: DataTypes.INTEGEER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
      }
    },  
    event_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },   
    created_by: {
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
    ntrestId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "ntrestId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        model: "ntrests",
        Key: "id",
      },
    },
    event_listId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: "event_listId",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      references: {
        model: "event_lists",
        Key: "id",
      },
    },
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events'
  });
  return Event;
};