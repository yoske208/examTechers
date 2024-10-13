import mongoosem, {Schema,Document,Types} from "mongoose";
import validator from "validator";
import {IGreades} from "./greadesModel"
import {IClass} from "./classModel"

export interface IUser extends Document {
    role : "teacher" | "student"
    username : string,
    email : string,
    password : string,
    class : IClass ["_id"],
    greades : IGreades["_id"]
}

const UserSchema = new Schema<IUser>({
    role : {
        type:String,
        enum: ["employee" , "manager"],
    },
    username : {
        type : String,
        required : [true, "name is required"],
        unique: true,
        match:[/^[a-zA-Z0-9_]+$/,"השם לא תקין"]

    },
    email : {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
        validator: function (value: string) {
            return validator.isEmail(value);
        },
        message: "Please provide a valid email address",
        },

    },
    password : {
        type: String,
        required: [true, "password is required"]

    },
    class : [{ 
        type: Schema.Types.ObjectId,
         ref: "Class" }],

    
    greades : [{ 
        type: Schema.Types.ObjectId,
         ref: "Greades" }],

    
    
})

export default mongoosem.model<IClass>("User",UserSchema)