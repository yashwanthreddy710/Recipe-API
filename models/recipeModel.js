const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "required"],
      trim: true
    },
    ingredients: {
      type: [String],
      required: [true, "required"]
    },
    instructions: {
      type: String,
      required: [true, "required"]
    },
    category: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

const recipe = mongoose.model("recipe", recipeSchema);
module.exports = recipe;
