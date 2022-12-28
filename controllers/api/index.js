const router = require("express").Router();
const vacationRoute = require("./vacationRoute.js");
const userRoute = require("./userRoute.js");
const tripRoute = require("./tripRoute.js");

router.use("/vacation", vacationRoute);
router.use("/user", userRoute);
router.use("/trip", tripRoute);

module.exports = router;
