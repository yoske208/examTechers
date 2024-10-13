import  express  from "express";
import  {deleteUserById, getGreades, getUsers,updateUserById,getavg}  from "../controllers/userController";
import  {register,login}  from "../controllers/authController";
import  {authMiddleware,menegerAuthMiddleware}  from "../middleware/authMiddleWare";
import  {errorHendler}  from "../utils/errorHendler";

const userRouter = express.Router()


/**
 * @swagger
 * /users:
 *  get:
 *    summary: קבלת כל המשתמשים
 *    description: תחזיר רשימה של כל המשתמשים. זמין רק למנהלים
 *    security:
 *      -cookieAuth: []
 *    responses:
 *      200:
 *         description: רשימת משתמשים הוחזרה בהצלחה
 *      401:
 *         description: לא מורשה, נדרשת התחברות
 *      403: 
 *         description: נדרשת הרשאת מנהל
 */

userRouter.post("/auth/register",register)
userRouter.get("/",getUsers)
userRouter.get("/",getGreades)
userRouter.get("/",authMiddleware,menegerAuthMiddleware,getavg)
userRouter.delete("/:id",deleteUserById)
userRouter.post("/auth/register",register)
userRouter.post("/auth/login",login)
userRouter.put("/:id",authMiddleware,menegerAuthMiddleware,updateUserById)

export default userRouter