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
import {fetchAdmins, fetchAdmin, createAdmin, loginAdmin, updateAdmin, deleteAdmin} from '../controllers/adminController.js';
import {activateCompany} from '../controllers/companyController.js';
import {activateMedicalStudent} from '../controllers/medicalStudentController.js';
import {suspendConsumer} from '../controllers/consumerController.js';
import {hideReview} from '../controllers/reviewController.js';
import {deleteOpportunity} from '../controllers/opportunitiesController.js';

//routes of the admin from the controllers
router.route('/admins').get(fetchAdmins);
router.route('/admins/:id').get(fetchAdmin);
router.route('/registerAdmin').post(apiLimiter,createAdmin);
router.route('/loginAdmin').post(apiLimiter,loginAdmin);
router.route('/admins/:id').put(updateAdmin);
router.route('/admins/:id').delete(deleteAdmin);

//company activation
router.route('/admins/activateCompanies/:id').put(activateCompany);

//medicalStudent activation
router.route('/admins/activateMedicalStudent/:id').put(activateMedicalStudent);

//consumer suspend
router.route('/admins/suspendConsumer/:id').put(suspendConsumer);

//hide review
router.route('/admins/hideReview/:id').put(hideReview);

//delete Opportunity
router.route('/admins/opportunities/:id').delete(deleteOpportunity);

export default router;