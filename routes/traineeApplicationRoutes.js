import express from "express";
const router = express.Router();

//exports from the controller
import {
  fetchTraineeApplications,
  fetchTraineeApplication,
  createTraineeApplication,
  updateTraineeApplication,
  deleteTraineeApplication,
} from "../controllers/traineeApplicationController.js";
//routes of the admin from the controllers
router.route("/traineeApplications").get(fetchTraineeApplications);
router.route("/traineeApplications/:id").get(fetchTraineeApplication);
router
  .route("traineeApplications/registerTraineeApplications")
  .post(createTraineeApplication);
router.route("/traineeApplications/:id").put(updateTraineeApplication);
router.route("/traineeApplications/:id").delete(deleteTraineeApplication);

export default router;
