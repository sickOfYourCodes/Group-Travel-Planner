const router = require("express").Router();

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.status(200).render("homepage", { layout: "user" });
  }
  res.status(200).render("homepage");
});

module.exports = router;
