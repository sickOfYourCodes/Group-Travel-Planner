const router = require("express").Router();
const { Trip, User, Vacations } = require("../../models");

router.get("/:id", async (req, res) => {
  try {
    const tripData = await Trip.findByPk(
      req.params.id
      // { include: [{ model: User, through: Vacations, as: "travelers" }]}
    );
    if (!tripData) {
      res.status(404).json({ message: "This trip does not exist." });
      return;
    }
    res.status(200).json(tripData);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const tripData = await Trip.create(req.body, { individualHooks: true });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
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

router.delete("/:id", async (req, res) => {
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
