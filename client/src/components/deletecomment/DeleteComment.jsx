import React from 'react'
import './deletecomment.scss'
import {
    useMutation,
    useQueryClient
  } from '@tanstack/react-query'
import {AiFillCheckCircle,AiFillCloseCircle} from 'react-icons/ai'
import { makeRequest } from '../../axios';

function DeleteComment({setDeleteEl,commentId}) {
    const queryClient = useQueryClient();

    const mutation = useMutation({  
        mutationFn:(commentId) => {
            return makeRequest.delete(`/comments/${commentId}`)
        }, 
        onSuccess: () => {
            queryClient.invalidateQueries("posts")
        },
    })

    const handleClick = ()=>{
        mutation.mutate(commentId);
        setDeleteEl(false);
    }
  return (
    <div className="deleteComment">
        <div className="card">
            <div className='top'>
                <h2>Delete</h2>
                <p>Are you sure you want to delete this comment?</p>
            </div>
            <div className="bottom">
                <button  className='green' onClick={handleClick}><AiFillCheckCircle size={25}/></button>
                <button className='red' onClick={()=>setDeleteEl(false)}><AiFillCloseCircle  size={25}/></button>
            </div>
        </div>
    </div>
  )
}

export default DeleteComment