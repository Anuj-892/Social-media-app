const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getComments,
    createComment,
    updateComment,
    deleteComment
} = require('../controllers/comments');

router.post("/:postId/create",verifyToken,createComment)

router.put("/:commentId",verifyToken,updateComment)

router.delete("/:commentId",verifyToken,deleteComment)

router.get("/:postId",getComments)


module.exports=router