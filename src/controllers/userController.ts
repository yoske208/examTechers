import {Request,Response} from "express"
import * as userServices from "../services/userServices"
import User, {IUser} from "../models/userModel" 
 



// interface AuthRequest extends Request {
//     user?: {userId:string}
// }

// export const createUsers = async (req: Request, res: Response) => {
//     try {    
//       const { role, username,email,password } = req.body;
    
//       if (!username || !password) {
//          res.status(400).json({ message: " שם משתמש או סיסמה חסרים" });
//          return;
//       }   
  
//       const newUser = new User({
//         role,
//         username,
//         email,
//         password,
//         class: [],
//         greades : []
//       });  
     

//       const savedUser = await userServices.createUser(newUser);
    
//       res.status(201).json(savedUser);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "יצירת המשתמש נכשלה " });
// }};

export const getOneUser = async(req:Request, res:Response) => {
    const user = await userServices.getUserById(req.params.id)

    if(!user){
        res.status(404).json({ message: "user not found"})
    }

    res.json(user)
}

export const getUsers = async(req:Request, res:Response) => {
    const users = await userServices.getAllUsers()
    res.json(users)
}

export const getGreades = async (req:Request,res:Response) => {
    const users = await userServices.getAllGreades()
}

export const updateUserById = async(req:Request, res:Response) => {
    const user = await userServices.updateUser(req.params.id,req.body)

    if(!user){
        res.status(404).json({ message: "user not found"})
    }

    res.json(user)

}

export const deleteUserById = async(req:Request, res:Response) => {
    const user = await userServices.deleteUser(req.params.id)

    if(!user){
        res.status(404).json({ message: "user not found"})
    }

    res.json({message: "user deleted!"})

}

export const getStatistic = async(req:Request, res:Response) => {
    const statistic = await userServices.getUserStatistics()
    res.json(statistic)
}