const moment = require('moment');
const {pool} = require('../util/db');

const createComment = async (req,res)=>{
    const {postId} = req.params;
    try{
        const q = "INSERT INTO comments(comment, postId, createdAt, userId) VALUES (?, ?, ?, ?);"
        const values = [
        req.body.comment,
        postId,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        req.userData.id
        ];
        await pool.query(q, values);
        res.status(200).json("Comment has been added");
    }
    catch(err){
        res.status(500).json(err)
    }     
}

const updateComment = async (req,res)=>{
    try{       
        const updatedComment=await Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedComment)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deleteComment = async (req,res)=>{
    try{
        await Comment.findByIdAndDelete(req.params.id)        
        res.status(200).json("Comment has been deleted!")
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getComments = async (req,res)=>{
    const {postId} = req.params;
    try{
        let q='SELECT c.*,u.uid AS userId,username,profilePic FROM comments AS c JOIN users AS u ON (u.uid=c.userId) WHERE c.postId=? ORDER BY c.createdAt DESC;'
        const [response] = await pool.query(q,[postId])
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getComments,
    createComment,
    updateComment,
    deleteComment
}