require("dotenv").config();

const sequelize = require("../config/connection");
const { User, Trip, Vacations } = require("../models");
const userSeedData = require("./userData.json");
const tripSeedData = require("./tripData.json");
const vacationSeedData = require("./vacationData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData, { individualHooks: true });

  await Trip.bulkCreate(tripSeedData, { individualHooks: true });

  await Vacations.bulkCreate(vacationSeedData, { individualHooks: true });

  process.exit();
};

seedAll();

// const users = [
//   {
//     first_name: "Henry",
//     last_name: "Liang",
//     user_name: "mxr",
//     email: "mxr@gamil.com",
//     password: "password12345",
//   },
//   {
//     first_name: "Jeannie",
//     last_name: "Lee",
//     user_name: "potastic",
//     email: "potastic@gmail.com",
//     password: "password12345",
//   },
//   {
//     first_name: "Panda",
//     last_name: "Po",
//     user_name: "panda",
//     email: "panda@gmail.com",
//     password: "password12345",
//   },
// ];

// function seedUsers() {
//   users.forEach((user) => {
//     db.query("INSERT INTO users SET ?", user, (err) => {
//       if (err) throw err;
//       console.log("User added");
//     });
//   });
// }

// seedUsers();

// const trips = [
//   {
//     trip_name: "Kardasians Trip",
//     location: "New York City",
//     description: "Trip with friends to see a braodway show",
//     companions: true,
//     budget: 800,
//   },
//   {
//     trip_name: "Japan Solo Trip",
//     location: "Japan",
//     description: "Solo trip to see the cherry blossoms",
//     companions: false,
//     budget: 2000,
//   },
//   {
//     trip_name: "Taiwan Trip",
//     location: "Taiwan",
//     description: "A trip to see family.",
//     companions: true,
//     budget: 2500,
//   },
// ];

// function seedTrips() {
//   trips.forEach((trip) => {
//     db.query("INSERT INTO trips SET ?", trip, (err) => {
//       if (err) throw err;
//       console.log("Trip added");
//     });
//   });
// }

// seedTrips();
