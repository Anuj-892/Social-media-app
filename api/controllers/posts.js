const moment = require('moment/moment');
const { pool }  = require('../util/db');

const createPost = async (req,res)=>{
    try{
        const q = "INSERT INTO posts(content, image, createdAt, ownerId) VALUES (?, ?, ?, ?);"
        const values = [
        req.body.content,
        req.body.image,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        req.userData.id
        ];
        await pool.query(q, values);
        res.status(200).json("Post has been created");
    }
    catch(err){        
        res.status(500).json(err)
    }     
}

const updatePost = async (req,res)=>{
    try{       
        const updatedPost=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedPost)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deletePost = async (req,res)=>{
    const {postId} = req.params;
    try{
        const q = "DELETE FROM posts WHERE pid=? AND posts.ownerId=?;"
        const values = [
        postId,
        req.userData.id
        ];
        await pool.query(q, values);
        res.status(200).json("Post has been deleted");
    }
    catch(err){        
        res.status(500).json(err)
    } 
}

// const getPost = async (req,res)=>{
//     try{
//         let q='SELECT p.*,u.uid AS userId,username,profilePic FROM posts AS p JOIN users AS u ON (u.uid=p.ownerId);'
//         const [response] = await pool.query(q)
//         console.log(response);
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// }

const getPosts = async (req,res)=>{
    const {userId} = req.query;  
    try{
        let q=userId!='undefined'?'SELECT p.*,u.uid AS userId,username,profilePic FROM posts AS p JOIN users AS u ON (u.uid=p.ownerId) WHERE p.ownerId=?ORDER BY p.createdAt DESC;':'SELECT p.*,u.uid AS userId,username,profilePic FROM posts AS p JOIN users AS u ON (u.uid=p.ownerId) LEFT JOIN connections AS c ON (p.ownerId=c.followed_uid) WHERE c.follower_uid=? OR p.ownerId=? ORDER BY p.createdAt DESC;'
        const values = userId!='undefined'? [userId]:[req.userData.id,req.userData.id];
        const [response] = await pool.query(q,values)
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getPost,
    getPosts,
    updatePost,
    deletePost,
    createPost
}