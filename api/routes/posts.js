const express=require('express')
const router=express.Router()
const verifyToken = require('../verifyToken')
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
router.put("/:id",verifyToken,updatePost)


//DELETE
router.delete("/:id",verifyToken,deletePost)


//GET POST DETAILS
router.get("/:id",getPost)

//GET POSTS
router.get("/",getPosts)

//GET USER POSTS
router.get("/user/:userId",getUserPosts)



module.exports=router