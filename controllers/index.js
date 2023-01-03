const router = require("express").Router();
const apiRoute = require("./api");
const homeRoute = require("./homeRoute.js");
const dashBoardRoute = require("./dashBoardRoute.js");

router.use("/api", apiRoute);
router.use("/home", homeRoute);
router.use("/dashboard", dashBoardRoute);

module.exports = router;
