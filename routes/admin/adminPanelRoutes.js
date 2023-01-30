import express from 'express';
const router = express.Router();

import {addAdmin,deleteAdmin,getAllAdmin,changeStatue} from '../../controllers/admin/adminPanelController.js';

router.route('/').post(addAdmin).get(getAllAdmin);
router.route('/:id').delete(deleteAdmin).patch(changeStatue);

export default router;
