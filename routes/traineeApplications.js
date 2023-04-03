import express from "express";
const router = express.Router();
import {
  requireAuthConsumer,
  requireAuthCompany,
} from "../middleware/requireAuth.js";

//exports from the controller
import {
  fetchApplications,
  fetchApplication,
  createApplication,
  updateApplication,
  deleteApplication,
  sortApplication,
  getApplicationStatus,
} from "../controllers/traineeApplicationController.js";
//routes of the review from the controllers
router.route("/applications").get(fetchApplications);
router.route("/applications/:id").get(fetchApplication);
router
  .route("/traineeApplications/:id")
  .put(requireAuthCompany, updateApplication);
router.get(
  "/opportunity/:opportunityId/applicationStatus",
  getApplicationStatus
);

router
  .route("/applications/registerApplication/:id")
  .post(requireAuthConsumer, createApplication);
router
  .route("/applications/:id")
  .delete(requireAuthConsumer, deleteApplication);
router.route("/applications/sortApplications").get(sortApplication);

export default router;
