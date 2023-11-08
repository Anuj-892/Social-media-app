const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {getUsers,
    getUser,
    refetchUser,
    updateUser,
    deleteUser} = require('../controllers/user');


// //UPDATE
// router.put("/:id",verifyToken,updateUser)


// //DELETE
// router.delete("/:id",verifyToken,deleteUser)


// //GET USER
router.get("/find/:userId",getUser)

router.get("/refetch",verifyToken,refetchUser)



module.exports=router