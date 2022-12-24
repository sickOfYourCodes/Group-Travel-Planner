const router = require("express").Router();
const tripRoute = require("./tripRoute.js");
const userRoute = require("./userRoute.js");

router.use("/trip", tripRoute);
router.use("/user", userRoute);

module.exports = router;
