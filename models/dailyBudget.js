// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection.js");

// class dailyBudget extends Model {}

// dailyBudget.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     activity_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     amount: {
//       type: DataTypes.DECIMAL,
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
//     budgetCategory_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       references: {
//         model: "budget",
//         key: "category_name",
//         unique: false,
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: true,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "dailyBudget",
//   }
// );

// module.exports = dailyBudget;
