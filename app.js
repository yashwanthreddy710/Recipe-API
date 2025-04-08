const express = require("express");
const recipeRoute = require("./routes/recipeRoute");
const connectDb = require("./config/connectDb");
require("dotenv").config(); 

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDb();

// Routes
app.use("/api/recipes", recipeRoute);

// Error handling middleware
app.use((req, res) => {
  res.status(400).json({
    message: "Server Error",
  });
});

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

