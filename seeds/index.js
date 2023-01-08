require("dotenv").config();

const sequelize = require("../config/connection");
const { User, Trip, Vacations, Budget, dailyBudget } = require("../models");
const userSeedData = require("./userData.json");
const tripSeedData = require("./tripData.json");
const vacationSeedData = require("./vacationData.json");
// const budgetSeedData = require("./budgetData.json");
// const dailyBudgetSeedData = require("./dailyBudgetData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData, { individualHooks: true });

  await Trip.bulkCreate(tripSeedData, { individualHooks: true });

  await Vacations.bulkCreate(vacationSeedData, { individualHooks: true });

  // await Budget.bulkCreate(budgetSeedData, { individualHooks: true });

  // await dailyBudget.bulkCreate(dailyBudgetSeedData, { individualHooks: true });

  process.exit();
};

seedAll();
