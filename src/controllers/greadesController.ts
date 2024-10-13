import {Request,Response} from "express"
import * as userServices from "../services/userServices"

export const getGreades = async (req:Request,res:Response) => {
    const users = await userServices.getAllGreades()
}