import express from 'express';
const router = express.Router();

//limit trails access for the user
import rateLimiter from 'express-rate-limit';
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

//exports from the controller
import {fetchAdmins, fetchAdmin, createAdmin, updateAdmin, deleteAdmin} from '../controllers/adminController.js';
//routes of the admin from the controllers
router.route('/admins').get(fetchAdmins);
router.route('/admins/:id').get(fetchAdmin);
router.route('/registerAdmin').post(apiLimiter,createAdmin);
router.route('/admins/:id').put(updateAdmin);
router.route('/admins/:id').delete(deleteAdmin);

export default router;