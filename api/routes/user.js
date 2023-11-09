const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getUser,
    refetchUser,
    updateUser,
    deleteUser} = require('../controllers/user');


//UPDATE
router.put("/",verifyToken,updateUser)


// //DELETE
router.delete("/",verifyToken,deleteUser)


// //GET USER
router.get("/find/:userId",getUser)

router.get("/refetch",verifyToken,refetchUser)



module.exports=router