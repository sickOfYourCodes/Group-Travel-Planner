const router = require("express").Router();
const withAuth = require("../utils/auth.js");
const { User, Trip, Vacations } = require("../models");

router.get("/", withAuth, async (req, res) => {
  res.status(200).render("dashboard", {
    layout: "user",
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
      where: { user_name: req.session.user },
      include: [{ model: Trip, through: Vacations }],
    });
    if (!userData) {
      res.status(404).json({ message: "Unable to find this user." });
      return;
    }
    const tripIds = [];
    for (const i = 0; i < userData.trips; i++) {
      tripIds.push(userData.trips[i].id);
    }
    const tripData = [];
    for (const i = 0; i < tripIds; i++) {
      tripData.push(await Trip.findByPk(tripIds[i]));
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
