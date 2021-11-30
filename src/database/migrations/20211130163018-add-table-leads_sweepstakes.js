"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("leads_sweepstakes", {
      leadId: {
        type: Sequelize.UUID,
        references: {
          model: "leads",
          key: "id",
        },
        allowNull: false,
      },
      sweepstakeId: {
        type: Sequelize.UUID,
        references: {
          model: "sweepstakes",
          key: "id",
        },
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("leads_sweepstakes");
  },
};
