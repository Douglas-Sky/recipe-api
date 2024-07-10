import { Router } from "express";
import { register } from "../controllers/user";


// create router
const userRouter = Router()


// Define routes
userRouter.post('/register', register)


// Export router
export default userRouter; 