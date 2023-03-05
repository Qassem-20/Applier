import express from "express";
const router = express.Router();

//limit trails access for the user
import rateLimiter from "express-rate-limit";
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

//middleware
import { requireAuthAdmin } from "../middleware/requireAuth.js";

//exports from the controller
import {
  fetchAdmins,
  fetchAdmin,
  createAdmin,
  loginAdmin,
  logoutAdmin,
  checkAuthAdmin,
  updateAdmin,
  deleteAdmin,
} from "../controllers/adminController.js";
import { activateCompany } from "../controllers/companyController.js";
import { activateMedicalStudent } from "../controllers/medicalStudentController.js";
import { suspendConsumer } from "../controllers/consumerController.js";
import { hideReview } from "../controllers/reviewController.js";
import { deleteOpportunity } from "../controllers/opportunitiesController.js";

//routes of the admin from the controllers
router.route("/admins").get(requireAuthAdmin, fetchAdmins);
router.route("/admins/:id").get(requireAuthAdmin, fetchAdmin);
router.route("/registerAdmin").post(requireAuthAdmin, apiLimiter, createAdmin);
router.route("/loginAdmin").post(apiLimiter, loginAdmin);
router.route("/checkAuthAdmin").get(requireAuthAdmin, checkAuthAdmin);
router.route("/logoutAdmin").get(logoutAdmin);
router.route("/admins/:id").put(requireAuthAdmin, updateAdmin);
router.route("/admins/:id").delete(requireAuthAdmin, deleteAdmin);

//company activation
router
  .route("/admins/activateCompanies/:id")
  .put(requireAuthAdmin, activateCompany);

//medicalStudent activation
router
  .route("/admins/activateMedicalStudent/:id")
  .put(requireAuthAdmin, activateMedicalStudent);

//consumer suspend
router
  .route("/admins/suspendConsumer/:id")
  .put(requireAuthAdmin, suspendConsumer);

//hide review
router.route("/admins/hideReview/:id").put(requireAuthAdmin, hideReview);

//delete Opportunity
router
  .route("/admins/opportunities/:id")
  .delete(requireAuthAdmin, deleteOpportunity);

export default router;
