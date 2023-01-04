// Requires our various routes

const router = require("express").Router();
const apiRoute = require("./api");
const homeRoute = require("./homeRoute.js");
const dashBoardRoute = require("./dashBoardRoute.js");
const loginRoute = require("./loginRoute.js");
const signupRoute = require("./signupRoute.js");

// Allows the server to know where to send the routes

router.use("/api", apiRoute);
router.use("/", homeRoute);
router.use("/dashboard", dashBoardRoute);
router.use("/login", loginRoute);
router.use("/signup", signupRoute);

router.get("*", (req, res) => {
  window.location.href = "/";
});

module.exports = router;
