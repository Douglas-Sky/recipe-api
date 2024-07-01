import { Router } from "express";
import { addRecipes, deleteRecipe, getRecipes, updatedRecipe, getRecipeByID } from "../controllers/recipe.js";

// create a rounter
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', postRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe)

recipeRouter.get('/recipes/:id', deleteRecipe);

recipeRouter.delete('/recipes/:id', getRecipe);


// Export router 
export default recipeRouter; 