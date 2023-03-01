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
  fetchCompanies,
  fetchCompany,
  createCompany,
  updateCompany,
  deleteCompany,
} from "../controllers/companyController.js";
import { reportReview } from "../controllers/reviewController.js";
//routes of the Company from the controllers
router.route("/companies").get(fetchCompanies);
router.route("/companies/:id").get(fetchCompany);
router.route("/registerCompany").post(apiLimiter, createCompany);
router.route("/companies/:id").put(updateCompany);
router.route("/companies/:id").delete(deleteCompany);

//report Review
router.route("/companies/reportReview/:id").put(reportReview);

export default router;
