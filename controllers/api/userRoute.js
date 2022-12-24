const router = require("express").Router();
const { User, Trip, Vacations } = require("../../models");

router.get("/:user_name", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { user_name: req.params.user_name },
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:user_name", async (req, res) => {
  try {
    const userData = await User.destroy({
      where: { user_name: req.params.user_name },
    });
    if (!userData) {
      res
        .status(404)
        .json({ message: "No user with this username was found." });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
