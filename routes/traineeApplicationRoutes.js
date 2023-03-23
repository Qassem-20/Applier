import express from "express";
const router = express.Router();
//middleware
import { requireAuthConsumer } from "../middleware/requireAuth.js";
//exports from the controller
import {
  fetchTraineeApplications,
  fetchTraineeApplication,
  createTraineeApplication,
  updateTraineeApplication,
  deleteTraineeApplication,
  sortTraineeApplicationByGPA, 
  findTraineeApplication,
} from "../controllers/traineeApplicationController.js";
//routes of the admin from the controllers
router.route("/traineeApplications").get(fetchTraineeApplications);
router.route("/traineeApplications/:id").get(fetchTraineeApplication);
router
  .route("/traineeApplications/registerTraineeApplications")
  .post(requireAuthConsumer, createTraineeApplication);
router
  .route("/traineeApplications/:id")
  .put(requireAuthConsumer, updateTraineeApplication);
router
  .route("/traineeApplications/:id")
  .delete(requireAuthConsumer, deleteTraineeApplication);
router.route("/sortTraineeApplicationByGPA").get(sortTraineeApplicationByGPA);
router.route("/findTraineeApplication/:university").get(findTraineeApplication);
export default router;
