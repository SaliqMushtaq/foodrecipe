const express = require("express");
const router = express.Router();

// import controllers
const {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe
} = require("../controller/recipe");

// GET all recipes
router.get("/", getRecipes);

// GET recipe by ID
router.get("/:id", getRecipe);

// ADD new recipe
router.post("/", addRecipe);

// UPDATE recipe by ID
router.put("/:id", editRecipe);

// DELETE recipe by ID
router.delete("/:id", deleteRecipe);

module.exports = router;

