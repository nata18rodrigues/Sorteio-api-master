const { DataTypes, Model } = require("sequelize");

class Files extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        filename: {
          type: DataTypes.STRING,
        },
        mimetype: {
          type: DataTypes.STRING,
        },
        extension: {
          type: DataTypes.STRING,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        url: {
          type: DataTypes.VIRTUAL,
          get() {
            return `${process.env.PUBLIC_URL}/files/${this.get('filename')}`;
          },
        },
      },
      {
        sequelize,
        tableName: "files",
        modelName: "files",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.awards, { foreignKey: "fileId", as: "file" });
  }
}


module.exports = Files;
