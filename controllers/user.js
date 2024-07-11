import { UserModel } from "../models/user";
import bcrypt from "bcryptjs";


export const register = async (req, res, next) => {
   try {
     // Hash user password
     const hashedPassword = bcrypt.hashSync(req.body.password, 10);
 
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

try {
    const login = async (req, res, next)   => {
        const {email, password} =req.body;
    // find a user using their unique identifier 
    const user = await UserModel.findOne({
    $or: [ 
    {email:email},
    {usename: username },
    {phone: phone}
    ]
});
    if (!user)
        return res.status(401).json('No user found');
    else {
        // Verify the password
        const correctPassword =bcrypt.compareSync(password, user.password);
    if (!correctPassword) {
         res.status(401).json('Invalid credentials'); 
        }
            else {
                req.session.user = {id:user.id }
                res.status(200).json('Login Successful');
            }
        }
    }
} catch (error) {
    next(error);
    
}



// Generate the session 







const logout = async (req, res, next)  => {
    // Destroy user session

   try {
    await req.session.destroy();
 
     // Return response
     res.status(200).json('Logout Successfully');
 
 
   } catch (error) {
    next(error)
   }


}





export const profile = async ( req, res, next) => {

    try {
        // Find a user by Id
        const user = await UserModel
        .findById(req.session.user.id)
        .select({password:false});
    
        // REturm response 
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
    }
