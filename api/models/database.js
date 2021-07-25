// "use strict";

// const { options, database } = require("../config/config.json");
// const Sequelize = require("sequelize");

// module.exports = new Sequelize(database, null, null, options);

const Sequelize = require("sequelize");

const db = new Sequelize("checkpoint_omdb", "mat", null, {
  logging: false,
  dialect: "postgres",
});

module.exports = db;
