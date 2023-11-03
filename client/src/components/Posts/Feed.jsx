import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

function Feed({post}){
  const [openComments, setOpenComments] = useState(false)
  const {user} = useAuth()
  return (
    <div className="feed">
    <div className="head">
      <div className="user">
        <div className="profile-photo">
          <img src={post.profilePic} alt={post.username} />
        </div>
        <div className="info">
          <h3>{post.username}</h3>
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
        <span><i className="uil uil-heart"></i></span>
        <span style={{cursor:'pointer'}} onClick={()=>setOpenComments(!openComments)}><i className="uil uil-comment-dots"></i></span>
        <span><i className="uil uil-share-alt"></i></span>
      </div>
      <div className="bookmark">
        <span><i className="uil uil-bookmark-full"></i></span>
      </div>
    </div>

    {
      openComments && (
        <div>
      <div style={{display:'flex'}}>
        <div className="profile-photo">
          <img src={user.profilePic} alt={user.username} />
        </div>
        <form className='create-post' style={{display:'flex'}}>               
              <input type="text" placeholder={`What's on your mind,${user.username}?`} id='create-post'
              name='content'/>
              <button className='btn btn-primary'>Comment</button>
        </form>
      </div>
      <div></div>
    </div>
      )
    }
    {/* <div className="caption">
      <p><b>Lana Rose</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, impedit. <span className="harsh-tag">#lifestyle</span></p>
    </div>
    <div className="comments text-muted">View all 277 comments</div> */}
  </div>
  )
}

export default Feed