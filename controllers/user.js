import { UserModel } from "../models/user";




export const register = async (req, res, next) => {
   try {
     // Hash user password
     const hashedPassword = bycrypt.hashSync(req.body.password, 10);
 
     // create a new user
     await UserModel.create({
         ...register.body,
         password:hashedPassword
     });
    //  return response
    res.status(201).json('User registered successfully')
   } catch (error) {
    next(error)
   }

    // create new user





}

const login = async ()   => {}

const logout = async ()  => {}

const profile = async () => {}