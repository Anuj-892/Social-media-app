const express=require('express')
const router=express.Router()
const verifyToken = require('../middleware/verifyToken')
const {
    getConnections,
    addConnection,
    deleteConnection
} = require('../controllers/connections');

router.post("/:userId",verifyToken,addConnection)
router.delete("/:userId",verifyToken,deleteConnection)
router.get("/:userId",getConnections)


module.exports=router