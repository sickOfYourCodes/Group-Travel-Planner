const router = require("express").Router();
const { Trip, User, Vacations, Budget, dailyBudget } = require("../../models");
const withAuth = require("../../utils/auth.js");

// When logged in, users will be able to see a specific budget's information and should include which users are tied to this budget

router.get("/", withAuth, async (req, res) => {
  try {
    const budgetData = await Budget.findAll({where: {}});
    if (!budgetData) {
      res.status(404).json({ message: "This budget does not exist." });
      return;
    }
    res.status(200).json(budgetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// When logged in, users will be able to create a new budget

router.post("/", withAuth, async (req, res) => {
  try {
    const budgetData = await budget.create(req.body, { individualHooks: true });
    res.status(200).json(budgetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// When logged in, users will be able to edit their budget

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedbudgetData = await budget.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updatedbudgetData) {
      res.status(404).json({ message: "No budget found." });
      return;
    }
    res.status(200).json(updatedbudgetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// When logged in, users will be able to delete a budget

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const budgetData = await budget.destroy({ where: { id: req.params.id } });
    if (!budgetData) {
      res.status(404).json({ message: "budget not found." });
    }
    res.status(200).json(budgetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
