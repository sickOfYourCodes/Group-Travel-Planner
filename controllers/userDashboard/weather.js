const router = require("express").Router();

router.get("/", async (req, res) => {
  res.status(200).render("sampleWeather", {
    layout: "user",
  });
});

module.exports = router;
