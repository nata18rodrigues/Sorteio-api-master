const { DataTypes, Model } = require("sequelize");

class Leads extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        phoneNumber: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "leads",
        tableName: "leads",
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.sweepstakes, {
      as: "sweepstakes",
      through: "leads_sweepstakes",
      foreignKey: "leadId",
    });
  }
}
module.exports = Leads;
