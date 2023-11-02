const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getPost,
    getPosts,
    getUserPosts,
    updatePost,
    deletePost,
    createPost
} = require('../controllers/posts')

//CREATE
router.post("/create",verifyToken,createPost)

//UPDATE
router.put("/:id",updatePost)


//DELETE
router.delete("/:id",deletePost)


//GET POST DETAILS
router.get("/:id",getPost)

//GET POSTS
router.get("/",verifyToken,getPosts)

//GET USER POSTS
router.get("/user/:userId",getUserPosts)



module.exports=router