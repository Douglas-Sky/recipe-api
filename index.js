import express from "express";
import recipeRouter from "./routes/recipes.js"; 

//  create express app 
const app = express();


// Define routes

app.get('/', (req, res) => {
    res.json('Welcome home');
});


app.post('/login', (req, res) => {
    res.json('Login successful')
});


app.patch('/patch', (req, res) => {
    res.json('Changes Successful')
} );


// use routes
app.use(recipeRouter);


// Listen for incoming requests 
app.listen(3000, ()=> {
    console.log ('App listening on port 3000');
});




