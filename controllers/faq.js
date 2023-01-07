const router = require("express").Router();

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.status(200).render("faqs", { layout: "user" });
  }
  res.status(200).render("faqs");
});

module.exports = router;
