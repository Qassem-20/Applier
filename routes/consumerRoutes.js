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
import requireAuth from "../middleware/requireAuthConsumer.js";
//exports from the controller
import {
  fetchConsumers,
  fetchConsumer,
  createConsumer,
  loginConsumer,
  logoutConsumer,
  updateConsumer,
  deleteConsumer,
  sortConsumers,
  checkAuthConsumer,
} from "../controllers/consumerController.js";
//routes of the Consumer from the controllers
router.route("/consumers").get(fetchConsumers);
router.route("/sortConsumers").get(sortConsumers);
router.route("/consumers/:id").get(fetchConsumer);
router.route("/consumers/registerConsumer").post(apiLimiter, createConsumer);
router.route("/consumers/loginConsumer").post(apiLimiter, loginConsumer);
router.route("/consumers/logoutConsumer").get(logoutConsumer);
router.route("/companies/check-auth").get(requireAuth, checkAuthConsumer);

router.route("/consumers/:id").put(updateConsumer);
router.route("/consumers/:id").delete(deleteConsumer);

export default router;
