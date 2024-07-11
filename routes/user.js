import { Router } from "express";
import { register } from "../controllers/user";
import { checkUserSession } from "../midddlewares/auth";


// create router
const userRouter = Router()


// Define routes
userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/profile', checkUserSession, profile);
userRouter.post('/logout', checkUserSession, logout)

// Export router
export default userRouter; 