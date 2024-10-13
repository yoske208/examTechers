import mongoosem, {Schema,Document,Types} from "mongoose";
import {IClass} from "./classModel"
import {IUser} from "./userModel"


export interface IGreades extends Document {
    greade: {
        greades : number[]
        classname : IClass ["_id"],
        user : IUser ["_id"],
    }
    
}

const greadesSchema = new Schema<IGreades>({
    greade:{
        greades: [
            {
                type: [Number],
               
            },
        ],

        
        classname: [
            { type: Schema.Types.ObjectId,
               ref: "Class" }
        ],

        
        user: [
            { type: Schema.Types.ObjectId,
               ref: "User" }
        ]

    }

})

export default mongoosem.model<IGreades>("Greades",greadesSchema)