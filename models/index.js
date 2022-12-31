const User = require("./User.js");
const Trip = require("./Trip.js");
const Vacations = require("./Vacations.js");

User.belongsToMany(Trip, {
  through: { model: Vacations, unique: false },
  as: "planned_trips",
});

Trip.belongsToMany(User, {
  through: { model: Vacations, unique: false },
  as: "travelers",
});

module.exports = { User, Trip, Vacations };
