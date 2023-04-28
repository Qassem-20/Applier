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
import { checkStatueConsumer } from "../middleware/suspendedUser.js";

//exports from the controller
import {
  getConsumerProfile,
  fetchConsumers,
  fetchConsumer,
  createConsumer,
  loginConsumer,
  logoutConsumer,
  updateConsumer,
  deleteConsumer,
  checkAuthConsumer,
  checkStatuesConsumer,
  findAll,
  sortDateConsumers,
  sortNameConsumers,
  findConsumer,
} from "../controllers/consumerController.js";
//routes of the Consumer from the controllers
router.route("/consumerProfile").get(requireAuthConsumer, getConsumerProfile);
router.route("/consumers").get(fetchConsumers);

router.route("/consumers/:id").get(fetchConsumer);
router.route("/consumersId").get(loginConsumer);
router.route("/registerConsumer").post(apiLimiter, createConsumer);
router.route("/loginConsumer").post(apiLimiter, loginConsumer);
router.route("/logoutConsumer").get(logoutConsumer);
router.route("/checkAuthConsumer").get(requireAuthConsumer, checkAuthConsumer);
router
  .route("/checkStatueConsumer")
  .get(checkStatueConsumer, checkStatuesConsumer);

router.route("/consumers/:id").put(requireAuthConsumer, updateConsumer);
router.route("/consumers/:id").delete(deleteConsumer);
router.route("/sortDateConsumers").get(sortDateConsumers);
router.route("/sortNameConsumers").get(sortNameConsumers);
router.route("/findConsumer/:name").get(findConsumer);
router.route("/findAll/:name").get(findAll);

export default router;
