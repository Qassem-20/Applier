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
import requireAuth from "../middleware/requireAuthMedicalStudent.js";
//exports from the controller
import {
  fetchMedicalStudents,
  fetchMedicalStudent,
  createMedicalStudent,
  loginMedicalStudent,
  logoutMedicalStudent,
  updateMedicalStudent,
  deleteMedicalStudent,
  checkAuthMedicalStudent,
} from "../controllers/medicalStudentController.js";
//routes of the medicalStudent from the controllers
router.route("/medicalStudents").get(fetchMedicalStudents);
router.route("/medicalStudents/:id").get(fetchMedicalStudent);
router
  .route("/medicalStudents/registerMedical")
  .post(apiLimiter, createMedicalStudent);
router
  .route("/medicalStudents/loginMedicalStudent")
  .post(apiLimiter, loginMedicalStudent);
router.route("/medicalStudents/logoutMedicalStudent").get(logoutMedicalStudent);
router
  .route("/medicalStudents/check-auth")
  .get(requireAuth, checkAuthMedicalStudent);

router.route("/medicalStudents/:id").put(updateMedicalStudent);
router.route("/medicalStudents/:id").delete(deleteMedicalStudent);

export default router;
