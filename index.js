import express, { Router } from "express";
import mongoose, { mongo } from "mongoose";
import recipeRouter from "./routes/recipes.js";
import categoryRouter from "./routes/category.js";

// connect to database
await mongoose.connect(process.env.MONGO_URL);

//  create express app 
const app = express();

// create middlewares
app.use(express.json());
app.use(recipeRouter)


// use routes
app.use(recipeRouter);
app.use(categoryRouter);


// Listen for incoming requests
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log('App is listening to port 3000')
});








// // create router
// const recipeRouter = Router();

// // Define routes
// recipeRouter.get('/recipes', async (req, res) => {

//     // Add all recipe from the database
//     await RecipeModel1.create(req, res)
// })


// recipeRouter.post('/recipes', async (req, res) => {
//     // Add recipe to the database
//     const newRecipe = await RecipeModel.create(req.body) => {
//         res.json('')
//     }
// })


// app.get('/', (req, res) => {
//     res.json('Welcome home');
// });


// app.post('/login', (req, res) => {
//     res.json('Login successful')
// });


// app.patch('/patch', (req, res) => {
//     res.json('Changes Successful')
// });


// // use routes
// app.use(recipeRouter);


// // Listen for incoming requests 
// app.listen(3000, () => {
//     console.log('App listening on port 3000');
// });




