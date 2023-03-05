import express from "express";
const router = express.Router();
import { requireAuthConsumer } from "../middleware/requireAuth.js";

//exports from the controller
import {
  fetchReviews,
  fetchReview,
  createReview,
  deleteReview,
} from "../controllers/reviewController.js";
//routes of the review from the controllers
router.route("/reviews").get(fetchReviews);
router.route("/reviews/:id").get(fetchReview);
router.route("/reviews/registerReview").post(requireAuthConsumer, createReview);
router.route("/reviews/:id").delete(requireAuthConsumer, deleteReview);

export default router;
