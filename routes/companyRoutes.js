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
import { requireAuthCompany } from "../middleware/requireAuth.js";
//exports from the controller
import {
  fetchCompanies,
  fetchCompany,
  createCompany,
  loginCompany,
  logoutCompany,
  checkAuthCompany,
  updateCompany,
  deleteCompany,
  findCompany,
  sortCompanies,
} from "../controllers/companyController.js";
import { reportReview } from "../controllers/reviewController.js";
//routes of the Company from the controllers
router.route("/companies").get(fetchCompanies);
router.route("/companies/:id").get(fetchCompany);
router.route("/registerCompany").post(apiLimiter, createCompany);
router.route("/loginCompany").post(apiLimiter, loginCompany);
router.route("/logoutCompany").get(logoutCompany);
router.route("/checkAuthCompany").get(requireAuthCompany, checkAuthCompany);
router.route("/companies/:id").put(requireAuthCompany, updateCompany);
router.route("/companies/:id").delete(deleteCompany);

router.route("/sortCompanies").get(sortCompanies);
router.route("/findCompany/:name").get(findCompany);

//report Review
router
  .route("/companies/reportReview/:id")
  .put(requireAuthCompany, reportReview);

export default router;
