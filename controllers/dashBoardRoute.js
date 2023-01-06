const router = require("express").Router();
const withAuth = require("../utils/auth.js");
const { User, Trip, Vacations } = require("../models");
const Calendar = require("calendar-dates");
const calendar = new Calendar();

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

router.get("/weather", async (req, res) => {
  res.status(200).render("sampleWeather", {
    layout: "user",
  });
});

router.get("/trips", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { user_name: req.session.user.user_name },
      include: [{ model: Trip, through: Vacations }],
    });
    if (!userData) {
      res.status(404).json({ message: "Unable to find this user." });
      return;
    }
    const trips = userData.trips.map((trip) => trip.get({ plain: true }));
    res.status(200).render("trips", {
      layout: "user",
      trips,
      loggedIn: req.session.loggedIn,
      user: req.session.user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
