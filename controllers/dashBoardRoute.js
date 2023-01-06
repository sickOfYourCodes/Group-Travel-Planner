const router = require("express").Router();
const withAuth = require("../utils/auth.js");
const { User, Trip, Vacations } = require("../models");
const Calendar = require("calendar-dates");
const calendar = new Calendar();
const tripsRoute = require("./userDashboard/trips.js");
const budgetRoute = require("./userDashboard/budget.js");
const weatherRoute = require("./userDashboard/weather.js");

router.use("/weather", weatherRoute)
router.use("/trips", tripsRoute)
router.use("/budget", budgetRoute)

router.get("/", withAuth, async (req, res) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const curMonth = new Date(`${year}, ${month}`);
  const monthDates = [];
  const monthDisplay = async () => {
    const monthData = await calendar.getMatrix(curMonth);
    monthDates.push(monthData);
    console.log(monthData);
    // console.log(curMonthDates);
    // for (const i = 0; i < monthDates.length; i++) {
    //   if (monthDates[i].[0].type.includes("current")) {
    //     curMonthDates.push(monthDates[i]);
    //   }
    // }
    // console.log(curMonthDates);
  };
  monthDisplay();
  const curMonthDates = monthDates.map((week) => week.get({ plain: true }));
  res.status(200).render("dashboard", {
    layout: "user",
    curMonthDates,
    user: req.session.user,
    loggedIn: req.session.loggedIn,
  });
});


module.exports = router;
