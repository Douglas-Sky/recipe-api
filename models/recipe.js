import { model, Schema, Types } from "mongoose";
import normalise from "normalize-mongoose";

const recipeSchema = new Schema({
    name: {
        type: String, unique: true, required: true
    },
    categoty: { type: Types.ObjectId, ref: 'Category', required:true },
    description: { type: String, required: true },
    ingredients: [{ type: String }],
    image: {type:String, required:true},
    favourite: {type:Boolean, default:false}

}, {
    timestamps: true
});


recipeSchema.plugin(normalise);
export const RecipeModel = model('Recipe', recipeSchema);