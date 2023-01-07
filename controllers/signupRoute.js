const router = require("express").Router();

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.status(200).render("dashboard", { layout: "user" });
  }
  res.status(200).render("signup");
});

module.exports = router;
