import express from 'express';
const router = express.Router();

import {getAllMedicalStudents,activateMedicalStudents,getAllCompanies,activateCompanies,getAllUsers,suspendUser,/*getAllOpportunities,*/showStats} from '../../controllers/admin/usersController.js';


//gets from opportunities
router.route('/stats').get(showStats)


export default router;