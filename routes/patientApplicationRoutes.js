import express from "express";
const router = express.Router();
//middleware
import { requireAuthConsumer } from "../middleware/requireAuth.js";
//exports from the controller
import {
  fetchPatientApplications,
  fetchPatientApplication,
  createPatientApplication,
  updatePatientApplication,
  deletePatientApplication,
  sortPatientApplication, 
  findPatientApplication,
} from "../controllers/patientApplicationController.js";
//routes of the patientApplication from the controllers
router.route("/patientApplications").get(fetchPatientApplications);
router.route("/patientApplications/:id").get(fetchPatientApplication);
router
  .route("/patientApplications/registerPatientApplications")
  .post(requireAuthConsumer, createPatientApplication);
router
  .route("/patientApplications/:id")
  .put(requireAuthConsumer, updatePatientApplication);
router
  .route("/patientApplications/:id")
  .delete(requireAuthConsumer, deletePatientApplication);
router.route("/sortPatientApplication").get(sortPatientApplication);
router.route("/findPatientApplication/:name").get(findPatientApplication);
export default router;
