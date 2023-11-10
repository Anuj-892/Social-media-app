import React, { useState } from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient
  } from '@tanstack/react-query'
  import {AiOutlineHeart,AiFillHeart,AiFillDelete} from 'react-icons/ai'
import { makeRequest } from '../../axios';
import { useAuth } from '../../context/AuthContext'
import Comments from '../comments/Comments'
import { Link } from 'react-router-dom';
import {SlOptions} from 'react-icons/sl'
import {FaRegCommentDots} from 'react-icons/fa'
import {BsShareFill,BsPencilSquare} from 'react-icons/bs'
import './post.scss'
import moment from 'moment'
import UpdatePost from '../updatePost/UpdatePost';
import DeletePost from '../deletePost/DeletePost';

function Post({post}){
  const [openComments, setOpenComments] = useState(false)
  const [update, setUpdate] = useState(false)
  const [deleteEl, setDeleteEl] = useState(false)
  const { isLoading, error, data } = useQuery({    
    queryKey:['likes',post.pid],queryFn: async() =>{
      const res = await makeRequest.get(`/likes/${post.pid}`);
      return res.data;
    }
  });
  const queryClient = useQueryClient();

  const mutation = useMutation({  
    mutationFn:(liked) => {
      if(!liked) return makeRequest.post(`/likes/${post.pid}`);
      return makeRequest.delete(`/likes/${post.pid}`);
   }, 
     onSuccess: () => {
       queryClient.invalidateQueries("likes")
     },
  })

  const handleClick = () => {
    mutation.mutate(data.includes(user.uid));
  }
  
  const {user} = useAuth()
  return (
    <div className="post">
      <div className="container">
      <div className="user">
        <div className="userInfo">
        {
          post.profilePic?<img src={post.profilePic} alt={post.username} />:
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="post-profilephoto"/>
          }
          <div className="details">
            <Link to={`/profile/${post.ownerId}`} style={{textDecoration:'none',color:'inherit'}}>
              <h3 className='name'>{post.username}</h3>
            </Link>
            <span className='date'>{moment(post.createdAt).fromNow()}</span>
          </div>
        </div>
        {
          post.ownerId==user.uid?<div className='tools' style={{display:'flex',gap:'3px'}}>
          <BsPencilSquare color='green' size={20} style={{cursor:'pointer'}} onClick={()=>setUpdate(true)}/>
          <AiFillDelete color='red' size={20} style={{cursor:'pointer'}} onClick={()=>setDeleteEl(true)}/>
          </div>:<SlOptions size={20}/>
        }  
        {update&&<UpdatePost setUpdate={setUpdate} postInfo={{postId:post.pid,content:post.content,image:post.image}}/>}     
        {deleteEl&&<DeletePost setDeleteEl={setDeleteEl} postId={post.pid}/>}     
      </div>

      <div className="content">
         <p>{post.content}</p>
         <img src={`http://localhost:5000/uploads/${post.image}`} alt="postImage" />
      </div>
      <div className="info">
        <div className="item">
          {
            data&&data.includes(user.uid)?<AiFillHeart style={{color:'red',cursor:'pointer'}} onClick={handleClick} />:<AiOutlineHeart style={{cursor:'pointer'}} onClick={handleClick}/>
          }<span>{data&&data.length}likes</span>
        </div>
        <div className="item">
          <FaRegCommentDots onClick={()=>setOpenComments(!openComments)}/>
          <span>12 comments</span>
        </div>
        <div className="item">
          <BsShareFill/>
          <span>Share</span>
        </div>
      </div>
    {
      openComments && (
        <Comments postId={post.pid}/>
      )
    }
      </div>     
    </div>
  )
}

export default Post