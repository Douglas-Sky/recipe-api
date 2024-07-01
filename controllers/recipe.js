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
export const addRecipes = async (req, res, next) => {
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
export const updatedRecipe = async (req, res, next) => {
    try {
        // update recipe by id
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // return response
        res.json(updatedRecipe);
    } catch (error) {
        next(error)
    }
}

// Delete Recipe
export const deleteRecipe = async (req, res, next) => {
    try {
        // Delete recipe by Id
        const deleteRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // return response
        res.json(deleteRecipe)
    } catch (error) {
        next(error);

    }
}

// get another recipies
export const getRecipe = (req, res) => {
    res.json(`recipe with id ${req.params.key} is showing`);
}












