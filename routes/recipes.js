import { Router } from "express";

// create a rounter
const recipeRouter = Router();


// Define router
recipeRouter.get ('/recipes', (req, res) => {
    res.json('All recipes');
} )

recipeRouter.post ('/add recipes', (req, res) => {
    res.json('Recipes added');
});

recipeRouter.patch ('/recipes/:id', (req, res) => {
    res.json (`Recipe with id ${req.params.id} Updated`);
});


recipeRouter.delete ('/recipes/:id', (req, res) => {
    res.json (`Recipe with id ${req.params.id} Deleted`)
}  );


// Export router 
export default recipeRouter; 