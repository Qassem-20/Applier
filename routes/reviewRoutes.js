import express from "express";
const router = express.Router();
import { requireAuthConsumer,requireAuthAdmin,requireAuthCompany,requireAuthMedicalStudent } from "../middleware/requireAuth.js";

//exports from the controller
import {
  fetchReviews,
  fetchReview,
  fetchReviewsCompany,
  fetchReviewsMedical,
  createReviewCompany,
  createReviewMedical,
  fetchCompanyReviews,
  fetchMedicalReviews,
  deleteReview,
  sortReview,
  reportReview,
} from "../controllers/reviewController.js";
//routes of the review from the controllers
router.route("/reviews").get(fetchReviews);
router.route("/reviews/:id").get(fetchReview);
//from consumer side
router.route("/reviewsCompany/:company").get(requireAuthConsumer,fetchReviewsCompany);
router.route("/reviewsMedical/:medical").get(requireAuthConsumer,fetchReviewsMedical);

// fetch reviews from Producer side
router
  .route("/companyReviews")
  .get(requireAuthCompany, fetchCompanyReviews);

router
  .route("/medicalReviews")
  .get(requireAuthMedicalStudent, fetchMedicalReviews);

// fetch reviews from consumer side
router
  .route("/reviews/registerReviewCompany")
  .post(requireAuthConsumer, createReviewCompany);
router
  .route("/reviews/registerReviewMedical")
  .post(requireAuthConsumer, createReviewMedical);
//
router
  .route("/reviews/reportReviewMedical/:id")
  .put(requireAuthMedicalStudent,reportReview);
router
  .route("/reviews/reportReviewCompany/:id")
  .put(requireAuthCompany,reportReview);

router.route("/reviews/:id").delete(requireAuthAdmin, deleteReview);
router.route("/reviews/sortReview").get(sortReview);

export default router;
