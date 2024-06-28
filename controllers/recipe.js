import { RecipeModel } from "../models/recipe.js";


// Get All recipes
export const getRecipes = async (req, res, next) => {
    try {
        // Get all recipes from database
        const allRecipes = await RecipeModel.find();
        // Return all recipes from database
        res.json(allRecipes);
    }
    catch (error) {
        next(error)

    }
};

// Post all recipes
export const postRecipe = async (req, res, next) => {
    try {
        // add to database
        const newRecipe = await RecipeModel.create(req.body);
        // Return response
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
};

// patch recipies 
export const patchRecipe = (req, res) => {
    res.json(`Recipe with id ${req.params.id} Updated`);
};


// Delete Recipe
export const deleteRecipe = async (req, res, next) => {
    try {
        // Delete recipe by Id
        const deleteRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // 
        res.json(`Recipe with id ${req.params.id} Deleted`)
    } catch (error) {
        next(error);

    }
}

// get another recipies
export const getRecipe = (req, res) => {
    res.json(`Only recipe ending with ID of ${req.params.key} is showing`);
}












