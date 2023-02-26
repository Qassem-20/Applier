import express from 'express';
const router = express.Router();

//exports from the controller
import {fetchOpportunities, fetchOpportunity, createOpportunity, updateOpportunity, hideOpportunity , deleteOpportunity} from '../controllers/opportunitiesController.js';
//routes of the Opportunity from the controllers
router.route('/opportunities').get(fetchOpportunities);
router.route('/opportunities/:id').get(fetchOpportunity);
router.route('/addOpportunity').post(createOpportunity);
router.route('/opportunities/:id').put(updateOpportunity);
router.route('/opportunities/hideOpportunity/:id').put(hideOpportunity);
router.route('/opportunities/:id').delete(deleteOpportunity);

export default router;