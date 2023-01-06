const router = require("express").Router();
const withAuth = require("../utils/auth.js");
const { User, Trip, Vacations } = require("../models");
const Calendar = require("calendar-dates");
const calendar = new Calendar();

router.get("/", withAuth, async (req, res) => {
  let curMonth = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  curMonth = `(${year}, ${month})`;
  const monthDisplay = async () => {
    const monthDates = await calendar.getMatrix(curMonth);
  };
  res.status(200).render("dashboard", {
    layout: "user",
    user: req.session.user,
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
