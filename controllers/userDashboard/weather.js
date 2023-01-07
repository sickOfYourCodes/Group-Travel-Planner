const router = require("express").Router();

router.get("/", async (req, res) => {
  res.status(200).render("weather", {
    layout: "user",
  });
});

module.exports = router;
