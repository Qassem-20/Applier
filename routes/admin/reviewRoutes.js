import express from 'express';
const router = express.Router();

import {getAllReportedReviews,changeReviewStatues} from '../../controllers/admin/reviewController.js';

export default router;