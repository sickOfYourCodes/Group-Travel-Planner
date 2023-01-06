const User = require("./User.js");
const Trip = require("./Trip.js");
const Vacations = require("./Vacations.js");
const Budget = require("./Budget.js");
const dailyBudget = require("./dailyBudget.js");
const Activity = require("./Activity.js");

User.belongsToMany(Trip, {
  foreignKey: "userName",
  through: Vacations,
});

Trip.belongsToMany(User, {
  foreignKey: "tripId",
  through: Vacations,
});

Budget.belongsTo(Trip, {
  foreignKey: "tripId",
});

Budget.belongsTo(User, {
  foreignKey: "userId",
});

dailyBudget.belongsTo(Trip, {
  foreignKey: "tripId",
});

dailyBudget.belongsTo(User, {
  foreignKey: "userId",
});

Activity.belongsTo(Trip, {
  foreignKey: "tripId",
});

Activity.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { User, Trip, Vacations, Budget, dailyBudget, Activity };
