const router = require("express").Router();

router.get("/weather", async (req, res) => {
  res.status(200).render("sampleWeather", {
    layout: "user",
  });
});

module.exports = router;
