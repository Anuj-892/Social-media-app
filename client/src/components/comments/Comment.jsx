import React from 'react'
import moment from 'moment'

function Comment({comment}) {
  return (
    <div className="comment">
       {
         comment.profilePic?<img src={comment.profilePic} alt="comment" />:
         <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="comment"/>       
        }        
        <div className="info">
            <span>{comment.username}</span>
            <p>{comment.comment}</p>
        </div>
        <span className="date">{moment(comment.createdAt).fromNow()}</span>
    </div>
  )
}

export default Comment