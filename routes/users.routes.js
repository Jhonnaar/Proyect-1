import {Router} from "express"
import * as userController from '../controllers/user.controller.js'

const router = Router();

router.post('/register',userController.create_user)
router.get('/',userController.get_user)
router.post('/login',userController.login)
router.post('/prev-login',userController.get_prevLogin)
export default router;
