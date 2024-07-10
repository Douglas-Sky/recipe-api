import { Router } from "express";
import { addRecipes, deleteRecipe, getRecipes, updatedRecipe, getRecipeByID } from "../controllers/recipe.js";
import { checkUserSession } from "../midddlewares/auth.js";

// create a rounter
const recipeRouter = Router();

// apply middlewares
recipeRouter.use(checkUserSession);

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', checkUserSession, postRecipe);

recipeRouter.patch('/recipes/:id', checkUserSession, patchRecipe)

recipeRouter.get('/recipes/:id', checkUserSession, deleteRecipe);

recipeRouter.delete('/recipes/:id', checkUserSession, getRecipe);


// Export router 
export default recipeRouter; 