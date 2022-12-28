const router = require("express").Router();
const { Trip, User, Vacations } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const tripData = await Trip.findByPk(req.params.id, {
      include: [{ model: User, through: Vacations, as: "destinations" }],
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const tripData = await Trip.create(req.body);
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tripData = await Trip.destroy(req.params.id);
    if (!tripData) {
      res.status(404).json({ message: "Trip not found." });
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
