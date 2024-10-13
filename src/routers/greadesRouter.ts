import  express  from "express";
import  {getGreades}  from "../controllers/greadesController";
import  {register,login}  from "../controllers/authController";
import  {authMiddleware,menegerAuthMiddleware}  from "../middleware/authMiddleWare";

const greadesRouter = express.Router()

/**
 * @swagger
 * /greades:
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

greadesRouter.post("/auth",register)

/**
 * @swagger
 * /greades:
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
greadesRouter.post("/auth/login",login)

/**
 * @swagger
 * /greades:
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
greadesRouter.get("/",getGreades)
// greadesRouter.post("/:id,)


export default greadesRouter