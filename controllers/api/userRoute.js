const router = require("express").Router();
const { User, Trip, Vacations } = require("../../models");
const withAuth = require("../../utils/auth.js");
const sessionStorage = require("express-session")

// When logged in, users will be able to get their information as well as the trips they are going on

router.get("/:user_name", withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { user_name: req.params.user_name },
      include: [{ model: Trip, through: Vacations }],
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

// Users will be able to create an account

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body, { individualHooks: true });
    req.session.user = userData;
    req.session.loggedIn = true;
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// This is the login route that checks to see if the username exists and if the password is correct

router.post("/login", async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.status(200);
    } else {
      const userLogin = await User.findOne({
        where: { user_name: req.body.user_name },
      });
      if (!userLogin) {
        res
          .status(404)
          .json({ message: "No user with that username was found." });
        return;
      }
      const validPassword = await userLogin.checkPassword(req.body.password, {
        individualHooks: true,
      });
      if (!validPassword) {
        res
          .status(400)
          .json({ message: "Password was incorrect. Not authorized." });
        return;
      }
      const user = userLogin.get({ plain: true });
      sessionStorage.setItem("user", user);
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user = userLogin;
        res.status(200).json({ message: "You are now logged in." });
        // .render("dashboard", { user: req.session.user });
      })
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Users will be able to make edits to their account

router.put("/:user_name", withAuth, async (req, res) => {
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

// Users will be able to delete their account

router.delete("/:user_name", withAuth, async (req, res) => {
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
