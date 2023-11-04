import React from 'react'
import moment from 'moment'

function Comment({comment}) {
  return (
    <div className="comment">
        <img src={comment.profilePic} alt="comment" />
        <div className="info">
            <span>{comment.username}</span>
            <p>{comment.comment}</p>
        </div>
        <span className="date">{moment(comment.createdAt).fromNow()}</span>
    </div>
  )
}

export default Comment