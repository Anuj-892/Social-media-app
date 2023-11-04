const moment = require('moment');
const {pool} = require('../util/db');

const addLike = async (req,res)=>{
    const {postId} = req.params;
    try{
        const q = "INSERT INTO likes(like_pid,like_uid) VALUES (?, ?);"
        const values = [
        postId,
        req.userData.id
        ];
        await pool.query(q, values);
        res.status(200).json("Like added");
    }
    catch(err){
        res.status(500).json(err)
    }     
}

// const updateComment = async (req,res)=>{
//     try{       
//         const updatedComment=await Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
//         res.status(200).json(updatedComment)
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// }

const deleteLike = async (req,res)=>{
    const {postId} = req.params;
    try{
        const q = "DELETE FROM likes WHERE like_pid=? AND like_uid= ?;"
        const values = [
        postId,
        req.userData.id
        ];
        await pool.query(q, values);
        res.status(200).json("Like DELETED");
    }
    catch(err){
        res.status(500).json(err)
    } 
 }

const getLikes = async (req,res)=>{
    const {postId} = req.params;
    try{        
        let q='SELECT like_uid FROM likes WHERE likes.like_pid=?;'
        const [response] = await pool.query(q,[postId])
        res.status(200).json(response.map(like=>like.like_uid))
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getLikes,
    addLike,
    // updateComment,
    deleteLike
}