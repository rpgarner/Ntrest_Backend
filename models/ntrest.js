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
      // define association here
    }
  }
  Ntrest.init({
    category: DataTypes.STRING,
    name: DataTypes.STRING,
    ntrest_img: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ntrest',
  });
  return Ntrest;
};