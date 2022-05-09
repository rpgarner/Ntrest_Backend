'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('event_Lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trip: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      when: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "users",
          Key: "id",
        },
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('event_Lists');
  }
};