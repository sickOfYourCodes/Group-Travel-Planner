const User = require("./User.js");
const Trip = require("./Trip.js");
const Vacations = require("./Vacations.js");

User.belongsToMany(Trip, {
  foreignKey: "user_id",
  through: Vacations,
});

Trip.belongsToMany(User, {
  foreignKey: "trip_id",
  through: Vacations,
});

module.exports = { User, Trip, Vacations };
