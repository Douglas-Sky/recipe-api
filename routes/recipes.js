import { Router } from "express";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe.js";

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