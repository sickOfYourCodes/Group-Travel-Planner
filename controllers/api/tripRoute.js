const router = require("express").Router();
const { Trip, User, Vacations } = require("../../models");
const withAuth = require("../../utils/auth.js");

// When logged in, users will be able to see a specific trip's information and should include which users are tied to this trip

router.get("/:id", withAuth, async (req, res) => {
  try {
    const tripData = await Trip.findByPk(req.params.id, {
      include: [{ model: User, through: Vacations }],
    });
    if (!tripData) {
      res.status(404).json({ message: "This trip does not exist." });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// When logged in, users will be able to create a new trip

router.post("/", withAuth, async (req, res) => {
  try {
    console.log("trying")
    const tripData = await Trip.create(req.body, { individualHooks: true });
    console.log("created")
    res.status(200).json(tripData);
  } catch (err) {
    console.log("error")
    res.status(500).json(err);
  }
});

// When logged in, users will be able to edit their trip

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedTripData = await Trip.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updatedTripData) {
      res.status(404).json({ message: "No trip found." });
      return;
    }
    res.status(200).json(updatedTripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// When logged in, users will be able to delete a trip

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const tripData = await Trip.destroy({ where: { id: req.params.id } });
    if (!tripData) {
      res.status(404).json({ message: "Trip not found." });
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
