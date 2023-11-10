const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getUsers,
    getUser,
    refetchUser,
    updateUser,
    deleteUser} = require('../controllers/user');


//UPDATE
router.put("/",verifyToken,updateUser)


// //DELETE
router.delete("/",verifyToken,deleteUser)


// //GET USER
router.get("/find/:userId",verifyToken,getUser)
router.get("/",verifyToken,getUsers)

router.get("/refetch",verifyToken,refetchUser)



module.exports=router