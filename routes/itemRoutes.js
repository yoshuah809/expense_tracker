const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

// Create item
router.post("/", async (req, res) => {
  try {
    const { name, purchaseDate, purchasePrice, userId } = req.body;
    const item = new Item({ name, purchaseDate, purchasePrice, user: userId });
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
