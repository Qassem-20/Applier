import express from "express";
const router = express.Router();

//exports from the controller
import {
  fetchPatientApplications,
  fetchPatientApplication,
  createPatientApplication,
  updatePatientApplication,
  deletePatientApplication,
} from "../controllers/patientApplicationController.js";
//routes of the patientApplication from the controllers
router.route("/patientApplications").get(fetchPatientApplications);
router.route("/patientApplications/:id").get(fetchPatientApplication);
router.route("/addPatientApplications").post(createPatientApplication);
router.route("/patientApplications/:id").put(updatePatientApplication);
router.route("/patientApplications/:id").delete(deletePatientApplication);

export default router;
