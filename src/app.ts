import express from "express"
import dotenv from "dotenv"
import {connectDB} from "./utils/db"
// import classRouter from "./routers/classRouter"
import userRouter from "./routers/userRouter"
import greadesRouter from "./routers/greadesRouter"
import cookieParser from "cookie-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi, { serve } from "swagger-ui-express";

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())


connectDB()

app.use("/users",userRouter)
// app.use("/class",classRouter)
app.use("/greades",greadesRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
  export default app;


