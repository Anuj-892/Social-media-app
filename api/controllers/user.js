const {pool} = require('../util/db')
const moment = require('moment/moment');

const getUser = async (req,res)=>{
    const {userId} = req.params;
    try{        
        let q='SELECT * FROM users WHERE users.uid=?;'
        const [response] = await pool.query(q,[userId])
        const {password,...others} = response[0]
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const refetchUser = async(req,res) => {
    const {id} = req.userData;
    try{        
        let q='SELECT * FROM users WHERE users.uid=?;'
        const [response] = await pool.query(q,[id])
        const {password,...others} = response[0]
        res.status(200).json(others)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const updateUser = async (req,res)=>{
    // let profilePic = Boolean(req.body.profilePic)?req.body.profilePic:"";

    // let coverPic = Boolean(req.body.coverPic)?req.body.coverPic:"";   
    try{
        const q = "UPDATE users SET username=?, profilePic=?, coverPic=?, email=? WHERE users.uid=?;";
        const values = [
            req.body.username,
            req.body.profilePic,
            req.body.coverPic,
            req.body.email,
            req.userData.id
        ];
        console.log(values);
        const result = await pool.query(q, values);
        console.log(result);
        console.log('works');        
        res.status(200).json("User has been edited");
    }
    catch(err){        
        res.status(500).json(err)
    }
}

const deleteUser = async (req,res)=>{
    try{
        const q = "DELETE FROM users WHERE users.uid=?;"
        const values = [
        req.userData.id
        ];
        await pool.query(q, values);
        res.status(200).json("User has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}

module.exports={
    getUser,
    refetchUser,
    updateUser,
    deleteUser
}