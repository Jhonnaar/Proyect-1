import {Router} from "express"
import * as postController from '../controllers/post.controller.js'

const router = Router();
router.get('/',postController.get_posts)
router.post('/',postController.create_post)
router.get('/recent',postController.recent_posts)
export default router;