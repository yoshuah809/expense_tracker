const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ExpenseType",
      required: true,
    },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema);
