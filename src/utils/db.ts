import mongoose from 'mongoose';
import dotenv from "dotenv"

dotenv.config()



export const connectDB = async ():Promise <void> => {
  try {
     await mongoose.connect(process.env.MONGO_URI as string);
    console.log("connected to DB");
  } catch (error) {
    console.log(`faild to connect to the DB ${error}`);
  }
};

