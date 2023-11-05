const {pool} = require('../util/db');

const addConnection = async (req,res)=>{
    const {userId} = req.params;
    try{
        const q = "INSERT INTO connections(follower_uid,followed_uid) VALUES (?, ?);"
        const values = [
        req.userData.id,
        userId
        ];
        await pool.query(q, values);
        res.status(200).json("Connection added");
    }
    catch(err){
        res.status(500).json(err)
    }     
}

const deleteConnection = async (req,res)=>{
    const {userId} = req.params;
    try{
        const q = "DELETE FROM connections WHERE follower_uid=? AND followed_uid= ?;"
        const values = [
        req.userData.id,
        userId
        ];
        await pool.query(q, values);
        res.status(200).json("Connection DELETED");
    }
    catch(err){
        res.status(500).json(err)
    } 
 }

const getConnections = async (req,res)=>{
    const {userId} = req.params;
    try{        
        let q='SELECT follower_uid FROM connections WHERE connections.followed_uid=?;'
        const [response] = await pool.query(q,[userId])
        res.status(200).json(response.map(connection=>connection.follower_uid))
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getConnections,
    addConnection,
    deleteConnection
}