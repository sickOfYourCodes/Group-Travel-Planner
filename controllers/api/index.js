// Requires our various routes

const router = require("express").Router();
const vacationRoute = require("./vacationRoute.js");
const userRoute = require("./userRoute.js");
const tripRoute = require("./tripRoute.js");
const budgetRoute = require("./budget.js")

// Allows the server to know where to send various routes

router.use("/vacation", vacationRoute);
router.use("/user", userRoute);
router.use("/trip", tripRoute);
router.use("/budget", budgetRoute)

module.exports = router;
