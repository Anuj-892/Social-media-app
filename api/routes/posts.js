const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getPosts,
    updatePost,
    deletePost,
    createPost
} = require('../controllers/posts')

//CREATE
router.post("/create",verifyToken,createPost)

//UPDATE
router.put("/:postId",updatePost)


//DELETE
router.delete("/:postId",verifyToken,deletePost)


//GET POSTS
router.get("/",verifyToken,getPosts)




module.exports=router