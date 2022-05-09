import {Router} from "express"
import * as historyController from '../controllers/history.controller.js'

const router = Router();
router.get('/:user_id',historyController.get_history)
export default router;