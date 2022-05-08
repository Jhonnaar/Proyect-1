import {Router} from "express"
import * as userController from '../controllers/user.controller.js'

const router = Router();

router.post('/register',userController.create_user)
router.get('/get',userController.get_user)
router.get('/publications',userController.get_posts)
router.get('/recentposts',userController.get_recent_posts)

export default router;
