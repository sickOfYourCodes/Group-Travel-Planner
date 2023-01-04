// Requires our various routes

const router = require("express").Router();
const vacationRoute = require("./vacationRoute.js");
const userRoute = require("./userRoute.js");
const tripRoute = require("./tripRoute.js");

// Allows the server to know where to send various routes

router.use("/vacation", vacationRoute);
router.use("/user", userRoute);
router.use("/trip", tripRoute);

module.exports = router;
