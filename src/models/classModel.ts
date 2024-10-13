import mongoosem, {Schema,Document,Types} from "mongoose";
import validator from "validator";
import {IGreades} from "./greadesModel"
import {IUser} from "./userModel"

export interface IClass extends Document {
    user : IUser ["_id"],
    greades : IGreades["_id"]
}

const classSchema = new Schema<IClass>({
    user : {
        type:Schema.Types.ObjectId,
        ref: "User"
    },
    greades : {
        type:Schema.Types.ObjectId,
        ref: "Greades"
    },
})

export default mongoosem.model<IClass>("Class",classSchema)