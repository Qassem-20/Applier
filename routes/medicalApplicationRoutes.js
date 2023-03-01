import express from "express";
const router = express.Router();

//exports from the controller
import {
  fetchMedicalProfiles,
  fetchMedicalProfile,
  createMedicalProfile,
  updateMedicalProfile,
  deleteMedicalProfile,
} from "../controllers/medicalStudentProfileController.js";
//routes of the medicalProfile from the controllers
router.route("/,medicalProfiles").get(fetchMedicalProfiles);
router.route("/,medicalProfiles/:id").get(fetchMedicalProfile);
router.route("/registerMedicalProfile").post(createMedicalProfile);
router.route("/,medicalProfiles/:id").put(updateMedicalProfile);
router.route("/,medicalProfiles/:id").delete(deleteMedicalProfile);

export default router;
