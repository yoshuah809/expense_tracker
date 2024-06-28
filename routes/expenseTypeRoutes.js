const express = require("express");
const ExpenseType = require("../models/ExpenseType");
const router = express.Router();

// Create expense type
router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const expenseType = new ExpenseType({ name });
    await expenseType.save();
    res.status(201).json(expenseType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
