const express = require("express");
const Expense = require("../models/Expense");
const router = express.Router();

// Create expense
router.post("/", async (req, res) => {
  try {
    const { itemId, typeId, amount, date, description } = req.body;
    const expense = new Expense({
      item: itemId,
      type: typeId,
      amount,
      date,
      description,
    });
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
