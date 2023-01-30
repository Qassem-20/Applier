import express from 'express';
//router import from express
const router = express.Router();
//exports from the controller
import {register,login,updateUser} from '../../controllers/admin/authController.js';
//
router.route('/register').post(register)
router.route('/login').post(login)

/*router.route('/updateUser').post(updateUser)*/
export default router