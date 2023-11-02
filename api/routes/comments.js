const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getComments,
    createComment,
    updateComment,
    deleteComment
} = require('../controllers/comments');

//CREATE
router.post("/:postId/create",verifyToken,createComment)

//UPDATE
router.put("/:commentId",verifyToken,updateComment)


//DELETE
router.delete("/:commentId",verifyToken,deleteComment)


//GET POST COMMENTS
router.get("/:postId",getComments)


module.exports=router