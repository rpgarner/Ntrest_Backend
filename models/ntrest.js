'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ntrest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: "userId",
      }),
        Post.hasMany(models.Event, {
          foreignKey: "postId",
        });
    }
  }
  Ntrest.init({
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    ntrest_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false,
    },  
    description: {
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
    modelName: 'Ntrest',
    tableName: 'ntrests'
  });
  return Ntrest;
};