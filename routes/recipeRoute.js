const express = require("express");
const router = express.Router();
const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

// createRecipe: Create a new recipe.
router.post("/", createRecipe);

// getAllRecipes: Retrieve all recipes.
router.get("/", getAllRecipes);

// getRecipeById: Retrieve a single recipe by ID.
router.get("/:id", getRecipeById);

// updateRecipe: Update a recipe by ID.
router.put("/:id", updateRecipe);

// deleteRecipe: Delete a recipe by ID.
router.delete("/:id", deleteRecipe);

module.exports = router;
