import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"

interface AuthRequest extends Request {
    user? : {userId: string, role?:string}
};

export const authMiddleware = (req : AuthRequest, res : Response, next : NextFunction): void => {
    const token = req.cookies.token

    if(!token){
        res.status(401).json({message: " אין לך טוקן אוי אוי אוי"})
        return
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string}
        req.user = decoded
        next()
        
    } catch (error) {
        res.sendStatus(401).json({ message : " הטוקן לא בתוקף" })
        
    }
}

export const menegerAuthMiddleware = (req : AuthRequest, res : Response, next : NextFunction): void => {
    if(req.user?.role !== "teacher"){
        res.status(403).json({message : "accses denaide, teacher only"})
    }else{
        next()
    }
}