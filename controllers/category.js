import {categoryModel} from "../models/category.js";
 

export const getCategories = async (req, res, next) => {
    try {
        // get all categories from database
        const allCategories = await categoryModel.find();
        
        // return response
        res.status(200).json(allCategories)

    } catch (error) {
        next(error);
    }
}



export const postCategory = async (req, res, next) => { 
    try {
        // add category to database
        const newCategory = await categoryModel.create(req.body);

        // return response
        res.status(201).json(newCategory)
        
    } catch (error) {
        next(error)
        
    }
}