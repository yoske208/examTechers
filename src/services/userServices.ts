import { populate } from "dotenv"
import User ,{IUser} from "../models/userModel"


export const createUser = async(UserData:Partial<IUser>,classId : string,greadesId : string):Promise<IUser> => {
    const user = new User({
        ...UserData,
        class : classId,
        greades : greadesId,
    
    })
        
  
    return await user.save()
    
}
// }

export const getUserById = async (id : string): Promise <IUser | null> => {
    return await User.findById(id).select("-password").populate("department")
};

export const getAllUsers = async ():Promise <IUser[]> => {
    return await User.find().select("-password").populate("department")
}

export const updateUser = async(id:string,updateData:Partial<IUser>):Promise <IUser | null> => {
    return await User.findByIdAndUpdate(id,updateData, {new : true}).select("-password")
}

export const deleteUser = async(id:string):Promise <IUser | null> => {
    return await User.findByIdAndDelete(id)
}
// get by what the set in index
export const getUserByRole = async(role:"employee"): Promise <IUser[]> => {
    return await User.find({role}).select("-password")
}

export const getUserBySalaryRange = async(minSalary:number,maxSalary:number): Promise <IUser[]> => {
    return await User.find({
        salary: { $gte:minSalary , $lte:maxSalary }
    }).select("-password")
}

export const getUserStatistics = async() => {
    //סידור לפי גובה המשכורת מהגבוה לנמוך
    const highSalary = await User.findOne().sort("-salary").select("userName salary")

    //הגדרת זמנים לבדיקת איחורים
    const now = new Date()
    const startOfTheDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDay(),
        0,
        0,
        0

    )
    const nineAM = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDay(),
        9,
        0,
        0

    )

    const lateEmployee = await User.find({
        role: "employee",
        lastLogin: { $gte:startOfTheDay,$gt:nineAM}
    }).select("userName lastLogin")

    const avgSalarys = await User.aggregate([
        {$group: {_id:null,avgSalary:{$avg:"salary"}}}
    ])
    return{
        highSalary,
        lateEmployee,
        avgSalarys
    }
    

}


