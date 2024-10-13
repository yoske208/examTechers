import  express  from "express";
import  {deleteUserById, getStatistic, getUsers}  from "../controllers/userController";
import  {register,login}  from "../controllers/authController";
import  {authMiddleware,menegerAuthMiddleware}  from "../middleware/authMiddleWare";
import  {errorHendler}  from "../utils/errorHendler";

const userRouter = express.Router()

userRouter.post("/auth",register)
userRouter.delete("/:id",deleteUserById)
userRouter.post("/auth/register",register)
userRouter.post("/auth/login",login)
// userRouter.put("/:id",checkIfTeacher, updateUser)

export default userRouter