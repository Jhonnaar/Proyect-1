import {Router} from "express"
import * as cartController from '../controllers/car.controller.js'

const router = Router();
router.get('/',cartController.get_car)
router.post('/',cartController.add_to_car)
router.delete('/',cartController.delete_to_car)
router.post('/buy',cartController.buy_car)
export default router;