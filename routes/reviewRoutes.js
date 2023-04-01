import express from "express";
const router = express.Router();
import { requireAuthConsumer } from "../middleware/requireAuth.js";

//exports from the controller
import {
  fetchReviews,
  fetchReview,
  createReviewCompany,
  createReviewMedical,
  deleteReview,
  sortReview,
} from "../controllers/reviewController.js";
//routes of the review from the controllers
router.route("/reviews").get(fetchReviews);
router.route("/reviews/:id").get(fetchReview);
router.route("/reviews/registerReviewCompany").post(requireAuthConsumer, createReviewCompany);
router.route("/reviews/registerReviewMedical").post(requireAuthConsumer, createReviewMedical);
router.route("/reviews/:id").delete(requireAuthConsumer, deleteReview);
router.route("/reviews/sortReview").get(sortReview);

export default router;
