import { Request,Response,NextFunction } from "express";

export interface CustomerError extends Error {
    statusCode? : number
}

export const errorHendler = (fn : (req:Request, res: Response, next:NextFunction) => Promise<any>) => {
    return async(req:Request, res: Response, next:NextFunction) => {
        try {
            await fn(req,res,next)
        } catch (error) {
            console.error(error)
            const customError = error as CustomerError
            res.status(customError.statusCode || 500).json({
                message:customError.message || "השגיאה מגיעה בוודאות מהשרת"
            })
            
        }
    }
}