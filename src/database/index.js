const Sequelize = require("sequelize");

const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig);

const { filesModel, leadsModel, sweepstakesModel, awardsModel } = require("../models");

filesModel.init(connection);
leadsModel.init(connection);
sweepstakesModel.init(connection);
awardsModel.init(connection);

filesModel.associate(connection.models);
leadsModel.associate(connection.models);
sweepstakesModel.associate(connection.models);
awardsModel.associate(connection.models);

module.exports = connection;
