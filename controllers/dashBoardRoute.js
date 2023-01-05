const router = require("express").Router();
const withAuth = require("../utils/auth.js");

router.get("/", withAuth, async (req, res) => {
  res.status(200).render("dashboard");
});

router.get("/weather", async (req, res) => {
  res.status(200).render("sampleWeather");
});

router.get("/trips", async (req, res) => {
  res.status(200).render("trips");
});

module.exports = router;
