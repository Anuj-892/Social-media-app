import React, { useState } from 'react'
import moment from 'moment'
import { useAuth } from '../../context/AuthContext'
import {BsPencilSquare} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import UpdateComment from '../updateComment/UpdateComment'
import DeleteComment from '../deletecomment/DeleteComment'

function Comment({comment}) {
  const {user} = useAuth()
  const [update, setUpdate] = useState(false)
  const [deleteEl, setDeleteEl] = useState(false)
  return (
    <div className="comment">
       <div className='info'>
       {
         comment.profilePic?<img src={`${import.meta.env.VITE_SERVER_PORT_URL}/uploads/${comment.profilePic}`} alt="comment" />:
         <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="comment"/>       
        }        
        <div className="details">
            <span>{comment.username}</span>
            <p>{comment.comment}</p>
        </div>
       </div>
        <div>
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
          {
            comment.userId==user.uid?<div className='tools' style={{display:'flex',gap:'3px'}}>
            <BsPencilSquare color='green' size={20} style={{cursor:'pointer'}} onClick={()=>setUpdate(true)} />
            <AiFillDelete color='red' size={20} style={{cursor:'pointer'}} onClick={()=>setDeleteEl(true)}/>
            </div>:<SlOptions size={20}/>
          } 
          
         {update && <UpdateComment commentInfo={{comment:comment.comment,id:comment.cid}} setUpdate={setUpdate}/>}     
        {deleteEl&&<DeleteComment setDeleteEl={setDeleteEl} commentId={comment.cid}/>}
        </div>
    </div>
  )
}

export default Comment