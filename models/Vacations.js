const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Vacations extends Model {}

Vacations.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "trip",
        key: "id",
        unique: false,
      },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "user",
        key: "user_name",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "vacation",
  }
);

module.exports = Vacations;
