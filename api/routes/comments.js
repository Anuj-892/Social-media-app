const express=require('express')
const router=express.Router()
const verifyToken = require('../verifyToken')
const {
    getComments,
    createComment,
    updateComment,
    deleteComment
} = require('../controllers/comments');

//CREATE
router.post("/create",verifyToken,createComment)

//UPDATE
router.put("/:id",verifyToken,updateComment)


//DELETE
router.delete("/:id",verifyToken,deleteComment)


//GET POST COMMENTS
router.get("/post/:postId",getComments)


module.exports=router