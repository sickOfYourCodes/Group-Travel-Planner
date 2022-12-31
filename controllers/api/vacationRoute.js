const router = require("express").Router();
const { Vacations } = require("../../models");

router.get("/:user_name", async (req, res) => {
  try {
    const vacationData = await Vacations.findAll({
      where: { user_name: req.params.user_name },
    });
    if (!vacationData) {
      res.status(404).json({ message: "Unable to find this vacation." });
      return;
    }
    res.status(200).json(vacationData);
  } catch (err) {
    res.status(500).json({ message: "There was an error." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const vacationData = await Vacations.findByPk({
      where: { id: req.params.id },
    });
    if (!vacationData) {
      res.status(404).json({ message: "Unable to find this vacation." });
      return;
    }
    res.status(200).json(vacationData);
  } catch (err) {
    res.status(400).json({ message: "There was an error." });
  }
});

router.post("/", async (req, res) => {
  try {
    const vacationData = await Vacations.create(req.body);
    res.status(200).json(vacationData);
  } catch (err) {
    res.status(500).json({ message: "Unable to create this vacation." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const vacationData = await Vacations.destroy(req.params.id);
    if (!vacationData) {
      res
        .status(404)
        .json({ message: "Unable to find this vacation to delete." });
    }
    res.status(200).json(vacationData);
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
