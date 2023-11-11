const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getPosts,
    updatePost,
    deletePost,
    createPost
} = require('../controllers/posts')


router.post("/create",verifyToken,createPost)

router.put("/:postId",verifyToken,updatePost)

router.delete("/:postId",verifyToken,deletePost)

router.get("/",verifyToken,getPosts)




module.exports=router