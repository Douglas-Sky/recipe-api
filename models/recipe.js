import { model, Schema} from "mongoose";

const recipeSchema = new Schema ({
    name: {
        type: String, unique: true, required: true, 
    }
})

export const RecipeModel = model('Recipe', recipeSchema);