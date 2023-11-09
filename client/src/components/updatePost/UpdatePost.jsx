import React, { useState } from 'react'
import './updatepost.scss'
import {AiFillCloseCircle} from 'react-icons/ai'
import {
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { makeRequest } from '../../axios';

function UpdatePost({setUpdate,postInfo}) {
  const [updateData, setUpdateData] = useState({
    file:postInfo.image,
    content:postInfo.content,
})

const upload = async()=>{
  try {
    const formData = new FormData();
    formData.append("file",updateData.file);
    const res = await makeRequest.post("/images",formData)
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

  const queryClient = useQueryClient();

  const mutation = useMutation({  
    mutationFn:(newPost) => {
      return makeRequest.put(`/posts/${postInfo.postId}`,newPost)
  }, 
    onSuccess: () => {
      queryClient.invalidateQueries("posts")
    },
  })

  const handleSubmit = async(e) => {
    e.preventDefault();
    let imgUrl= "";
    if(updateData.file) imgUrl= await upload();
    mutation.mutate({content:updateData.content,image:imgUrl});
    setUpdate(false);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className='updatePost'>
      <div className='card'>
        <div className='top'>
           <h2>Edit</h2>
           <AiFillCloseCircle style={{cursor:"pointer"}} size={25} onClick={()=>setUpdate(false)}/>
        </div>
         <div className='bottom'>
            <input type="text" placeholder='Edit Text..' name='content' value={updateData.content} onChange={handleChange}/>
            <input type="file" name='file' value={updateData.file} onChange={handleChange}/>

            <button onClick={handleSubmit}>Update</button>
         </div>
      </div>
    </div>
  )
}

export default UpdatePost