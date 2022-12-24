const sequelize = require("../config/connection");
const seedUser = require("./userData.js");
const seedTrip = require("./tripData.js");
const seedVacation = require("./vacationData.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedTrip();

  await seedVacation();

  process.exit(0);
};

seedAll();
