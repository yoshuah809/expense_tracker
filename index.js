const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("../backend/config/db.js");
const app = express();

const userRoutes = require("./routes/userRoutes");
const itemRoutes = require("./routes/itemRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const expenseTypeRoutes = require("./routes/expenseTypeRoutes");

app.use(express.json());

dotenv.config();
// Accesing to connect to the Database

connectDB();

const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
