const { Trip } = require("../models");

const tripData = [
  {
    trip_name: "Kardasians Trip",
    location: "New York City",
    description: "Trip with friends to see a braodway show",
    companions: true,
    budget: 800,
  },
  {
    trip_name: "Japan Solo Trip",
    location: "Japan",
    description: "Solo trip to see the cherry blossoms",
    companions: false,
    budget: 2000,
  },
  {
    trip_name: "Taiwan Trip",
    location: "Taiwan",
    description: "A trip to see family.",
    companions: true,
    budget: 2500,
  },
];

const seedTrip = () => Trip.bulkCreate(tripData);

module.exports = seedTrip;
