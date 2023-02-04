import express from 'express';
//router import from express
const router = express.Router();

//limit trails access for the user
import rateLimiter from 'express-rate-limit';
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

//exports from the controller
import {register,login,updateUser} from '../../controllers/admin/authController.js';
//
router.route('/register').post(apiLimiter, register);
router.route('/login').post(apiLimiter, login);

/*router.route('/updateUser').post(updateUser)*/
export default router