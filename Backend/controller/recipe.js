// const Recipes = require("../models/recipe");

// // GET all recipes
// const getRecipes = async (req, res) => {
//   const recipes = await Recipes.find();
//   res.json(recipes);
// };

// // GET single recipe by id
// const getRecipe = async (req, res) => {
//   const recipe = await Recipes.findById(req.params.id);
//   res.json(recipe);
// };

// // ADD recipe
// const addRecipe = async (req, res) => {
//   const { title, ingredients, instructions, time, coverImage } = req.body;

//   if (!title || !ingredients || !instructions) {
//     return res.json({ message: "Required fields cant be empty" });
//   }

//   const newRecipe = await Recipes.create({
//     title,
//     ingredients,
//     instructions,
//     time,
//     coverImage,
//   });

//   res.json(newRecipe);
// };

// // EDIT recipe
// const editRecipe = async (req, res) => {
//   try {
//     const recipe = await Recipes.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );

//     if (!recipe) {
//       return res.status(404).json({ message: "Recipe not found" });
//     }

//     res.json(recipe);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating recipe" });
//   }
// };

// // DELETE recipe
// const deleteRecipe = async (req, res) => {
//   await Recipes.findByIdAndDelete(req.params.id);
//   res.json({ message: "Recipe deleted" });
// };

// module.exports = {
//   getRecipes,
//   getRecipe,
//   addRecipe,
//   editRecipe,
//   deleteRecipe,
// };
const Recipes = require("../models/recipe");

// GET all recipes
const getRecipes = async (req, res) => {
  const recipes = await Recipes.find();
  res.json(recipes);
};

// GET single recipe by id
const getRecipe = async (req, res) => {
  const recipe = await Recipes.findById(req.params.id);
  res.json(recipe);
};

// ADD recipe
const addRecipe = async (req, res) => {
  const { title, ingredients, instructions, time, coverImage } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.json({ message: "Required fields cant be empty" });
  }

  const newRecipe = await Recipes.create({
    title,
    ingredients,
    instructions,
    time,
    coverImage,
  });

  res.json(newRecipe);
};

// EDIT recipe
const editRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Error updating recipe" });
  }
};

// DELETE recipe
const deleteRecipe = async (req, res) => {
  await Recipes.findByIdAndDelete(req.params.id);
  res.json({ message: "Recipe deleted" });
};

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
};
