import  express  from "express";
import  {getGreades}  from "../controllers/greadesController";
import  {register,login}  from "../controllers/authController";
import  {authMiddleware,menegerAuthMiddleware}  from "../middleware/authMiddleWare";

const greadesRouter = express.Router()

greadesRouter.post("/auth",register)
greadesRouter.post("/auth/login",login)
greadesRouter.get("/",getGreades)
// greadesRouter.post("/:id,)


export default greadesRouter