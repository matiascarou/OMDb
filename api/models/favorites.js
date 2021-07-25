"use strict";

const db = require("../models/database");
const { Model, DataTypes } = require("sequelize");
const User = require('./user')

class Favorite extends Model {}

Favorite.init(
  {
    movieId: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorite", timestamps: false }
);

module.exports = Favorite;
