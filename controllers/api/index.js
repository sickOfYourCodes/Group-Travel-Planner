const router = require("express").Router();
const vacationRoute = require("./vacationRoute.js");
const userRoute = require("./userRoute.js");

router.use("/vacation", vacationRoute);
router.use("/user", userRoute);

module.exports = router;
