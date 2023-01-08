// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection.js");

// class Budget extends Model {}

// Budget.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     category_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     amount: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     tripId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "trip",
//         key: "id",
//         unique: false,
//       },
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "user",
//         key: "id",
//         unique: false,
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: true,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "budget",
//   }
// );

// module.exports = Budget;
