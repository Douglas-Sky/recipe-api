import express from "express";
import mongoose from "mongoose";
import OasGenerator from "express-oas-generator";
import session from "express-session";
import MongoStore from "connect-mongo";
import recipeRouter from "./routes/recipes.js";
import categoryRouter from "./routes/category.js";
import userRouter from "./routes/user.js";



// connect to database
await mongoose.connect(process.env.MONGO_URL);


// create session store

//  create express app 
const app = express();
expressOasGenerator.handleResponses(app,  {
    tags: ["categories", "recipes"],
    mongooseModels: mongoose.modelNames()
});

// create middlewares
app.use(express.json());
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave: false,
  saveUninitialized: true,
//   cookie: { secure: true }
store: MongoStore.create({
    mongoUrl:process.env.MONGO_URL
})
}))


// use routes,
app.use(userRouter);
app.use(recipeRouter);
app.use(categoryRouter);
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect("/api-docs/"));


// Listen for incoming requests
const port = process.env.PORT || 3000;
// const port =3000
app.listen(3000, () => {
    console.log('App is listening to port 3000')
});



