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
    tripId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "trip",
        key: "id",
        unique: false,
      },
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
        unique: false,
      },
    },
    budget: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "vacation",
  }
);

module.exports = Vacations;
