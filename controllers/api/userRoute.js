const router = require("express").Router();
const { User, Trip, Vacations } = require("../../models");

router.get("/:user_name", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { user_name: req.params.user_name },
      // include: [{ model: Trip, through: Vacations, as: "destinations" }],
    });
    if (!userData) {
      res.status(404).json({ message: "Unable to find this user." });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body, { individualHooks: true });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userLogin = await User.findOne({
      where: { user_name: req.body.user_name },
    });
    if (!userLogin) {
      res
        .status(404)
        .json({ message: "No user with that username was found." });
      return;
    }
    const validPassword = await userLogin.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Password was incorrect. Not authorized." });
      return;
    }
    res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:user_name", async (req, res) => {
  try {
    const updatedUserData = await User.update(req.body, {
      where: { user_name: req.params.user_name },
      individualHooks: true,
    });
    if (!updatedUserData) {
      res.status(404).json({ message: "No user found with this username." });
      return;
    }
    res.status(200).json(updatedUserData);
  } catch (err) {
    res.status(500).json(err);
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
