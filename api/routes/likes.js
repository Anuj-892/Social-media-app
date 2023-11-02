const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getLikes,
    addLike,
} = require('../controllers/likes');

router.post("/:postId",verifyToken,addLike)
// router.put("/:commentId",verifyToken,updateComment)
// router.delete("/:commentId",verifyToken,deleteComment)
router.get("/:postId",getLikes)


module.exports=router