import express from "express";
const router = express.Router();

//limit trails access for the user
import rateLimiter from "express-rate-limit";
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

//exports from the controller
import {
  fetchMedicalStudents,
  fetchMedicalStudent,
  createMedicalStudent,
  updateMedicalStudent,
  deleteMedicalStudent,
} from "../controllers/medicalStudentController.js";
//routes of the medicalStudent from the controllers
router.route("/medicalStudents").get(fetchMedicalStudents);
router.route("/medicalStudent/:id").get(fetchMedicalStudent);
router.route("/registerMedical").post(apiLimiter, createMedicalStudent);
router.route("/medicalStudent/:id").put(updateMedicalStudent);
router.route("/medicalStudent/:id").delete(deleteMedicalStudent);

export default router;
