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
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "trip",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "vacation",
  }
);

module.exports = Vacations;

// var vacation = {
//   {
//     trip_id:1,
//     user_id:2
//   },
//   {
//     trip_id:1,
//     user_id:1
//   }
// }
