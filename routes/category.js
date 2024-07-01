import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";


// create router
const categoryRouter = Router();


// Define routes
categoryRouter.get('/categories',getCategories);

categoryRouter.post('/categories', postCategory);

categoryRouter.patch('/')

// Export router 
export default categoryRouter;