const express=require('express')
const router=express.Router()
// const verifyToken = require('../middleware/verifyToken')
const {getUsers,
    getUser,
    updateUser,
    deleteUser} = require('../controllers/user');


    router.get("/",getUsers)
// //UPDATE
// router.put("/:id",verifyToken,updateUser)


// //DELETE
// router.delete("/:id",verifyToken,deleteUser)


// //GET USER
// router.get("/:id",getUser)



module.exports=router