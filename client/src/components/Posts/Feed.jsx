import React from 'react'

function Feed({post}){
  return (
    <div className="feed">
    <div className="head">
      <div className="user">
        <div className="profile-photo">
          <img src={post.profilePic} alt={post.username} />
        </div>
        <div className="ingo">
          <h3>{post.username}</h3>
          <small>{post.createdAt}</small>
        </div>
      </div>
      <span className="edit">
          <i className="uil uil-ellipsis-h"></i>
        </span>
    </div>
    <div className="photo">
      <img src={post.image} alt="postImage" />
    </div>

    <div className="content">
      <p>{post.content}</p>
    </div>

    <div className="action-buttons">
      <div className="interaction-buttons">
        <span><i className="uil uil-heart"></i></span>
        <span><i className="uil uil-comment-dots"></i></span>
        <span><i className="uil uil-share-alt"></i></span>
      </div>
      <div className="bookmark">
        <span><i className="uil uil-bookmark-full"></i></span>
      </div>
    </div>

    {/* <div className="liked-by">
      <span><img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></span>
      <span><img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></span>
      <span><img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></span>
      <p>Liked by <b>Ernest Achiever</b> and <b>2,323 others</b></p>
    </div> */}

    {/* <div className="caption">
      <p><b>Lana Rose</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, impedit. <span className="harsh-tag">#lifestyle</span></p>
    </div>
    <div className="comments text-muted">View all 277 comments</div> */}
  </div>
  )
}

export default Feed