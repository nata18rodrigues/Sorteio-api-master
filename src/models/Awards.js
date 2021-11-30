const { DataTypes, Model } = require("sequelize");

class Awards extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
        fileId: {
          type: DataTypes.STRING,
        },
        sweepstakeId: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        modelName: "awards",
        tableName: "awards",
      }
    );
  }
  static associate(models) {
    this.hasOne(models.files, { foreignKey: "awardId", as: "file" });
  }
}
module.exports = Awards;
