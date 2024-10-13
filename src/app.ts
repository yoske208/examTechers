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

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'employees project',
        version: '1.0.0',
      },
      servers: [{
        url : "http://localhost:3000"
      }]
    },
    apis: ['./src/routers/*.ts'], // files containing annotations as above
  };
  
  const openapiSpecification = swaggerJsdoc(options);
  app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(openapiSpecification))

connectDB()

app.use("/users",userRouter)
// app.use("/class",classRouter)
app.use("/greades",greadesRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
  export default app;


