const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Activity extends Model {}

Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    seven_am: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eight_am: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nine_am: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ten_am: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eleven_am: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twelve_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    one_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    two_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    three_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    four_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    five_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    six_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    seven_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eight_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nine_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ten_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eleven_pm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twelve_am: {
      type: DataTypes.STRING,
      allowNull: true,
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
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "activity",
  }
);

module.exports = Activity;
