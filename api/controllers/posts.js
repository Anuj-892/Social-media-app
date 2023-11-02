const moment = require('moment/moment');
const { pool }  = require('../util/db');

const createPost = async (req,res)=>{
    try{
        console.log(req.userData);
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
    try{
        await Post.findByIdAndDelete(req.params.id)
        await Comment.deleteMany({postId:req.params.id})
        res.status(200).json("Post has been deleted!")
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getPost = async (req,res)=>{
    try{
        let q='SELECT p.*,u.uid AS userId,username,profilePic FROM posts AS p JOIN users AS u ON (u.uid=p.ownerId);'
        const [response] = await pool.query(q)
        console.log(response);
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getPosts = async (req,res)=>{  
    try{
        let q='SELECT p.*,u.uid AS userId,username,profilePic FROM posts AS p JOIN users AS u ON (u.uid=p.ownerId) LEFT JOIN connections AS c ON (p.ownerId=c.followed_uid) WHERE c.follower_uid=? OR p.ownerId=? ORDER BY p.createdAt DESC;'
        const [response] = await pool.query(q,[req.userData.id,req.userData.id])
        res.status(200).json(response)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getUserPosts = async (req,res)=>{
    try{
        const posts=await Post.find({userId:req.params.userId})
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getPost,
    getPosts,
    getUserPosts,
    updatePost,
    deletePost,
    createPost
}