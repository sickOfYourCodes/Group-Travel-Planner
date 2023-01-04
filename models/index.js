const User = require("./User.js");
const Trip = require("./Trip.js");
const Vacations = require("./Vacations.js");

User.belongsToMany(Trip, {
  foreignKey: "userId",
  through: Vacations,
});

Trip.belongsToMany(User, {
  foreignKey: "tripId",
  through: Vacations,
});

module.exports = { User, Trip, Vacations };
