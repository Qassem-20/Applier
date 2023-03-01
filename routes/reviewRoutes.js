import express from "express";
const router = express.Router();

//exports from the controller
import {
  fetchReviews,
  fetchReview,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviewController.js";
//routes of the review from the controllers
router.route("/reviews").get(fetchReviews);
router.route("/reviews/:id").get(fetchReview);
router.route("/reviews/registerReview").post(createReview);
router.route("/reviews/:id").put(updateReview);
router.route("/reviews/:id").delete(deleteReview);

export default router;
