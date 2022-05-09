import {Router} from "express"
import * as userController from '../controllers/user.controller.js'

const router = Router();

router.post('/register',userController.create_user)
router.get('/:user_id',userController.get_user)
router.get('/login',userController.login)
export default router;
