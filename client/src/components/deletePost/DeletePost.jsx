import React from 'react'
import './deletePost.scss'
import {
    useMutation,
    useQueryClient
  } from '@tanstack/react-query'
import {AiFillCheckCircle,AiFillCloseCircle} from 'react-icons/ai'
import { makeRequest } from '../../axios';

function DeletePost({setDeleteEl,postId}) {

    const queryClient = useQueryClient();

    const mutation = useMutation({  
        mutationFn:(postId) => {
            return makeRequest.delete(`/posts/${postId}`)
        }, 
        onSuccess: () => {
            queryClient.invalidateQueries("posts")
        },
    })

    const handleClick = ()=>{
        mutation.mutate(postId);
        setDeleteEl(false);
    }

  return (
    <div className="deletePost">
        <div className="card">
            <div className='top'>
                <h2>Delete</h2>
                <p>Are you sure you want to delete this post?</p>
            </div>
            <div className="bottom">
                <button  className='green' onClick={handleClick}><AiFillCheckCircle size={25}/></button>
                <button className='red' onClick={()=>setDeleteEl(false)}><AiFillCloseCircle  size={25}/></button>
            </div>
        </div>
    </div>
  )
}

export default DeletePost