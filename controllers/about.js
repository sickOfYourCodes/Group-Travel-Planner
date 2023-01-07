const router = require("express").Router();

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.status(200).render("about", { layout: "user" });
  }
  res.status(200).render("about");
});

module.exports = router;
