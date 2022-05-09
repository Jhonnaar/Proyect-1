import {Router} from "express"
import * as postController from '../controllers/post.controller.js'

const router = Router();
router.get('/:_id',postController.get_posts)
router.post('/',postController.create_post)
export default router;