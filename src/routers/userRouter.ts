import  express  from "express";
import  {deleteUserById, getGreades, getUsers,updateUserById,getavg}  from "../controllers/userController";
import  {register,login}  from "../controllers/authController";
import  {authMiddleware,menegerAuthMiddleware}  from "../middleware/authMiddleWare";
import  {errorHendler}  from "../utils/errorHendler";

const userRouter = express.Router()


/**
 * @swagger
 * /users:
 *  post:
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
userRouter.get("/",getUsers)

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
userRouter.get("/",getGreades)

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
userRouter.get("/",authMiddleware,menegerAuthMiddleware,getavg)

/**
 * @swagger
 * /users:
 *  delete:
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
userRouter.delete("/:id",deleteUserById)

/**
 * @swagger
 * /users:
 *  post:
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

/**
 * @swagger
 * /users:
 *  post:
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
userRouter.post("/auth/login",login)

/**
 * @swagger
 * /users:
 *  put:
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
userRouter.put("/:id",authMiddleware,menegerAuthMiddleware,updateUserById)

export default userRouter