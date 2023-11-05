import React, { useState } from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient
  } from '@tanstack/react-query'
  import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { makeRequest } from '../../axios';
import { useAuth } from '../../context/AuthContext'
import Comments from './Comments'
import { Link } from 'react-router-dom';

function Feed({post}){
  const [openComments, setOpenComments] = useState(false)
  const [like, setLike] = useState(false)
  
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
    <div className="feed">
    <div className="head">
      <div className="user">
        <div className="profile-photo">
          <img src={post.profilePic} alt={post.username} />
        </div>
        <div className="info">
          <Link to={`/profile/${post.ownerId}`}><h3>{post.username}</h3></Link>
          <small>{post.createdAt}</small>
        </div>
      </div>
      <span className="edit">
          <i className="uil uil-ellipsis-h"></i>
        </span>
    </div>
    <div className="photo">
      <img src={`./images/${post.image}`} alt="postImage" />
    </div>

    <div className="content">
      <p>{post.content}</p>
    </div>

    <div className="action-buttons">
      <div className="interaction-buttons">
        {
          data&&data.includes(user.uid)?<AiFillHeart style={{color:'red',cursor:'pointer'}} onClick={handleClick} />:<AiOutlineHeart style={{cursor:'pointer'}} onClick={handleClick}/>
        }{data&&data.length}likes
        <span style={{cursor:'pointer'}} onClick={()=>setOpenComments(!openComments)}><i className="uil uil-comment-dots"></i></span>
        <span><i className="uil uil-share-alt"></i></span>
      </div>
      <div className="bookmark">
        <span><i className="uil uil-bookmark-full"></i></span>
      </div>
    </div>

    {
      openComments && (
        <Comments postId={post.pid}/>
      )
    }
  </div>
  )
}

export default Feed