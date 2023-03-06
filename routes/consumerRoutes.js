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
import { requireAuthConsumer } from "../middleware/requireAuth.js";
//exports from the controller
import {
  fetchConsumers,
  fetchConsumer,
  createConsumer,
  loginConsumer,
  logoutConsumer,
  updateConsumer,
  deleteConsumer,
  checkAuthConsumer,
  sortConsumers,
  findConsumer,
} from "../controllers/consumerController.js";
//routes of the Consumer from the controllers
router.route("/consumers").get(fetchConsumers);
router.route("/consumers/:id").get(fetchConsumer);
router.route("/registerConsumer").post(apiLimiter, createConsumer);
router.route("/loginConsumer").post(apiLimiter, loginConsumer);
router.route("/logoutConsumer").get(logoutConsumer);
router.route("/checkAuthConsumer").get(requireAuthConsumer, checkAuthConsumer);
router.route("/consumers/:id").put(requireAuthConsumer, updateConsumer);
router.route("/consumers/:id").delete(deleteConsumer);
router.route("/sortConsumers").get(sortConsumers);
router.route("/findConsumer/:name").get(findConsumer);

export default router;
