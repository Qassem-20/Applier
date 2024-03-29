import express from "express";
const router = express.Router();

//middleware
import { requireAuthCompany } from "../middleware/requireAuth.js";
//exports from the controller
import {
  fetchOpportunities,
  fetchOpportunity,
  fetchOpportunitiesCompany,
  createOpportunity,
  updateOpportunity,
  hideOpportunity,
  deleteOpportunity,
  fetchOpportunitiesCompanySorted,
  findOpportunity,
} from "../controllers/opportunitiesController.js";
//routes of the Opportunity from the controllers
router.route("/opportunities").get(fetchOpportunities);
router.route("/opportunities/:id").get(fetchOpportunity);
router
  .route("/opportunitiesCompany")
  .get(requireAuthCompany, fetchOpportunitiesCompany);

router
  .route("/fetchOpportunitiesCompanySorted")
  .get(requireAuthCompany, fetchOpportunitiesCompanySorted);

router
  .route("/opportunities/registerOpportunity")
  .post(requireAuthCompany, createOpportunity);
router.route("/opportunities/:id").put(requireAuthCompany, updateOpportunity);
router
  .route("/opportunities/hideOpportunity/:id")
  .put(requireAuthCompany, hideOpportunity);
router
  .route("/opportunities/:id")
  .delete(requireAuthCompany, deleteOpportunity);
  


router.route("/findOpportunity/:name").get(findOpportunity);
export default router;
