import React, { useState } from 'react'
import './updatecomment.scss'
import {AiFillCloseCircle} from 'react-icons/ai'
import {
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { makeRequest } from '../../axios';

function UpdateComment({setUpdate,commentInfo}) {
  const [commentText, setCommentText] = useState(commentInfo.comment)

// const upload = async()=>{
//   try {
//     const formData = new FormData();
//     formData.append("file",updateData.file);
//     const res = await makeRequest.post("/images",formData)
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

  const queryClient = useQueryClient();

  const mutation = useMutation({  
    mutationFn:(comment) => {
      return makeRequest.put(`/comments/${commentInfo.id}`,comment)
  }, 
    onSuccess: () => {
      queryClient.invalidateQueries("posts")
    },
  })

  const handleSubmit = async(e) => {
    e.preventDefault();
    // let imgUrl= "";
    // if(updateData.file) imgUrl= await upload();
    mutation.mutate({comment:commentText});
    setUpdate(false);
  }
  const handleChange = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <div className='updateComment'>
      <div className='card'>
        <div className='top'>
           <h2>Edit</h2>
           <AiFillCloseCircle style={{cursor:"pointer"}} size={25} onClick={()=>setUpdate(false)}/>
        </div>
         <div className='bottom'>
            <input type="text" placeholder='Edit Text..' name='comment' value={commentText} onChange={handleChange}/>

            <button onClick={handleSubmit}>Update</button>
         </div>
      </div>
    </div>
  )
}

export default UpdateComment