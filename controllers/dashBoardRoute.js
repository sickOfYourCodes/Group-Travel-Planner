const router = require("express").Router();
const withAuth = require("../utils/auth.js");
const { User, Trip, Vacations } = require("../models");
const Calendar = require("calendar-dates");
const calendar = new Calendar();

router.get("/", withAuth, async (req, res) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const curMonth = `(${year}, ${month})`;
  console.log(curMonth);
  const curMonthDates = [];
  const monthDisplay = async () => {
    try {
      const monthData = await calendar.getMatrix(curMonth);
      console.log(monthData);
      const monthDates = monthData.map((week) => week.get({ plain: true }));
      console.log(monthDates);
      for (const i = 0; i < monthDates.length; i++) {
        if (monthDates[i].type.includes("current")) {
          curMonthDates.push(monthDates[i]);
        }
      }
      console.log(curMonthDates);
    } catch (err) {
      console.log(err);
    }
  };
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
