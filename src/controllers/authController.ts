import { Request,Response } from "express";
import User from "../models/userModel"
import {generateToken} from "../utils/auth"
import {createUser} from "../services/userServices"

export const register = async (req : Request, res : Response) => {
    const {username,password,role,email,classId,greadesId} = req.body
    try {
        const user = await createUser({
            username,password,role,email},classId,greadesId)
            if(user.role === "teacher"){
                res.status(201).json({message: " נרשמת בהצלחה אדוני המנהל" })
            }
            else{
                res.status(201).json({ message: "נרשמת בהצלחה"})

            }
            
        }
        catch (error){
            res.status(400).json("תקלה בהרשמה")
            console.log(error);
            
        }
    }

    export const login = async(req : Request, res : Response) => {
        const {username , password} = req.body
        

        const user = await User.findOne({username})

        console.log(user);
        
        if(!user || (await user.comparePassword(password))) {
             res.status(401).json({message : "שם משתשמש או סיסמה שגויים"})
             return
        }

        

            const token = generateToken(user.id , user.role)
            res.cookie("token", token, {
                httpOnly:true,
                secure : false,
                maxAge : 3600000
            })
            res.status(201).json({message : "התחברת בהצלחה ", token})
       
    }

    

  
