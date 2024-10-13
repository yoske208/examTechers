import mongoosem, {Schema,Document,Types} from "mongoose";
import validator from "validator";
import {IClass} from "./classModel"
import {IUser} from "./userModel"


export interface IGreades extends Document {
    greade: {
        greades : number[]
        class : IClass ["_id"],
        user : IUser ["_id"],
    }
    
}

const greadesSchema = new Schema<IGreades>({
    greade:{
        greades: [
            {
                type: String,
                validate: {
                  validator: (value: string) => validator.isURL(value),
                  message: "Please provide a valid URL",
                },
              },
        ],

        
        class: [
            { type: Schema.Types.ObjectId,
               ref: "Class" }
        ],

        
        user: [
            { type: Schema.Types.ObjectId,
               ref: "User" }
        ]

    }

})

export default mongoosem.model<IClass>("Greades",greadesSchema)