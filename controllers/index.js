// Requires our various routes

const router = require("express").Router();
const apiRoute = require("./api");
const homeRoute = require("./homeRoute.js");
const dashBoardRoute = require("./dashBoardRoute.js");
const loginRoute = require("./loginRoute.js");
const signupRoute = require("./signupRoute.js");
const faqRoute = require("./faq.js");
const aboutRoute = require("./about.js");
const userHomeRoute = require("./userHomeRoute.js");

// Allows the server to know where to send the routes

router.use("/api", apiRoute);
router.use("/", homeRoute);
router.use("/dashboard", dashBoardRoute);
router.use("/login", loginRoute);
router.use("/signup", signupRoute);
router.use("/faq", faqRoute);
router.use("/about", aboutRoute);
router.use("/user-home", userHomeRoute);

// create route for budget. " Dashboard/budget "
//create route for individual trip "dashboard/trips/trip "
// create route for weather "/dashboard/weather"
// create route for "dashboard/trips/trip/edit-trip"


// router.get("*", (req, res) => {
//   window.location.href = "/";
// });

module.exports = router;
