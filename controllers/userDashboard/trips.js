const router = require("express").Router();
const withAuth = require("../../utils/auth.js");
const { User, Trip, Vacations, dailyBudget } = require("../../models");

router.get("/", withAuth, async (req, res) => {
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

router.get("/create-trip", withAuth, (req, res) => {
  res.status(200).render("createTrip", {
    layout: "user",
    loggedIn: req.session.loggedIn,
    user: req.session.user,
  });
});

router.get("/trip/:id", withAuth, async (req, res) => {
  try {
    const tripData = await Trip.findOne({
      where: { id: req.params.id },
      include: [{ model: User, through: Vacations }],
    });
    if (!tripData) {
      res.status(404).json({ message: "Unable to find this trip." });
      return;
    }
    const trip = tripData.get({ plain: true });
    const users = tripData.users.map((user) => user.get({ plain: true }));
    res.status(200).render("trip", {
      layout: "user",
      trip,
      users,
      loggedIn: req.session.loggedIn,
      user: req.session.user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/trip/:id/daily-budget", withAuth, async (req, res) => {
  try {
    const tripData = await Trip.findOne({
      where: { id: req.params.id },
      include: [{ model: User, through: Vacations }],
    });
    if (!tripData) {
      res.status(404).json({ message: "Unable to find this trip." });
      return;
    }
    const trip = tripData.get({ plain: true });
    const users = tripData.users.map((user) => user.get({ plain: true }));
    res.status(200).render("dailyBudget", {
      layout: "user",
      trip,
      users,
      loggedIn: req.session.loggedIn,
      user: req.session.user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get(
  "/trip/:id/daily-budget/total-budget",
  withAuth,
  async (req, res) => {
    try {
      const tripData = await Trip.findOne({
        where: { id: req.params.id },
        include: [{ model: User, through: Vacations }],
      });
      if (!tripData) {
        res.status(404).json({ message: "Unable to find this trip." });
        return;
      }
      const trip = tripData.get({ plain: true });
      console.log(tripData);
      const users = tripData.users.map((user) => user.get({ plain: true }));
      const budgetsData = await dailyBudget.findAll({
        where: {
          user_id: req.session.user.id,
          trip_id: tripData.id,
        },
      });
      console.log(budgetsData);
      if (!budgetsData) {
        res.status(404).json({ message: "Unable to find this budget." });
        return;
      }
      console.log(budgetsData[0].dataValues);
      const budgets = budgetsData.map((dailyBudget) =>
        dailyBudget.get({ plain: true })
      );
      console.log(budgets);
      res.status(200).render("totalBudget", {
        layout: "user",
        trip,
        users,
        budgets,
        loggedIn: req.session.loggedIn,
        user: req.session.user,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

module.exports = router;
