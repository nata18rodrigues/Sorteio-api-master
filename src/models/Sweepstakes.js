const { DataTypes, Model } = require("sequelize");

class Sweepstakes extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false,
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        startedAt: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        endedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "sweepstakes",
        tableName: "sweepstakes",
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.leads, {
      as: "leads",
      through: "leads_sweepstakes",
      foreignKey: "sweepstakeId",
    });
  }
}
module.exports = Sweepstakes;
