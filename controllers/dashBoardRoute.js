const router = require("express").Router();
const withAuth = require("../utils/auth.js");

router.get("/", withAuth, async (req, res) => {
  res.status(200).render("dashboard");
});

module.exports = router;
