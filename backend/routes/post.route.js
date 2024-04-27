import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js';
import { getAllPosts ,createPost, deletePost, commentOnPost, likeUnlikePost, getLikedPosts, getFollwingPosts, getUserPosts} from '../controllers/post.controller.js';
const router=express.Router()

router.get('/all',protectRoute,getAllPosts)
router.get('/following',protectRoute,getFollwingPosts)
router.get('/likes/:id',protectRoute,getLikedPosts)
router.get('/user/:username',protectRoute,getUserPosts)
router.post('/create',protectRoute,createPost)
router.post('/like/:id',protectRoute,likeUnlikePost)
router.post('/comment/:id',protectRoute,commentOnPost)
router.delete('/:id',protectRoute,deletePost)

export default router;