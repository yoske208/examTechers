import Greades ,{IGreades} from "../models/greadesModel"

export const createGreades = async(greadesData:Partial<IGreades>,classId : string,userId : string):Promise<IGreades> => {
    const user = new Greades({
        ...greadesData,
        class : classId,
        user : userId,
    
    })
        
  
    return await user.save()
    
}

export const getAllGreades = async ():Promise <IGreades[]> => {
    return await Greades.find().select("-password").populate("Greades")
}