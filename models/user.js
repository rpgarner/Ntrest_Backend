'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Ntrest, {
        as: "ntrests",
        foreignKey: "userId",
      }),
      User.hasMany(models.Event, {
        as: "events",
        foreignKey: "userId",
      }),
      User.hasMany(models.Event_List, {
        as: "event_lists",
        foreignKey: "userId",
      });
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },  
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    profile_img: {
      type: DataTypes.STRING,
      allowNull: true
  }, 
},
{
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User;
};